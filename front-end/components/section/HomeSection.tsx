import AutoTypeWriter from "@/components/style/AutoTypeWriter";
import { User } from "@/types/api";
import classNames from "classnames/bind";
import { RefObject } from "react";
import styles from "./HomeSection.module.scss";
const cx = classNames.bind(styles);

type HomeSectionProps = {
  userData: User;
  homeRef: RefObject<HTMLElement> | null;
};

function HomeSection({ userData, homeRef }: HomeSectionProps) {
  return (
    <section className={cx("section")} id="home" ref={homeRef}>
      <div className={cx("overlay_container")}>
        <div className={cx("overlay")}>
          <div className={cx("contents")}>
            <div className={cx("user_info")}>
              <h3 className={cx("greeting_text")}>HI, IAM</h3>
              <h1 className={cx("user_name_text")}>{userData.username}</h1>
              <h3 className={cx("description")}>
                <AutoTypeWriter userData={userData} />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeSection;
