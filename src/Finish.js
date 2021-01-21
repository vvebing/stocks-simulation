import { Button, Result } from 'antd';
import React from 'react';

const mailTo = () => {
  const mail = document.createElement('a');
  mail.href = "mailto:jiaxinkuojx@163.com";
  mail.click();
}

function Finish({ totalProfit, saveTextAsFile }) {
  return (
    <Result
      status="success"
      title="实验结束，感谢您的参与！"
      subTitle={[
        <p key="0">&nbsp;</p>,
        <p key="1">您在五轮实验中，总累计盈亏为：<strong>{totalProfit}</strong>，平均每轮盈亏为：<strong>{+(totalProfit / 5).toFixed(4)}</strong></p>,
        <strong key="2">请不要关闭浏览器，也不要关机，请举手示意主试。</strong>,
        <p key="3">&nbsp;</p>,
        <p key="4">&nbsp;</p>,
        <p key="5">&nbsp;</p>,
        <p key="6">&nbsp;</p>,
        <p key="7">&nbsp;</p>,
        <p key="8">&nbsp;</p>,
        <p key="9">&nbsp;</p>,
      ]}
      extra={[
        <Button key="download" type="link" onClick={saveTextAsFile}>下载实验数据</Button>,
        <Button key="upload" type="primary" onClick={mailTo}>发送实验结果</Button>
      ]}
    />
  );
}

export default Finish;
