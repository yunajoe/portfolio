import { changeTimeFormat } from "@/utils/date";
import { Text } from "@mantine/core";

type PortPolioDateProps = {
  updatedAt: string;
};

function PortPolioDate({ updatedAt }: PortPolioDateProps) {
  const { year, month, day } = changeTimeFormat(updatedAt);
  return (
    <Text>
      {year}.{month}.{day}
    </Text>
  );
}

export default PortPolioDate;
