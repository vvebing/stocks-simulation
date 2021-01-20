import React, { createRef, PureComponent } from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/markPoint';
import { Button, Col, Descriptions, InputNumber, Row } from 'antd';

import data from './data.json';

export default class Dashboard extends PureComponent {
  constructor(props) {
    super(props);
    this.lineRef = createRef();
  }

  componentDidMount() {
    this.myChart = echarts.getInstanceByDom(this.lineRef.current);
    if (this.myChart === undefined) {
      this.myChart = echarts.init(this.lineRef.current);
    }
    this.getOption();
  }

  getOption = () => {
    if (!this.myChart) return;

    const option = {
      animationDelay: 200,
      animationDurationUpdate: 0,
      grid: {
        left: '0',
        right: '10px',
        top: '35px',
        bottom: '0',
        containLabel: true,
      },
      title: {
        text: '股票走势',
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
          data: [10, ...data.A],
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

  render() {
    return (
      <div id="dashboard">
        <div className="chart" ref={this.lineRef} />
        <div className="data">
          <div className="describe">
            <Descriptions bordered column={1} title="资产配置">
              <Descriptions.Item label="当前股价">10.0</Descriptions.Item>
              <Descriptions.Item label="成本">10.0</Descriptions.Item>
              <Descriptions.Item label="持仓">300</Descriptions.Item>
              <Descriptions.Item label="当前盈亏">0</Descriptions.Item>
              <Descriptions.Item label="总盈亏">0</Descriptions.Item>
              <Descriptions.Item label="现金余额">2000</Descriptions.Item>
              <Descriptions.Item label="股票市值">3000</Descriptions.Item>
              <Descriptions.Item label="总资产">5000</Descriptions.Item>
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
                  defaultValue={0}
                />
              </Col>
              <Col span={6}>
                <Button type="primary" size="large" block>买入</Button>
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
                  defaultValue={0}
                />
              </Col>
              <Col span={6}>
                <Button type="primary" size="large" danger block>卖出</Button>
              </Col>
            </Row>
            <Row justify="center">
              <Col span={12}><Button type="primary" size="large" block>继续持有</Button></Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
