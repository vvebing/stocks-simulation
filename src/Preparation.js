import { Button, Card, Col, Descriptions, message, Radio, Result, Row, Steps, Typography } from 'antd';
import React, { useState } from 'react';
import { SELECTS, useInterval } from './App';

const STEPS = [
  '准备',
  '说明',
  '选股',
  '确认',
];

function Preparation({ trades, groupID, handleStart }) {
  const [select, selectStock] = useState();
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
    if (current >= 1 && select === undefined) {
      if (groupID !== 10) {
        current !== 1 && setCurrent(1);
        return message.warning('请选择一支股票');
      }
      const selects = [];
      SELECTS.forEach((_, index) => {
        if (trades.findIndex((trade) => +trade.select === index) === -1) {
          selects.push(index);
        }
      });
      selectStock(selects[Math.floor(Math.random() * selects.length)]);
    }
    if (current >= 3) {
      return handleStart(select);
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
                    SELECTS.map((item, index) => {
                      const unselected = trades.findIndex((trade) => trade.select === index) === -1;
                      return (
                        <Col key={index} span={3}>
                          <Card
                            hoverable
                            title={`${item}股票`}
                            onClick={() => current === 1 && groupID !== 10 && unselected && selectStock(index)}
                          >
                            <Radio
                              checked={select === index}
                              disabled={current === 2 || !unselected || groupID === 10}
                            />
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
                            。市场上有“甲、乙、丙、丁、戊、己、庚、辛”八只股票，这八只股票当前股价均为
                            <Typography.Text keyboard>10</Typography.Text>
                            金币，但是后期的上涨概率可能不同。
                          </Typography.Paragraph>
                          <Typography.Paragraph>
                            您将进行五轮交易，每轮只对一支股票进行买卖，并且必须在
                            <Typography.Text keyboard>Point0</Typography.Text>
                            通过自己购买或者接受他人赠送得到
                            <Typography.Text keyboard>300</Typography.Text>
                            股股票后，才能进入交易市场进行交易。
                          </Typography.Paragraph>
                          <Typography.Paragraph>
                            您现在拥有
                            <Typography.Text keyboard>2000</Typography.Text>
                            金币的现金。另外，投资顾问您选择一支股票，并<b>赠送</b>
                            <Typography.Text keyboard>300</Typography.Text>
                            股该股票给您。
                          </Typography.Paragraph>
                        </Typography> : (
                          groupID === 20 ?
                            <Typography>
                              <Typography.Paragraph>
                                现在进入资产分配阶段
                                <Typography.Text keyboard>Point0</Typography.Text>
                                。市场上有“甲、乙、丙、丁、戊、己、庚、辛”八只股票，这八只股票当前股价均为
                                <Typography.Text keyboard>10</Typography.Text>
                                金币，但是后期的上涨概率可能不同。
                              </Typography.Paragraph>
                              <Typography.Paragraph>
                                您将进行五轮交易，每轮只对一支股票进行买卖，并且必须在
                                <Typography.Text keyboard>Point0</Typography.Text>
                                通过自己购买或者接受他人赠送得到
                                <Typography.Text keyboard>300</Typography.Text>
                                股股票后，才能进入交易市场进行交易。
                              </Typography.Paragraph>
                              <Typography.Paragraph>
                                您现在拥有
                                <Typography.Text keyboard>5000</Typography.Text>
                                金币的现金作为本金。股票的所有交易都由您本人独立作出，盈亏由您本人承担，现在您需要<b>自己选择</b>一支股票并买入
                                <Typography.Text keyboard>300</Typography.Text>
                                股。
                              </Typography.Paragraph>
                              <Typography.Paragraph>请问您选择购入哪支股票？</Typography.Paragraph>
                            </Typography> : (
                              groupID === 30 &&
                              <Typography>
                                <Typography.Paragraph>
                                  现在进入资产分配阶段
                                  <Typography.Text keyboard>Point0</Typography.Text>
                                  。市场上有“甲、乙、丙、丁、戊、己、庚、辛”八只股票，这八只股票当前股价均为
                                  <Typography.Text keyboard>10</Typography.Text>
                                  金币，但是后期的上涨概率可能不同。
                                </Typography.Paragraph>
                                <Typography.Paragraph>
                                  您将进行五轮交易，每轮只对一支股票进行买卖，并且必须在
                                  <Typography.Text keyboard>Point0</Typography.Text>
                                  通过自己购买或者接受他人赠送得到
                                  <Typography.Text keyboard>300</Typography.Text>
                                  股股票后，才能进入交易市场进行交易。
                                </Typography.Paragraph>
                                <Typography.Paragraph>
                                  您现在拥有
                                  <Typography.Text keyboard>5000</Typography.Text>
                                  金币的现金作为本金。投资顾问考察市场行情与股票历史走向后，认为在这八支股票中，“甲、乙、丙、丁、戊”的上涨概率较大，推荐您买入。现在您需要选择一支股票并买入
                                  <Typography.Text keyboard>300</Typography.Text>
                                  股，请您在
                                  <b>参考投资顾问的建议后自行作出选择</b>
                                  。
                                </Typography.Paragraph>
                                <Typography.Paragraph>请问您选择购入哪支股票？</Typography.Paragraph>
                              </Typography>
                            )
                        )
                    ) : (
                      groupID === 10 ?
                        <Typography>
                          <Typography.Paragraph>
                            投资顾问选择了{SELECTS[select]}股票，并
                            <b>
                              赠送您
                              <Typography.Text keyboard>300</Typography.Text>
                              股{SELECTS[select]}股票
                            </b>
                            ，即目前您拥有价值
                            <Typography.Text keyboard>5000</Typography.Text>
                            金币的总资产（现金：2000，股票：300 × 10 = 3000）。
                          </Typography.Paragraph>
                          <Typography.Paragraph>
                            后续股票的所有交易决策都由您本人独立作出，盈亏由您本人承担。
                          </Typography.Paragraph>
                        </Typography> : (
                          groupID === 20 ?
                            <Typography>
                              <Typography.Paragraph>
                                <b>
                                  您自行选择并购入了
                                  <Typography.Text keyboard>300</Typography.Text>
                                  股{SELECTS[select]}股票
                                </b>
                                ，即目前您拥有价值
                                <Typography.Text keyboard>5000</Typography.Text>
                                金币的总资产（现金：2000，股票：300 × 10 = 3000）。
                              </Typography.Paragraph>
                            </Typography> : (
                              groupID === 30 &&
                              <Typography>
                                <Typography.Paragraph>
                                  <b>
                                    您在投资顾问的建议下，选择并购入了
                                    <Typography.Text keyboard>300</Typography.Text>
                                    股{SELECTS[select]}股票
                                  </b>
                                  ，即目前您拥有价值
                                  <Typography.Text keyboard>5000</Typography.Text>
                                  金币的总资产（现金：2000，股票：300 × 10 = 3000）。
                                </Typography.Paragraph>
                                <Typography.Paragraph>
                                  后续股票的所有交易决策都由您本人独立作出，盈亏由您本人承担。
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
                    <Descriptions.Item label="现金余额">{groupID === 10 ? 2000 : 5000}</Descriptions.Item>
                    <Descriptions.Item label="总资产">{groupID === 10 ? 2000 : 5000}</Descriptions.Item>
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
                  接下来，进入股票交易环节。您持有的股票为{SELECTS[select]}，持有数量为
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
