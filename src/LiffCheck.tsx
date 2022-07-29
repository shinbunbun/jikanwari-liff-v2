import { useLiffProfile } from './hooks/useLiffProfile'
import { useLiffObject } from './provider/LiffProvider'

const LiffCheck = () => {
  const liff = useLiffObject()
  const profile = useLiffProfile(liff)
  console.log(profile)

  return <h1>Hello, LIFF</h1>
}

export default LiffCheck
