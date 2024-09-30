import { TransLationContext } from "@/context/TransLationContext";
import { useContext } from "react";

function LanguageSelect() {
  const { setLanguage } = useContext(TransLationContext);
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <select onChange={handleSelect}>
      <option value="ko">한국어</option>
      <option value="en">English</option>
    </select>
  );
}

export default LanguageSelect;
