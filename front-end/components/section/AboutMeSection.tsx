import { Item } from "@/types/portpolio";
import classNames from "classnames/bind";
import { RefObject } from "react";
import styles from "./AboutMeSection.module.scss";
const cx = classNames.bind(styles);

type AboutMeSectionProps = {
  portpolioData: Item;
  aboutMeRef: RefObject<HTMLElement> | null;
};

function AboutMeSection({ portpolioData, aboutMeRef }: AboutMeSectionProps) {
  return (
    <section className={cx("section")} id="aboutMe" ref={aboutMeRef}>
      <div className={cx("aboutMe", "overlay_container")}>
        <div className={cx("overlay")}>
          <div
            className={cx("intro_section", "display_table", "user_container")}
          >
            <div className={cx("display_table_cell")}>
              <h3>HI, IAM</h3>
              <h1>YUNA</h1>
              <h3 className={cx("description")}>
                <span>WEB DEVELOPER</span>
                <span>Typed_cursor</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;
