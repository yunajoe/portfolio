"use client";

import CreatePortPolioCard from "@/components/card/PortPolioCard/CreatePortPolioCard";
import PortPolioCard from "@/components/card/PortPolioCard/PortPolioCard";
import EditAndDeleteDropDown from "@/components/dropdown/EditAndDeleteDropDown";
import ModalPortal from "@/components/modal/ModalPortal";
import PortPolioDeleteModal from "@/components/modal/type/PortPolioDeleteModal";
import useDragAndDrop from "@/hooks/useDragAndDrop";
import useModal from "@/hooks/useModal";
import useToast from "@/hooks/useToast";
import { selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { selectPortPolioResult } from "@/src/app/lib/features/portpolio/portpolioResultSlice";
import {
  deletePortPolioStatusReset,
  selectStatus,
} from "@/src/app/lib/features/status/statusSlice";
import { useAppDispatch, useAppSelector } from "@/src/app/lib/hooks";
import { Item } from "@/types/portpolio";
import classNames from "classnames/bind";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./MyPortPolioContents.module.scss";
const cx = classNames.bind(styles);

function MyPortPolioContents() {
  const [isEditAndDeleteDropDown, setIsEditAndDeleteDropDown] = useState(false);
  const [isResumeNameEdit, setIsResumeNameEdit] = useState(false);
  const [deleteDropDownId, setDeleteDropDownId] = useState("");

  const useSelectAuth = useAppSelector(selectAuth);
  const usePortPolioResultSelector = useAppSelector(selectPortPolioResult);
  const useStatusSelector = useAppSelector(selectStatus);

  const { isDeleteModalOpen, setIsDeleteModalOpen } = useModal();

  const { userData } = useSelectAuth;
  const {
    savePortPolioStatus,
    deletePortPolioStatus,
    updatePortPolioNameStatus,
    updatePortPolioNameMessage,
  } = useStatusSelector;
  const { portpolio_detail_arr } = usePortPolioResultSelector;

  // console.log("포폴리스트", portpolio_detail_arr);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleDeleteModalOpen = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteModalClose = () => {
    setIsDeleteModalOpen(false);
  };

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
  const { newDataList, handleUpdateDataList } =
    useDragAndDrop(portpolio_detail_arr);

  useEffect(() => {
    if (userData._id) {
      dispatch({
        type: "GET_PORT_POLIO_DETAIL_LIST_REQUEST",
        users_table_id: userData._id,
      });
    }
    return () => {
      dispatch(deletePortPolioStatusReset());
    };
  }, [
    userData._id,
    updatePortPolioNameStatus,
    deletePortPolioStatus,
    savePortPolioStatus,
  ]);

  const navigateToDetailPage = (data: Item) => {
    if (deleteDropDownId !== "") return;
    router.push(`/myportpolio/edit/${data.portpolioId}`);
  };

  useToast(
    "portpolio_name",
    updatePortPolioNameStatus,
    updatePortPolioNameMessage
  );

  return (
    <div className={cx("grid_container")}>
      <CreatePortPolioCard />
      {/* portpolio_detail_arr. */}
      {newDataList.map((data, index) => {
        return (
          <div
            onClick={(e) => {
              e.stopPropagation();
              navigateToDetailPage(data);
            }}
            key={index}
            role="button"
            className={cx(
              isEditAndDeleteDropDown && data._id === deleteDropDownId
                ? "card_container_open"
                : "card_container"
            )}
          >
            <PortPolioCard
              data={data}
              deleteDropDownId={deleteDropDownId}
              setDeleteDropDownId={setDeleteDropDownId}
              isResumeNameEdit={isResumeNameEdit}
              setIsResumeNameEdit={setIsResumeNameEdit}
              setIsEditAndDeleteDropDown={setIsEditAndDeleteDropDown}
              // for드래그
              draggingIndex={index}
              newDataList={newDataList}
              handleUpdateDataList={handleUpdateDataList}
            />
            {isEditAndDeleteDropDown && data._id === deleteDropDownId && (
              <EditAndDeleteDropDown
                setDeleteDropDownId={setDeleteDropDownId}
                handleChangeResumeName={handleChangeResumeName}
                handleDeleteResume={handleDeleteResume}
                setIsResumeNameEdit={setIsResumeNameEdit}
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
          </div>
        );
      })}
    </div>
  );
}

export default MyPortPolioContents;
