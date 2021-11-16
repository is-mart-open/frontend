import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import dayjs from 'dayjs'
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.locale("ko");
dayjs.extend(customParseFormat)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
