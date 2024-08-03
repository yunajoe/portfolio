import AboutMeSection from "@/components/section/AboutMeSection";
import HomeSection from "@/components/section/HomeSection";
import PortFolioSection from "@/components/section/PortFolioSection";
import { getTargetRef } from "@/utils/preprocessing";
import classNames from "classnames/bind";
import styles from "./BoardDetailMainBox.module.scss";
const cx = classNames.bind(styles);
// type MergeRefs = {
//   homeRef: RefObject<HTMLElement>;
//   aboutMeRef: RefObject<HTMLElement>;
//   portFolioRef: RefObject<HTMLElement>;
// };

// type BoardDetailMainBoxProps = {
//   // mergedRefs:
//   mergedRefs: MergeRefs[];
// };

function BoardDetailMainBox({ mergedRefs }) {
  const { homeRef, aboutMeRef, portFolioRef } = getTargetRef(mergedRefs);
  return (
    <main className={cx("container")}>
      <HomeSection homeRef={homeRef} />
      <AboutMeSection aboutMeRef={aboutMeRef} />
      <PortFolioSection portFolioRef={portFolioRef} />
    </main>
  );
}

export default BoardDetailMainBox;
