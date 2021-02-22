import { Button, Checkbox, Modal, Space, Typography } from 'antd';
import React, { useState } from 'react';

const { Title, Paragraph, Text, Link } = Typography;

function Notice({ visible, noticed, onCancel }) {
  const [disabled, toggleDisabled] = useState(!noticed);
  const [checked, onChange] = useState(noticed);

  const toggleChecked = (e) => {
    onChange(e.target.checked);
  }

  const handleScroll = (e) => {
    if (disabled) {
      const { scrollHeight, scrollTop, clientHeight } = e.target;
      scrollHeight - (scrollTop + clientHeight) <= 24 && toggleDisabled(false);
    }
  }

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
            disabled={disabled || !checked}
            onClick={onCancel}
          >确定</Button>
        </Space>
      }
      onCancel={onCancel}
    >
      <div id="notice" onScroll={handleScroll}>
        <Typography>
          <Title level={3}>您好！欢迎参加实验！</Title>
          <Paragraph>请在正式进入实验前仔细阅读并理解指导语。</Paragraph>
          <Paragraph>本次实验任务是一个简化的模拟股票交易任务。</Paragraph>
          <Paragraph>
            模拟股票交易任务最终的
            <Text strong>投资收益</Text>
            将会与您的
            <Text strong>实验报酬</Text>
            有关。
          </Paragraph>
          <Paragraph>
            在实验过程中，如有任何与实验规则有关的问题或意外状况，
            <Text strong>请举手告知工作人员</Text>
            。
          </Paragraph>
          <Paragraph>
            您一共会进行
            <Text strong>5轮</Text>
            模拟股票交易任务，每一轮有
            <Text strong>21个交易期</Text>
            。在每一个交易期，屏幕首先会显示：
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
                  即您当前所持有的股票份额所产生的浮动盈亏
                </Space>
              </li>
              <li>
                <Space>
                  <Text strong>总盈亏</Text>
                  累计盈亏，即当前盈亏 + 前期卖出部分的盈亏
                  <Link>例子</Link>
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
            <Text keyboard>继续持有</Text>
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
              <li>现金余额不得亏损，不能借钱。</li>
              <li>股票的交易不会产生交易费用。</li>
            </ol>
          </Paragraph>
        </Typography>
      </div>
    </Modal>
  );
}

export default Notice;
