"use client";

import CreatePortPolioCard from "@/components/card/PortPolioCard/CreatePortPolioCard";
import PortPolioCard from "@/components/card/PortPolioCard/PortPolioCard";
import EditAndDeleteDropDown from "@/components/dropdown/EditAndDeleteDropDown";
import ModalPortal from "@/components/modal/ModalPortal";
import PortPolioDeleteModal from "@/components/modal/type/PortPolioDeleteModal";
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
    updatePortPolioNameMessage,
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
      {portpolio_detail_arr.map((data, index) => {
        return (
          <div
            onClick={() => navigateToDetailPage(data)}
            key={index}
            role="button"
            className={cx("card_container")}
          >
            <PortPolioCard
              data={data}
              deleteDropDownId={deleteDropDownId}
              setDeleteDropDownId={setDeleteDropDownId}
              isResumeNameEdit={isResumeNameEdit}
              setIsResumeNameEdit={setIsResumeNameEdit}
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
          </div>
        );
      })}
    </div>
  );
}

export default MyPortPolioContents;