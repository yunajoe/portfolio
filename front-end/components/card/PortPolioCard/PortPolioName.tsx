import classNames from "classnames/bind";

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
};

function PortPolioName({
  usersTableId,
  portpolioId,
  portpolioName,
  isResumeNameEdit,
  setIsResumeNameEdit,
}: PorPolioNameProps) {
  const ref = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  const useStatusSelector = useAppSelector(selectStatus);

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

  // TODO useFocusHookm만들어서 대체하기
  useEffect(() => {
    if (ref.current && isResumeNameEdit) {
      ref.current.focus();
    }
  }, [ref.current]);

  useEffect(() => {
    if (useStatusSelector.updatePortPolioNameStatus === 200) {
      setIsResumeNameEdit(false);
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
