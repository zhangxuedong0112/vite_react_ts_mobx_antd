import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from '@/app/index'
import 'antd/dist/antd.css';

console.log(`当前环境: %c${import.meta.env.VITE_ENV}`, 'font-size:36px;color:red;');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
