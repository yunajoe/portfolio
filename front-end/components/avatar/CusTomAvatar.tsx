import { GetUserResponse } from "@/schemas/user";
import { avatarColor, convertAvatarLetter } from "@/utils/user";
import { Avatar } from "@mantine/core";

type CusTomAvatarProps = {
  userData: GetUserResponse;
  size?: string;
};

function CusTomAvatar({ userData, size }: CusTomAvatarProps) {
  const initLetter = convertAvatarLetter(userData.username);
  const color = avatarColor[initLetter];

  return (
    <Avatar size={size} color={color}>
      {initLetter}
    </Avatar>
  );
}

export default CusTomAvatar;
