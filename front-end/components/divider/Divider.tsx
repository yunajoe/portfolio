import classNames from "classnames/bind";

import styles from "./Divider.module.scss";
const cx = classNames.bind(styles);

type DividerProps = {
  color: "white" | "gray";
  customStyles?: React.CSSProperties;
};

function Divider({ customStyles, color }: DividerProps) {
  //  prop이 white로 고정되어 있땨.. 왜쥬?
  console.log("color", color);
  const combinedStyles = {
    ...customStyles,
  };
  return <div className={cx("divider")} style={customStyles}></div>;
}

export default Divider;
