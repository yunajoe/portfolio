import ModalBase from "@/components/modal/ModalBase";
import { Divider, Stack, Text } from "@mantine/core";
import classNames from "classnames/bind";
import { ReactNode } from "react";
import styles from "./DeleteModalLayout.module.css";
const cx = classNames.bind(styles);
type DeleteModalLayoutProps = {
  children: ReactNode;
};

function DeleteModalLayout({ children }: DeleteModalLayoutProps) {
  return (
    <ModalBase>
      <div className={cx("modal")}>
        <Stack>
          <Text ta="center" fz="md">
            삭제하시겠습니까?
          </Text>
          <Divider />
          {children}
        </Stack>
      </div>
    </ModalBase>
  );
}

export default DeleteModalLayout;
