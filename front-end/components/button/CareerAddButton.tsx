import FieldAddButtonLayout from "@/components/layout/FieldAddButtonLayout";
import AddIcon from "@/public/icons/AddIcon";
import { UnstyledButton } from "@mantine/core";

function CareerAddButton() {
  return (
    <FieldAddButtonLayout>
      <UnstyledButton>경력 추가</UnstyledButton>
      <AddIcon style={{ width: "30px" }} />
    </FieldAddButtonLayout>
  );
}

export default CareerAddButton;
