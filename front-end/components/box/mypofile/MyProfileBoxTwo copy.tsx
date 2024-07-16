"use client";
import Divider from "@/components/divider/Divider";
import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { selectStatus } from "@/src/app/lib/features/status/statusSlice";
import { useAppDispatch, useAppSelector } from "@/src/app/lib/hooks";
import { User } from "@/types/api";
import classNames from "classnames/bind";
import { useRouter } from "next/navigation";
import styles from "./MyProfileBoxTwo.module.scss";
const cx = classNames.bind(styles);
type MyProfileBoxProps = {
  userData: User;
};

function MyProfileBoxTwo({ userData }: MyProfileBoxProps) {
  const dispatch = useAppDispatch();
  const useAuthSelector = useAppSelector(selectAuth);
  const useStatusSelector = useAppSelector(selectStatus);
  const { logOutStatus } = useStatusSelector;
  const router = useRouter(); // useRouter 훅 사용

  const handleLogOut = () => {
    dispatch({ type: "LOGOUT_REQUEST", _id: userData._id });
  };

  if (logOutStatus === 200) {
    router.push("/");
  }

  return (
    <div className={cx("menu_container")}>
      <ul className={cx("menu_list")}>
        <li>
          <span className={cx("text")}>내 프로필</span>
        </li>
        <div className={cx("menu_list_divider")}>
          <Divider color="gray" />
        </div>
        <li onClick={handleLogOut}>
          <span className={cx("text")}>로그아웃</span>
        </li>
      </ul>
    </div>
  );
}

export default MyProfileBoxTwo;
