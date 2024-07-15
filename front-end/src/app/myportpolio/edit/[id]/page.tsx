"use client";
import CareerFieldBox from "@/components/box/CareerFieldBox";
import EducationFieldBox from "@/components/box/EducationFieldBox";
import InputBox from "@/components/box/InputBox";
import IntroduceBox from "@/components/box/IntroduceBox";
import { career, intro, school } from "@/constant/text";
import { ToastContext } from "@/context/ToastContext";
import AddIcon from "@/public/icons/AddIcon";
import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import {
  careerFieldAdd,
  educationFieldAdd,
  selectPortPolio,
} from "@/src/app/lib/features/portpolio/portpolioSlice";
import { selectSearch } from "@/src/app/lib/features/search/searchSlice";
import {
  defaultPortPolioReset,
  selectStatus,
} from "@/src/app/lib/features/status/statusSlice";
import { useAppDispatch, useAppSelector } from "@/src/app/lib/hooks";
import MyPortPolioEditLayout from "@/src/app/myportpolio/edit/[id]/layout";
import {
  preprocessingCompany,
  preprocessingMajor,
} from "@/utils/preprecessingApiData";
import { Box, Button, Flex, Text, UnstyledButton } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";
import { useContext, useEffect, useMemo } from "react";
function PortPolioEdit() {
  const usePortPolioSelector = useAppSelector(selectPortPolio);
  const useSearchSelector = useAppSelector(selectSearch);
  const useStatusSelector = useAppSelector(selectStatus);
  const useAuthSelector = useAppSelector(selectAuth);

  // 66930d5b0a819067b60e356f
  const { introText, careerList, educationList } = usePortPolioSelector;

  const { majorData, companyData } = useSearchSelector;
  const { defaultPortPolioStatus, defaultPortPolioMessage } = useStatusSelector;
  const { userData } = useAuthSelector;

  const filteredMajorArr = preprocessingMajor(majorData);

  const filteredCompanyArr = preprocessingCompany(companyData);

  const toast = useContext(ToastContext);

  const router = useRouter();
  const pathname = usePathname();

  const portpolioId = pathname.split("edit/")[1];

  const defaultResumeBox = (
    <>
      {usePortPolioSelector.defaultResume ? (
        <Box w="100%" ta="right" p="15px" bg="#f8f5ff" mb="10px">
          <Text c="#8958fa" ta="left" fw={700}>
            기본 이력서
          </Text>
        </Box>
      ) : (
        <Box w="100%" ta="right" p="15px" bg="#f8f8f8" mb="10px">
          <UnstyledButton
            c="#36f"
            fw={700}
            onClick={() =>
              handleChangeToDefaultResume(userData._id, portpolioId)
            }
          >
            기본이력서로 설정하기
          </UnstyledButton>
        </Box>
      )}
    </>
  );

  const dispatch = useAppDispatch();

  const handleCompleteButton = () => {
    if (
      introText.length !== 0 &&
      careerList.length !== 0 &&
      educationList.length !== 0
    ) {
      dispatch({
        type: "SAVE_PORT_POLIO_REQUEST",
        portpolioId: portpolioId,
        introText: introText,
        careerList: careerList,
        educationList: educationList,
      });

      router.push("/myportpolio");
    }
  };

  const educationListMemo = useMemo(() => {
    return usePortPolioSelector.educationList;
  }, [usePortPolioSelector.educationList]);

  const careerListMemo = useMemo(() => {
    return usePortPolioSelector.careerList;
  }, [usePortPolioSelector.careerList]);

  const handleCareerAddButton = () => {
    if (careerListMemo.length === 0) {
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
    } else if (
      careerListMemo.at(0)?.companyName &&
      careerListMemo.at(0)?.position
    ) {
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
    }
  };

  const handleEducationAddButton = () => {
    if (educationListMemo.length === 0) {
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
    } else if (
      educationListMemo.at(0)?.schoolName &&
      educationListMemo.at(0)?.major
    ) {
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
    }
  };

  useEffect(() => {
    dispatch({ type: "MAJOR_LIST_REQUEST" });
    dispatch({ type: "COMPANY_LIST_REQUEST" });
    return () => {
      dispatch(defaultPortPolioReset());
    };
  }, []);

  useEffect(() => {
    dispatch({
      type: "GET_PORT_POLIO_DETAIL_REQUEST",
      portpolioId: portpolioId,
    });
  }, [portpolioId, defaultPortPolioStatus]);

  const handleChangeToDefaultResume = (
    users_table_id: string,
    portpolioId: string
  ) => {
    dispatch({
      type: "UPDATE_DEFAULT_PORT_POLIO_REQUEST",
      users_table_id: users_table_id,
      portpolio_id: portpolioId,
    });
  };

  useEffect(() => {
    if (defaultPortPolioStatus === 200) {
      toast?.open(defaultPortPolioMessage);
    }
  }, [defaultPortPolioStatus]);

  return (
  
      <MyPortPolioEditLayout>
        {defaultResumeBox}
        <InputBox title="간단소개글" description={intro} />
        <IntroduceBox introText={introText} />
        <InputBox title="경력" description={career} />
        <Flex justify="flex-start" align="center" gap="2px" mb="10px">
          <AddIcon style={{ width: "15px", height: "20px" }} />
          <Text
            style={{ cursor: "pointer" }}
            onClick={handleCareerAddButton}
            c="blue"
            fw={700}
          >
            추가
          </Text>
        </Flex>
        <div style={{ marginBottom: "30px" }}>
          {careerListMemo.length > 0 &&
            careerListMemo.map((item, index) => {
              return (
                <div key={item.id}>
                  <CareerFieldBox
                    item={item}
                    portpolioId={portpolioId}
                    index={index}
                    companyList={filteredCompanyArr}
                  />
                </div>
              );
            })}
        </div>
        <InputBox title="학력" description={school} />
        <Flex justify="flex-start" align="center" gap="2px" mb="10px">
          <AddIcon style={{ width: "15px", height: "20px" }} />
          <Text
            style={{ cursor: "pointer" }}
            onClick={handleEducationAddButton}
            c="blue"
            fw={700}
          >
            추가
          </Text>
        </Flex>
        {educationListMemo.length > 0 &&
          educationListMemo.map((item, index) => {
            return (
              <div key={item.id}>
                <EducationFieldBox
                  item={item}
                  portpolioId={portpolioId}
                  index={index}
                  majorList={filteredMajorArr}
                />
              </div>
            );
          })}

        <Button onClick={handleCompleteButton}>작성 완료</Button>
      </MyPortPolioEditLayout>
 
  );
}

export default PortPolioEdit;
