import classNames from "classnames/bind";
import styles from "./LoadingSpinner.module.scss";
const cx = classNames.bind(styles);
function LoadingSpinner() {
  return <div className={cx("loader")}></div>;
}

export default LoadingSpinner;
