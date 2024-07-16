import { User } from "@/types/api";
import { avatarColor, convertAvatarLetter } from "@/utils/user";
import { Avatar } from "@mantine/core";

type CusTomAvatarProps = {
  userData: User;
  size?: string;
};

function CusTomAvatar({ userData, size = "35px" }: CusTomAvatarProps) {
  const initLetter = convertAvatarLetter(userData.username);
  const color = avatarColor[initLetter];

  return (
    <Avatar size={size} color={color}>
      {initLetter}
    </Avatar>
  );
}

export default CusTomAvatar;
