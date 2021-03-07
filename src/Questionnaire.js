import { Button, Col, Form, message, Radio, Row } from 'antd';
import React, { useState } from 'react';
import { STOCK } from './App';

const TABLE = [{
  key: '1',
  title: {
    10: '1. 在本轮任务中，对于<b>投资顾问购买</b>的300股XX股票，面对以下情况时(如果在本轮任务中，没有出现以下某种或者某些情况，请想象出现了这些情况)，您在多大程度上感受到自豪的情绪[矩阵单选题]',
    20: '1. 在本轮任务中，对于<b>您自己购买</b>的300股XX股票，面对以下情况时(如果在本轮任务中，没有出现以下某种或者某些情况，请想象出现了这些情况)，您在多大程度上感受到自豪的情绪[矩阵单选题]',
    30: '1. 在本轮任务中，对于<b>投资顾问推荐下您自己购买</b>的300股XX股票，面对以下情况时(如果在本轮任务中，没有出现以下某种或者某些情况，请想象出现了这些情况)，您在多大程度上感受到自豪的情绪[矩阵单选题]',
  },
  head: [
    '',
    '非常不自豪',
    '比较不自豪',
    '有一点不自豪',
    '不确定',
    '有一点自豪',
    '比较自豪',
    '非常自豪',
  ],
  columns: [
    '股价上涨后卖出，下一交易期股价下跌',
    '股价上涨后持仓不变/买入，下一交易期股价上涨',
    '股价下跌后持仓不变/买入，下一交易期股价上涨',
    '股价下跌后卖出，下一交易期股价下跌',
    '股价上涨后卖出，下一交易期股价上涨',
    '股价上涨后持仓不变/买入，下一交易期股价下跌',
    '股价下跌后持仓不变/买入，下一交易期股价下跌',
    '股价下跌后卖出，下一交易期股价上涨',
  ],
}, {
  key: '2',
  title: {
    10: '2. 在本轮任务中，对于<b>投资顾问购买</b>的300股XX股票，面对以下情况时 (如果在本轮任务中，没有出现以下某种或者某些情况，请想象出现了这些情况) ，您在多大程度上感受到后悔的情绪[矩阵单选题]',
    20: '2. 在本轮任务中，对于<b>您自己购买</b>的300股XX股票，面对以下情况时 (如果在本轮任务中，没有出现以下某种或者某些情况，请想象出现了这些情况) ，您在多大程度上感受到后悔的情绪[矩阵单选题]',
    30: '2. 在本轮任务中，对于<b>投资顾问推荐下您自己购买</b>的300股XX股票，面对以下情况时 (如果在本轮任务中，没有出现以下某种或者某些情况，请想象出现了这些情况) ，您在多大程度上感受到后悔的情绪[矩阵单选题]',
  },
  head: [
    '',
    '非常不后悔',
    '比较不后悔',
    '有一点不后悔',
    '不确定',
    '有一点后悔',
    '比较后悔',
    '非常后悔',
  ],
  columns: [
    '股价上涨后卖出，下一交易期股价上涨',
    '股价上涨后持仓不变/买入，下一交易期股价下跌',
    '股价下跌后持仓不变/买入，下一交易期股价下跌',
    '股价下跌后卖出，下一交易期股价上涨',
    '股价上涨后卖出，下一交易期股价下跌',
    '股价上涨后持仓不变/买入，下一交易期股价上涨',
    '股价下跌后持仓不变/买入，下一交易期股价上涨',
    '股价下跌后卖出，下一交易期股价下跌',
  ],
}];
const OPTION = [{
  key: '3',
  lowPoint: '压力非常小',
  highPoint: '压力非常大',
  10: '3. 在本轮任务中，您在卖出<b>投资顾问购买</b>的300股XX股票时有多大压力？',
  20: '3. 在本轮任务中，您在卖出最开始<b>自己选择并购买</b>的300股XX股票时有多大压力？',
  30: '3. 在本轮任务中，您在卖出<b>别人推荐下自己选择并购买</b>的300股XX股票时有多大压力？',
}, {
  key: '4',
  points: [
    { key: -3, text: '非常错误' },
    { key: -2, text: '比较错误' },
    { key: -1, text: '有点错误' },
    { key: 0, text: '说不清' },
    { key: 1, text: '有点正确' },
    { key: 2, text: '比较正确' },
    { key: 3, text: '非常正确' },
  ],
  10: '4. 在本轮任务中，当股价下跌时，你认为<b>别人帮你选择</b>XX股票这一决定是？',
  20: '4. 在本轮任务中，当股价下跌时，你认为<b>自己选择</b>XX股票这一决定是？',
  30: '4. 在本轮任务中，当股价下跌时，你认为<b>在别人推荐下自己选择</b>XX股票这一决定是？',
}];

function Questionnaire({ trades, groupID, onQuestionSubmit }) {
  const [form] = Form.useForm();
  const [tableArray, toggleTable] = useState([[], []]);
  const [optionArray, toggleOption] = useState([]);
  const changeTable = (num, index, value) => {
    if (!tableArray[num][index] || +tableArray[num][index] !== value) {
      const tempTable = tableArray.slice();
      tempTable[num][index] = value;
      toggleTable(tempTable);
    }
  };
  const changeOption = (num, value) => {
    if (!optionArray[num] || +optionArray[num] !== value) {
      const tempOption = optionArray.slice();
      tempOption[num] = value;
      toggleOption(tempOption);
    }
  };
  const checkAndSubmit = () => {
    for (let i = 0; i < tableArray.length; i += 1) {
      if (!tableArray[i].length) {
        return message.warning(`请完成第${i + 1}题！`);
      }
      if (tableArray[i].length < 8) {
        return message.warning(`第${i + 1}题第${tableArray[i].length + 1}个选项为必填项！`);
      }
      for (let j = 0; j < tableArray[i].length; j += 1) {
        if (!tableArray[i][j]) {
          return message.warning(`第${i + 1}题第${j + 1}个选项为必填项！`);
        }
      }
    }
    form.submit();
  };
  const { stock } = trades[trades.length - 1] ?? {};

  return (
    <Form
      form={form}
      id="question"
      layout="vertical"
      onFinish={() => onQuestionSubmit([...tableArray, ...optionArray])}
    >
      {
        TABLE.map((table, num) => (
          <Form.Item
            key={table.key}
            label={<span dangerouslySetInnerHTML={{ __html: table.title[groupID].replace('XX', STOCK[stock]) }} />}
            style={{ flexDirection: 'unset' }}
          >
            <Row gutter={[8, 16]} className="question-head">
              {
                table.head.map((title, index) => (
                  <Col key={index} span={index === 0 ? 10 : 2} className="question-radio">{title}</Col>
                ))
              }
            </Row>
            {
              table.columns.map((column, idx) => (
                <Row key={idx} gutter={[8, 16]} className="question-column">
                  <Col span={10}>{column}</Col>
                  {
                    Array(7).fill('').map((_, index) => (
                      <Col key={index} span={2} className="question-radio">
                        <Radio
                          value={index + 1}
                          checked={tableArray[num][idx] && +tableArray[num][idx] === index + 1}
                          onClick={() => changeTable(num, idx, index + 1)}
                        />
                      </Col>
                    ))
                  }
                </Row>
              ))
            }
          </Form.Item>
        ))
      }
      {
        OPTION.map((option, num) => (
          <Form.Item
            key={option.key}
            name={option.key}
            label={<span dangerouslySetInnerHTML={{ __html: option[groupID].replace('XX', STOCK[stock]) }} />}
            style={{ flexDirection: 'unset' }}
            rules={[
              { required: true, message: '该项为必选项' }
            ]}
          >
            <Row gutter={[8, 16]} wrap={false}>
              {
                (option.lowPoint && option.highPoint) ?
                <>
                  <Col span={3}>{option.lowPoint}</Col>
                  {
                    Array(7).fill('').map((_, index) => (
                      <Col key={index} span={3} className="question-radio">
                        <Radio
                          value={index + 1}
                          checked={optionArray[num] && +optionArray[num] === index + 1}
                          onClick={() => changeOption(num, index + 1)}
                        >{index + 1}</Radio>
                      </Col>
                    ))
                  }
                  <Col span={3}>{option.highPoint}</Col>
                </> :
                (
                  option.points && option.points.map((point, index) => (
                    <Col key={index} span={4} className="question-radio">
                      <Radio
                        value={point.key}
                        checked={optionArray[num] !== undefined && +optionArray[num] === point.key}
                        onClick={() => changeOption(num, point.key)}
                      >{`${point.key} ${point.text}`}</Radio>
                    </Col>
                  ))
                )
              }
            </Row>
          </Form.Item>
        ))
      }
      <Form.Item>
        <Button
          type="primary"
          onClick={checkAndSubmit}
        >确定</Button>
      </Form.Item>
    </Form>
  );
}

export default Questionnaire;
