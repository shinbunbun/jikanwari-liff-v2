import { Config } from "@liff/types";
import liff, { Liff } from "@line/liff";
import { createContext, useEffect, useState } from "react";
import { LiffMockPlugin } from '@line/liff-mock';

const liffMock = (liff: Liff) => liff.use(new LiffMockPlugin());

export interface Profile {
  userId: string;
  displayName: string;
  pictureUrl?: string;
  statusMessage?: string;
}

export const useLiffInit = ({ mock, liffId }: { mock: boolean, liffId: string }) => {
  const [liffObject, setLiffObject] = useState<Liff>();

  useEffect(() => {
    const liffInit = async () => {
      // const liff = await import("@line/liff") as unknown as Liff;
      if (mock) liffMock(liff);
      await liff.init({ mock, liffId, withLoginOnExternalBrowser: true });
      liff.login();
      setLiffObject(liff);
    };
    liffInit()
  }, []);

  return liffObject;
}
