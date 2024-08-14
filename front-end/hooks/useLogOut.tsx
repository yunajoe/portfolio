import { authReset, selectAuth } from "@/src/app/lib/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/src/app/lib/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function useLogOut() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { userData, logoutStatus, logoutMessage } = useAppSelector(selectAuth);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT_REQUEST", _id: userData._id });
  };
  useEffect(() => {
    if (logoutStatus === 200) {
      router.push("/");
      dispatch(authReset());
    }
  }, [logoutStatus]);
  return handleLogout;
}

export default useLogOut;
