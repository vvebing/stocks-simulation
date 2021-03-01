import React, { createRef, PureComponent } from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/markPoint';
import { Button, Col, Descriptions, InputNumber, message, Modal, Row } from 'antd';

import data from './data.json';
import { calc, STOCK } from './App';

export default class Dashboard extends PureComponent {
  constructor(props) {
    super(props);
    const { trades, principal = 5000, trials = 21 } = props;
    const latestData = trades[trades.length - 1] || {};
    this.state = {
      over: latestData.buy && latestData.buy.length >= trials,
      buyValue: 0,
      sellValue: 0,
      trades,
      next: true,
      ...calculate(trades, principal, false),
    };
    this.lineRef = createRef();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { trades, principal = 5000 } = nextProps;
    if (prevState.trades !== trades) {
      return {
        ...calculate(trades, principal, false),
        trades,
      };
    }
    return null;
  }

  componentDidMount() {
    const { over } = this.state;
    if (over) return;

    this.myChart = echarts.getInstanceByDom(this.lineRef.current);
    if (this.myChart === undefined) {
      this.myChart = echarts.init(this.lineRef.current);
    }
    this.getOption();
  }

  componentDidUpdate(prevProps, prevState) {
    const { trades } = this.props;
    const { next } = this.state;
    if (trades !== prevProps.trades || next !== prevState.next) {
      this.getOption();
    }
  }

  componentWillUnmount() {
    this.myChart && this.myChart.dispose();
    this.myChart = null;
  }

  getOption = () => {
    if (!this.myChart) return;
    const { trades, trials = 21 } = this.props;
    const latestData = trades[trades.length - 1];
    if (!latestData) return;
    const { buy, stock } = latestData;
    const { next } = this.state;

    const option = {
      grid: {
        left: '0',
        right: '10px',
        top: '35px',
        bottom: '0',
        containLabel: true,
      },
      title: {
        text: `${STOCK[stock]}股票走势`,
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
          lineStyle: {
            width: 1.5,
            type: 'dashed',
          },
        },
      },
      xAxis: {
        boundaryGap: false,
        data: Array(trials + 1).fill('').map((_, index) => `Point ${index}`),
      },
      yAxis: {
        showMinLabel: false,
        showMaxLabel: false,
        min: (value) => parseInt(value.min - 1, 10),
        max: (value) => parseInt(value.max + 2, 10),
      },
      series: [
        {
          name: '股票价格',
          type: 'line',
          data: data[stock].slice(3, buy.length + (next && buy.length ? 3 : 4)),
          markPoint: {
            data: [
              { type: 'min', name: '最低值' },
              { type: 'max', name: '最高值' },
            ],
          },
        }
      ],
    };
    this.myChart.setOption(option);
  }

  onBuyInputChange = (value) => {
    this.setState({ buyValue: +value });
  }

  onBuyBtnMax = () => {
    this.setState((state) => ({ buyValue: state.maxBuy }));
  }

  onSellInputChange = (value) => {
    this.setState({ sellValue: +value });
  }

  onSellBtnMax = () => {
    this.setState((state) => ({ sellValue: state.position }));
  }

  onBuyBtnClick = () => {
    const { buyValue, maxBuy } = this.state;
    if (!buyValue) return message.warning('买入数量需大于零！');
    if (buyValue > maxBuy) {
      this.setState({ buyValue: maxBuy });
      return message.warning(`现金余额最多只能购买${maxBuy}股！`);
    };
    this.tradeConfirm('buy', buyValue, `买入${buyValue}股`);
  }

  onSellBtnClick = () => {
    const { sellValue, position } = this.state;
    if (!sellValue) return message.warning('卖出数量需大于零！');
    if (sellValue > position) {
      this.setState({ sellValue: position });
      return message.warning(`当前持仓最多只能卖出${position}股！`);
    }
    this.tradeConfirm('sell', sellValue, `卖出${sellValue}股`);
  }

  onKeepBtnClick = () => {
    this.tradeConfirm('', 0, '继续持有');
  }

  tradeConfirm = (option, amount, action) => {
    const { trades, trials = 21, handleTrade } = this.props;
    const latestData = trades[trades.length - 1];
    if (latestData.buy.length >= trials) {
      return this.setState({ over: true });
    }
    Modal.confirm({
      centered: true,
      okText: '确定',
      cancelText: '取消',
      title: `${action}${STOCK[latestData.stock]}股票`,
      content: '是否确认该操作？',
      onOk: () => {
        this.setState({
          buyValue: 0,
          sellValue: 0,
          next: true,
        });
        handleTrade(option, amount);
      },
    });
  }

  toggleNext = () => {
    const { trades, trials = 21, principal = 5000 } = this.props;
    const latestData = trades[trades.length - 1];
    const over = latestData.buy.length >= trials;
    this.setState({
      over,
      next: false,
      ...calculate(trades, principal, !over),
    });
  }

  inputFormatter = (value) => parseInt(value, 10) || 0;

  render() {
    const { trades, trials = 21, handleNext } = this.props;
    const {
      over,
      next,
      buyValue,
      sellValue,
      averageCost,
      position,
      currentProfit,
      totalProfit,
      balance,
      marketValue,
      totalAsset,
    } = this.state;
    const latestData = trades[trades.length - 1] ?? {};
    const { stock, buy } = latestData;

    return over ? (
      <div id="dashboard">
        <h2>本轮交易任务结束。</h2>
        <Descriptions bordered column={1}>
          <Descriptions.Item label="成本">{+averageCost}</Descriptions.Item>
          <Descriptions.Item label="持仓">{position}</Descriptions.Item>
          <Descriptions.Item label="总盈亏">{+totalProfit}</Descriptions.Item>
          <Descriptions.Item label="现金余额">{+balance}</Descriptions.Item>
          <Descriptions.Item label="股票市值">{+marketValue}</Descriptions.Item>
          <Descriptions.Item label="总资产">{+totalAsset}</Descriptions.Item>
        </Descriptions>
        <h2>{`您在本轮交易任务的累计盈亏为：${+totalProfit}金币。`}</h2>
        <Button type="primary" onClick={handleNext}>点击继续</Button>
      </div>
    ) : (
      <div id="dashboard">
        <div className="chart" ref={this.lineRef} />
        <div className="data">
          <div className="describe">
            <Descriptions bordered column={1} title="资产配置">
              <Descriptions.Item label="当前股价">{data[stock][buy.length + (next ? 2 : 3)]}</Descriptions.Item>
              <Descriptions.Item label="成本">{+averageCost}</Descriptions.Item>
              <Descriptions.Item label="持仓">{position}</Descriptions.Item>
              <Descriptions.Item label="当前盈亏">{+currentProfit}</Descriptions.Item>
              <Descriptions.Item label="总盈亏">{+totalProfit}</Descriptions.Item>
              <Descriptions.Item label="现金余额">{+balance}</Descriptions.Item>
              <Descriptions.Item label="股票市值">{+marketValue}</Descriptions.Item>
              <Descriptions.Item label="总资产">{+totalAsset}</Descriptions.Item>
            </Descriptions>
          </div>
          <div className="option">
            {
              next ?
              <>
                <Row justify="center">
                  <Col className="input-label">
                    {
                      latestData.buy.length >= trials ?
                      '本轮交易任务结束，点击确认查看本轮交易信息。' :
                      '本期交易结束，请点击确认进入下一个交易期！'
                    }
                  </Col>
                </Row>
                <Row justify="center">
                  <Col span={12}>
                    <Button
                      type="primary"
                      size="large"
                      block
                      onClick={this.toggleNext}
                    >确认</Button>
                  </Col>
                </Row>
              </> :
              <>
                <Row justify="space-between">
                  <Col span={6} className="input-label">买入股票数量</Col>
                  <Col span={4}>
                    <InputNumber
                      min={0}
                      step={1}
                      precision={0}
                      value={buyValue}
                      formatter={this.inputFormatter}
                      onChange={this.onBuyInputChange}
                    />
                  </Col>
                  <Col span={5}>
                    <Button
                      type="link"
                      block
                      onClick={this.onBuyBtnMax}
                    >最大值</Button>
                  </Col>
                  <Col span={6}>
                    <Button
                      type="primary"
                      block
                      onClick={this.onBuyBtnClick}
                    >买入</Button>
                  </Col>
                </Row>
                <Row justify="space-between">
                  <Col span={6} className="input-label">卖出股票数量</Col>
                  <Col span={4}>
                    <InputNumber
                      min={0}
                      step={1}
                      precision={0}
                      value={sellValue}
                      formatter={this.inputFormatter}
                      onChange={this.onSellInputChange}
                    />
                  </Col>
                  <Col span={5}>
                    <Button
                      type="link"
                      block
                      onClick={this.onSellBtnMax}
                    >最大值</Button>
                  </Col>
                  <Col span={6}>
                    <Button
                      type="primary"
                      danger
                      block
                      onClick={this.onSellBtnClick}
                    >卖出</Button>
                  </Col>
                </Row>
                <Row justify="end">
                  <Col span={6}>
                    <Button
                      block
                      className="keep-btn"
                      onClick={this.onKeepBtnClick}
                    >持仓不变</Button>
                  </Col>
                </Row>
              </>
            }
          </div>
        </div>
      </div>
    );
  }
}

function calculate(trades, principal, next) {
  const latestData = trades[trades.length - 1];
  const {
    averageCost = 0,
    position = 0,
    totalProfit = 0,
    balance = 0,
    marketValue = 0,
    totalAsset = 0,
    maxBuy = 0,
  } = calc(latestData, principal, next);
  const currentProfit = (data[latestData.stock][latestData.buy.length + (next ? 3 : 2)] - averageCost) * position;
  return {
    averageCost: averageCost.toFixed(4),    // 加权成本
    position,       // 持仓
    currentProfit: currentProfit.toFixed(4),  // 当前盈亏
    totalProfit: totalProfit.toFixed(4),    // 总盈亏
    balance: balance.toFixed(4),        // 现金余额
    marketValue: marketValue.toFixed(4),    // 股票市值
    totalAsset: totalAsset.toFixed(4),     // 总资产
    maxBuy,
  };
}
