import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input, Radio, Tooltip } from 'antd';

const Login = ({ login }) => {
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };

  return (
    <Form
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
        <Button type="primary" htmlType="submit">
          确定
        </Button>
        <Button htmlType="reset" onClick={onReset}>
          重置
        </Button>
      </Form.Item>
    </Form>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default Login;
