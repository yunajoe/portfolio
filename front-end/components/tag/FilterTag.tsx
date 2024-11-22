import DownChevronIcon from "@/public/icons/DownChevronIcon";
import { Button } from "@mantine/core";
import { memo } from "react";

type FilterTagProps = {
  tag: string;
  width?: string;
};

const FilterTag = memo(function FilterTag({
  tag,
  width = "120px",
}: FilterTagProps) {
  return (
    <Button
      style={{ width: width }}
      justify="center"
      fullWidth
      rightSection={<DownChevronIcon />}
      variant="filled"
      mt="md"
    >
      {tag}
    </Button>
  );
});

export default FilterTag;
