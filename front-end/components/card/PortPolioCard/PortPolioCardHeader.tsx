import { Item } from "@/schemas/portfolio";
import { Pill, Text } from "@mantine/core";

type PortPolioCardHeaderProps = {
  data: Item;
};

function PortPolioCardHeader({ data }: PortPolioCardHeaderProps) {
  return (
    <Text>{data.defaultResume && <Pill radius={5}>기본이력서</Pill>}</Text>
  );
}

export default PortPolioCardHeader;
