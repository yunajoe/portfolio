import classNames from "classnames/bind";

import CareerAddButton from "@/components/button/CareerAddButton";
import EducationAddButton from "@/components/button/EducationAddButton";
import Divider from "@/components/divider/Divider";
import styles from "./layout.module.scss";

const cx = classNames.bind(styles);

function Page() {
  return (
    <div className={cx("grid_container")}>
      <div className={cx("menu_container")}>
        <ul className={cx("menu_list")}>
          <li>
            <span className={cx("text")}>내 프로필</span>
          </li>
          <div className={cx("menu_list_divider")}>
            <Divider color="gray" />
          </div>
          <li>
            <span className={cx("text")}>로그아웃</span>
          </li>
        </ul>
      </div>

      <Divider color="gray" />
      <div className={cx("myprofile_container")}>
        <section className={cx("myinfo_section")}>
          <div className={cx("myinfo")}>
            <span>user계정의 이미지</span>
            <span>현재 user의 계정의 닉네임</span>
          </div>
          <div className={cx("settings")}>설정</div>
        </section>
        <section className={cx("addbutton_section")}>
          <EducationAddButton />
          <CareerAddButton />
        </section>
      </div>
    </div>
  );
}

export default Page;
