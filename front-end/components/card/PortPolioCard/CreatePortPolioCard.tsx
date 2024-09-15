"use client";
import { selectPortPolioResult } from "@/src/app/lib/features/portpolio/portpolioResultSlice";
import { useAppDispatch, useAppSelector } from "@/src/app/lib/hooks";
import { Card, UnstyledButton } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
function CreatePortPolioCard() {
  const dispatch = useAppDispatch();
  const usePortPolioResultSelector = useAppSelector(selectPortPolioResult);
  const { current_portpolio_id } = usePortPolioResultSelector;
  const [isCreateButtonClick, setIsCreateButtonClick] = useState(false);

  const router = useRouter();
  const handleCreatePortPoilo = async () => {
    setIsCreateButtonClick(true);
    dispatch({
      type: "CREATE_PORT_POLIO_REQUEST",
    });
  };

  useEffect(() => {
    if (current_portpolio_id !== null && isCreateButtonClick) {
      router.push(`/myportpolio/edit/${current_portpolio_id}`);
    }
    setIsCreateButtonClick(false);
  }, [current_portpolio_id]);

  return (
    <>
      <Card
        onClick={handleCreatePortPoilo}
        h="240px"
        shadow="sm"
        p="50px"
        style={{ border: "1px solid #dbdbdb" }}
      >
        <UnstyledButton fw={800} ta="center" style={{ cursor: "pointer" }}>
          create new portpolio
        </UnstyledButton>
      </Card>
    </>
  );
}

export default CreatePortPolioCard;
