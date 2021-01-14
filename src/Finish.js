import { Button, Result } from 'antd';
import React from 'react';

function Finish() {
  return (
    <Result
      status="success"
      title="辛苦了，您已完成所有实验！"
      subTitle="由于实验局限性，麻烦您手动上传实验数据。"
      extra={[
        <Button key="download" type="link">下载实验数据</Button>,
        <Button key="upload" type="primary">发送实验结果</Button>
      ]}
    />
  );
}

export default Finish;
