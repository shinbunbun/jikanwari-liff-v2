import { Config } from "@liff/types";
import { Liff } from "@line/liff";
import { createContext, useEffect, useState } from "react";
import { LiffMockPlugin } from '@line/liff-mock';

const liffMock = (liff: Liff) => liff.use(new LiffMockPlugin());

export const useLiffInit = ({ mock, liffId }: { mock: boolean, liffId: string }) => {
  const [liffObject, setLiffObject] = useState<Liff>();

  useEffect(() => {
    const liff = async () => {
      const liff = await import("@line/liff") as unknown as Liff;
      if (mock) liffMock(liff);
      await liff.init({ mock, liffId } as Config);
      setLiffObject(liff);
    };
    liff()
  }, []);

  return liffObject;
}
