"use client";
import BoardDetailMainBox from "@/components/box/boarddetail/BoardDetailMainBox";
import BoardSideNavBar from "@/components/navbar/BoardSideNavBar";
import { User } from "@/types/api";
import { Item } from "@/types/portpolio";
import classNames from "classnames/bind";
import { useRef } from "react";
import styles from "./BoardDetailContents.module.scss";
const cx = classNames.bind(styles);

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

  return (
    <div>
      <BoardSideNavBar
        userData={userData}
        mergedRefs={[{ homeRef }, { aboutMeRef }, { portFolioRef }]}
      />
      <BoardDetailMainBox
        mergedRefs={[{ homeRef }, { aboutMeRef }, { portFolioRef }]}
      />
    </div>
  );
}

export default BoardDetailContents;
