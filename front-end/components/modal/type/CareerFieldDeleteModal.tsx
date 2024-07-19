import DeleteModalLayout from "@/components/modal/layout/DeleteModalLayout";

import DeleteModalButton from "@/components/button/DeleteModalButton";
import { careerFieldDelete } from "@/src/app/lib/features/portpolio/portpolioSlice";
import { useDispatch } from "react-redux";

type CareerFieldDeleteModalProps = {
  onClose: () => void;
  index: number;
};

function CareerFieldDeleteModal({
  onClose,
  index,
}: CareerFieldDeleteModalProps) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(careerFieldDelete({ index }));
  };

  return (
    <DeleteModalLayout>
      <DeleteModalButton onClose={onClose} onConfirm={handleDelete} />
    </DeleteModalLayout>
  );
}

export default CareerFieldDeleteModal;
