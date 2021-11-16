import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import dayjs from 'dayjs'
import customParseFormat from "dayjs/plugin/customParseFormat";
import { CookiesProvider } from 'react-cookie'

dayjs.locale("ko");
dayjs.extend(customParseFormat)

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
