import ConditionCusTomAvatar from "@/components/avatar/ConditionCusTomAvatar";
import LinkButton from "@/components/button/LinkButton";
import { GetUserResponse } from "@/schemas/user";

import Link from "next/link";

type LoginProfileProps = {
  isLogin: boolean;
  userData: GetUserResponse;
};

function LoginProfile({ isLogin, userData }: LoginProfileProps) {
  return (
    <div>
      {isLogin ? (
        <Link href="/myprofile" style={{ textDecoration: "none" }}>
          <ConditionCusTomAvatar
            userData={userData}
            width={30}
            height={30}
            borderRadius="50%"
          />
        </Link>
      ) : (
        <LinkButton name="회원가입/로그인" />
      )}
    </div>
  );
}

export default LoginProfile;
