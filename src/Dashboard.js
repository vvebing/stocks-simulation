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
    const { trades } = props;
    const latestData = trades[trades.length - 1] || {};
    const {
      averageCost = 0,
      position = 0,
      totalProfit = 0,
      balance = 0,
      marketValue = 0,
      totalAsset = 0,
    } = calc(latestData);
    const currentProfit = (data[latestData.stock][latestData.buy.length - 1] - averageCost) * position;
    this.state = {
      over: latestData.buy && latestData.buy.length >= 21,
      buyValue: 0,
      sellValue: 0,
      averageCost: averageCost.toFixed(4),    // 加权成本
      position,       // 持仓
      currentProfit,  // 当前盈亏
      totalProfit,    // 总盈亏
      balance,        // 现金余额
      marketValue,    // 股票市值
      totalAsset,     // 总资产
    };
    this.lineRef = createRef();
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

  componentDidUpdate(prevProps) {
    const { trades } = this.props;
    if (trades !== prevProps.trades) {
      this.getOption();
    }
  }

  componentWillUnmount() {
    this.myChart && this.myChart.dispose();
    this.myChart = null;
  }

  getOption = () => {
    if (!this.myChart) return;
    const { trades } = this.props;
    const latestData = trades[trades.length - 1];
    if (!latestData) return;
    const { buy, stock } = latestData;

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
        data: Array(24).fill('').map((_, index) => `Point ${index}`),
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
          data: [10, ...data.A].slice(0, buy.length),
          markPoint: buy.length > 1 ? {
            data: [
              { type: 'min', name: '最低值' },
              { type: 'max', name: '最高值' },
            ],
          } : {},
        }
      ],
    };
    this.myChart.setOption(option);
  }

  onBuyInputChange = (value) => {
    this.setState({ buyValue: +value });
  }

  onSellInputChange = (value) => {
    this.setState({ sellValue: +value });
  }

  onBuyBtnClick = () => {
    const { buyValue } = this.state;
    if (!buyValue) return message.warning('买入数量需大于零！');
    this.tradeConfirm('buy', buyValue, `买入${buyValue}股`);
  }

  onSellBtnClick = () => {
    const { sellValue } = this.state;
    if (!sellValue) return message.warning('卖出数量需大于零！');
    this.tradeConfirm('sell', sellValue, `卖出${sellValue}股`);
  }

  onKeepBtnClick = () => {
    this.tradeConfirm('', 0, '继续持有');
  }

  tradeConfirm = (option, amount, action) => {
    const { trades, handleTrade } = this.props;
    const latestData = trades[trades.length - 1];
    if (latestData.buy.length >= 21) {
      return this.setState({ over: true });
    }
    Modal.confirm({
      centered: true,
      okText: '确定',
      cancelText: '取消',
      title: `${action}${STOCK[latestData.stock]}股票`,
      content: '是否确认该操作？',
      onOk: () => {
        handleTrade(option, amount);
        this.setState({ buyValue: 0, sellValue: 0 });
      },
    });
  }

  render() {
    const { trades, handleNext } = this.props;
    const {
      over,
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
          <Descriptions.Item label="总盈亏">{totalProfit}</Descriptions.Item>
          <Descriptions.Item label="现金余额">{balance}</Descriptions.Item>
          <Descriptions.Item label="股票市值">{marketValue}</Descriptions.Item>
          <Descriptions.Item label="总资产">{totalAsset}</Descriptions.Item>
        </Descriptions>
        <h2>{`您在本轮交易任务的累计盈亏为：${totalProfit}金币。`}</h2>
        <Button type="primary" onClick={handleNext}>点击继续</Button>
      </div>
    ) : (
      <div id="dashboard">
        <div className="chart" ref={this.lineRef} />
        <div className="data">
          <div className="describe">
            <Descriptions bordered column={1} title="资产配置">
              <Descriptions.Item label="当前股价">{STOCK[stock][buy.length - 1]}</Descriptions.Item>
              <Descriptions.Item label="成本">{+averageCost}</Descriptions.Item>
              <Descriptions.Item label="持仓">{position}</Descriptions.Item>
              <Descriptions.Item label="当前盈亏">{currentProfit}</Descriptions.Item>
              <Descriptions.Item label="总盈亏">{totalProfit}</Descriptions.Item>
              <Descriptions.Item label="现金余额">{balance}</Descriptions.Item>
              <Descriptions.Item label="股票市值">{marketValue}</Descriptions.Item>
              <Descriptions.Item label="总资产">{totalAsset}</Descriptions.Item>
            </Descriptions>
          </div>
          <div className="option">
            <Row justify="space-around">
              <Col span={6} className="input-label">买入股票数量</Col>
              <Col span={8}>
                <InputNumber
                  min={0}
                  max={10}
                  size="large"
                  precision={0}
                  value={buyValue}
                  formatter={(value) => parseInt(value, 10)}
                  onChange={this.onBuyInputChange}
                />
              </Col>
              <Col span={6}>
                <Button
                  type="primary"
                  size="large"
                  block
                  onClick={this.onBuyBtnClick}
                >买入</Button>
              </Col>
            </Row>
            <Row justify="space-around">
              <Col span={6} className="input-label">卖出股票数量</Col>
              <Col span={8}>
                <InputNumber
                  min={0}
                  max={10}
                  size="large"
                  precision={0}
                  value={sellValue}
                  formatter={(value) => parseInt(value, 10)}
                  onChange={this.onSellInputChange}
                />
              </Col>
              <Col span={6}>
                <Button
                  type="primary"
                  size="large"
                  danger
                  block
                  onClick={this.onSellBtnClick}
                >卖出</Button>
              </Col>
            </Row>
            <Row justify="center">
              <Col span={12}>
                <Button
                  type="primary"
                  size="large"
                  block
                  onClick={this.onKeepBtnClick}
                >继续持有</Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
