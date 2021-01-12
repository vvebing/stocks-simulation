import { Button, Result } from 'antd';
import React, { PureComponent } from 'react';

export default class Finish extends PureComponent {
  render () {
    return (
      <Result
        status="success"
        title="辛苦了，您已完成所有实验！"
        subTitle="由于实验局限性，麻烦您手动上传实验数据。"
        extra={[
          <Button key="upload" type="primary">发送实验结果</Button>,
          <Button key="retry" danger>重新开始实验</Button>
        ]}
      />
    );
  }
}
