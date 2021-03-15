import { Button, Col, Form, message, Radio, Row } from 'antd';
import React, { useState } from 'react';

const OPTION = [{
  key: '1',
  lowPoint: '完全不怀疑',
  highPoint: '完全怀疑',
  10: '1. 交易前您的朋友选择了他认为上涨概率大的股票赠送给您，但当股票呈现下跌趋势时，你是否会怀疑他作出的这一选择的正确性？[单选题]',
  20: '1. 交易前您选择买入了您认为上涨概率大的股票，但当股票呈现下跌趋势时，你是否会怀疑自己这一选择的正确性？[单选题]',
  30: '1. 交易前您的朋友推荐给您他认为上涨概率大的几只股票，您参考了他的意见并自行买入了一只股票，但当股票呈现下跌趋势时，你是否会怀疑自己在他人推荐下自己作出的这一选择的正确性？[单选题]',
}, {
  key: '2',
  lowPoint: '完全没有意愿',
  highPoint: '完全有意愿',
  10: '2. 当股价呈现下跌趋势时，您有多大意愿卖出别人赠送给您的这300股股票？[单选题]',
  20: '2. 当股价呈现下跌趋势时，您有多大意愿卖出自己最初选择买入的300股股票？[单选题]',
  30: '2. 当股价呈现下跌趋势时，您有多大意愿卖出自己在别人推荐下选择并买入的300股股票？[单选题]',
}];
const TABLE = [{
  key: '3',
  title: {
    10: '3. 请回忆您在交易朋友赠送的300股初始股票过程中，当面对如下状况时，您在多大程度上感受到自豪的情绪？（若没有遇到此类情况，请想象您会如何选择）[矩阵单选题]',
    20: '3. 请回忆您在交易自己购买的300股初始股票过程中，当面对如下状况时，您在多大程度上感受到自豪的情绪？（若没有遇到此类情况，请想象您会如何选择）[矩阵单选题]',
    30: '3. 请回忆您在交易在朋友推荐下自己购买的300股初始股票过程中，当面对如下状况时，您在多大程度上感受到自豪的情绪？（若没有遇到此类情况，请想象您会如何选择）[矩阵单选题]',
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
  key: '4',
  title: {
    10: '4. 请回忆您在交易朋友赠送的300股初始股票过程中，当面对如下状况时，您在多大程度上感受到后悔的情绪？（若没有遇到此类情况，请想象您会如何选择）[矩阵单选题]',
    20: '4. 请回忆您在交易自己购买的300股初始股票过程中，当面对如下状况时，您在多大程度上感受到后悔的情绪？（若没有遇到此类情况，请想象您会如何选择）[矩阵单选题]',
    30: '4. 请回忆您在交易在朋友推荐下自己购买的300股初始股票过程中，当面对如下状况时，您在多大程度上感受到后悔的情绪？（若没有遇到此类情况，请想象您会如何选择）[矩阵单选题]',
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

function Questionnaire({ groupID, onQuestionSubmit }) {
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
        return message.warning(`请完成第${i + 3}题！`);
      }
      if (tableArray[i].length < 8) {
        return message.warning(`第${i + 3}题第${tableArray[i].length + 1}个选项为必填项！`);
      }
      for (let j = 0; j < tableArray[i].length; j += 1) {
        if (!tableArray[i][j]) {
          return message.warning(`第${i + 3}题第${j + 1}个选项为必填项！`);
        }
      }
    }
    form.submit();
  };

  return (
    <Form
      form={form}
      id="question"
      layout="vertical"
      onFinish={() => onQuestionSubmit([...optionArray, ...tableArray])}
    >
      {
        OPTION.map((option, num) => (
          <Form.Item
            key={option.key}
            name={option.key}
            label={<span dangerouslySetInnerHTML={{ __html: option[groupID] }} />}
            style={{ flexDirection: 'unset' }}
            rules={[
              { required: true, message: '该项为必选项' }
            ]}
          >
            <Row gutter={[8, 16]} wrap={false}>
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
            </Row>
          </Form.Item>
        ))
      }
      {
        TABLE.map((table, num) => (
          <Form.Item
            key={table.key}
            label={<span dangerouslySetInnerHTML={{ __html: table.title[groupID] }} />}
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
