import { MD5 } from "crypto-js";

export const getMarvelHash = (ts: string, publicKey: string): string => {
  const privateKey = "f4d0b81f69f643295a76e04f83c1d43d6e93e286";

  return MD5(`${ts}${privateKey}${publicKey}`).toString();
};
