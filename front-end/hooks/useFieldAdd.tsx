import {
  careerFieldAdd,
  educationFieldAdd,
} from "@/src/app/lib/features/portpolio/portpolioSlice";
import { useAppDispatch } from "@/src/app/lib/hooks";

function useFieldAdd() {
  const dispatch = useAppDispatch();

  return {
    careerAddFunction: () => {
      dispatch(
        careerFieldAdd({
          companyName: "",
          status: "정규직",
          position: "",
          companyDate: {
            startYear: "",
            startMonth: "",
            endYear: "",
            endMonth: "",
          },
        })
      );
    },
    educationAddFunction: () => {
      dispatch(
        educationFieldAdd({
          schoolName: "",
          major: "",
          schoolDate: {
            startYear: "",
            startMonth: "",
            endYear: "",
            endMonth: "",
          },
        })
      );
    },
  };
}

export default useFieldAdd;
