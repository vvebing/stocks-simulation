import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Spin } from 'antd';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div id="app">
      <Suspense fallback={<Spin size="large" delay={100} />}>
        <App />
      </Suspense>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
