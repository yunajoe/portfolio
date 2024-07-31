import { UnstyledButton } from "@mantine/core";
import Link from "next/link";

type LinkButtonProps = {
  name: string;
};

function LinkButton({ name }: LinkButtonProps) {
  return (
    <Link href="/auth/login" style={{ textDecoration: "none", color: "black" }}>
      <UnstyledButton style={{ border: "3px solid #696969" }}>
        {name}
      </UnstyledButton>
    </Link>
  );
}

export default LinkButton;
