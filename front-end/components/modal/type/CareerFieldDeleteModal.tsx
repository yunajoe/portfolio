import DeleteModalLayout from "@/components/modal/layout/DeleteModalLayout";

import DeleteModalButton from "@/components/button/DeleteModalButton";
import { careerFieldDelete } from "@/src/app/lib/features/portpolio/portpolioSlice";
import { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";

type CareerFieldDeleteModalProps = {
  onClose: () => void;
  index: number;
  setDeleteId: Dispatch<SetStateAction<number | null>>; // Updated type
};

function CareerFieldDeleteModal({
  onClose,
  index,
  setDeleteId,
}: CareerFieldDeleteModalProps) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(careerFieldDelete({ index }));
    setDeleteId(null);
  };

  return (
    <DeleteModalLayout>
      <DeleteModalButton onClose={onClose} onConfirm={handleDelete} />
    </DeleteModalLayout>
  );
}

export default CareerFieldDeleteModal;
