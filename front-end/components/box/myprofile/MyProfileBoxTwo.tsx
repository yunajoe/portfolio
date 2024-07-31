"use client";
import Divider from "@/components/divider/Divider";
import { authReset, selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/src/app/lib/hooks";
import classNames from "classnames/bind";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styles from "./MyProfileBoxTwo.module.scss";
const cx = classNames.bind(styles);

type MyProfileBoxTwoProps = {
  show?: boolean;
};

function MyProfileBoxTwo({ show = true }: MyProfileBoxTwoProps) {
  const dispatch = useAppDispatch();
  const aaaa = useAppSelector(selectAuth);
  const { userData, logoutStatus } = useAppSelector(selectAuth);
  const router = useRouter();

  const handleLogOut = () => {
    dispatch({ type: "LOGOUT_REQUEST", _id: userData._id });
  };

  useEffect(() => {
    if (logoutStatus === 200) {
      router.push("/");
      dispatch(authReset());
    }
  }, [logoutStatus]);

  return (
    <ul className={cx("menu_list", { remove: !show })}>
      <li>
        <span className={cx("text")}>내 프로필</span>
      </li>
      <div className={cx("menu_list_divider")}>
        <Divider />
      </div>
      <li onClick={handleLogOut}>
        <span className={cx("text")}>로그아웃</span>
      </li>
    </ul>
  );
}

export default MyProfileBoxTwo;
