import AboutMeSection from "@/components/section/AboutMeSection";
import ContactSection from "@/components/section/ContactSection";
import HomeSection from "@/components/section/HomeSection";
import PortFolioSection from "@/components/section/PortFolioSection";
import ResumeSection from "@/components/section/ResumeSection";
import { User } from "@/types/api";
import { Item } from "@/types/portpolio";
import { getTargetRef } from "@/utils/preprocessing";
import classNames from "classnames/bind";
import { RefObject } from "react";
import styles from "./BoardDetailMainBox.module.scss";
const cx = classNames.bind(styles);

type BoardDetailMainBoxProps = {
  userData: User;
  portpolioData: Item;
  mergedRefs: [
    { homeRef: RefObject<HTMLElement> | null },
    { aboutMeRef: RefObject<HTMLElement> | null },
    { portFolioRef: RefObject<HTMLElement> | null },
    { resumeRef: RefObject<HTMLElement> | null },
    { contactRef: RefObject<HTMLElement> | null }
  ];
};
function BoardDetailMainBox({
  userData,
  portpolioData,
  mergedRefs,
}: BoardDetailMainBoxProps) {
  const { homeRef, aboutMeRef, portFolioRef, resumeRef, contactRef } =
    getTargetRef(mergedRefs);

  return (
    <main className={cx("container")}>
      <HomeSection userData={userData} homeRef={homeRef} />
      <AboutMeSection
        userData={userData}
        portpolioData={portpolioData}
        aboutMeRef={aboutMeRef}
      />
      <PortFolioSection portFolioRef={portFolioRef} />
      <ResumeSection portpolioData={portpolioData} resumeRef={resumeRef} />
      <ContactSection contactRef={contactRef} />
    </main>
  );
}

export default BoardDetailMainBox;
