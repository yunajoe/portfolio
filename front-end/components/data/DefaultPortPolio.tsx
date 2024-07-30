"use client";
import { Item } from "@/types/portpolio";
import classNames from "classnames/bind";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import styles from "./DefaultPortPolio.module.scss";

const cx = classNames.bind(styles);

type DefaultPortPolioProps = {
  data: Item[];
};

function DefaultPortPolio({ data }: DefaultPortPolioProps) {
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, []);

  return (
    <div className={cx("container")}>
      {data.map((item) => {
        return (
          <div className={cx("item")} key={item._id}>
            {item.portpolio_name}
          </div>
        );
      })}
    </div>
  );
}

export default DefaultPortPolio;
