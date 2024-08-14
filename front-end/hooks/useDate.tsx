import {
  careerFieldEdit,
  educationFieldEdit,
} from "@/src/app/lib/features/portpolio/portpolioSlice";
import React from "react";
import { useDispatch } from "react-redux";

function useDate(dispatchname: string, item: any) {
  const dispatch = useDispatch();

  const handleStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (dispatchname === "career/date") {
      const { name, value } = e.target;

      const nonNumberValue = value.replace(/[^0-9]/g, "");
      switch (name) {
        case "startYear":
          dispatch(
            careerFieldEdit({
              id: item.id,
              companyName: item.companyName,
              status: item.status,
              position: item.position,
              companyDate: {
                startYear: nonNumberValue,
                startMonth: item.companyDate?.startMonth,
                endYear: item.companyDate?.endYear,
                endMonth: item.companyDate?.endMonth,
              },
              isCurrent: item.isCurrent,
            })
          );

          break;
        case "startMonth":
          dispatch(
            careerFieldEdit({
              id: item.id,
              companyName: item.companyName,
              status: item.status,
              position: item.position,
              companyDate: {
                startYear: item.companyDate?.startYear,
                startMonth: nonNumberValue,
                endYear: item.companyDate?.endYear,
                endMonth: item.companyDate?.endMonth,
              },
              isCurrent: item.isCurrent,
            })
          );
          break;
      }
    } else if (dispatchname === "education/date") {
      const { name, value } = e.target;
      const nonNumberValue = value.replace(/[^0-9]/g, "");
      switch (name) {
        case "startYear":
          dispatch(
            educationFieldEdit({
              id: item.id,
              schoolName: item.schoolName,
              major: item.major,
              schoolDate: {
                startYear: nonNumberValue,
                startMonth: item.schoolDate?.startMonth,
                endYear: item.schoolDate?.endYear,
                endMonth: item.schoolDate?.endMonth,
              },
              isCurrent: item.isCurrent,
            })
          );
          break;
        case "startMonth":
          dispatch(
            educationFieldEdit({
              id: item.id,
              schoolName: item.schoolName,
              major: item.major,
              schoolDate: {
                startYear: item.schoolDate?.startYear,
                startMonth: nonNumberValue,
                endYear: item.schoolDate?.endYear,
                endMonth: item.schoolDate?.endMonth,
              },
              isCurrent: item.isCurrent,
            })
          );
      }
    }
  };
  const handleEndDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (dispatchname === "career/date") {
      const { name, value } = e.target;
      const nonNumberValue = value.replace(/[^0-9]/g, "");
      switch (name) {
        case "endYear":
          dispatch(
            careerFieldEdit({
              id: item.id,
              companyName: item.companyName,
              status: item.status,
              position: item.position,
              companyDate: {
                startYear: item.companyDate?.startYear,
                startMonth: item.companyDate?.startMonth,
                endYear: nonNumberValue,
                endMonth: item.companyDate?.endMonth,
              },
              isCurrent: item.isCurrent,
            })
          );
          break;
        case "endMonth":
          dispatch(
            careerFieldEdit({
              id: item.id,
              companyName: item.companyName,
              status: item.status,
              position: item.position,
              companyDate: {
                startYear: item.companyDate?.startYear,
                startMonth: item.companyDate?.startMonth,
                endYear: item.companyDate?.endYear,
                endMonth: nonNumberValue,
              },
              isCurrent: item.isCurrent,
            })
          );
      }
    } else if (dispatchname === "education/date") {
      const { name, value } = e.target;
      const nonNumberValue = value.replace(/[^0-9]/g, "");
      switch (name) {
        case "endYear":
          dispatch(
            educationFieldEdit({
              id: item.id,
              schoolName: item.schoolName,
              major: item.major,
              schoolDate: {
                startYear: item.schoolDate?.startYear,
                startMonth: item.schoolDate?.startMonth,
                endYear: nonNumberValue,
                endMonth: item.schoolDate?.endMonth,
              },
              isCurrent: item.isCurrent,
            })
          );
          break;
        case "endMonth":
          dispatch(
            educationFieldEdit({
              id: item.id,
              schoolName: item.schoolName,
              major: item.major,
              schoolDate: {
                startYear: item.schoolDate?.startYear,
                startMonth: item.schoolDate?.startMonth,
                endYear: item.schoolDate?.endYear,
                endMonth: nonNumberValue,
              },
              isCurrent: item.isCurrent,
            })
          );
      }
    }
  };

  return {
    handleStartDate,
    handleEndDate,
  };
}

export default useDate;
