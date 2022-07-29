import liff from '@line/liff/dist/lib';
import { useLiffInit } from './hooks/liff'

function LiffCheck() {
  const liffObject = useLiffInit({ liffId: "dummy", mock: true });
  console.log(liffObject);

  if (liffObject) {
    if (!liff.isInClient()) liff.login();
    const profile = liff.getProfile();
    console.log(profile);
  }

  return (
    <h1>Hello, LIFF</h1>
  )
}

export default LiffCheck
