import classNames from "classnames/bind";

import useFocus from "@/hooks/useFocus";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import { selectStatus } from "@/src/app/lib/features/status/statusSlice";
import { useAppDispatch, useAppSelector } from "@/src/app/lib/hooks";
import { SetStateAction, useEffect, useRef, useState } from "react";
import styles from "./PortPolioName.module.scss";
const cx = classNames.bind(styles);

type PorPolioNameProps = {
  usersTableId: string;
  portpolioId: string;
  portpolioName: string;
  isResumeNameEdit: boolean;
  setIsResumeNameEdit: React.Dispatch<SetStateAction<boolean>>;
  setDeleteDropDownId: React.Dispatch<SetStateAction<string>>;
};

function PortPolioName({
  usersTableId,
  portpolioId,
  portpolioName,
  isResumeNameEdit,
  setIsResumeNameEdit,
  setDeleteDropDownId,
}: PorPolioNameProps) {
  const dispatch = useAppDispatch();

  const useStatusSelector = useAppSelector(selectStatus);
  const ref = useRef<HTMLInputElement>(null);

  useFocus(ref, isResumeNameEdit);

  const handleClickOutside = () => {
    setIsResumeNameEdit(false);
    setDeleteDropDownId("");
  };

  useOnClickOutside(ref, handleClickOutside);

  const [newPortPolioName, setNewPortPolioName] = useState(portpolioName);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPortPolioName(event?.target.value);
  };

  const activeEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      dispatch({
        type: "UPDATE_PORT_POLIO_NAME_REQUEST",
        users_table_id: usersTableId,
        portpolio_id: portpolioId,
        portpolio_name: newPortPolioName,
      });
    }
  };

  useEffect(() => {
    if (useStatusSelector.updatePortPolioNameStatus === 200) {
      setIsResumeNameEdit(false);
      setDeleteDropDownId("");
    }
  }, [useStatusSelector.updatePortPolioNameStatus]);

  return (
    <input
      ref={ref}
      className={cx("container")}
      onChange={handleChangeName}
      value={newPortPolioName}
      onKeyDown={(e) => activeEnter(e)}
    />
  );
}

export default PortPolioName;
