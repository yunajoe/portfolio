import SectionHead from "@/components/section/SectionHead";
import ContactIcon from "@/public/icons/ContactIcon";
import classNames from "classnames/bind";
import { RefObject } from "react";
import styles from "./ContactSection.module.scss";
const cx = classNames.bind(styles);

type ContactSectionProps = {
  contactRef: RefObject<HTMLElement> | null;
};

function ContactSection({ contactRef }: ContactSectionProps) {
  return (
    <section className={cx("section")} id="home" ref={contactRef}>
      <div className={cx("overlay_container")}>
        <div className={cx("overlay")}>
          <div className={cx("contents")}>
            <SectionHead
              targetIcon={
                <ContactIcon style={{ width: "500px", height: "300px" }} />
              }
              title="CONTACT ME"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
