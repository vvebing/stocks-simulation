import { Button, Card, Col, Descriptions, message, Radio, Result, Row, Steps, Typography } from 'antd';
import React, { useState } from 'react';
import Thumbnail from './Thumbnail.jpg';
import { STOCK, useInterval } from './App';

const STEPS = [
  '准备',
  '说明',
  '选股',
  '确认',
];

function Preparation({ trades, groupID, handleStart }) {
  const [stock, selectStock] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(60);
  const [isRunning, toggleIsRunning] = useState(true);

  useInterval(() => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      toggleIsRunning(false);
    }
  }, isRunning ? 1000 : null);

  const next = () => {
    if (current >= 1 && !stock) {
      if (groupID !== 10) {
        current !== 1 && setCurrent(1);
        return message.warning('请选择一支股票');
      }
      const stocks = Object.keys(STOCK).filter((s) => s !== 'Practice' && trades.findIndex((trade) => trade.stock === s) === -1);
      selectStock(stocks[Math.floor(Math.random() * stocks.length)]);
    }
    if (current >= 3) {
      return handleStart(stock);
    }
    current < STEPS.length - 1 && setCurrent(current + 1);
    toggleIsRunning(false);
  };

  const prev = () => {
    current > 0 && setCurrent(current - 1);
  };

  return (
    <div id="preparation">
      <Steps current={current}>
        {
          STEPS.map((item) => (
            <Steps.Step key={item} title={item} />
          ))
        }
      </Steps>
      {
        (() => {
          if (current === 0) {
            return (
              <Result
                title={`第${trades.length + 1}轮实验即将开始`}
                subTitle="如果您已准备就绪，请点击开始！"
                extra={[
                <Button key="countdown" type="primary" disabled={isRunning} onClick={next}>{isRunning ? `建议休息${count}秒后开始` : '开始'}</Button>,
                isRunning && <Button key="start" type="link" onClick={next}>准备就绪，立即开始</Button>
              ]}
              />
            );
          }

          if (current === 1 || current === 2) {
            return (
              <div id="step">
                <Row justify="space-around">
                  {
                    Object.entries(STOCK).slice(0, -1).map(([key, title]) => {
                      const unselected = trades.findIndex((trade) => trade.stock === key) === -1;
                      return (
                        <Col key={key} span={4}>
                          <Card
                            hoverable
                            cover={<img alt="Thumbnail" src={Thumbnail} />}
                            onClick={() => current === 1 && groupID !== 10 && unselected && selectStock(key)}
                          >
                            <Radio
                              checked={stock === key}
                              disabled={current === 2 || !unselected || groupID === 10}
                            >{`${title}股票`}</Radio>
                          </Card>
                        </Col>
                      );
                    })
                  }
                </Row>
                <div className="introduce">
                  {
                    current === 1 ? (
                      groupID === 10 ?
                        <Typography>
                          <Typography.Paragraph>
                            现在进入资产分配阶段
                            <Typography.Text keyboard>Point0</Typography.Text>
                            。市场上有“甲、乙、丙、丁、戊”五只股票，这五只股票在
                            <Typography.Text keyboard>Point0</Typography.Text>
                            前期走势相似，当前股价均为
                            <Typography.Text keyboard>10</Typography.Text>
                            金币，但是后期的上涨概率可能不同。
                          </Typography.Paragraph>
                          <Typography.Paragraph>
                            您只能
                            <Typography.Text strong>选择其中一种</Typography.Text>
                            进行交易，并且必须在
                            <Typography.Text keyboard>Point0</Typography.Text>
                            <Typography.Text strong>购买
                            <Typography.Text keyboard>300</Typography.Text>
                            股</Typography.Text>
                            后，才能进入交易市场进行交易。
                          </Typography.Paragraph>
                          <Typography.Paragraph>
                            在本轮交易中，在
                            <Typography.Text keyboard>Point0</Typography.Text>
                            <b>将由投资顾问先帮您选择并买入</b>
                            <Typography.Text keyboard>300</Typography.Text>
                            股原始股，买入后，其他股票交易决策将由您本人独立作出。
                          </Typography.Paragraph>
                          <Typography.Paragraph>
                            <Typography.Text strong>
                              您现在拥有
                              <Typography.Text keyboard>5000</Typography.Text>
                              个虚拟金币作为投资本金。
                            </Typography.Text>
                          </Typography.Paragraph>
                        </Typography> : (
                          groupID === 20 ?
                            <Typography>
                              <Typography.Paragraph>
                                现在进入资产分配阶段
                                <Typography.Text keyboard>Point0</Typography.Text>
                                。市场上有“甲、乙、丙、丁、戊”五只股票，这五只股票在
                                <Typography.Text keyboard>Point0</Typography.Text>
                                前期走势相似，当前股价均为
                                <Typography.Text keyboard>10</Typography.Text>
                                金币，但是后期的上涨概率可能不同。
                              </Typography.Paragraph>
                              <Typography.Paragraph>
                                您只能
                                <Typography.Text strong>选择其中一种</Typography.Text>
                                进行交易，并且必须在
                                <Typography.Text keyboard>Point0</Typography.Text>
                                <Typography.Text strong>购买
                                <Typography.Text keyboard>300</Typography.Text>
                                股</Typography.Text>
                                后，才能进入交易市场进行交易。
                              </Typography.Paragraph>
                              <Typography.Paragraph>
                                您现在拥有
                                <Typography.Text keyboard>5000</Typography.Text>
                                个虚拟金币作为投资本金，<b>股票的所有交易策略
                                <Typography.Text strong>
                                  由您本人独立作出
                                </Typography.Text></b>
                                ，盈亏由您本人承担。
                              </Typography.Paragraph>
                              <Typography.Paragraph>
                                当前股价均为
                                <Typography.Text keyboard>10</Typography.Text>
                                金币，请问您选择购入
                                <Typography.Text keyboard>300</Typography.Text>
                                股的哪只股票？
                              </Typography.Paragraph>
                            </Typography> : (
                              groupID === 30 &&
                              <Typography>
                                <Typography.Paragraph>
                                  现在进入资产分配阶段
                                  <Typography.Text keyboard>Point0</Typography.Text>
                                  。
                                  <Typography.Text strong>
                                    <b>投资顾问</b>考察市场行情与该股票历史走向后，认为市场上“甲、乙、丙、丁、戊”这五只股票股票上涨概率较大，<b>建议您买入</b>。
                                  </Typography.Text>
                                </Typography.Paragraph>
                                <Typography.Paragraph>
                                  这五只股票在
                                  <Typography.Text keyboard>Point0</Typography.Text>
                                  前期走势相似，当前股价均为
                                  <Typography.Text keyboard>10</Typography.Text>
                                  金币，但是后期的上涨概率可能不同。
                                </Typography.Paragraph>
                                <Typography.Paragraph>
                                  您只能
                                  <Typography.Text strong>选择其中一种</Typography.Text>
                                  进行交易，并且必须在
                                  <Typography.Text keyboard>Point0</Typography.Text>
                                  <Typography.Text strong>购买
                                  <Typography.Text keyboard>300</Typography.Text>
                                  股</Typography.Text>
                                  后，才能进入交易市场进行交易。
                                </Typography.Paragraph>
                                <Typography.Paragraph>
                                  您现在拥有
                                  <Typography.Text keyboard>5000</Typography.Text>
                                  个虚拟金币作为投资本金，当前股价均为
                                  <Typography.Text keyboard>10</Typography.Text>
                                  金币，请您在
                                  <b><Typography.Text strong>参考投资顾问的建议</Typography.Text>
                                  后，
                                  <Typography.Text strong>自行作出投资决策</Typography.Text></b>
                                  ，盈亏由您本人承担。
                                </Typography.Paragraph>
                                <Typography.Paragraph>
                                  请问您选择购入
                                  <Typography.Text keyboard>300</Typography.Text>
                                  股的哪只股票？
                                </Typography.Paragraph>
                              </Typography>
                            )
                        )
                    ) : (
                      groupID === 10 ?
                        <Typography>
                          <Typography.Paragraph>
                            <b>投资顾问考察市场行情与该股票历史走向后，
                              帮您购入</b>
                              <Typography.Text keyboard>300</Typography.Text>
                              股{STOCK[stock]}股票
                            ，买入价为
                            <Typography.Text keyboard>10</Typography.Text>
                            金币。
                          </Typography.Paragraph>
                          <Typography.Paragraph>
                            买入后，股票的其他所有交易决策由您本人独立作出，盈亏由您本人承担。
                          </Typography.Paragraph>
                        </Typography> : (
                          groupID === 20 ?
                            <Typography>
                              <Typography.Paragraph>
                                <Typography.Text strong>
                                  <b>您自行选择购入</b>
                                  <Typography.Text keyboard>300</Typography.Text>
                                  股{STOCK[stock]}股票，买入价为
                                  <Typography.Text keyboard>10</Typography.Text>
                                  金币。
                                </Typography.Text>
                              </Typography.Paragraph>
                              <Typography.Paragraph>
                                现在，您的资产分配情况如下表：
                              </Typography.Paragraph>
                            </Typography> : (
                              groupID === 30 &&
                              <Typography>
                                <Typography.Paragraph>
                                  <Typography.Text strong>
                                    您<b>在投资顾问的建议下，自行选择购入</b>
                                    <Typography.Text keyboard>300</Typography.Text>
                                    股{STOCK[stock]}股票，买入价为
                                    <Typography.Text keyboard>10</Typography.Text>
                                    金币。
                                  </Typography.Text>
                                </Typography.Paragraph>
                                <Typography.Paragraph>
                                  现在，您的资产分配情况如下表：
                                </Typography.Paragraph>
                              </Typography>
                            )
                        )
                    )
                  }
                </div>
                {
                  current === 1 ?
                  <Descriptions bordered column={1} title="资产配置">
                    <Descriptions.Item label="当前股价">10</Descriptions.Item>
                    <Descriptions.Item label="成本">0</Descriptions.Item>
                    <Descriptions.Item label="持仓">0</Descriptions.Item>
                    <Descriptions.Item label="当前盈亏">0</Descriptions.Item>
                    <Descriptions.Item label="总盈亏">0</Descriptions.Item>
                    <Descriptions.Item label="现金余额">5000</Descriptions.Item>
                    <Descriptions.Item label="总资产">5000</Descriptions.Item>
                  </Descriptions> :
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
                }
              </div>
            );
          }

          return (
            <div id="step">
              <Typography>
                <Typography.Title level={5}>
                  接下来，进入股票交易环节。您选择的股票为{STOCK[stock]}，持有数量为
                  <Typography.Text keyboard>300</Typography.Text>
                  ，以及现金金币
                  <Typography.Text keyboard>2000</Typography.Text>
                  。接下来您还有
                  <Typography.Text keyboard>20</Typography.Text>
                  次交易的机会（
                  <Typography.Text keyboard>Point 1</Typography.Text>
                  ～
                  <Typography.Text keyboard>Point 20</Typography.Text>
                  ）。
                </Typography.Title>
                <Typography.Title level={5}>
                    点击确认进入正式交易任务。
                </Typography.Title>
              </Typography>
            </div>
          )
        })()
      }
      <Row justify="center">
        <Col span={4}>
          <Button type="primary" onClick={next}>
            {
              current < STEPS.length - 1 ? '下一步' : '确认'
            }
          </Button>
        </Col>
        <Col span={4}>
          <Button disabled={current === 0} onClick={prev}>上一步</Button>
        </Col>
      </Row>
    </div>
  );
}

export default Preparation;
