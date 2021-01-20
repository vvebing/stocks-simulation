import { Button, Form, Radio, Space } from 'antd';
import React from 'react';

const QUESTION = [
  {
    key: '0',
    lowPoint: '非常不满意',
    highPoint: '非常满意',
    label: '1. 在本轮任务中，您对所持有股票的股价变动结果感到',
  },
  {
    key: '1',
    lowPoint: '非常不失望',
    highPoint: '非常失望',
    label: '2. 在本轮任务中，您对所持有股票的股价变动结果感到',
  },
  {
    key: '2',
    lowPoint: '非常不后悔',
    highPoint: '非常后悔',
    label: '3. 在本轮任务中，您认为股票的交易决策让您',
  },
  {
    key: '3',
    lowPoint: '非常不自豪',
    highPoint: '非常自豪',
    label: '4. 在本轮任务中，您认为股票的交易决策让您',
  },
  {
    key: '4',
    lowPoint: '完全没有责任',
    highPoint: '负有完全责任',
    label: '5. 在本轮任务中，您认为您对股票的交易决策负有多大的决策责任',
  },
];

function Questionnaire({ onQuestionSubmit }) {
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onQuestionSubmit}
    >
      {
        QUESTION.map(({
          key,
          lowPoint,
          highPoint,
          label,
        }) => (
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
                    <Radio key={index} value={index}>{index}</Radio>
                  ))
                }
              </Radio.Group>
              <span>{highPoint}</span>
            </Space>
          </Form.Item>
        ))
      }
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            确定
          </Button>
          <Button htmlType="reset" onClick={onReset}>
            重置
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
}

export default Questionnaire;
