import FieldAddButtonLayout from "@/components/layout/FieldAddButtonLayout";
import AddIcon from "@/public/icons/AddIcon";
import { UnstyledButton } from "@mantine/core";

function EducationAddButton() {
  return (
    <FieldAddButtonLayout>
      <UnstyledButton>학력추가</UnstyledButton>
      <AddIcon style={{ width: "30px" }} />
    </FieldAddButtonLayout>
  );
}

export default EducationAddButton;
