import { User } from "@/types/api";
import { Text } from "@mantine/core";

type ProfileBoxProps = {
  userData: User;
};

function ProfileBox({ userData }: ProfileBoxProps) {
  return (
    <>
      <Text>{userData.username}</Text>
      <Text>{userData.email}</Text>
    </>
  );
}

export default ProfileBox;
