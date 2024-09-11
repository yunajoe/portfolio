import { RefObject, useEffect } from "react";

function useFocus(ref: RefObject<HTMLInputElement>, isResumeNameEdit: boolean) {
  useEffect(() => {
    if (ref.current && !isResumeNameEdit) {
      ref.current.disabled = true;
      ref.current.blur();
    }
    if (ref.current && isResumeNameEdit) {
      ref.current.disabled = false;
      ref.current.focus();
    }
  }, [ref.current, isResumeNameEdit]);
}

export default useFocus;
