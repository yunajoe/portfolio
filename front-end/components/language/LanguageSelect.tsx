"use client";
import { setLanguage } from "@/components/language";
import classNames from "classnames/bind";
import styles from "./LanguageSelect.module.scss";
const cx = classNames.bind(styles);

function LanguageSelect() {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  //   const currentLang = getLanguage();
  //   console.log("ccc", currentLang);

  return (
    <select onChange={handleSelect}>
      <option value="ko">한국어</option>
      <option value="en">English</option>
    </select>
  );
}

export default LanguageSelect;
