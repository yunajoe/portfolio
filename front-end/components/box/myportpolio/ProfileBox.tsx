import { GetUserResponse } from "@/schemas/user";
import { Text } from "@mantine/core";

type ProfileBoxProps = {
  userData: GetUserResponse;
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
