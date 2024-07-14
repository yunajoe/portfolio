// import {
//   careerFieldDelete,
//   educationFieldDelete,
// } from "@/src/app/lib/features/portpolio/portpolioSlice";
// import { useCallback } from "react";
// import { useDispatch } from "react-redux";
// function useDispatchParam(
//   dispatchname: string,
//   users_table_id: string | undefined,
//   portpolio_id: string | undefined
// ) {
//   const dispatch = useDispatch();
//   const dispatchAction = useCallback(
//     (index?: number) => {
//       if (dispatchname === "education/delete") {
//         dispatch(educationFieldDelete({ index }));
//       } else if (dispatchname === "career/delete") {
//         dispatch(careerFieldDelete({ index }));
//       } else if (dispatchname === "portpolio/delete") {
//         console.log("포폴딜리트", users_table_id, portpolio_id);
//         dispatch({
//           type: "DELETE_PORT_POLIO_REQUEST",
//           users_table_id: users_table_id,
//           portpolio_id: portpolio_id,
//         });
//       }
//     },
//     [dispatchname]
//   );
//   // const portpolioDispatchAction = useCallback(() => {
//   //   if (dispatchname === "portpolio/delete") {
//   //     console.log("포폴딜리트");
//   //   }
//   // }, [dispatchname]);
//   // return dispatchname === "portpolio/delete"
//   //   ? portpolioDispatchAction
//   //   : fieldDispatchAction;
//   return dispatchAction;
// }
// export default useDispatchParam;
