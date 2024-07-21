// function MyPortPolioListContents() {
//   return (
//     <div className={cx("grid_container")}>
//       <CreatePortPolioCard />
//       {portpolio_detail_arr.map((data, index) => {
//         return (
//           <UnstyledButton
//             onClick={() => navigateToDetailPage(data)}
//             key={index}
//             bg="blue"
//             h="200px"
//             style={{
//               cursor: "pointer",
//               position: "relative",
//               zIndex: 5,
//               border: "1px solid #dbdbdb",
//             }}
//           >
//             <Text style={{ marginBottom: "5px" }}>
//               {data.defaultResume && <Pill radius={5}>기본이력서</Pill>}
//             </Text>
//             {isResumeNameEdit && data._id === deleteDropDownId ? (
//               <PortPolioName
//                 usersTableId={data.users_table_id}
//                 portpolioId={data.portpolioId}
//                 portpolioName={data.portpolio_name}
//                 isResumeNameEdit={isResumeNameEdit}
//                 setIsResumeNameEdit={setIsResumeNameEdit}
//               />
//             ) : (
//               <Text>{data.portpolio_name}</Text>
//             )}
//             <PortPolioDate updatedAt={data.updatedAt} />
//             <Divider
//               customStyles={{
//                 position: "absolute",
//                 width: "100%",
//                 bottom: "25px",
//               }}
//             />
//             <Flex
//               justify="flex-end"
//               align="center"
//               style={{
//                 position: "absolute",
//                 bottom: "0px",
//                 right: "0px",
//               }}
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setDeleteDropDownId(data._id);
//                 setIsEditAndDeleteDropDown(true);
//               }}
//             >
//               <HamburgerIcon style={{ width: "30px" }} />
//             </Flex>
//             {isEditAndDeleteDropDown && data._id === deleteDropDownId && (
//               <EditAndDeleteDropDown
//                 setDeleteDropDownId={setDeleteDropDownId}
//                 handleChangeResumeName={handleChangeResumeName}
//                 handleDeleteResume={handleDeleteResume}
//               />
//             )}
//             {isDeleteModalOpen && data._id === deleteDropDownId && (
//               <ModalPortal>
//                 <PortPolioDeleteModal
//                   onClose={handleDeleteModalClose}
//                   users_table_id={data.users_table_id}
//                   portpolio_id={data.portpolioId}
//                   setDeleteDropDownId={setDeleteDropDownId}
//                 />
//               </ModalPortal>
//             )}
//           </UnstyledButton>
//         );
//       })}
//     </div>
//   );
// }

// export default MyPortPolioListContents;
