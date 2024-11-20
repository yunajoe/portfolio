import FieldAddButtonLayout from "@/components/layout/FieldAddButtonLayout";
import useCustomNavigation from "@/hooks/useCustomNavigation";
import AddIcon from "@/public/icons/AddIcon";
import { GetUserResponse } from "@/schemas/user";
import { useAppDispatch } from "@/src/app/lib/hooks";
import { Text, UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";
import styles from "./CareerAddButton.module.scss";
const cx = classNames.bind(styles);
type CareerAddButtonProps = {
  userData: GetUserResponse;
};
function CareerAddButton({ userData }: CareerAddButtonProps) {
  const dispatch = useAppDispatch();
  const handleAddButton = () => {
    dispatch({
      type: "GET_PORT_POLIO_DEFAULT_REQUEST",
      _id: userData._id,
    });
  };

  useCustomNavigation();

  return (
    <FieldAddButtonLayout>
      <UnstyledButton className={cx("button")} onClick={handleAddButton}>
        <Text>경력추가</Text>
        <AddIcon style={{ width: "30px" }} />
      </UnstyledButton>
    </FieldAddButtonLayout>
  );
}

export default CareerAddButton;
