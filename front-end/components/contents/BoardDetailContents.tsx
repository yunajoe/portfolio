"use client";
import classNames from "classnames/bind";
import Image from "next/image";
import styles from "./BoardDetailContents.module.scss";
const cx = classNames.bind(styles);

type BoardDetailContentsProps = {
  portpolioId: string;
};

function BoardDetailContents({ portpolioId }: BoardDetailContentsProps) {
  return (
    <div>
      <div className="slide-menu-container">
        <div className="slide-menu">
          <div className="user-info">
            <div className="image-box">
              <Image
                src="/profile.png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </div>
          <div className="navigation">
            <ul>
              <li>Home</li>
              <li>ABOUT ME</li>
              <li>PORTPOLIO</li>
              <li>RESUME</li>
              <li>CONTACT ME</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardDetailContents;
