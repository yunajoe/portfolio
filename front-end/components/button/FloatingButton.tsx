import { UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";
import { useRouter } from "next/navigation";
import styles from "./FloatingButton.module.scss";

const cx = classNames.bind(styles);
type FloatingButtonProps = {
  text: string;
};
function FloatingButton({ text }: FloatingButtonProps) {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/board");
  };
  return (
    <div className={cx("button_container")}>
      <UnstyledButton className={cx("button")} onClick={handleGoBack}>
        {text}
      </UnstyledButton>
      ;
    </div>
  );
}

export default FloatingButton;
