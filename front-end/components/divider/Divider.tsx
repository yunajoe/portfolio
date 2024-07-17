import classNames from "classnames/bind";

import styles from "./Divider.module.scss";
const cx = classNames.bind(styles);

type DividerProps = {
  customStyles?: React.CSSProperties;
};

function Divider({ customStyles }: DividerProps) {
  //  prop이 white로 고정되어 있땨.. 왜쥬?

  const combinedStyles = {
    ...customStyles,
  };
  return <div className={cx("divider")} style={customStyles}></div>;
}

export default Divider;
