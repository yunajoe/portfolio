"use client";
import { Item } from "@/types/portpolio";
import classNames from "classnames/bind";
import styles from "./DefaultPortPolio.module.scss";

const cx = classNames.bind(styles);

type DefaultPortPolioProps = {
  data: Item[];
};

function DefaultPortPolio({ data }: DefaultPortPolioProps) {
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
