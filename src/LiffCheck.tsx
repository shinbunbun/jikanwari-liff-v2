/* eslint-disable no-console */
import { useLiffProfile } from './hooks/useLiffProfile'
import { useTimeTable } from './hooks/useTimeTable'
import { useLiffObject } from './provider/LiffProvider'

const LiffCheck = () => {
  const liff = useLiffObject()
  const profile = useLiffProfile(liff)
  console.log(profile)
  const timeTable = useTimeTable("test");
  console.log(timeTable);

  return <h1>Hello, LIFF</h1>
}

export default LiffCheck
