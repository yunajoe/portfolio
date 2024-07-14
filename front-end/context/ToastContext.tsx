import Toast from "@/components/toast/Toast";
import { createContext, useMemo, useState } from "react";
import styles from "../components/toast/Toast.module.css";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);

type ToastContext = {
  isOpen: boolean;
  open: (message: string) => void;
  close: (id: number) => void;
};

type ToastProviderTypes = {
  children: React.ReactNode;
};

type ToastType = {
  message: string;
};

export const ToastContext = createContext<ToastContext | null>(null);

export const ToastProvider = ({ children }: ToastProviderTypes) => {
  const [isOpen, setIsOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastType>({
    message: "",
  });

  const handleOpenToast = (message: string) => {
    setIsOpen(true);
    setToasts({
      message: message,
    });
  };

  const handleCloseToast = () => {
    setIsOpen(false);
  };

  const conTextValue = useMemo(
    () => ({
      isOpen: isOpen,
      open: handleOpenToast,
      close: handleCloseToast,
    }),
    []
  );

  return (
    <ToastContext.Provider value={conTextValue}>
      {children}
      <div className={cx("toasts")}>
        {isOpen && <Toast message={toasts.message} close={handleCloseToast} />}
      </div>
    </ToastContext.Provider>
  );
};
