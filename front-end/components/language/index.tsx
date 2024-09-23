// https://github.com/JWebCoder/react-multi-lang/blob/master/src/index.tsx
// https://wavelop.com/en/story/implementing-multi-language-without-any-library-in-react-hooks/
interface Translation {
  [key: string]: string;
}

let language: string = "ko"; // default language

let translation: Translation = {
  ko: "ko",
  en: "en",
};

export const t = (path: string) => {
  const keys = path.split(".");
  return keys;
};

export const getLanguage = (): string => {
  return language;
};
export const setLanguage = (lang: string) => {
  language = lang;
  console.log("lan", language);
};

const result = getLanguage();
console.log("최종랭귀지", result);
