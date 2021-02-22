import { Button, Descriptions, Form, Radio } from 'antd';
import React, { useState } from 'react';

const ANSWER = [{
  key: 'B',
  tips: '正确答案：B: (5 - 10) × 50 = -250',
}, {
  key: 'D',
  tips: '正确答案：D: (10×50+5×50) / (50 + 50) = 7.5',
}, {
  key: 'C',
  tips: '正确答案：C: (5.5 - 7.5) × 100 = -200',
}, {
  key: 'C',
  tips: '正确答案：C: (5.5 - 7.5) × 100 = -200',
}, {
  key: 'A',
  tips: '正确答案：A: (9.5 - 7.5) × 50 = 100',
}, {
  key: 'D',
  tips: '正确答案：D: (5.5 - 7.5) × 50 + (9.5 - 7.5) × 50 = 0 (上一轮卖出部分的盈亏 ＋ 此轮当前盈亏)',
}];

function PracticeTest({ handlePracticeNext }) {
  const [form] = Form.useForm();
  const [helps, changeHelps] = useState([]);
  const handleChange = (changedValues) => {
    for (const [index, value] of Object.entries(changedValues)) {
      const nextHelps = helps.slice();
      nextHelps[index] = value === ANSWER[index].key ? ANSWER[index].tips : '';
      changeHelps(nextHelps);
    }
  };

  return (
    <Form
      form={form}
      id="practiceTest"
      layout="vertical"
      onValuesChange={handleChange}
      onFinish={(values) => handlePracticeNext({test: Array.from({ length: 6, ...values })})}
    >
      <h3>接下来进入练习环节的测验部分。请仔细阅读题目并选择正确的选项。</h3>
      <p>1. </p>
      <Descriptions bordered column={1}>
        <Descriptions.Item label="Point 1"></Descriptions.Item>
        <Descriptions.Item label="成本">10</Descriptions.Item>
        <Descriptions.Item label="股价">5</Descriptions.Item>
        <Descriptions.Item label="持仓">50</Descriptions.Item>
        <Descriptions.Item label="当前盈亏">？</Descriptions.Item>
        <Descriptions.Item label="总盈亏">-250</Descriptions.Item>
        <Descriptions.Item label="现金余额">500</Descriptions.Item>
      </Descriptions>
      <Form.Item
        label="这是某投资者在 Point1 的账户信息，前期并无卖出操作，请问当前盈亏为多少？[单选题]"
        name="0"
        rules={[
          { required: true, message: '该选项为必选题' },
          { type: 'enum', enum: ['B'], message: ANSWER[0].tips },
        ]}
        {...(helps[0] ? {help: helps[0]} : '')}
      >
        <Radio.Group>
          <Radio value="A">A. 0</Radio>
          <Radio value="B">B. -250</Radio>
          <Radio value="C">C. 250</Radio>
          <Radio value="D">D. -5</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="2. 接上题，在 Point 1 以 5 金币的价格买入 50 股，则交易后的加权平均成本为：[单选题]"
        name="1"
        rules={[
          { required: true, message: '该选项为必选题' },
          { type: 'enum', enum: ['D'], message: ANSWER[1].tips },
        ]}
        {...(helps[1] ? {help: helps[1]} : '')}
      >
        <Radio.Group>
          <Radio value="A">A. 10</Radio>
          <Radio value="B">B. 5</Radio>
          <Radio value="C">C. 15</Radio>
          <Radio value="D">D. 7.5</Radio>
        </Radio.Group>
      </Form.Item>
      <p>3. 接上题，</p>
      <Descriptions bordered column={1}>
        <Descriptions.Item label="Point 2"></Descriptions.Item>
        <Descriptions.Item label="成本">7.5</Descriptions.Item>
        <Descriptions.Item label="股价">5.5</Descriptions.Item>
        <Descriptions.Item label="持仓">100</Descriptions.Item>
        <Descriptions.Item label="当前盈亏">？</Descriptions.Item>
        <Descriptions.Item label="总盈亏">？</Descriptions.Item>
        <Descriptions.Item label="现金余额">0</Descriptions.Item>
      </Descriptions>
      <Form.Item
        label="请问当前盈亏为：[单选题]"
        name="2"
        rules={[
          { required: true, message: '该选项为必选题' },
          { type: 'enum', enum: ['C'], message: ANSWER[2].tips },
        ]}
        {...(helps[2] ? {help: helps[2]} : '')}
      >
        <Radio.Group>
          <Radio value="A">A. -550</Radio>
          <Radio value="B">B. 200</Radio>
          <Radio value="C">C. -200</Radio>
          <Radio value="D">D. 0</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="请问总盈亏为：[单选题]"
        name="3"
        rules={[
          { required: true, message: '该选项为必选题' },
          { type: 'enum', enum: ['C'], message: ANSWER[3].tips },
        ]}
        {...(helps[3] ? {help: helps[3]} : '')}
      >
        <Radio.Group>
          <Radio value="A">A. -250</Radio>
          <Radio value="B">B. -450</Radio>
          <Radio value="C">C. -200</Radio>
          <Radio value="D">D. 0</Radio>
        </Radio.Group>
      </Form.Item>
      <p>4. 接上题，在 Point2 以成本 7.5 金币，现价 5.5 金币卖出 50 股后，</p>
      <Descriptions bordered column={1}>
        <Descriptions.Item label="Point 3"></Descriptions.Item>
        <Descriptions.Item label="成本">7.5</Descriptions.Item>
        <Descriptions.Item label="股价">9.5</Descriptions.Item>
        <Descriptions.Item label="持仓">50</Descriptions.Item>
        <Descriptions.Item label="当前盈亏">？</Descriptions.Item>
        <Descriptions.Item label="总盈亏">？</Descriptions.Item>
        <Descriptions.Item label="现金余额">275</Descriptions.Item>
      </Descriptions>
      <Form.Item
        label="请问 Point 3 当前盈亏为：[单选题]"
        name="4"
        rules={[
          { required: true, message: '该选项为必选题' },
          { type: 'enum', enum: ['A'], message: ANSWER[4].tips },
        ]}
        {...(helps[4] ? {help: helps[4]} : '')}
      >
        <Radio.Group>
          <Radio value="A">A. 100</Radio>
          <Radio value="B">B. -100</Radio>
          <Radio value="C">C. -200</Radio>
          <Radio value="D">D. 200</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="请问总盈亏为：[单选题]"
        name="5"
        rules={[
          { required: true, message: '该选项为必选题' },
          { type: 'enum', enum: ['D'], message: ANSWER[5].tips },
        ]}
        {...(helps[5] ? {help: helps[5]} : '')}
      >
        <Radio.Group>
          <Radio value="A">A. -100</Radio>
          <Radio value="B">B. 100</Radio>
          <Radio value="C">C. 200</Radio>
          <Radio value="D">D. 0</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
        >确定</Button>
      </Form.Item>
    </Form>
  );
}

export default PracticeTest;
