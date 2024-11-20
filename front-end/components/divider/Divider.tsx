import classNames from "classnames/bind";
import styles from "./Divider.module.scss";
const cx = classNames.bind(styles);

type DividerProps = {
  customStyles?: React.CSSProperties;
};

function Divider({ customStyles }: DividerProps) {
  return <div className={cx("divider")} style={customStyles}></div>;
}

export default Divider;
