import { Box, Divider, Text } from "@mantine/core";

type InputBoxProps = {
  title: string;
  description: string[];
};

function DescriptionBox({ title, description }: InputBoxProps) {
  const containerProps = {
    bg: "var(--mantine-color-blue-light)",
    mb: "10",
    p: "5",
  };

  return (
    <>
      <Text fw={800} mb="10">
        {title}
      </Text>
      <Divider size="md" mb="10" />
      <Box {...containerProps}>
        {description.map((text, idx) => {
          return (
            <Text size="12px" c="dimmed" key={idx}>
              {text}
            </Text>
          );
        })}
      </Box>
    </>
  );
}

export default DescriptionBox;
