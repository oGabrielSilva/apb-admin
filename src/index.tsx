import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ApolloContextProvider from './context/Apollo'
import Router from './routes/Routes'
import './styles/global.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ApolloContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloContextProvider>
  </React.StrictMode>
)
