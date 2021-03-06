import { Button, Checkbox, message, Modal, Space, Timeline, Typography } from 'antd';
import React, { useState } from 'react';
import { useInterval } from './App';

const { Title, Paragraph, Text } = Typography;

function Notice({ visible, noticed, onCancel }) {
  const [disabled, toggleDisabled] = useState(!noticed);
  const [checked, onChange] = useState(noticed);
  const [count, setCount] = useState(45);
  const [isRunning, toggleIsRunning] = useState(!noticed);
  const [showExample, toggleShowExample] = useState(noticed);

  useInterval(() => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      toggleIsRunning(false);
    }
  }, isRunning ? 1000 : null);

  const toggleChecked = (e) => {
    onChange(e.target.checked);
  }

  const handleScroll = (e) => {
    if (disabled) {
      const { scrollHeight, scrollTop, clientHeight } = e.target;
      scrollHeight - (scrollTop + clientHeight) <= 24 && toggleDisabled(false);
    }
  }

  const openEgModal = () => {
    Modal.info({
      width: 650,
      centered: true,
      okText: '明白了',
      title: '当前盈亏与总盈亏计算例子',
      content: (
        <Timeline mode="left">
          <Timeline.Item label="第一个交易期">股价：10 金币</Timeline.Item>
          <Timeline.Item color="green">买入 100 股</Timeline.Item>
          <Timeline.Item label="第二个交易期">股价：5 金币</Timeline.Item>
          <Timeline.Item>
            <p>当前盈亏：(5 - 10) × 100 = -500</p>
            <p>总盈亏：(5 - 10) × 100 = -500</p>
          </Timeline.Item>
          <Timeline.Item color="red">卖出 50 股</Timeline.Item>
          <Timeline.Item>
            <p>当前持仓：100 - 50 = 50</p>
            <p>当前盈亏：(5 - 10) × 50 = -250</p>
            <p>总盈亏：(5 - 10) × 50 = -250</p>
          </Timeline.Item>
          <Timeline.Item label="第三个交易期">股价：15 金币</Timeline.Item>
          <Timeline.Item>
            <p>当前盈亏：(15 - 10) × 50 = 250</p>
            <p>总盈亏：-250 + 250 = 0</p>
          </Timeline.Item>
          <Timeline.Item color="red">卖出 50 股</Timeline.Item>
          <Timeline.Item>
            <p>当前持仓：0</p>
            <p>当前盈亏：0</p>
            <p>总盈亏：(15 - 10) × 50 + (-250) = 0</p>
          </Timeline.Item>
        </Timeline>
      ),
    });
    toggleShowExample(true);
  }

  const closeModal = () => {
    if (!showExample) {
      message.warning('请查看盈亏例子后再进行下一步！');
    } else {
      onCancel();
    }
  };

  return (
    <Modal
      title="实验须知"
      centered
      width="75%"
      closable={noticed}
      keyboard={noticed}
      maskClosable={noticed}
      visible={visible}
      getContainer={() => document.getElementById('app')}
      footer={
        <Space>
          {
          !noticed &&
            <Checkbox
              key="checkbox"
              checked={checked}
              onChange={toggleChecked}
            >我已详细阅读须知</Checkbox>
          }
          <Button
            key="button"
            type="primary"
            onClick={closeModal}
            disabled={disabled || !checked || isRunning}
          >{isRunning ? `${count}秒` : '确定'}</Button>
        </Space>
      }
      onCancel={closeModal}
    >
      <div id="notice" onScroll={handleScroll}>
        <Typography>
          <Title level={3}>您好！欢迎参加实验！</Title>
          <Paragraph>请在正式进入实验前仔细阅读并理解指导语。</Paragraph>
          <Paragraph>本次实验任务是一个股票交易任务。</Paragraph>
          <Paragraph>
            模拟股票交易任务最终的
            <Text strong>投资收益</Text>
            将会与您的
            <Text strong>实验报酬</Text>
            挂钩。
          </Paragraph>
          <Paragraph>
            在实验过程中，如有任何与实验规则有关的问题或意外状况，
            <Text strong>请举手告知工作人员</Text>
            。
          </Paragraph>
          <Paragraph>
            您一共会进行
            <Text strong>若干轮</Text>
            模拟股票交易任务，每一轮交易都是独立的、每一轮有若干个交易期。在每一个交易期，屏幕首先会显示：
          </Paragraph>
          <Paragraph>
            <ul>
              <li>
                <Text strong>当前股票价格</Text>
              </li>
              <li>
                <Space>
                  <Text strong>成本</Text>
                  即您的加权平均买入价
                </Space>
              </li>
              <li>
                <Space>
                  <Text strong>持仓</Text>
                  即您当前持有的该股票的数量
                </Space>
              </li>
              <li>
                <Space>
                  <Text strong>当前盈亏</Text>
                  即您当前所持有的股票份额所产生的盈亏
                </Space>
              </li>
              <li>
                <Space>
                  <Text strong>总盈亏</Text>
                  累计盈亏，即当前盈亏 + 已兑现的盈亏
                  <Button
                    type="link"
                    onClick={openEgModal}
                  >例子</Button>
                </Space>
              </li>
              <li>
                <Space>
                  <Text strong>现金余额</Text>
                  当前可用于购买股票的金币数量
                </Space>
              </li>
            </ul>
          </Paragraph>
          <Paragraph>
            接着，请您作出投资决策，决定在该交易期
            <Text keyboard>买入</Text>
            、
            <Text keyboard>卖出</Text>
            或
            <Text keyboard>持仓不变</Text>
            （既不买入也不卖出）该股票，并
            <Text strong>选择对应操作的股票数量</Text>
            。
          </Paragraph>
          <Paragraph>
            然后，屏幕会显示您在本轮交易后的当前股价、成本、持仓、当前盈亏、总盈亏、
            <Text strong>股票总市值</Text>
            （当前持有股票份额的现金价值）、现金余额。该交易期结束后，会进入下一个交易期。
          </Paragraph>
          <Title level={3}>需要注意的是：</Title>
          <Paragraph>
            <ol>
              <li>
                可以在
                <Text keyboard>Point 0</Text>
                ～
                <Text keyboard>Point 20</Text>
                进行股票交易，若在
                <Text keyboard>Point 20</Text>
                前清仓将股票全部卖出，任务
                <Text strong>不会提前结束</Text>
                ，您可以继续观看后续时期的股价变化，并再次进行交易。
              </li>
              <li>
                只能
                <Text>整股交易</Text>
                ，除了在
                <Text keyboard>Point 0</Text>
                对交易数量有规定外，其他时期
                <Text strong>不限制交易数量</Text>
                。
              </li>
              <li>不能进行空头交易（卖出股票的数量多于目前所持有的股票份额）。</li>
              <li>现金余额不得为负，不能借钱。</li>
              <li>股票的交易不会产生交易费用。</li>
            </ol>
          </Paragraph>
        </Typography>
      </div>
    </Modal>
  );
}

export default Notice;
