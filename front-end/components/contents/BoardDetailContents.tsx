"use client";
import BoardSideNavBar from "@/components/navbar/BoardSideNavBar";
import { User } from "@/types/api";
import { Item } from "@/types/portpolio";
import classNames from "classnames/bind";
import styles from "./BoardDetailContents.module.scss";
const cx = classNames.bind(styles);

type BoardDetailContentsProps = {
  portpolioId: string;
  userData: User;
  portpolioData: Item;
};

function BoardDetailContents({
  portpolioId,
  userData,
  portpolioData,
}: BoardDetailContentsProps) {
  return (
    <div>
      <BoardSideNavBar userData={userData} />
    </div>
  );
}

export default BoardDetailContents;
