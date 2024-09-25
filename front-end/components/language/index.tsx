import useClient from "@/hooks/useClient";
import { promises as fs } from "fs";
import { useEffect, useState } from "react";
// https://vercel.com/guides/loading-static-file-nextjs-api-route

let language: string = "ko";
const subscribers: Function[] = [];

//
const triggerSubscription = () => {
  subscribers.forEach((callback) => {
    callback();
  });
};
export const t = async (path: string) => {
  const keys = path.split(".");
  //  process.cwd()

  const file = await fs.readFile(process.cwd() + "/");
  console.log("files", file);

  // const file = await import(`@/translation/${lang}.json`);

  return keys;
};

// 선택된 language를 return하는 함수
export const getLanguage = (): string => {
  return language;
};

// language를 선택하는 함슈
export const setLanguage = (lang: string) => {
  if (language !== lang) {
    language = lang;
    triggerSubscription();
  }
};

const useForceUpdate = (): [boolean, () => void] => {
  const [state, setState] = useState(false);
  const forceUpdate = () => setState((prev) => !prev);
  return [state, forceUpdate];
};
export function useTranslation() {
  const [state, forceUpdate] = useForceUpdate();
  const isClient = useClient();

  useEffect(() => {
    subscribers.push(forceUpdate);

    // return () => {
    //   console.log("나는 클린업함슈");
    //   const index = subscribers.indexOf(subscriber);
    //   console.log("인덳쓔", index);
    // };
  }, []);

  return {
    t,
    language,
  };
}
