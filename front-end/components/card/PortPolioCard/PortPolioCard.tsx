import PortPolioCardBody from "@/components/card/PortPolioCard/PortPolioCardBody";
import PortPolioCardBottom from "@/components/card/PortPolioCard/PortPolioCardBottom";
import PortPolioCardHeader from "@/components/card/PortPolioCard/PortPolioCardHeader";
import Divider from "@/components/divider/Divider";
import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/src/app/lib/hooks";
import { Item } from "@/types/portpolio";
import classNames from "classnames/bind";
import { SetStateAction, useRef } from "react";
import styles from "./PortPolioCard.module.scss";
const cx = classNames.bind(styles);

type PortPolioCardProps = {
  data: Item;
  deleteDropDownId: string;
  setDeleteDropDownId: React.Dispatch<SetStateAction<string>>;
  isResumeNameEdit: boolean;
  setIsResumeNameEdit: React.Dispatch<SetStateAction<boolean>>;
  setIsEditAndDeleteDropDown: React.Dispatch<SetStateAction<boolean>>;

  // for 드래그앤드롭
  draggingIndex: number;
  newDataList: Item[];
  handleUpdateDataList: (dragIndex: number, index: number) => void;
};

function PortPolioCard({
  data,
  deleteDropDownId,
  isResumeNameEdit,
  setIsResumeNameEdit,
  setDeleteDropDownId,
  setIsEditAndDeleteDropDown,
  draggingIndex,
  newDataList,
  handleUpdateDataList,
}: PortPolioCardProps) {
  const useSelectAuth = useAppSelector(selectAuth);
  const cardRef = useRef(null);

  const { userData } = useSelectAuth;

  const dispatch = useAppDispatch();
  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    draggingIndex: number
  ) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("cardIndex", String(draggingIndex));
  };

  // const { rectHeight, clientHeight } = useCalculateClientWidth(cardRef);
  // console.log("카드", clientHeight);

  // 요소나 텍스트 블록을 적합한 드롭 대상 위로 위로갈떄
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // 원하는 위치에 드랍했을떄
  const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    const sourceIndex = Number(e.dataTransfer.getData("cardIndex"));
    handleUpdateDataList(sourceIndex, index);
  };

  const handleDragEnd = () => {
    const rearrangePortPolioIds = newDataList.map((item) => item.portpolioId);
    dispatch({
      type: "UPDATE_PORT_POLIO_IDS_REQUEST",
      users_table_id: userData._id,
      portpolio_ids: rearrangePortPolioIds,
    });
  };

  return (
    <div
      ref={cardRef}
      className={cx("container")}
      draggable
      onDragStart={(e) => handleDragStart(e, draggingIndex)}
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e, draggingIndex)}
      onDragEnd={handleDragEnd}
    >
      <div className={cx("portpolio_contents")}>
        <PortPolioCardHeader data={data} />
        <PortPolioCardBody
          data={data}
          deleteDropDownId={deleteDropDownId}
          setDeleteDropDownId={setDeleteDropDownId}
          isResumeNameEdit={isResumeNameEdit}
          setIsResumeNameEdit={setIsResumeNameEdit}
        />
      </div>
      <div className={cx("divider")}>
        <Divider />
      </div>

      <PortPolioCardBottom
        data={data}
        setDeleteDropDownId={setDeleteDropDownId}
        setIsEditAndDeleteDropDown={setIsEditAndDeleteDropDown}
      />
    </div>
  );
}

export default PortPolioCard;
