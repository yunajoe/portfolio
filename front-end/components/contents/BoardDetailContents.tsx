"use client";
import BoardDetailMainBox from "@/components/box/boarddetail/BoardDetailMainBox";
import BoardSideNavBar from "@/components/navbar/BoardSideNavBar";
import { User } from "@/types/api";
import { Item } from "@/types/portpolio";
import { useRef } from "react";

type BoardDetailContentsProps = {
  userData: User;
  portpolioData: Item;
};

function BoardDetailContents({
  userData,
  portpolioData,
}: BoardDetailContentsProps) {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const portFolioRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div>
      <BoardSideNavBar
        userData={userData}
        mergedRefs={[
          { homeRef },
          { aboutMeRef },
          { portFolioRef },
          { resumeRef },
        ]}
      />
      <BoardDetailMainBox
        userData={userData}
        portpolioData={portpolioData}
        mergedRefs={[
          { homeRef },
          { aboutMeRef },
          { portFolioRef },
          { resumeRef },
        ]}
      />
    </div>
  );
}

export default BoardDetailContents;
