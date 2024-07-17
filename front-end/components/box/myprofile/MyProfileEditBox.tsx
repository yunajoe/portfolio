"use client";

import CusTomAvatar from "@/components/avatar/CusTomAvatar";
import AddIcon from "@/public/icons/AddIcon";
import RightChevronIcon from "@/public/icons/RightChevronIcon";
import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { useAppSelector } from "@/src/app/lib/hooks";
import { Badge, UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";
import Link from "next/link";
import styles from "./MyProfileEditBox.module.scss";

const cx = classNames.bind(styles);

function MyProfileEditBox() {
  const { userData } = useAppSelector(selectAuth);

  console.log("userData", userData);

  return (
    <div>
      <section className={cx("first_section")}>
        <ol className={cx("profile")}>
          <li>
            <Link href="/myprofile">프로필</Link>
          </li>
          <li>
            <RightChevronIcon />
          </li>
          <li>프로필편집</li>
        </ol>
      </section>
      <section className={cx("second_section")}>
        <div className={cx("profile_initial_image")}>
          <CusTomAvatar userData={userData} size="100px" />

          <UnstyledButton className={cx("add_icon")}>
            <Badge circle size="30px" color="gray">
              <AddIcon style={{ width: "20px" }} />
            </Badge>
          </UnstyledButton>
        </div>

        <div>유저닉네임자리</div>
      </section>
    </div>
  );
}

export default MyProfileEditBox;
