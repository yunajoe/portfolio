import classNames from "classnames/bind";
import styles from "./Banner.module.scss";

const cx = classNames.bind(styles);

//  carousel로 해보기?
function Banner() {
  return (
    <div className={cx("")}>
      <picture>
        <img />
      </picture>
      <button></button>
    </div>
  );
}

export default Banner;
