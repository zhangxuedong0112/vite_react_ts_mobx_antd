import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/app/index'
import 'antd/dist/antd.css';
import './global.css'
import globalConfig from './global.config';

console.log(`当前环境: %c${globalConfig.env}`, 'font-size:36px;color:red;');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
