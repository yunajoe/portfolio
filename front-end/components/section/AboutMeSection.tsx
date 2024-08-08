import ConditionCusTomAvatar from "@/components/avatar/ConditionCusTomAvatar";
import SectionHead from "@/components/section/SectionHead";
import PersonIcon from "@/public/icons/PersonIcon";
import { User } from "@/types/api";
import { Item } from "@/types/portpolio";
import { ScrollArea } from "@mantine/core";
import classNames from "classnames/bind";
import { RefObject } from "react";
import styles from "./AboutMeSection.module.scss";
const cx = classNames.bind(styles);

type AboutMeSectionProps = {
  userData: User;
  portpolioData: Item;
  aboutMeRef: RefObject<HTMLElement> | null;
};

function AboutMeSection({
  userData,
  portpolioData,
  aboutMeRef,
}: AboutMeSectionProps) {
  return (
    <section className={cx("section")} id="aboutMe" ref={aboutMeRef}>
      <ScrollArea h={1420} className={cx("aboutMe", "overlay_container")}>
        <SectionHead targetIcon={<PersonIcon />} />
        <div className={cx("section_body")}>
          <div className={cx("sub_section")}>
            <div className={cx("intro_content")}>
              <div className={cx("image_box")}>
                <ConditionCusTomAvatar
                  userData={userData}
                  width={300}
                  height={300}
                />
              </div>
              <div className={cx("intro_text")}>
                <p>Hello</p>
                <p>{portpolioData.introText}</p>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </section>
  );
}

export default AboutMeSection;
