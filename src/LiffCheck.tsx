import { useState } from 'react'
import { LiffProvider, useLiffInit } from './hooks/liff'

function LiffCheck() {
  const [count, setCount] = useState(0)

  const liffObject = useLiffInit();
  console.log(liffObject);

  return (
    <LiffProvider>
      <h1>Hello, LIFF</h1>
    </LiffProvider>
  )
}

export default LiffCheck
