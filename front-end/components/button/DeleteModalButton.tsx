import styles from "@/components/button/DeleteModalButton.module.scss";
import { Flex, UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type DeleteModalButtonProps = {
  onClose: () => void;
  onConfirm: () => void;
};

function DeleteModalButton({ onClose, onConfirm }: DeleteModalButtonProps) {
  return (
    <Flex gap="sm">
      <UnstyledButton
        className={cx("close_button")}
        ta="center"
        onClick={onClose}
      >
        닫기
      </UnstyledButton>
      <UnstyledButton
        className={cx("confirm_button")}
        ta="center"
        onClick={onConfirm}
      >
        확인
      </UnstyledButton>
    </Flex>
  );
}

export default DeleteModalButton;
