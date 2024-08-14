import SideBarMenuItem from "@/components/item/board/SideBarMenuItem";
import ContactIcon from "@/public/icons/ContactIcon";
import HomeIcon from "@/public/icons/HomeIcon";
import ResumeIcon from "@/public/icons/ResumeIcon";
import UserIcon from "@/public/icons/UserIcon";
import WorkIcon from "@/public/icons/WorkIcon";
import { getTargetRef } from "@/utils/preprocessing";
import { RefObject, useEffect, useState } from "react";
type BoardSideBarProps = {
  mergedRefs: [
    { homeRef: RefObject<HTMLElement> | null },
    { aboutMeRef: RefObject<HTMLElement> | null },
    { portFolioRef: RefObject<HTMLElement> | null },
    { resumeRef: RefObject<HTMLElement> | null }
  ];
};
function BoardSideBar({ mergedRefs }: BoardSideBarProps) {
  const { homeRef, aboutMeRef, portFolioRef, resumeRef } =
    getTargetRef(mergedRefs);
  const [navigateRef, setNavigateRef] = useState<RefObject<HTMLElement> | null>(
    null
  );
  const handleClick = (itemName: string) => {
    if ("HOME" === itemName) {
      setNavigateRef(homeRef);
    } else if ("ABOUT ME" === itemName) {
      setNavigateRef(aboutMeRef);
    } else if ("PORTFOLIO" === itemName) {
      setNavigateRef(portFolioRef);
    } else if ("RESUME" === itemName) {
      setNavigateRef(resumeRef);
    }
  };

  useEffect(() => {
    if (!navigateRef || !navigateRef.current) return;
    navigateRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }, [navigateRef]);

  return (
    <ul>
      <SideBarMenuItem
        icon={<HomeIcon />}
        itemName="HOME"
        handleClick={handleClick}
      />
      <SideBarMenuItem
        icon={<UserIcon />}
        itemName="ABOUT ME"
        handleClick={handleClick}
      />
      <SideBarMenuItem
        icon={<WorkIcon />}
        itemName="PORTFOLIO"
        handleClick={handleClick}
      />
      <SideBarMenuItem
        icon={<ResumeIcon />}
        itemName="RESUME"
        handleClick={handleClick}
      />
      <SideBarMenuItem
        icon={<ContactIcon />}
        itemName="CONTACT ME"
        handleClick={handleClick}
      />
    </ul>
  );
}

export default BoardSideBar;
