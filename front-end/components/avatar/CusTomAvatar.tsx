import { User } from "@/types/api";
import { avatarColor, convertAvatarLetter } from "@/utils/user";
import { Avatar } from "@mantine/core";

type CusTomAvatarProps = {
  userData: User;
};

function CusTomAvatar({ userData }: CusTomAvatarProps) {
  const initLetter = convertAvatarLetter(userData.username);
  const color = avatarColor[initLetter];

  return (
    <Avatar size="100px" color={color}>
      {initLetter}
    </Avatar>
  );
}

export default CusTomAvatar;
