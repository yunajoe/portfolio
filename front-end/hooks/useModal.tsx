import { useState } from "react";

function useModal() {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);



  return {  
    isSearchModalOpen,
    setIsSearchModalOpen,
    isDeleteModalOpen,
    setIsDeleteModalOpen,

  };
}

export default useModal;
