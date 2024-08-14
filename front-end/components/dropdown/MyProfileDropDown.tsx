import useOnClickOutside from "@/hooks/useOnClickOutside";
import NonFillPersonIcon from "@/public/icons/NonFillPersonIcon";
import PencilIcon from "@/public/icons/PencilIcon";
import { Text } from "@mantine/core";
import classNames from "classnames/bind";
import Link from "next/link";
import { useRef } from "react";
import styles from "./MyProfileDropDown.module.scss";

const cx = classNames.bind(styles);

type MyProfileDropDownProps = {
  handleCloseSetting: () => void;
};

function MyProfileDropDown({ handleCloseSetting }: MyProfileDropDownProps) {
  const ref = useRef(null);
  useOnClickOutside(ref, handleCloseSetting);
  return (
    <div className={cx("container")} ref={ref}>
      <ul className={cx("myprofile_edit_container")}>
        <Link className={cx("item")} href="/myprofile/edit">
          <PencilIcon />
          <Text>프로필편집</Text>
        </Link>

        <Link href="/myprofile/setting" className={cx("item")}>
          <NonFillPersonIcon style={{ width: "25px", height: "25px" }} />
          <Text>계정설정</Text>
        </Link>
      </ul>
    </div>
  );
}

export default MyProfileDropDown;
