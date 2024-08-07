import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-br'
import RelativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(RelativeTime)
dayjs.locale(ptBR)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
