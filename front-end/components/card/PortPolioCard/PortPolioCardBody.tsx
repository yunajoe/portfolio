import PortPolioDate from "@/components/card/PortPolioCard/PortPolioDate";
import PortPolioName from "@/components/card/PortPolioCard/PortPolioName";
import { Item } from "@/types/portpolio";
import { Text } from "@mantine/core";
import classNames from "classnames/bind";
import { SetStateAction } from "react";
import styles from "./PortPolioCardBody.module.scss";
const cx = classNames.bind(styles);
type PortPolioCardBodyProps = {
  data: Item;
  deleteDropDownId: string;
  isResumeNameEdit: boolean;
  setIsResumeNameEdit: React.Dispatch<SetStateAction<boolean>>;
};

function PortPolioCardBody({
  data,
  deleteDropDownId,
  isResumeNameEdit,
  setIsResumeNameEdit,
}: PortPolioCardBodyProps) {
  return (
    <div>
      {isResumeNameEdit && data._id === deleteDropDownId ? (
        <PortPolioName
          usersTableId={data.users_table_id}
          portpolioId={data.portpolioId}
          portpolioName={data.portpolio_name}
          isResumeNameEdit={isResumeNameEdit}
          setIsResumeNameEdit={setIsResumeNameEdit}
        />
      ) : (
        <Text>{data.portpolio_name}</Text>
      )}
      <PortPolioDate updatedAt={data.updatedAt} />
    </div>
  );
}

export default PortPolioCardBody;
