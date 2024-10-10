"use client";
import FriendIcon from "@/public/icons/FriendIcon";
import MessageIcon from "@/public/icons/MessageIcon";
import { useAppDispatch } from "@/src/app/lib/hooks";
import { Item } from "@/types/portpolio";
import classNames from "classnames/bind";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styles from "./BoardContents.module.scss";

const cx = classNames.bind(styles);

type DefaultPortPolioProps = {
  data: Item[];
};

function BoardContents({ data }: DefaultPortPolioProps) {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const handleClick = (portpolioId: string) => {
    router.push(`/board/${portpolioId}`);
  };

  // const handleBookMark = (portfoliodId: string) => {
  //   console.log("북마크를 합니당", portfoliodId);

  //   dispatch({
  //     type: "UPDATE_BOOK_MARK_REQUEST",
  //     portfolio_id: portfoliodId,
  //   });
  // };
  useEffect(() => {
    router.refresh();
  }, []);

  return (
    <div className={cx("container")}>
      {data.map((item, index) => {
        return (
          <div className={cx("item_container")} key={index}>
            <div
              role="button"
              className={cx("item")}
              key={item._id}
              onClick={() => handleClick(item.portpolioId)}
            >
              {item.portpolio_name}
            </div>
            <div role="button" className={cx("friend_message_container")}>
              <div role="button" className={cx("friend")}>
                <FriendIcon />
              </div>
              <div role="button" className={cx("message")}>
                <MessageIcon />
              </div>
            </div>
            {/* <div
              className={cx("bookmark")}
              role="button"
              onClick={() => handleBookMark(item.portpolioId)}
            >
              <BookmarkIcon fill={false} />
            </div> */}
          </div>
        );
      })}
    </div>
  );
}

export default BoardContents;
