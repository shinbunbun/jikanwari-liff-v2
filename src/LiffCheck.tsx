import { useLiffInit, useLiffProfile } from './hooks/liff'
import  liff from "@line/liff";
import { LiffMockPlugin } from '@line/liff-mock';

function LiffCheck() {
  const liff = useLiffInit({ liffId: "aaa", mock: true });
  console.log(liff);
  console.log(liff?.isLoggedIn());
  console.log(liff?.id);
  console.log(liff?.getOS());
  console.log(liff?.getVersion());
  console.log(liff?.getContext());
  console.log(liff?.getAccessToken());
  console.log(liff?.getProfile());


  return (
    <h1>Hello, LIFF</h1>
  )
}

export default LiffCheck
