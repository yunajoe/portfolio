
import LoadingSpinner from "@/components/style/LoadingSpinner";
import classNames from "classnames/bind";
import styles from "./loading.module.scss";
const cx = classNames.bind(styles);

function Loading() {
  return (
    <div className={cx("container")}>
      <LoadingSpinner /> 
    </div>
  );
}

export default Loading;
