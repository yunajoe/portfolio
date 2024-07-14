import DeleteModalButton from "@/components/button/DeleteModalButton";
import DeleteModalLayout from "@/components/modal/layout/DeleteModalLayout";
import { educationFieldDelete } from "@/src/app/lib/features/portpolio/portpolioSlice";
import { useDispatch } from "react-redux";

type EducationFieldDeleteModalProps = {
  onClose: () => void;
  index: number;
};

function EducationFieldDeleteModal({
  onClose,
  index,
}: EducationFieldDeleteModalProps) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(educationFieldDelete({ index }));
  };

  return (
    <DeleteModalLayout>
      <DeleteModalButton onClose={onClose} onConfirm={handleDelete} />
    </DeleteModalLayout>
  );
}

export default EducationFieldDeleteModal;
