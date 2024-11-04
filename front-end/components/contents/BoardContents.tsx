"use client";
import { getUserInfoByUserTableId } from "@/api/user";
import FriendIcon from "@/public/icons/FriendIcon";
import MessageIcon from "@/public/icons/MessageIcon";
import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/src/app/lib/hooks";
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
  const useAuthSelector = useAppSelector(selectAuth);
  // const useUserSelector = useAppSelector(selectUser);
  // console.log("userUserSelectr", useUserSelector);

  const handleClick = (portpolioId: string) => {
    router.push(`/board/${portpolioId}`);
  };

  const handleFriendAdd = async (user_table_id: string) => {
    if (!useAuthSelector.isLogin) {
      alert("로그인을 먼저 해주세요");
    }

    // diaUSER_FIND_BY_USER_TABLE_ID
    const userInfo = await getUserInfoByUserTableId(user_table_id);
  };

  const handleMessage = () => {
    if (!useAuthSelector.isLogin) {
      alert("로그인을 먼저 해주세요");
    }
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
        // console.log("item", item);
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
              <div
                role="button"
                className={cx("friend")}
                onClick={() => handleFriendAdd(item.users_table_id)}
              >
                <FriendIcon />
              </div>
              <div
                role="button"
                className={cx("message")}
                onClick={handleMessage}
              >
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
