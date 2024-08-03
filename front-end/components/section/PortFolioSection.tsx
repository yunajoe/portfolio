import classNames from "classnames/bind";
import styles from "./PortFolioSection.module.scss";
const cx = classNames.bind(styles);
function PortFolioSection({ portFolioRef }) {
  return (
    <section className={cx("section")} id="PortPolio" ref={portFolioRef}>
      <div className={cx("aboutMe", "overlay_container")}>
        <div className={cx("overlay")}>
          <div
            className={cx("intro_section", "display_table", "user_container")}
          >
            <div className={cx("display_table_cell")}>
              <h3>HI, IAM</h3>
              <h1>YUNAㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</h1>
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

export default PortFolioSection;
