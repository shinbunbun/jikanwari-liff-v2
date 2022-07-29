import { Config } from "@liff/types";
import { Liff } from "@line/liff";
import React, { createContext, ReactElement, useContext, useEffect, useState } from "react";
import { LiffMockPlugin } from '@line/liff-mock';

export const liffConfig = ({ ...config }: Config): Config => { return config };

const LiffContext = createContext({} as Liff);

export const useLiffInit = () => {
  const [liffObject, setLiffObject] = useState<Liff>();

  const config = liffConfig({ liffId: "", withLoginOnExternalBrowser: true });

  useEffect(() => {
    const liff = async () => {
      const liff = await import("@line/liff") as unknown as Liff;
      await liff.init(config);
      setLiffObject(liff);
    };
    liff()
  }, []);

  return liffObject;
}

export const LiffProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const liffObject = useLiffInit();

  return <LiffContext.Provider value={liffObject as Liff}>{children}</LiffContext.Provider>;
};
