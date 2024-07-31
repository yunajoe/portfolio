import CusTomAvatar from "@/components/avatar/CusTomAvatar";
import { User } from "@/types/api";
import Image from "next/image";

type ConditionCusTomAvatarProps = {
  userData: User;
  width?: number;
  height?: number;
};

function ConditionCusTomAvatar({
  userData,
  width = 100,
  height = 100,
}: ConditionCusTomAvatarProps) {
  return (
    <>
      {userData.userprofile.length > 0 ? (
        <div style={{ borderRadius: "50%", overflow: "hidden" }}>
          <Image
            alt="profile_image"
            src={`http://localhost:8080/static/images/${userData.userprofile}`}
            width={width}
            height={height}
            priority
          />
        </div>
      ) : (
        <CusTomAvatar userData={userData} size="50px" />
      )}
    </>
  );
}

export default ConditionCusTomAvatar;
