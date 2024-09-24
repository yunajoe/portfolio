"use client";
import { useTranslation } from "@/components/language";
import classNames from "classnames/bind";
import styles from "./LanguageSelect.module.scss";
const cx = classNames.bind(styles);

function LanguageSelect() {
  const { changeLanguage } = useTranslation();
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    changeLanguage(e.target.value);
  };

  return (
    <select onChange={handleSelect}>
      <option value="ko">한국어</option>
      <option value="en">English</option>
    </select>
  );
}

export default LanguageSelect;
