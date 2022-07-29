import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import './index.css'
import LiffCheck from './LiffCheck'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
      <LiffCheck />
    </ChakraProvider>
  </React.StrictMode>
)
