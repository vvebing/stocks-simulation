import { Button, Col, Form, InputNumber, Radio, Row, Slider, Space } from 'antd';
import React, { useState } from 'react';

const QUESTION = [
  {
    key: '3',
    lowPoint: '非常不失望',
    highPoint: '非常失望',
    label: '4. 在本轮任务中，您对自己的错误决策感到[单选题]',
  },
  {
    key: '4',
    lowPoint: '非常不后悔',
    highPoint: '非常后悔',
    label: '5. 在本轮任务中，您对自己的错误决策感到[单选题]',
  },
  {
    key: '5',
    lowPoint: '非常不满意',
    highPoint: '非常满意',
    label: '6. 在本轮任务中，您对自己的正确决策感到[单选题]',
  },
  {
    key: '6',
    lowPoint: '非常不自豪',
    highPoint: '非常自豪',
    label: '7. 在本轮任务中，您对自己的正确决策感到[单选题]',
  },
  {
    key: '7',
    lowPoint: '完全没有责任',
    highPoint: '负有完全责任',
    label: '8. 在本轮任务中，如果作出了错误决策，您认为您对错误的交易决策负有多大的责任？[单选题]',
  },
  {
    key: '8',
    lowPoint: '压力非常小',
    highPoint: '压力非常大',
    label: '9. 在本轮任务中，您在做决定时承担了多大的决策压力？[单选题]',
  },
];

function Questionnaire({ onQuestionSubmit }) {
  const [wrong, toggleWrong] = useState();
  const [right, toggleRight] = useState();
  const [wrongDec, changeWrongDec] = useState(100);

  // const [form] = Form.useForm();
  // const onReset = () => {
  //   form.resetFields();
  // };

  const onDecChange = (value) => {
    if (!Number.isNaN(parseInt(value, 10))) {
      changeWrongDec(parseInt(value, 10));
    } else {
      changeWrongDec(0);
    }
  };

  const onRightDecChange = (value) => {
    if (!Number.isNaN(parseInt(value, 10))) {
      changeWrongDec(100 - parseInt(value, 10));
    } else {
      changeWrongDec(100);
    }
  };

  return (
    <Form
      // form={form}
      layout="vertical"
      style={{ height: '932px' }}
      onFinish={(data) => onQuestionSubmit({...data, '2': wrongDec})}
    >
      <Form.Item
        label="1. 请问您在本轮实验中，是否有做过错误的决策？[单选题]"
        name="0"
        rules={[{ required: true, message: '该项为必填项' }]}
      >
        <Space>
          <Radio.Group value={wrong} onChange={(e) => {toggleWrong(e.target.value)}}>
            <Radio value={1}>有</Radio>
            <Radio value={0}>没有</Radio>
          </Radio.Group>
        </Space>
      </Form.Item>
      <Form.Item
        label="2. 请问您在本轮实验中，是否有做过正确的决策？[单选题]"
        name="1"
        rules={[{ required: true, message: '该项为必填项' }]}
      >
        <Space>
          <Radio.Group value={right} onChange={(e) => {toggleRight(e.target.value)}}>
            <Radio value={1}>有</Radio>
            <Radio value={0}>没有</Radio>
          </Radio.Group>
        </Space>
      </Form.Item>
      <Form.Item
        label="3. 请拖动滑动条输入您认为在本轮任务中，您作出的错误决策与正确决策的比例。[比重题]"
      >
        <Row style={{ alignItems: 'center' }}>
          <Col span={2}>错误决策</Col>
          <Col span={12} style={{ margin: '0 20px' }}>
            <Slider
              min={0}
              max={100}
              marks={{
                0: 0,
                20: 20,
                40: 40,
                60: 60,
                80: 80,
                100: 100,
              }}
              value={wrongDec}
              onChange={onDecChange}
            />
          </Col>
          <Col span={4}>
            <InputNumber min={0} max={100} value={wrongDec} onChange={onDecChange} />
          </Col>
        </Row>
      </Form.Item>
      <Row style={{ margin: '-60px 0 24px', alignItems: 'center' }}>
        <Col span={2}>正确决策</Col>
        <Col span={12} style={{ margin: '0 20px' }}>
          <Slider
            min={0}
            max={100}
            value={100 - wrongDec}
            marks={{
              0: 0,
              20: 20,
              40: 40,
              60: 60,
              80: 80,
              100: 100,
            }}
            onChange={onRightDecChange}
          />
        </Col>
        <Col span={4}>
          <InputNumber min={0} max={100} value={100 - wrongDec} onChange={onRightDecChange} />
        </Col>
      </Row>
      {
        QUESTION.map(({
          key,
          lowPoint,
          highPoint,
          label,
        }, index) => {
          if ((wrong === undefined || +wrong === 0) && (index === 0 || index === 1)) return null;
          if ((right === undefined || +right === 0) && (index === 2 || index === 3)) return null;

          return (
            <Form.Item
              key={key}
              label={label}
              name={key}
              rules={[{ required: true, message: '该项为必填项' }]}
            >
              <Space>
                <span>{lowPoint}</span>
                <Radio.Group>
                  {
                    Array(7).fill('').map((_, index) => (
                      <Radio key={index} value={index + 1}>{index + 1}</Radio>
                    ))
                  }
                </Radio.Group>
                <span>{highPoint}</span>
              </Space>
            </Form.Item>
          );
        })
      }
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            确定
          </Button>
          {/* <Button htmlType="reset" onClick={onReset}>
            重置
          </Button> */}
        </Space>
      </Form.Item>
    </Form>
  );
}

export default Questionnaire;
