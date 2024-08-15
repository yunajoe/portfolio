"use client";
import BoardDetailMainBox from "@/components/box/boarddetail/BoardDetailMainBox";
import FloatingButton from "@/components/button/FloatingButton";
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
          { contactRef },
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
          { contactRef },
        ]}
      />
      <FloatingButton text="페이지 돌아가기" />
    </div>
  );
}

export default BoardDetailContents;
