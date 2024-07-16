import classNames from "classnames/bind";

import MyProfileBox from "@/components/box/mypofile/MyProfileBox";
import MyProfileBoxTwo from "@/components/box/mypofile/MyProfileBoxTwo";
import Divider from "@/components/divider/Divider";
import styles from "./layout.module.scss";

const cx = classNames.bind(styles);

// async function getUserData() {
//   const refreshToken = await getCookie("refreshToken", { cookies });
//   if (refreshToken) {
//     const res = await getUserInfoByRefreshToken(refreshToken);

//     return res.data;
//   }
// }

export default async function Page() {
  // TODO: 데이터를 이렇게 가꼬오지말고, 컴퍼넌트에서 가져오기

  return (
    <div className={cx("grid_container")}>
      <MyProfileBoxTwo />
      <Divider color="gray" />
      <MyProfileBox />
    </div>
  );
}

// export default Page;
