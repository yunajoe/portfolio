import CusTomAvatar from "@/components/avatar/CusTomAvatar";
import { User } from "@/types/api";
import Image from "next/image";

type ConditionCusTomAvatarProps = {
  userData: User;
  borderRadius?: string;
  width?: number;
  height?: number;
  size?: string;
};

function ConditionCusTomAvatar({
  userData,
  borderRadius,
  size,
  width = 200,
  height = 200,
}: ConditionCusTomAvatarProps) {
  return (
    <>
      {userData.userprofile.length > 0 ? (
        <div style={{ borderRadius: borderRadius, overflow: "hidden" }}>
          <Image
            alt="profile_image"
            src={`http://localhost:8080/static/images/${userData.userprofile}`}
            width={width}
            height={height}
          />
        </div>
      ) : (
        <CusTomAvatar userData={userData} size={size} />
      )}
    </>
  );
}

export default ConditionCusTomAvatar;
