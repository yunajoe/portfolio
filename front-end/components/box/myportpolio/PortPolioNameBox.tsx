import { Text } from "@mantine/core";

type PortPolioNameProps = {
  portpolioName: string;
};

function PortPolioNameBox({ portpolioName }: PortPolioNameProps) {
  return (
    <Text size="30px" fw={600}>
      {portpolioName}
    </Text>
  );
}

export default PortPolioNameBox;
