import { getLanguage } from "@/components/language";
import LanguageSelect from "@/components/language/LanguageSelect";
import WorldIcon from "@/public/icons/WorldIcon";
import classNames from "classnames/bind";
import styles from "./MultiLanguage.module.scss";
const cx = classNames.bind(styles);
function MultiLanguage() {
  return (
    <div className={cx("container")}>
      <WorldIcon />
      <LanguageSelect />
      <div>{getLanguage()}</div>
    </div>
  );
}

export default MultiLanguage;
