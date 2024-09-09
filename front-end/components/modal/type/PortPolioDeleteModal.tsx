import DeleteModalButton from "@/components/button/DeleteModalButton";
import DeleteModalLayout from "@/components/modal/layout/DeleteModalLayout";
import { SetStateAction } from "react";
import { useDispatch } from "react-redux";

type PortPolioDeleteModalProps = {
  onClose: () => void;
  users_table_id: string;
  portpolio_id: string;
  setDeleteDropDownId: React.Dispatch<SetStateAction<string>>;
};

function PortPolioDeleteModal({
  onClose,
  users_table_id,
  portpolio_id,
  setDeleteDropDownId,
}: PortPolioDeleteModalProps) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch({
      type: "DELETE_PORT_POLIO_REQUEST",
      users_table_id: users_table_id,
      portpolio_id: portpolio_id,
    });
    onClose();
    setDeleteDropDownId("");
  };

  const handleClose = () => {
    onClose();
    setDeleteDropDownId("");
  };
  return (
    <DeleteModalLayout>
      <DeleteModalButton onClose={handleClose} onConfirm={handleDelete} />
    </DeleteModalLayout>
  );
}

export default PortPolioDeleteModal;
