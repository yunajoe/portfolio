// TODO: context로 뺴는 것을 나중에 훅으로 만들기(type들이 다 중복이댜)
import { useDisclosure } from "@mantine/hooks";
import { createContext, useState } from "react";

// test context
type ModalName = "Search" | "Delete";
export const TestContext = createContext({
  openModal: (value: ModalName) => {},
  closeModal: () => {},
  modal: "",
});

//
type TestProviderTypes = {
  children: React.ReactNode;
};

export const TestModalProvider = ({ children }: TestProviderTypes) => {
  const [modal, setModal] = useState("");

  const handleModalOpen = (modalName: ModalName) => {
    setModal(modalName);
  };

  const handleModalClose = () => {
    setModal("");
  };
  return (
    <TestContext.Provider
      value={{
        openModal: handleModalOpen,
        closeModal: handleModalClose,
        modal: modal,
      }}
    >
      {children}
    </TestContext.Provider>
  );
};
