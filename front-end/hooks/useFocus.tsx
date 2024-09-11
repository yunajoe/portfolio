import { RefObject, SetStateAction, useEffect } from "react";

function useFocus(
  ref: RefObject<HTMLInputElement>,
  isResumeNameEdit: boolean,
  setIsResumeNameEdit: React.Dispatch<SetStateAction<boolean>>
) {
  useEffect(() => {
    if (ref.current && !isResumeNameEdit) {
      ref.current.disabled = true;
      ref.current.blur();
    }
    if (ref.current && isResumeNameEdit) {
      ref.current.disabled = false;
      ref.current.focus();
    }

    return () => {
      setIsResumeNameEdit(false);
      ref?.current?.blur();
    };
  }, [ref.current, isResumeNameEdit]);
}

export default useFocus;
