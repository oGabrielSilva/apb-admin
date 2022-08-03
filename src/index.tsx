import React from 'react'
import ReactDOM from 'react-dom/client'
import ApolloContextProvider from './context/Apollo'
import Router from './routes/Routes'
import './styles/global.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ApolloContextProvider>
      <div className="App">
        <Router />
      </div>
    </ApolloContextProvider>
  </React.StrictMode>
)
