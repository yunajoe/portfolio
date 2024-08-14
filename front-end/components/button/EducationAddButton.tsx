import FieldAddButtonLayout from "@/components/layout/FieldAddButtonLayout";
import useCustomNavigation from "@/hooks/useCustomNavigation";
import AddIcon from "@/public/icons/AddIcon";
import { useAppDispatch } from "@/src/app/lib/hooks";
import { User } from "@/types/api";
import { Text, UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";
import styles from "./EducationAddButton.module.scss";
const cx = classNames.bind(styles);

type EducationAddButtonProps = {
  userData: User;
};

function EducationAddButton({ userData }: EducationAddButtonProps) {
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
        <Text>학력추가</Text>
        <AddIcon style={{ width: "30px" }} />
      </UnstyledButton>
    </FieldAddButtonLayout>
  );
}

export default EducationAddButton;
