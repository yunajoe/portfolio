import { GetUserResponse } from "@/schemas/user";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import styles from "./AutoTypeWriter.module.scss";
const cx = classNames.bind(styles);
type AutoTypeWriterProps = {
  userData: GetUserResponse;
};

function AutoTypeWriter({ userData }: AutoTypeWriterProps) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [oneLoop, setLoop] = useState(false);
  const emailText = userData.email;

  useEffect(() => {
    let timeout;

    if (emailText === currentText) {
      setLoop(true);
    }
    if (currentIndex === 0) {
      setLoop(false);
    }
    if (currentIndex < emailText.length && !oneLoop) {
      timeout = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
        setCurrentText((prev) => prev + emailText[currentIndex]);
      }, 500);
    }

    if (currentIndex > 0 && currentIndex <= emailText.length && oneLoop) {
      timeout = setTimeout(() => {
        setCurrentIndex((prev) => prev - 1);
        const reducedText = currentText.slice(0, currentIndex - 1);
        setCurrentText(reducedText);
      }, 500);
    }
  }, [emailText, currentIndex, currentText, oneLoop]);

  return (
    <div>
      <span className={cx("user_email_text")}>{currentText}</span>
    </div>
  );
}

export default AutoTypeWriter;
