import { useState } from "react";

function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDeleteModalOpen = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false);
  };

  return {
    isOpen,
    handleOpen,
    handleClose,
    isDeleteModalOpen,
    handleDeleteModalOpen,
    handleDeleteModalClose,
  };
}

export default useModal;
