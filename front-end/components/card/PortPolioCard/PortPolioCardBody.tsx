import PortPolioDate from "@/components/card/PortPolioCard/PortPolioDate";
import PortPolioName from "@/components/card/PortPolioCard/PortPolioName";
import { Item } from "@/types/portpolio";
import { Text } from "@mantine/core";
import { SetStateAction } from "react";
type PortPolioCardBodyProps = {
  data: Item;
  deleteDropDownId: string;
  setDeleteDropDownId: React.Dispatch<SetStateAction<string>>;
  isResumeNameEdit: boolean;
  setIsResumeNameEdit: React.Dispatch<SetStateAction<boolean>>;
};

function PortPolioCardBody({
  data,
  deleteDropDownId,
  setDeleteDropDownId,
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
          setDeleteDropDownId={setDeleteDropDownId}
        />
      ) : (
        <Text>{data.portpolio_name}</Text>
      )}
      <PortPolioDate updatedAt={data.updatedAt} />
    </div>
  );
}

export default PortPolioCardBody;
