import SectionHead from "@/components/section/SectionHead";
import WorkIcon from "@/public/icons/WorkIcon";
import classNames from "classnames/bind";
import { RefObject } from "react";
import styles from "./PortFolioSection.module.scss";
const cx = classNames.bind(styles);

type PortFolioSectionProps = {
  portFolioRef: RefObject<HTMLElement> | null;
};

function PortFolioSection({ portFolioRef }: PortFolioSectionProps) {
  return (
    <section className={cx("section")} id="PortPolio" ref={portFolioRef}>
      <div className={cx("overlay_container")}>
        <div className={cx("overlay")}>
          <div className={cx("contents")}>
            <SectionHead
              targetIcon={
                <WorkIcon style={{ width: "300px", height: "300px" }} />
              }
              title="MY WORK"
            />
            <div className={cx("intro_section")}>workwork</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortFolioSection;
