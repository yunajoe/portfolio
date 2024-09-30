import { createContext, useMemo, useState } from "react";
type TransLationContext = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
};

type TransLationProviderTypes = {
  children: React.ReactNode;
};
export const TransLationContext = createContext<TransLationContext>({
  language: "ko",
  setLanguage: () => {},
});

export const TransLationProvider = ({ children }: TransLationProviderTypes) => {
  const [language, setLanguage] = useState("ko");
  const value: TransLationContext = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language]
  );

  return (
    <TransLationContext.Provider value={value}>
      {children}
    </TransLationContext.Provider>
  );
};
