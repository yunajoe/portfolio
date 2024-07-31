import PortPolioCardBody from "@/components/card/PortPolioCard/PortPolioCardBody";
import PortPolioCardBottom from "@/components/card/PortPolioCard/PortPolioCardBottom";
import PortPolioCardHeader from "@/components/card/PortPolioCard/PortPolioCardHeader";
import Divider from "@/components/divider/Divider";
import { Item } from "@/types/portpolio";
import classNames from "classnames/bind";
import { SetStateAction } from "react";
import styles from "./PortPolioCard.module.scss";
const cx = classNames.bind(styles);

type PortPolioCardProps = {
  data: Item;
  deleteDropDownId: string;
  setDeleteDropDownId: React.Dispatch<SetStateAction<string>>;
  isResumeNameEdit: boolean;
  setIsResumeNameEdit: React.Dispatch<SetStateAction<boolean>>;
  setIsEditAndDeleteDropDown: React.Dispatch<SetStateAction<boolean>>;
};

function PortPolioCard({
  data,
  deleteDropDownId,
  isResumeNameEdit,
  setIsResumeNameEdit,
  setDeleteDropDownId,
  setIsEditAndDeleteDropDown,
}: PortPolioCardProps) {
  return (
    <div className={cx("container")}>
      <div className={cx("portpolio_contents")}>
        <PortPolioCardHeader data={data} />
        <PortPolioCardBody
          data={data}
          deleteDropDownId={deleteDropDownId}
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
