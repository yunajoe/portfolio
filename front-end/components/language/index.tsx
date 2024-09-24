// https://github.com/JWebCoder/react-multi-lang/blob/master/src/index.tsx

import { useEffect, useState } from "react";

// https://wavelop.com/en/story/implementing-multi-language-without-any-library-in-react-hooks/
interface Translation {
  [key: string]: string;
}

let language: string = "ko"; // default language

let translationObj: Translation = {
  ko: "",
  en: "",
};

export const t = (path: string) => {
  const keys = path.split(".");
  if (translationObj[language]) {
    let targetLanguageObj = translationObj[language];
    keys.forEach((key: string) => {
      console.log("현재  키 스트링", key);
    });
  }

  return keys;
};

export const getLanguage = (): string => {
  return language;
};
export const setLanguage = (lang: string) => {
  language = lang;
};

const useForceUpdate = (): [boolean, () => void] => {
  const [state, setState] = useState(false);
  const forceUpdate = () => setState((prev) => !prev);
  return [state, forceUpdate];
};

export function useTranslation() {
  const [state, forceUpdate] = useForceUpdate();
  console.log("sate", state);

  const changeLanguage = (newLang: string) => {
    if (newLang !== language) {
      setLanguage(newLang);
    }
  };
  useEffect(() => {
    forceUpdate();
  }, []);
  return { t, changeLanguage, language };
}
