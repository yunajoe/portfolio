import RightChevronIcon from "@/public/icons/RightChevronIcon";
import classNames from "classnames/bind";
import Link from "next/link";
import styles from "./MyProfileEditBoxHeader.module.scss";

const cx = classNames.bind(styles);
function MyProfileEditBoxHeader() {
  return (
    <section className={cx("first_section")}>
      <ol className={cx("profile_container")}>
        <li>
          <Link href="/myprofile" className={cx("profile_text")}>
            프로필
          </Link>
        </li>
        <li className={cx("right_chevron_icon")}>
          <RightChevronIcon />
        </li>
        <li>
          <Link href="/myprofile/edit" className={cx("profile_edit_text")}>
            프로필편집
          </Link>
        </li>
      </ol>
    </section>
  );
}

export default MyProfileEditBoxHeader;
