import { Button, Result } from 'antd';
import React from 'react';

function Error({ status, onBtnClick }) {
  return (
    <Result
      status="500"
      title="500"
      subTitle={status === -1 ? '实验数据出错，请清除数据后重新操作！' : '程序加载出错！请重新加载页面！'}
      extra={
        <Button
          type="primary"
          onClick={onBtnClick}
        >{status === -1 ? '清除实验数据' : '刷新'}</Button>
      }
    />
  );
}

export default Error;
