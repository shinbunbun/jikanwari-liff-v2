import liff, { Liff } from '@line/liff'
import {
  useEffect,
  useState,
  createContext,
  useContext,
  ReactNode,
} from 'react'
import { LiffMockPlugin } from '@line/liff-mock'

const liffMock = (liffInstance: Liff) => liffInstance.use(new LiffMockPlugin())

const LiffContext = createContext<Liff>({} as Liff)
export const useLiffObject = () => useContext(LiffContext)

export const LiffProvider = ({
  children,
  mock,
  liffId,
}: {
  children: ReactNode
  mock: boolean
  liffId: string
}) => {
  const [liffObject, setLiffObject] = useState<Liff>()

  useEffect(() => {
    const liffInit = async () => {
      // const liff = await import("@line/liff") as unknown as Liff;
      if (mock) liffMock(liff)
      await liff.init({ mock, liffId, withLoginOnExternalBrowser: true })
      liff.login()
      setLiffObject(liff)
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    liffInit()
  }, [])

  return (
    <LiffContext.Provider value={liffObject as Liff}>
      {children}
    </LiffContext.Provider>
  )
}
