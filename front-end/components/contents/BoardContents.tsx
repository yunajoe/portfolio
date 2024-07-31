"use client";
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
  useEffect(() => {
    router.refresh();
  }, []);

  const handleClick = (portpolioId: string) => {
    router.push(`/board/${portpolioId}`);
  };
  return (
    <div className={cx("container")}>
      {data.map((item) => {
        return (
          <div
            role="button"
            className={cx("item")}
            key={item._id}
            onClick={() => handleClick(item.portpolioId)}
          >
            {item.portpolio_name}
          </div>
        );
      })}
    </div>
  );
}

export default BoardContents;
