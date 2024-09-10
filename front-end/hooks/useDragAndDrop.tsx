import { Item } from "@/types/portpolio";
import { useEffect, useState } from "react";

function useDragAndDrop(data: Item[]) {
  const [newDataList, setNewDataList] = useState<Item[]>(data);

  const handleUpdateDataList = (dragIndex: number, index: number) => {
    let copyDataList = [...newDataList];
    const targetData = copyDataList.find((_, index) => index === dragIndex);

    const filteredDataList = copyDataList.filter(
      (_, index) => index !== dragIndex
    );

    if (targetData) {
      filteredDataList.splice(index, 0, targetData);
      setNewDataList(filteredDataList);
    }
  };

  useEffect(() => {
    setNewDataList(data);
  }, [data]);

  return {
    newDataList,
    handleUpdateDataList,
  };
}

export default useDragAndDrop;
