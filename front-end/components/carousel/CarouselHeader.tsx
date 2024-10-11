import LeftChevronIcon from "@/public/icons/LeftChevronIcon";
import RightChevronIcon from "@/public/icons/RightChevronIcon";
import classNames from "classnames/bind";
import Link from "next/link";
import styles from "./CarouselHeader.module.scss";
const cx = classNames.bind(styles);

type CarouselHeaderProps = {
  handlePrev: () => void;
  handleNext: () => void;
};

function CarouselHeader({ handlePrev, handleNext }: CarouselHeaderProps) {
  return (
    <div className={cx("carousel_header")}>
      <h4 className={cx("title")}>내가 관심있을 만한 포지션</h4>
      <div className={cx("arrow_container")}>
        <Link href="" style={{ textDecoration: "none" }}>
          전체보기
        </Link>
        <div className={cx("button_container")}>
          <button className={cx("button")} onClick={handlePrev}>
            <LeftChevronIcon />
          </button>
          <button className={cx("button")} onClick={handleNext}>
            <RightChevronIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarouselHeader;
