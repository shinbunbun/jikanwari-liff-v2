import { Liff } from "@line/liff";
import { useEffect, useState } from "react";
import { Profile } from "./LiffProvider";

export const useLiffProfile = (liffInstance: Liff) => {
  const [profile, setProfile] = useState<Profile>();

  useEffect(() => {
    if (!liffInstance) return;
    const getProfile = async () => {
      const userProfile = await liffInstance.getProfile();
      setProfile(userProfile);
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    getProfile();
  }, [liffInstance]);

  return profile;
}
