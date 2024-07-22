import MainNavBar from "@/components/navbar/MainNavBar";
import LeftChevronIcon from "@/public/icons/LeftChevronIcon";
import classNames from "classnames/bind";
import styles from "./MyProfileEditNavBar.module.scss";
const cx = classNames.bind(styles);
function MyProfileEditNavBar() {
  return (
    <>
      <MainNavBar edit={true}/>
      <div className={cx("myprofile_edit_navbar")}>
        <div className={cx("navigation_container")}>
          <nav className={cx("navigation")}>
            <LeftChevronIcon />
            <span className={cx("text")}>프로필편집</span>
          </nav>
        </div>
      </div>
    </>
  );
}

export default MyProfileEditNavBar;
