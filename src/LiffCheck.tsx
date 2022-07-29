import { Liff } from '@line/liff';
import { useLiffInit, useLiffProfile } from './hooks/liff'

function LiffCheck() {
  const liff = useLiffInit({ liffId: "aaa", mock: true }) as Liff;
  const profile = useLiffProfile(liff);
  console.log(profile);


  return (
    <h1>Hello, LIFF</h1>
  )
}

export default LiffCheck
