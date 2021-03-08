import React, { lazy, PureComponent, useEffect, useRef } from 'react';
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
const Practice = lazy(() => import('./Practice'));
const Dashboard = lazy(() => import('./Dashboard'));
const Preparation = lazy(() => import('./Preparation'));
const PracticeTest = lazy(() => import('./PracticeTest'));
const Questionnaire = lazy(() => import('./Questionnaire'));

export const SELECTS = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛'];
const STOCKS = ['A', 'B', 'C', 'D', 'E'];
const CLEAR_PASSWORD = '981107';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      uuid: '',
      groupID: '',
      noticed: false,
      showNotice: false,
      practice: {
        // buy: [],
        // sell: [],
        // test: [],
      },
      trades: [],
      /**
       * [{
       *  select: number,
       *  stock: A | B | C | D | E,
       *  buy: [],  // length = 21
       *  sell: [], // length = 21
       * }]
       */
      moods: [],
      status: 0,
      error: false,
      totalProfit: 0,
    };
    this.clearPassword = '';
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
      const practice = await localForage.getItem('practice') ?? {};
      nextState.practice = practice;
      if (!practice.buy || !practice.sell || !practice.test) {
        return this.setState(nextState);
      }
      const trades = await localForage.getItem('trades') ?? [];
      const moods = await localForage.getItem('moods') ?? [];
      const totalProfit = calcProfit(trades);
      const status = getExperimentStatus(trades, moods);
      this.setState({
        ...nextState,
        moods,
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
        this.clearPassword = '';

        await localForage.clear();
        this.setState({
          uuid: '',
          groupID: '',
          noticed: false,
          showNotice: true,
          trades: [],
          moods: [],
          status: 0,
          practice: {},
          totalProfit: 0,
        });
      },
    });
  }

  clearDashboard = () => {
    Modal.confirm({
      okText: '确定',
      cancelText: '取消',
      title: '是否清除当前轮实验数据',
      content: [
        <p key="text">清除实验数据后，您需要重新操作！请谨慎操作！</p>,
        <p key="password">请主试输入密码：<Input.Password onChange={(event) => {this.clearPassword = event.target.value}} /></p>,
      ],
      onOk: async () => {
        if (this.clearPassword !== CLEAR_PASSWORD) {
          message.warning('主试权限才能清除实验数据！');
          return;
        }
        this.clearPassword = '';

        const { trades } = this.state;
        const nextTrades = trades.slice();
        nextTrades.pop();
        this.setState({
          status: 0,
          trades: nextTrades,
          totalProfit: calcProfit(nextTrades),
        }, () => {
          localForage.setItem('trades', nextTrades);
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
        moods: [],
        status: 0,
      });
    } else {
      window.location.reload();
    }
  }

  handleStart = (select) => {
    this.setState((state) => ({
      trades: [...state.trades, {
        select,
        stock: STOCKS[state.trades.length],
        buy: [300],
        sell: [0],
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
      status: 0,
      totalProfit,
    });
  }

  handleTrade = (option, amount) => {
    const { trades, moods } = this.state;
    const latestData = trades[trades.length - 1];
    if (latestData) {
      const { buy, sell } = latestData;
      if (buy.length !== sell.length) {
        return this.setState({ status: -1 });
      }
      if (buy.length >= 21) {
        if (trades.length < 5) {
          this.setState({ status: 0 });
        } else if (moods.length < 4) {
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

  onQuestionSubmit = (moods) => {
    this.setState({
      moods,
      status: 3,
    }, () => {
      localForage.setItem('moods', moods);
    });
  }

  saveTextAsFile = () => {
    Modal.confirm({
      okText: '确定',
      cancelText: '取消',
      title: '导出实验数据',
      content: [
        <p key="text">为避免实验数据丢失，请在导出实验数据后发送到主试邮箱！</p>,
        <p key="password">请主试输入密码：<Input.Password onChange={(event) => {this.clearPassword = event.target.value}} /></p>,
      ],
      onOk: async () => {
        if (this.clearPassword !== CLEAR_PASSWORD) {
          message.warning('主试权限才能导出实验数据！');
          return;
        }
        this.clearPassword = '';

        const { uuid, groupID, trades, moods } = this.state;
        saveTextAsFile(calcFinalData(trades, moods, uuid, groupID), uuid, groupID);
      },
    });
  }

  handlePracticeNext = (practice) => {
    this.setState((state) => ({
      practice: {
        ...state.practice,
        ...practice,
      },
    }), () => {
      const { practice } = this.state;
      localForage.setItem('practice', practice);
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
      practice,
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
    const tempStatus = status;

    if (!practice.buy || !practice.sell) {
      subTitle = "练习操作";
      childComponent = <Practice handlePracticeNext={this.handlePracticeNext} />;
    } else if (!practice.test) {
      subTitle = "练习测验";
      childComponent = <PracticeTest handlePracticeNext={this.handlePracticeNext} />;
    } else {
      switch(tempStatus) {
        case 0: {
          subTitle = `即将开始第${trades.length + 1}轮实验`;
          childComponent = <Preparation trades={trades} groupID={groupID} handleStart={this.handleStart} />;
          break;
        }
        case 1: {
          subTitle = `正在进行第${trades.length}轮实验`;
          childComponent = <Dashboard trades={trades} groupID={groupID} handleTrade={this.handleTrade} handleNext={this.handleNext} />;
          break;
        }
        case 2: {
          subTitle = `已结束第${trades.length}轮实验`;
          childComponent = <Questionnaire groupID={groupID} onQuestionSubmit={this.onQuestionSubmit} />;
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
            <Button key="trades" danger onClick={this.clearDashboard}>清除当前轮实验数据</Button>,
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
function getExperimentStatus(trades, moods) {
  let status;
  const latestData = trades[trades.length - 1];
  const {
    buy = [],
    sell = [],
  } = latestData || {};
  if (!latestData) {
    status = 0;
  } else if (
    buy.length >= 21 ||
    sell.length >= 21
  ) {
    if (trades.length < 5) {
      status = 0;
    } else if (moods.length < 4) {
      status = 2;
    } else {
      status = 3;
    }
  } else if (
    buy.length < 21 &&
    buy.length === sell.length
  ) {
    status = 1;
  } else {
    status = -1;
  }
  return status;
}

export function calc(trade, principal = 5000, next = false, total = false) {
  const { stock, buy, sell } = trade;
  if (
    !stock
    || !Array.isArray(buy)
    || !Array.isArray(sell)
    || (total && (buy.length < 21 || sell.length < 21))
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
  const balance = principal + profit - cost;
  const averageCost = amount <= 0 ? 0 : (tCost / amount);
  const marketValue = position * data[stock][buy.length + (next ? 3 : 2)];
  const totalAsset = balance + marketValue;
  const totalProfit = totalAsset - principal;
  const maxBuy = Math.floor(balance / data[stock][buy.length + (next ? 3 : 2)]);
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
    const { totalProfit: profit = 0 } = calc(trades[i], 5000, false, true);
    totalProfit += profit;
  }
  return +totalProfit.toFixed(2);
}

function calcFinalData(rawData, moods, uuid, groupID) {
  const trades = [];
  for (let i = 0; i < rawData.length; i += 1) {
    const trials = [];
    const { buy, sell, stock } = rawData[i];
    const trade = {
      buy: [300],
      sell: [0],
      stock,
    };
    let trialIndex;
    let totalSell = 0;
    let sellAfterRise = 0;
    let sellAfterFall = 0;
    let totalGain = 0;
    let totalLose = 0;
    let prevPosition = 300;
    let prevAverageCost = 10;
    let totalRealizedGain = 0;
    let totalRealizedLose = 0;
    const sellPriceSubAverageCost = [];
    for (let j = 1; j < buy.length; j += 1) {
      trade.sell.push(sell[j]);
      trade.buy.push(buy[j]);
      const {
        averageCost,
        position,
        totalProfit,
        marketValue,
      } = calc(trade);
      let paperGain = 0;
      let paperLose = 0;
      let realizedGain = 0;
      let realizedLose = 0;
      const paperProfit = (data[stock][j + 3] - prevAverageCost) * prevPosition;
      const realizedProfit = (data[stock][j + 3] - prevAverageCost) * sell[j];
      if (data[stock][j + 3] > prevAverageCost) {
        [paperGain, realizedGain] = [paperProfit, realizedProfit];
      } else if (data[stock][j + 3] < prevAverageCost) {
        [paperLose, realizedLose] = [paperProfit, realizedProfit];
      }
      totalGain += (paperGain + realizedGain);
      totalLose += (paperLose + realizedLose);
      totalRealizedGain += realizedGain;
      totalRealizedLose += realizedLose;
      prevAverageCost = averageCost;
      prevPosition = position;
      const trial = {
        'Trial': j,
        'Buy': buy[j],  // 每个 trial 买入的股票数量
        'Sell': sell[j],  // 每个 trial 卖出的股票数量
        'Current Stock Price': data[stock][j + 3],  // 当前股价
        'Weighted Average Purchase Price': +averageCost.toFixed(4), // 加权平均买入价
        'Position': position, // 持仓
        'Current Profit': +((data[stock][j + 3] - averageCost) * position).toFixed(4),  // 当前盈亏
        'Total Profit': +totalProfit.toFixed(4),  // 总盈亏
        'Market Value': +marketValue.toFixed(4),  // 股票总市值
        'Paper Gain': +paperGain.toFixed(4),  //  纸面盈利
        'Paper Lose': +paperLose.toFixed(4),  // 纸面亏损
        'Realized Gain': +realizedGain.toFixed(4),  // 兑现盈利
        'Realized Lose': +realizedLose.toFixed(4),  // 兑现亏损
      };
      if (sell[j] > 0) {
        const diff = data[stock][j + 3] - averageCost;
        sellPriceSubAverageCost.push(diff);
        trial['The Diff Of SP-WAPP'] = +diff.toFixed(4);  // 卖出价与加权平均买入价的差值
        if (j > 0) {
          if (sell[j] > sell[j - 1]) {
            sellAfterRise += sell[j];
          } else if (sell[j] < sell[j - 1]) {
            sellAfterFall += sell[j];
          }
        }
      }
      trials.push(trial);
      if (trialIndex === undefined) {
        totalSell += sell[j];
        if (totalSell >= 300) {
          trialIndex = j;
        }
      }
    }
    const gainRatio = totalGain === 0 ? 0 : totalRealizedGain / totalGain;
    const lossRatio = totalLose === 0 ? 0 : totalRealizedLose / totalLose;
    trades.push({
      'Round': i + 1,
      'The Average Of SP-WAPP': +(sellPriceSubAverageCost.reduce((a, b) => a + b, 0) / sellPriceSubAverageCost.length).toFixed(4),  // 每轮实验卖出价与加权平均买入价的差值的平均值
      'Alpha': +((sellAfterRise - sellAfterFall) / (sellAfterRise + sellAfterFall)).toFixed(4), // α = (s+ - s-) / (s+ + s-)
      'Total Profit': +(trials[trials.length - 1]['Total Profit']).toFixed(4),  // 每轮实验的最终累计盈亏
      'Trial While Sold 300 Shares': trialIndex,  // 在第几个 trial 累计卖出 300 股
      'Sell After Rise': sellAfterRise, // 股票上涨后卖出股票数量
      'Sell After Fall': sellAfterFall, // 股票下跌后卖出股票数量
      'Trials': trials, // 每个 trial 的交易数据数组
      'DE': +(gainRatio - lossRatio).toFixed(4),  // DE
      'Stock': stock, // 股票类型
    });
  }
  return {
    'Mood': moods,  // 情绪调查
    'User ID': uuid,  // 用户 ID
    'Trades': trades, // 交易数据
    'Group ID': groupID,  // 用户选择分组
    'Total Profit': trades.reduce((total, trade) => total + trade['Total Profit'], 0),  // 五轮实验的总盈亏
  };
}

function saveTextAsFile(finalData, uuid, groupID) {
  const fileText = JSON.stringify(finalData);
  const fileTextAsBlob = new Blob([fileText], {type: 'text/plain'});
  const downloadLink = document.createElement('a');
  downloadLink.download = `stocks-simulation-${uuid}-${groupID}.json`;
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

export function useInterval(callback, delay = 1000) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  });
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
