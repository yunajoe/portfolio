"use client";
import { selectPortPolioResult } from "@/src/app/lib/features/portpolio/portpolioResultSlice";
import { useAppDispatch, useAppSelector } from "@/src/app/lib/hooks";
import { Card, UnstyledButton } from "@mantine/core";
import { getCookie } from "cookies-next";
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
    const accessToken = getCookie("accessToken");
    dispatch({
      type: "CREATE_PORT_POLIO_REQUEST",
      accessToken: accessToken,
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
        h="200px"
        shadow="sm"
        p="50px"
        style={{ border: "5px solid red" }}
      >
        <UnstyledButton fw={800} ta="center" style={{ cursor: "pointer" }}>
          create new portpolio
        </UnstyledButton>
      </Card>
    </>
  );
}

export default CreatePortPolioCard;
