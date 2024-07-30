import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { useAppSelector } from "@/src/app/lib/hooks";
import classNames from "classnames/bind";
import styles from "./LoginError.module.scss";
const cx = classNames.bind(styles);

function LoginError() {

  const { status, message } = useAppSelector(selectAuth);

  return <>{status !== 200 && <p className={cx("container")}>{message}</p>}</>;
}

export default LoginError;
