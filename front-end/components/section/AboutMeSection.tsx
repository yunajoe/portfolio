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
      <div className={cx("overlay_container")}>
        <div className={cx("overlay")}>
          <div className={cx("contents")}>
            <ScrollArea h={1000}>
              <div className={cx("scroll_area")}>
                <SectionHead targetIcon={<PersonIcon />} title="ABOUT ME" />
                <div className={cx("about_me_info")}>
                  <div className={cx("intro_content")}>
                    <div className={cx("image_box")}>
                      <ConditionCusTomAvatar
                        userData={userData}
                        size="200px"
                        // width={300}
                        // height={300}
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMeSection;
