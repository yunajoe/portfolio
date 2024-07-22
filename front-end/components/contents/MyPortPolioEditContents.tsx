"use client";
import CareerFieldBox from "@/components/box/myportpolio/CareerFieldBox";
import DescriptionBox from "@/components/box/myportpolio/DescriptionBox";
import EducationFieldBox from "@/components/box/myportpolio/EducationFieldBox";
import IntroduceBox from "@/components/box/myportpolio/IntroduceBox";
import PortPolioNameBox from "@/components/box/myportpolio/PortPolioNameBox";
import ProfileBox from "@/components/box/myportpolio/ProfileBox";
import MyPortPolioEditButton from "@/components/button/MyPortPolioEditButton";
import { career, intro, school } from "@/constant/text";
import useFieldAdd from "@/hooks/useFieldAdd";
import useToast from "@/hooks/useToast";
import AddIcon from "@/public/icons/AddIcon";
import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { selectPortPolio } from "@/src/app/lib/features/portpolio/portpolioSlice";
import { selectStatus } from "@/src/app/lib/features/status/statusSlice";
import { useAppDispatch, useAppSelector } from "@/src/app/lib/hooks";
import { CompanyItem, MajorItem } from "@/types/api";
import {
  preprocessingCompany,
  preprocessingMajor,
} from "@/utils/preprecessingApiData";
import { Box, Flex, Text, UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";
import styles from "./MyPortPolioListContents.module.scss";
const cx = classNames.bind(styles);

type MyPortPolioEditContents = {
  majorList: MajorItem[];
  companyList: CompanyItem[];
};

function MyPortPolioEditContents({
  majorList,
  companyList,
}: MyPortPolioEditContents) {
  const usePortPolioSelector = useAppSelector(selectPortPolio);
  const useStatusSelector = useAppSelector(selectStatus);
  const useAuthSelector = useAppSelector(selectAuth);

  const { portpolioName, introText, careerList, educationList } =
    usePortPolioSelector;
  const { defaultPortPolioStatus, defaultPortPolioMessage } = useStatusSelector;
  const { userData } = useAuthSelector;

  const filteredMajorArr = preprocessingMajor(majorList);

  const filteredCompanyArr = preprocessingCompany(companyList);

  const router = useRouter();
  const pathname = usePathname();

  const portpolioId = pathname.split("edit/")[1];

  useToast("portpolio", defaultPortPolioStatus, defaultPortPolioMessage);

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

  const { careerAddFunction, educationAddFunction } = useFieldAdd();

  const handleCareerAddButton = () => {
    if (careerListMemo.length === 0) {
      careerAddFunction();
    } else if (
      careerListMemo.at(0)?.companyName &&
      careerListMemo.at(0)?.position
    ) {
      careerAddFunction();
    }
  };

  const handleEducationAddButton = () => {
    if (educationListMemo.length === 0) {
      educationAddFunction();
    } else if (
      educationListMemo.at(0)?.schoolName &&
      educationListMemo.at(0)?.major
    ) {
      educationAddFunction();
    }
  };

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
    dispatch({
      type: "GET_PORT_POLIO_DETAIL_REQUEST",
      portpolioId: portpolioId,
    });
  }, [portpolioId, defaultPortPolioStatus]);

  return (
    <>
      <div className={cx("container")}>
        {defaultResumeBox}
        <div className={cx("portpolio_name_container")}>
          <PortPolioNameBox portpolioName={portpolioName} />
        </div>
        <div className={cx("profile_container")}>
          <ProfileBox userData={userData} />
        </div>
        <DescriptionBox title="간단소개글" description={intro} />
        <IntroduceBox introText={introText} />
        <DescriptionBox title="경력" description={career} />
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
        <DescriptionBox title="학력" description={school} />
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
      </div>
      <MyPortPolioEditButton
        introText={introText}
        careerList={careerList}
        educationList={educationList}
        onClick={handleCompleteButton}
      />
    </>
  );
}

export default MyPortPolioEditContents;
