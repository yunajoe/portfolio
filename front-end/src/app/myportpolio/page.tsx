"use client";

import CreatePortPolioCard from "@/components/card/PortPolioCard/CreatePortPolioCard";
import PortPolioCardBody from "@/components/card/PortPolioCard/PortPolioCardBody";
import PortPolioCardBottom from "@/components/card/PortPolioCard/PortPolioCardBottom";
import PortPolioCardHeader from "@/components/card/PortPolioCard/PortPolioCardHeader";
import Divider from "@/components/divider/Divider";
import EditAndDeleteDropDown from "@/components/dropdown/EditAndDeleteDropDown";
import ModalPortal from "@/components/modal/ModalPortal";
import PortPolioDeleteModal from "@/components/modal/type/PortPolioDeleteModal";
import MainNavBar from "@/components/navbar/MainNavBar";
import useModal from "@/hooks/useModal";
import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { selectPortPolioResult } from "@/src/app/lib/features/portpolio/portpolioResultSlice";
import {
  selectStatus,
  updatePortPolioNameStatusReset,
} from "@/src/app/lib/features/status/statusSlice";
import { useAppDispatch, useAppSelector } from "@/src/app/lib/hooks";
import { Item } from "@/types/portpolio";
import { UnstyledButton } from "@mantine/core";
import classNames from "classnames/bind";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./layout.module.scss";
const cx = classNames.bind(styles);

function Page() {
  const [isEditAndDeleteDropDown, setIsEditAndDeleteDropDown] = useState(false);
  const [deleteDropDownId, setDeleteDropDownId] = useState("");
  const [isResumeNameEdit, setIsResumeNameEdit] = useState(false);

  const useSelectAuth = useAppSelector(selectAuth);
  const usePortPolioResultSelector = useAppSelector(selectPortPolioResult);
  const useStatusSelector = useAppSelector(selectStatus);

  // 모달
  const { isDeleteModalOpen, handleDeleteModalOpen, handleDeleteModalClose } =
    useModal();

  const { isLogin, message, status, userData } = useSelectAuth;
  const {
    savePortPolioStatus,
    deletePortPolioStatus,
    updatePortPolioNameStatus,
  } = useStatusSelector;
  const { portpolio_detail_arr } = usePortPolioResultSelector;

  const dispatch = useAppDispatch();
  const router = useRouter();

  // 이력서 이름 변경 펑션
  const handleChangeResumeName = () => {
    setIsResumeNameEdit(true);
    setIsEditAndDeleteDropDown(false);
  };

  // 이력서 삭제 펑션
  const handleDeleteResume = () => {
    handleDeleteModalOpen();
    setIsEditAndDeleteDropDown(false);
  };

  useEffect(() => {
    if (userData._id) {
      dispatch({
        type: "GET_PORT_POLIO_DETAIL_LIST_REQUEST",
        users_table_id: userData._id,
      });
    }
  }, [
    userData._id,
    updatePortPolioNameStatus,
    deletePortPolioStatus,
    savePortPolioStatus,
  ]);

  useEffect(() => {
    if (useStatusSelector.updatePortPolioNameStatus === 200) {
      dispatch(updatePortPolioNameStatusReset());
    }
  }, [useStatusSelector.updatePortPolioNameStatus]);

  const navigateToDetailPage = (data: Item) => {
    if (deleteDropDownId !== "") return;
    router.push(`/myportpolio/edit/${data.portpolioId}`);
  };

  return (
    <>
      <MainNavBar />
      <div className={cx("grid_container")}>
        <CreatePortPolioCard />
        {portpolio_detail_arr.map((data, index) => {
          return (
            <UnstyledButton
              onClick={() => navigateToDetailPage(data)}
              key={index}
              bg="blue"
              h="200px"
              style={{
                cursor: "pointer",
                position: "relative",
                zIndex: 5,
                border: "1px solid #dbdbdb",
              }}
            >
              <PortPolioCardHeader data={data} />
              <PortPolioCardBody
                data={data}
                deleteDropDownId={deleteDropDownId}
                isResumeNameEdit={isResumeNameEdit}
                setIsResumeNameEdit={setIsResumeNameEdit}
              />
              <Divider
                customStyles={{
                  position: "absolute",
                  width: "100%",
                  bottom: "25px",
                }}
              />
              <PortPolioCardBottom
                data={data}
                setDeleteDropDownId={setDeleteDropDownId}
                setIsEditAndDeleteDropDown={setIsEditAndDeleteDropDown}
              />
              {isEditAndDeleteDropDown && data._id === deleteDropDownId && (
                <EditAndDeleteDropDown
                  setDeleteDropDownId={setDeleteDropDownId}
                  handleChangeResumeName={handleChangeResumeName}
                  handleDeleteResume={handleDeleteResume}
                />
              )}
              {isDeleteModalOpen && data._id === deleteDropDownId && (
                <ModalPortal>
                  <PortPolioDeleteModal
                    onClose={handleDeleteModalClose}
                    users_table_id={data.users_table_id}
                    portpolio_id={data.portpolioId}
                    setDeleteDropDownId={setDeleteDropDownId}
                  />
                </ModalPortal>
              )}
            </UnstyledButton>
          );
        })}
      </div>
    </>
  );
}

export default Page;
