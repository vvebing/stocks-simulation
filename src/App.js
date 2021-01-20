import React, { lazy, PureComponent } from 'react';
import localForage from 'localforage';
import {
  Button,
  Descriptions,
  Modal,
  PageHeader,
  Skeleton,
  Statistic,
} from 'antd';

import data from './data.json';

const Login = lazy(() => import('./Login'));
const Error = lazy(() => import('./Error'));
const Finish = lazy(() => import('./Finish'));
const Notice = lazy(() => import('./Notice'));
const Dashboard = lazy(() => import('./Dashboard'));
const Preparation = lazy(() => import('./Preparation'));
const Questionnaire = lazy(() => import('./Questionnaire'));

export const STOCK = {
  A: '甲',
  B: '乙',
  C: '丙',
  D: '丁',
  E: '戊',
};

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      uuid: '',
      groupID: '',
      noticed: false,
      showNotice: false,
      trades: [],
      /**
       * [{
       *  stock: A | B | C | D | E,
       *  buy: [],  // length = 21
       *  sell: [], // length = 21
       *  mood: [], // length = 5
       * }]
       */
      status: 0,
      error: false,
      totalProfit: 0,
      totalProfitRate: 0,
    };
  }

  async componentDidMount() {
    try {
      const { uuid = '', groupID = '' } = await localForage.getItem('userInfo') ?? {};
      const noticed = await localForage.getItem('noticed') ?? false;
      const nextState = {
        uuid,
        groupID,
        noticed,
        showNotice: !noticed,
        loading: false,
      };
      if (!uuid || !groupID) {
        return this.setState(nextState);
      }
      const trades = await localForage.getItem('trades') ?? [];
      let totalProfit = 0;
      let totalProfitRate = 0;
      for (let i = 0; i < trades.length; i += 1) {
        const { totalProfit: profit = 0 } = calc(trades[i]);
        totalProfit += profit;
        totalProfitRate += (totalProfit / 5000) * 100;
      }
      totalProfit = +totalProfit.toFixed(2);
      totalProfitRate = totalProfitRate.toFixed(2);
      const status = getExperimentStatus(trades);
      this.setState({
        ...nextState,
        trades,
        status,
        totalProfit,
        totalProfitRate,
      });
    } catch (err) {
      this.setState({
        error: true,
        loading: false,
      });
    }
  }

  login = ({ uuid, groupID }) => {
    localForage.setItem('userInfo', {
      uuid,
      groupID,
    }, () => {
      this.setState({
        uuid,
        groupID,
      });
    });
  }

  closeModal = () => {
    localForage.setItem('noticed', true, () => {
      this.setState({
        noticed: true,
        showNotice: false,
      });
    });
  }

  clearUserInfo = () => {
    Modal.confirm({
      okText: '确定',
      cancelText: '取消',
      title: '是否清除用户数据？',
      content: '清除用户数据后也将会清除实验数据！请谨慎操作！',
      onOk: async () => {
        await localForage.clear();
        this.setState({
          uuid: '',
          groupID: '',
          noticed: false,
          showNotice: true,
          trades: [],
          status: 0,
        });
      },
    });
  }

  clearDashboard = () => {
    Modal.confirm({
      okText: '确定',
      cancelText: '取消',
      title: '是否清除实验数据',
      content: '清除实验数据后，您需要重新操作！请谨慎操作！',
      onOk: async () => {
        await localForage.removeItem('trades');
        this.setState({
          trades: [],
          status: 0,
        });
      },
    });
  }

  openNotice = () => {
    this.setState({ showNotice: true });
  }

  goBack = async () => {
    const { status } = this.state;
    if (status === -1) {
      await localForage.removeItem('trades');
      this.setState({
        error: false,
        trades: [],
        status: 0,
      });
    } else {
      window.location.reload();
    }
  }

  handleStart = (stock) => {
    this.setState((state) => ({
      trades: [...state.trades, {
        stock,
        buy: [300],
        sell: [0],
        mood: [],
      }],
      status: 1,
    }), () => {
      const { trades } = this.state;
      localForage.setItem('trades', trades);
    });
  }

  handleNext = () => {
    this.setState({ status: 2 });
  }

  handleTrade = (option, amount) => {
    const { trades } = this.state;
    const latestData = trades[trades.length - 1];
    if (latestData) {
      const { buy, sell, mood } = latestData;
      if (buy.length !== sell.length) {
        return this.setState({ status: -1 });
      }
      if (buy.length >= 21) {
        if (mood.length < 5) {
          this.setState({ status: 2 });
        } else {
          this.setState({ status: 3 });
        }
      } else {
        const updateKeys = {};
        if (option === 'buy') {
          updateKeys.buy = [...buy, amount];
          updateKeys.sell = [...sell, 0];
        } else if (option === 'sell') {
          updateKeys.buy = [...buy, 0];
          updateKeys.sell = [...sell, amount];
        } else {
          updateKeys.buy = [...buy, 0];
          updateKeys.sell = [...sell, 0];
        }
        const newTrades = trades.slice();
        newTrades.splice(-1, 1, {
          ...latestData,
          ...updateKeys,
        });
        this.setState({
          trades: newTrades,
        }, () => {
          localForage.setItem('trades', newTrades);
        });
      }
    } else {
      this.setState({ status: 0 });
    }
  }

  onQuestionSubmit = (data) => {
    const { trades } = this.state;
    const latestData = trades[trades.length - 1];
    if (!latestData) {
      return this.setState({
        status: -1,
      });
    }
    const newTrades = trades.slice();
    newTrades.splice(-1, 1, {
      ...latestData,
      mood: Array.from({ length: 5, ...data }),
    });
    this.setState({
      trades: newTrades,
      status: 0,
    }, () => {
      localForage.setItem('trades', newTrades);
    });
  }

  render() {
    const {
      loading,
      error,
      uuid,
      groupID,
      noticed,
      showNotice,
      trades,
      status,
      totalProfit,
      totalProfitRate,
     } = this.state;

    if (loading) {
      return <div id="skeleton"><Skeleton active /></div>;
    }

    if (error || status === -1) {
      return <Error status={status} goBack={this.goBack} />;
    }

    if (!uuid || !groupID) {
      return <Login login={this.login} />;
    }

    let subTitle = '';
    let childComponent = null;
    switch(status) {
      case 0: {
        subTitle = `即将开始第${trades.length + 1}轮实验`;
        childComponent = <Preparation trades={trades} groupID={groupID} handleStart={this.handleStart} />;
        break;
      }
      case 1: {
        subTitle = `正在进行第${trades.length}轮实验`;
        childComponent = <Dashboard trades={trades} handleTrade={this.handleTrade} handleNext={this.handleNext} />;
        break;
      }
      case 2: {
        subTitle = `已结束第${trades.length}轮实验`;
        childComponent = <Questionnaire onQuestionSubmit={this.onQuestionSubmit} />;
        break;
      }
      case 3: {
        subTitle = `所有实验已结束`;
        childComponent = <Finish />;
        break;
      }
      default:
        break;
    }

    return (
      <div id="main">
        <PageHeader
          backIcon={false}
          title="股票模拟交易实验"
          subTitle={subTitle}
          extra={[
            <Button key="notice" type="link" onClick={this.openNotice}>实验须知</Button>,
            <Button key="userInfo" danger type="primary" onClick={this.clearUserInfo}>清除用户数据</Button>,
            <Button key="trades" danger onClick={this.clearDashboard}>清除实验数据</Button>,
          ]}
        >
          <div className="content">
            <div className="main">
              <Descriptions size="small" column={2}>
                <Descriptions.Item label="被试编号">
                  {uuid}
                </Descriptions.Item>
                <br />
                <Descriptions.Item label="分组编号">
                  {groupID}
                </Descriptions.Item>
              </Descriptions>
            </div>
            <div>
              <div className="extra">
                <Statistic title="总累计盈亏" value={totalProfit} suffix="金币" />
                <Statistic title="总盈亏率" value={totalProfitRate} suffix="%" />
              </div>
            </div>
          </div>
        </PageHeader>
        {childComponent}
        <Notice
          noticed={noticed}
          visible={showNotice}
          onCancel={this.closeModal}
        />
      </div>
    );
  }
}

/**
 * 传入实验数据返回当前实验状态
 * @param {Array} trades 实验数据
 * @returns {(-1|0|1|2|3)} 实验状态
 */
function getExperimentStatus(trades) {
  let status;
  const latestData = trades[trades.length - 1];
  const {
    buy = [],
    sell = [],
    mood = [],
  } = latestData || {};
  if (
    !latestData || (
      buy.length >= 21 ||
      sell.length >= 21
    )
  ) {
    if (mood.length === 0 || mood.length >= 5) {
      if (trades.length >= 5) {
        status = 3;
      } else {
        status = 1;
      }
    } else {
      status = 2;
    }
  } else if (
    buy.length < 21 &&
    buy.length === sell.length &&
    mood.length === 0
  ) {
    status = 1;
  } else {
    status = -1;
  }
  return status;
}

export function calc(trade) {
  const { stock, buy, sell } = trade;
  if (
    !stock
    || !Array.isArray(buy)
    || !Array.isArray(sell)
    || buy.length < 21
    || sell.length < 21
  ) {
    return {};
  }
  let cost = 0;
  let amount = 0;
  let profit = 0;
  let position = 0;
  for (let i = 0; i < buy.length; i += 1) {
    cost += buy[i] * data[stock][i];
    amount += buy[i];
    position += buy[i] - sell[i];
    profit += sell[i] * data[stock][i];
  }
  const averageCost = cost / amount;
  const balance = 5000 + profit - cost;
  const marketValue = position * data[stock][19];
  const totalAsset = balance + marketValue;
  const totalProfit = totalAsset - 5000;
  return {
    averageCost,
    position,
    totalProfit,
    balance,
    marketValue,
    totalAsset,
  };
}
