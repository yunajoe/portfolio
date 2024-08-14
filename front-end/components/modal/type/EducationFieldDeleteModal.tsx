import DeleteModalButton from "@/components/button/DeleteModalButton";
import DeleteModalLayout from "@/components/modal/layout/DeleteModalLayout";
import { educationFieldDelete } from "@/src/app/lib/features/portpolio/portpolioSlice";
import { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";

type EducationFieldDeleteModalProps = {
  onClose: () => void;
  index: number;
  setDeleteId: Dispatch<SetStateAction<number | null>>; // Updated type
};

function EducationFieldDeleteModal({
  onClose,
  index,
  setDeleteId,
}: EducationFieldDeleteModalProps) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(educationFieldDelete({ index }));
    setDeleteId(null);
  };

  return (
    <DeleteModalLayout>
      <DeleteModalButton onClose={onClose} onConfirm={handleDelete} />
    </DeleteModalLayout>
  );
}

export default EducationFieldDeleteModal;
