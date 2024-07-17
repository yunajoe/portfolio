"use client";
import Divider from "@/components/divider/Divider";
import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { selectStatus } from "@/src/app/lib/features/status/statusSlice";
import { useAppDispatch, useAppSelector } from "@/src/app/lib/hooks";
import classNames from "classnames/bind";
import { useRouter } from "next/navigation";
import styles from "./MyProfileEditBoxTwo.module.scss";
const cx = classNames.bind(styles);

function MyProfileEditBoxTwo() {
  const dispatch = useAppDispatch();
  const { userData } = useAppSelector(selectAuth);
  const useStatusSelector = useAppSelector(selectStatus);
  const { logOutStatus } = useStatusSelector;
  const router = useRouter();

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
          <Divider />
        </div>
        <li onClick={handleLogOut}>
          <span className={cx("text")}>로그아웃</span>
        </li>
      </ul>
    </div>
  );
}

export default MyProfileEditBoxTwo;
