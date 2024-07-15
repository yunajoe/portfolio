import classNames from "classnames/bind";

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
          <div className={cx("divider")} />
          <li>
            <span className={cx("text")}>로그아웃</span>
          </li>
        </ul>
      </div>

      <div className={cx("divider")}></div>
      <div className={cx("myprofile_container")}>
        <div>
          <div>user계정의 이미지</div>
          <span>현재 user의 계정의 닉네임</span>
        </div>
        <div>학력추가</div>
        <div>경력추가</div>
      </div>
    </div>
  );
}

export default Page;
