import React, { useState } from 'react';

import Dashboard from './Dashboard';

function Practice({ handlePracticeNext }) {
  const [trades, changeTrades] = useState({ stock: 'Practice', buy: [], sell: [] });
  const handleTrade = (option, amount) => {
    const { buy, sell } = trades;
    if (buy.length >= 9) {
      handlePracticeNext({ buy, sell });
    }
    const updateKeys = {};
    if (option === 'buy') {
      updateKeys.buy = [...buy, amount];
      updateKeys.sell = [...sell, 0];
    } else if (option === 'sell') {
      updateKeys.buy = [...buy, 0];
      updateKeys.sell = [...sell, amount];
    } else {
      updateKeys.buy = [...buy, 0];
      updateKeys.sell = [...sell, 0];
    }
    changeTrades({
      ...trades,
      ...updateKeys,
    });
  };
  const handleNext = () => {
    const { buy, sell } = trades;
    handlePracticeNext({ buy, sell });
  };

  return (
    <div>
      <h3>首先进入练习环节。该环节的收益不计入最终累计收益，仅为熟悉操作所用。请根据屏幕呈现的信息，独立作出交易决策。</h3>
      <Dashboard
        trials={9}
        principal={1000}
        trades={[trades]}
        handleNext={handleNext}
        handleTrade={handleTrade}
      />
    </div>
  );
}

export default Practice;
