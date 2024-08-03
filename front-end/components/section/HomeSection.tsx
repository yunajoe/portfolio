import classNames from "classnames/bind";
import styles from "./HomeSection.module.scss";
const cx = classNames.bind(styles);
function HomeSection({ homeRef }) {
  return (
    <section className={cx("section")} id="home" ref={homeRef}>
      <div className={cx("home", "overlay_container")}>
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

export default HomeSection;
