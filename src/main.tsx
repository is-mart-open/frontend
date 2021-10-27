import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import dayjs from 'dayjs'

dayjs.locale("ko");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
