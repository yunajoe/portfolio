import classNames from "classnames/bind";
import Link from "next/link";
import styles from "./MainNavBar.module.scss";
const cx = classNames.bind(styles);

function MainNavBar() {
  return (
    <div className={cx("container")}>
      <div className={cx("navigation_container")}>
        <nav className={cx("navigation")}>
          <ul className={cx("menubar_list")}>
            <li>test1</li>
            <li>test2</li>
            <li>test3</li>
          </ul>
          <aside>
            <ul className={cx("menubar_list")}>
              <li>test4</li>
              <li>
                <Link
                  href="/myprofile"
                  scroll={false}
                  style={{ textDecoration: "none" }}
                >
                  나의 프로필
                </Link>
              </li>
            </ul>
          </aside>
        </nav>
      </div>
    </div>
  );
}

export default MainNavBar;
