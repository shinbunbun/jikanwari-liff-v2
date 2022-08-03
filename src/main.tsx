import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import './index.css'
import { LiffProvider } from './provider/LiffProvider'
import LiffCheck from './LiffCheck'
import { Routes } from './Routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <LiffProvider mock liffId="aaa">
        <App />
        <LiffCheck />
        <Routes />
      </LiffProvider>
    </ChakraProvider>
  </React.StrictMode>
)
