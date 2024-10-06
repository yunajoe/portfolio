"use client";
import BookmarkIcon from "@/public/icons/BookmarkIcon";
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
  console.log("data", data);
  const router = useRouter();

  const handleClick = (portpolioId: string) => {
    router.push(`/board/${portpolioId}`);
  };

  const handleBookMark = () => {
    console.log("북마크를 합니당");
  };
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
            <div
              className={cx("bookmark")}
              role="button"
              onClick={handleBookMark}
            >
              <BookmarkIcon fill={false} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BoardContents;
