"use client";

import CareerDate from "@/components/date/CareerDate";
import ModalInput from "@/components/input/ModalInput";
import SearchModalContent from "@/components/modal/content/SearchModalContent";
import ModalPortal from "@/components/modal/ModalPortal";
import SearchModal from "@/components/modal/type/SearchModal";
import useModal from "@/hooks/useModal";
import { careerFieldEdit } from "@/src/app/lib/features/portpolio/portpolioSlice";
import { useAppDispatch } from "@/src/app/lib/hooks";
import { CareerType } from "@/types/portpolio";
import { Box, Flex, Pill, Stack, TextInput } from "@mantine/core";
import { IconX } from "@tabler/icons-react";

import CareerFieldDeleteModal from "@/components/modal/type/CareerFieldDeleteModal";
import classNames from "classnames/bind";
import { ChangeEvent, useCallback, useState } from "react";
import styles from "./FieldBox.module.css";
const cx = classNames.bind(styles);

type FieldBoxProps = {
  item: CareerType;
  index: number;
  portpolioId: string;
  companyList: string[];
};

function CareerFieldBox({ item, index, companyList }: FieldBoxProps) {
  // 회사
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState<string[]>([]);
  const [isClick, setIsClick] = useState(false);
  const [isCompanyItemClick, setIsCompanyItemClick] = useState(false);

  // stasuts
  const [statusValue, setStatusValue] = useState("정규직");
  const [isStatusClick, setIsStatusClick] = useState(false);

  // 모달
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
      callback: (value: string) => {
        if (value.length > 0) {
          const result = companyList.filter((company: string) => {
            return company.includes(value);
          });
          setSearchResult([...result]);
        } else {
          setSearchResult([]);
        }
      },
      delay: 500,
    }),
    [searchValue]
  );
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    printValue(event.target.value);
    setSearchValue(event.target.value);
  };

  const handlePositionValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      careerFieldEdit({
        id: item.id,
        companyName: item.companyName,
        status: item.status,
        position: event.target.value,
        companyDate: item.companyDate,
      })
    );
  };

  const content = (
    <div>
      <SearchModalContent
        data={searchResult}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        item={item}
        statusValue={statusValue}
        setStatusValue={setStatusValue}
        setSearchResult={setSearchResult}
        isClick={isClick}
        setIsClick={setIsClick}
        isCompanyItemClick={isCompanyItemClick}
        setIsCompanyItemClick={setIsCompanyItemClick}
        isStatusClick={isStatusClick}
        setIsStatusClick={setIsStatusClick}
        handleChangeFunc={handleInputChange}
        close={handleClose}
      />
    </div>
  );

  return (
    <>
      <Flex className={cx("container")}>
        <Stack>
          <CareerDate item={item} />
        </Stack>
        <Box w="100%">
          <Flex w="100%" justify="space-between" align="center">
            <Flex align="center">
              <ModalInput
                placeholder="회사명"
                value={item.companyName}
                onClick={handleSearchModal}
              />
              {item.companyName.length > 0 && item.status.length > 0 && (
                <Pill size="sm">{item.status}</Pill>
              )}
            </Flex>
            <IconX
              stroke={1}
              style={{
                cursor: "pointer",
                padding: "1px",
              }}
              onClick={handleDeleteModalOpen}
            />
          </Flex>
          <TextInput
            variant="unstyled"
            placeholder="부서명/직책"
            value={item.position}
            onChange={handlePositionValueChange}
          />
        </Box>
      </Flex>
      {isOpen && (
        <ModalPortal>
          <SearchModal
            title="직장검색"
            content={content}
            close={handleClose}
            reset={handleResetModal}
            setIsClick={setIsClick}
            setIsItemClick={setIsCompanyItemClick}
          />
        </ModalPortal>
      )}
      {isDeleteModalOpen && (
        <ModalPortal>
          <CareerFieldDeleteModal
            onClose={handleDeleteModalClose}
            index={index}
          />
        </ModalPortal>
      )}
    </>
  );
}

export default CareerFieldBox;
