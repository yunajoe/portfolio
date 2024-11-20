import EnrolledCareerDate from "@/components/date/EnrolledCareerDate";
import EnrolledSchoolDate from "@/components/date/EnrolledSchoolDate";
import SectionHead from "@/components/section/SectionHead";
import ResumeIcon from "@/public/icons/ResumeIcon";

import { Item } from "@/schemas/portfolio";
import { ScrollArea } from "@mantine/core";
import classNames from "classnames/bind";
import { RefObject } from "react";
import styles from "./ResumeSection.module.scss";
const cx = classNames.bind(styles);
type ResumeSectionProps = {
  portpolioData: Item;
  resumeRef: RefObject<HTMLElement> | null;
};
function ResumeSection({ portpolioData, resumeRef }: ResumeSectionProps) {
  const { careerList, educationList } = portpolioData;

  return (
    <section className={cx("section")} id="home" ref={resumeRef}>
      <div className={cx("overlay_container")}>
        <div className={cx("overlay")}>
          <div className={cx("contents")}>
            <ScrollArea h={1000}>
              <div className={cx("scroll_area")}>
                <SectionHead
                  targetIcon={
                    <ResumeIcon style={{ width: "300px", height: "300px" }} />
                  }
                  title="RESUME"
                />
                <div className={cx("education_and_work_container")}>
                  <div className={cx("education_container")}>
                    {careerList.map((item, index) => {
                      return (
                        <li key={index} className={cx("item")}>
                          <EnrolledCareerDate item={item} />
                          <span className={cx("company_name")}>
                            {item.companyName}
                          </span>
                          <span className={cx("position")}>
                            {item.position}
                          </span>
                        </li>
                      );
                    })}
                  </div>
                  <div className={cx("work_container")}>
                    {educationList.map((item, index) => {
                      return (
                        <li key={index} className={cx("item")}>
                          <EnrolledSchoolDate item={item} />
                          <span className={cx("school_name")}>
                            {item.schoolName}
                          </span>
                          <span className={cx("major")}>{item.major}</span>
                        </li>
                      );
                    })}
                  </div>
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResumeSection;
