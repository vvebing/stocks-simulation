import { Button, Layout, Result, Space, Steps, Typography } from 'antd';
import React, { useState } from 'react';
import { STOCK } from './App';

const STEPS = [
  '准备',
  '说明',
  '选股',
  '确认',
];

function Preparation({ trades, groupID, handleStart }) {
  const [stock] = useState();
  const [current, setCurrent] = useState(0);
  const next = () => {
    current < STEPS.length - 1 && setCurrent(current + 1);
  };
  const prev = () => {
    current > 0 && setCurrent(current - 1);
  }

  return (
    <div id="preparation">
      <Steps>
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
                extra={<Button type="primary" onClick={next}>开始</Button>}
              />
            );
          }

          if (current === 1 || current === 2) {
            return (
              <Layout>
                <Layout.Content></Layout.Content>
                <Layout.Sider></Layout.Sider>
              </Layout>
            );
          }

          return (
            <Typography>
              <Typography.Paragraph>
                接下来，进入股票交易环节。您选择的股票为
                <Typography.Text strong>{STOCK[stock]}</Typography.Text>
                ，持有数量为
                <Typography.Text strong>300</Typography.Text>
                ，以及现金金币
                <Typography.Text strong>2000</Typography.Text>
                接下来您还有
                <Typography.Text strong>20</Typography.Text>
                次交易的机会（
                <Typography.Text keyboard>Point 1</Typography.Text>
                ～
                <Typography.Text keyboard>Point 20</Typography.Text>
                ），股票的价格变化是
                <Typography.Text strong>随机</Typography.Text>
                的。
              </Typography.Paragraph>
              <Typography.Paragraph>
                点击确认进入正式交易任务。
              </Typography.Paragraph>
            </Typography>
          )
        })()
      }
      <Space>
        {
          current < STEPS.length - 1 ? (
            <Button type="primary" onClick={next}>下一步</Button>
          ) : (
            <Button type="primary">确认</Button>
          )
        }
        {
          current > 0 && current < STEPS.length - 1 && (
            <Button onClick={prev}>上一步</Button>
          )
        }
      </Space>
    </div>
  );
}

export default Preparation;
