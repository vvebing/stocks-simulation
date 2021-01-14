import React from 'react';
import { Button, Form, Input, Radio, Space, Tooltip } from 'antd';

function Login({ login }) {
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };

  return (
    <div id="login">
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 12 }}
        onFinish={login}
      >
        <Form.Item
          label="被试编号"
          name="uuid"
          rules={[{ required: true, message: '被试编号为必填项！' }]}
        >
          <Input placeholder="请输入您的被试编号！" />
        </Form.Item>
        <Form.Item
          label="分组编号"
          name="groupID"
          tooltip="不同的分组代表不同的投资策略"
          rules={[{ required: true, message: '请选择一个分组' }]}
        >
          <Radio.Group>
            <Radio value={10}>
              <Tooltip title="系统将自动帮被试买入价值3000金币的任一（系统随机）种股票">
                他人购买组
              </Tooltip>
            </Radio>
            <Radio value={20}>
              <Tooltip title="被试需要选择甲乙丙丁戊中的一只股票，并且一次性买入300股">
                自己购买组
              </Tooltip>
            </Radio>
            <Radio value={30}>
              <Tooltip title="被试需要选择甲乙丙丁戊中的一只股票，并且一次性买入300股">
                他人建议下自己购买组
              </Tooltip>
            </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          wrapperCol={{ offset: 4, span: 12 }}
        >
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
    </div>
  );
}

export default Login;
