"use client";
import { searchSchoolByName } from "@/api/search";

import EducationDate from "@/components/date/EducationDate";
import ModalInput from "@/components/input/ModalInput";
import SearchEducationModalContent from "@/components/modal/content/SearchEducationModalContent";
import ModalPortal from "@/components/modal/ModalPortal";
import SearchModal from "@/components/modal/type/SearchModal";
import MajorSearchResult from "@/components/search/MajorSearchResult";

import useModal from "@/hooks/useModal";
import {
  EducationType,
  educationFieldEdit,
} from "@/src/app/lib/features/portpolio/portpolioSlice";
import { useAppDispatch } from "@/src/app/lib/hooks";
import { SchoolItem } from "@/types/api";
import { removeDuplicatedSchool } from "@/utils/preprecessingApiData";
import { Box, Flex, Stack, TextInput } from "@mantine/core";
import { IconX } from "@tabler/icons-react";

import EducationFieldDeleteModal from "@/components/modal/type/EducationFieldDeleteModal";
import classNames from "classnames/bind";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import styles from "./FieldBox.module.scss";
const cx = classNames.bind(styles);

type FieldBoxProps = {
  item: EducationType;
  index: number;
  portpolioId: string;
  majorList: string[];
};
function EducationFieldBox({
  item,
  portpolioId,
  index,
  majorList,
}: FieldBoxProps) {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState<SchoolItem[]>([]);

  // 전공
  const [searchMajorValue, setSearchMajorValue] = useState("");
  const [isClick, setIsClick] = useState(false);
  const [isSchoolItemClick, setIsSchoolItemClick] = useState(false);
  const [isMajorMenuClick, setIsMajorMenuClick] = useState(false);

  const {
    isOpen,
    handleOpen,
    handleClose,
    isDeleteModalOpen,
    handleDeleteModalOpen,
    handleDeleteModalClose,
  } = useModal();
  const dispatch = useAppDispatch();

  type DebounceFunctionTypes = {
    callback: Function;
    delay: number;
  };
  const handleSearchModal = () => {
    handleOpen();
  };

  const handleResetModal = () => {
    setSearchValue("");
    setSearchResult([]);
  };

  const debounceFunction = ({ callback, delay }: DebounceFunctionTypes) => {
    let timer: any;
    return (...args: string[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };

  const printValue = useCallback(
    debounceFunction({
      callback: async (value: string) => {
        if (value.length > 0) {
          const result = await searchSchoolByName(value);
          const data = removeDuplicatedSchool(result.data);
          setSearchResult(data);
        } else {
          setSearchResult([]);
        }
      },
      delay: 500,
    }),
    []
  );
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    printValue(event.target.value);
    setSearchValue(event.target.value);
  };

  const content = (
    <>
      <SearchEducationModalContent
        data={searchResult}
        item={item}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setSearchResult={setSearchResult}
        handleChangeFunc={handleInputChange}
        isClick={isClick}
        setIsClick={setIsClick}
        isSchoolItemClick={isSchoolItemClick}
        setIsSchoolItemClick={setIsSchoolItemClick}
        close={handleClose}
      />
    </>
  );

  const handleMajorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsMajorMenuClick(true);
    setSearchMajorValue(event.target.value);

    dispatch(
      educationFieldEdit({
        id: item.id,
        schoolDate: item.schoolDate,
        schoolName: item.schoolName,
        major: event.target.value,
      })
    );
  };

  const searchMajorListMemo = useMemo(() => {
    if (item.major.length > 0) {
      const result = majorList.filter((data) => data.includes(item.major));
      return result;
    }
    return [];
  }, [item.major, majorList]);

  return (
    <div>
      <Flex className={cx("container")}>
        <Stack>
          <EducationDate item={item} />
        </Stack>
        <Box w="100%">
          <Flex w="100%" justify="space-between" align="center">
            <ModalInput
              placeholder="학교명"
              value={item.schoolName}
              onClick={handleSearchModal}
            />
            <IconX
              stroke={1}
              style={{ cursor: "pointer", padding: "1px" }}
              onClick={handleDeleteModalOpen}
            />
          </Flex>
          {/* 전공 인풋 */}
          <div className={cx("major_input_container")}>
            <TextInput
              variant="unstyled"
              placeholder="전공 및 학위(ex: 경제학과 학사)"
              value={item.major}
              onClick={() => setIsMajorMenuClick(true)}
              onChange={(event) => handleMajorChange(event)}
            />
            {isMajorMenuClick && searchMajorValue.length > 0 && (
              <MajorSearchResult
                data={searchMajorListMemo}
                item={item}
                searchMajorValue={searchMajorValue}
                setSearchMajorValue={setSearchMajorValue}
                setIsMajorMenuClick={setIsMajorMenuClick}
              />
            )}
          </div>
        </Box>
      </Flex>

      {/* 모달 나오는거 */}
      {isOpen && (
        <ModalPortal>
          <SearchModal
            title="학교검색"
            content={content}
            close={handleClose}
            reset={handleResetModal}
            setIsClick={setIsClick}
            setIsItemClick={setIsSchoolItemClick}
          />
        </ModalPortal>
      )}
      {isDeleteModalOpen && (
        <ModalPortal>
          <EducationFieldDeleteModal
            onClose={handleDeleteModalClose}
            index={index}
          />
        </ModalPortal>
      )}
    </div>
  );
}

export default EducationFieldBox;
