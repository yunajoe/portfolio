import classNames from "classnames/bind";

import { getUserInfoByRefreshToken } from "@/api/user";
import MyProfileBox from "@/components/box/mypofile/MyProfileBox";
import MyProfileBoxTwo from "@/components/box/mypofile/MyProfileBoxTwo";
import Divider from "@/components/divider/Divider";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import styles from "./layout.module.scss";

const cx = classNames.bind(styles);

async function getUserData() {
  const refreshToken = await getCookie("refreshToken", { cookies });
  if (refreshToken) {
    const res = await getUserInfoByRefreshToken(refreshToken);

    return res.data;
  }
}

export default async function Page() {
  const userData = await getUserData();

  return (
    <div className={cx("grid_container")}>
      <MyProfileBoxTwo userData={userData.user_data} />
      <Divider color="gray" />
      <MyProfileBox userData={userData.user_data} />
    </div>
  );
}

// export default Page;
