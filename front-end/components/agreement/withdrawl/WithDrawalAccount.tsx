import ConditionCusTomAvatar from "@/components/avatar/ConditionCusTomAvatar";
import { GetUserResponse } from "@/schemas/user";
import classNames from "classnames/bind";
import styles from "./WithDrawalAccount.module.scss";
const cx = classNames.bind(styles);

type WidthDrawlAccountProps = {
  userData: GetUserResponse;
};

function WithDrawalAccount({ userData }: WidthDrawlAccountProps) {
  return (
    <div className={cx("container")}>
      <h2 className={cx("title")}>탈퇴하려는 계정</h2>
      <div className={cx("user_info")}>
        <div>
          <ConditionCusTomAvatar userData={userData} />
        </div>
        <p>{userData.email}</p>
      </div>
    </div>
  );
}

export default WithDrawalAccount;
