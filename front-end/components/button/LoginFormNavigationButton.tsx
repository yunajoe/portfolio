import { UnstyledButton } from "@mantine/core";
import React from "react";

type LoginFormNavigationButtonProps = {
  text: string;
  onClick: () => void;
};

function LoginFormNavigationButton({
  text,
  onClick,
}: LoginFormNavigationButtonProps) {
  return (
    <UnstyledButton
      p="2px"
      onClick={onClick}
      style={{
        borderBottom: "1px solid black",
      }}
    >
      {text}
    </UnstyledButton>
  );
}

export default LoginFormNavigationButton;
