import React, { lazy, PureComponent } from 'react';
import localForage from 'localforage';
import {
  Button,
  Descriptions,
  Input,
  message,
  Modal,
  PageHeader,
  Skeleton,
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
const CLEAR_PASSWORD = 'stocks-simulation';

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
       *  buy: [],  // length = 20
       *  sell: [], // length = 20
       *  mood: [], // length = 5
       * }]
       */
      status: 0,
      error: false,
      totalProfit: 0,
    };
    this.clearPassword = null;
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
      const totalProfit = calcProfit(trades);
      const status = getExperimentStatus(trades);
      this.setState({
        ...nextState,
        trades,
        status,
        totalProfit,
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
      content: [
        <p key="text">清除用户数据后也将会清除实验数据！请谨慎操作！</p>,
        <p key="password">请主试输入密码：<Input.Password onChange={(event) => {this.clearPassword = event.target.value}} /></p>,
      ],
      onOk: async () => {
        if (this.clearPassword !== CLEAR_PASSWORD) {
          message.warning('主试权限才能清除用户数据！');
          return;
        }

        await localForage.clear();
        this.setState({
          uuid: '',
          groupID: '',
          noticed: false,
          showNotice: true,
          trades: [],
          status: 0,
          totalProfit: 0,
        });
      },
    });
  }

  clearDashboard = () => {
    Modal.confirm({
      okText: '确定',
      cancelText: '取消',
      title: '是否清除实验数据',
      content: [
        <p key="text">清除实验数据后，您需要重新操作！请谨慎操作！</p>,
        <p key="password">请主试输入密码：<Input.Password onChange={(event) => {this.clearPassword = event.target.value}} /></p>,
      ],
      onOk: async () => {
        if (this.clearPassword !== CLEAR_PASSWORD) {
          message.warning('主试权限才能清除实验数据！');
          return;
        }

        await localForage.removeItem('trades');
        this.setState({
          trades: [],
          status: 0,
          totalProfit: 0,
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
    const { trades } = this.state;
    const totalProfit = calcProfit(trades);
    this.setState({
      status: 2,
      totalProfit,
    });
  }

  handleTrade = (option, amount) => {
    const { trades } = this.state;
    const latestData = trades[trades.length - 1];
    if (latestData) {
      const { buy, sell, mood } = latestData;
      if (buy.length !== sell.length) {
        return this.setState({ status: -1 });
      }
      if (buy.length >= 20) {
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
      mood: Array.from({ length: 9, ...data }),
    });
    this.setState({
      trades: newTrades,
      status: newTrades.length >= 5 ? 3 : 0,
    }, () => {
      localForage.setItem('trades', newTrades);
    });
  }

  saveTextAsFile = () => {
    const { uuid, groupID, trades } = this.state;
    saveTextAsFile({
      uuid,
      groupID,
      trades,
    }, uuid, groupID);
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
        childComponent = <Finish totalProfit={totalProfit} saveTextAsFile={this.saveTextAsFile} />;
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
  if (!latestData) {
    status = 0;
  } else if (
    buy.length >= 20 ||
    sell.length >= 20
  ) {
    if (mood.length < 5) {
      status = 2;
    } else if (trades.length >= 5) {
      status = 3;
    } else {
      status = 0;
    }
  } else if (
    buy.length < 20 &&
    buy.length === sell.length &&
    mood.length === 0
  ) {
    status = 1;
  } else {
    status = -1;
  }
  return status;
}

export function calc(trade, total = false) {
  const { stock, buy, sell } = trade;
  if (
    !stock
    || !Array.isArray(buy)
    || !Array.isArray(sell)
    || (total && (buy.length < 20 || sell.length < 20))
  ) {
    return {};
  }
  let cost = 0;
  let tCost = 0;
  let amount = 0;
  let profit = 0;
  let position = 0;
  for (let i = 0; i < buy.length; i += 1) {
    cost += buy[i] * data[stock][i + 3];
    if (sell[i] === position && position !== 0) {
      tCost = 0;
      amount = 0;
    } else {
      tCost += buy[i] * data[stock][i + 3];
      amount += buy[i];
    }
    position += buy[i] - sell[i];
    profit += sell[i] * data[stock][i + 3];
  }
  const balance = 5000 + profit - cost;
  const averageCost = amount <= 0 ? 0 : (tCost / amount);
  const marketValue = position * data[stock][buy.length + 3];
  const totalAsset = balance + marketValue;
  const totalProfit = totalAsset - 5000;
  const maxBuy = Math.floor(balance / data[stock][buy.length + 3])
  return {
    averageCost,
    position,
    totalProfit,
    balance,
    marketValue,
    totalAsset,
    maxBuy,
  };
}

function calcProfit(trades) {
  let totalProfit = 0;
  for (let i = 0; i < trades.length; i += 1) {
    const { totalProfit: profit = 0 } = calc(trades[i], true);
    totalProfit += profit;
  }
  return +totalProfit.toFixed(2);
}

function saveTextAsFile(data, uuid, groupID) {
  const fileText = JSON.stringify(data);
  const fileTextAsBlob = new Blob([fileText], {type: 'text/plain'});
  const downloadLink = document.createElement('a');
  downloadLink.download = `stocks-simulation-${uuid}-${groupID}.txt`;
  downloadLink.innerHTML = 'Download File';
  if (window.webkitURL !== null) {
    // Chrome allows the link to be clicked
    // without actually adding it to the DOM.
    downloadLink.href = window.webkitURL.createObjectURL(fileTextAsBlob);
  } else {
    // Firefox requires the link to be added to the DOM
    // before it can be clicked.
    downloadLink.href = window.URL.createObjectURL(fileTextAsBlob);
    downloadLink.onclick = (event) => {
      document.body.removeChild(event.target);
    };
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
  }
  downloadLink.click();
}
