import { Button, Result } from 'antd';
import React from 'react';

function Finish({ totalProfit }) {
  return (
    <Result
      status="success"
      title="实验结束，感谢您的参与！"
      subTitle={[
        <p key="0" />,
        <p key="1">您在五轮实验中，总累计盈亏为：<strong>{totalProfit}</strong>，平均每轮盈亏为：<strong>{+(totalProfit / 5).toFixed(4)}</strong></p>,
        <p key="2">由于实验局限性，麻烦您手动上传实验数据。</p>
      ]}
      extra={[
        <Button key="download" type="link">下载实验数据</Button>,
        <Button key="upload" type="primary">发送实验结果</Button>
      ]}
    />
  );
}

export default Finish;
