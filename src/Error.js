import { Button, Result } from 'antd';
import React from 'react';

function Error() {
  return (
    <Result
      status="500"
      title="500"
      subTitle="程序加载出错！请重新加载页面！"
      extra={
        <Button
          type="primary"
          onClick={() => {window.location.reload()}}
        >刷新</Button>
      }
    />
  );
}

export default Error;
