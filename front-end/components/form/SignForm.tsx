"use client";

import LoginFormNavigationButton from "@/components/button/LoginFormNavigationButton";
import LoginError from "@/components/error/LoginError";
import CheckBoxInput from "@/components/input/CheckBoxInput";
import useCustomForm from "@/hooks/useCustomForm";
import { authReset } from "@/src/app/lib/features/auth/authSlice";
import { useAppDispatch } from "@/src/app/lib/hooks";
import { Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import classNames from "classnames/bind";
import { memo, SetStateAction, useCallback } from "react";
import styles from "./SignForm.module.scss";
const cx = classNames.bind(styles);
type SignFormProps = {
  type: string;
  emailLabel: string;
  passwordLabel: string;
  buttonText: string;
  gotoRegister: boolean;
  setGotoRegister: React.Dispatch<SetStateAction<boolean>>;
};

type FormValue = {
  username?: string;
  email: string;
  password: string;
};

const SignForm = memo(function SignForm({
  type,
  emailLabel,
  passwordLabel,
  buttonText,
  gotoRegister,
  setGotoRegister,
}: SignFormProps) {
  const dispatch = useAppDispatch();

  const form = useCustomForm(type);

  // 로그인하기 버튼
  const handleSubmit = async (values: FormValue) => {
    const { username, email, password } = values;
    if (type === "login") {
      dispatch({
        type: "LOCAL_LOGIN_REQUEST",
        email: email,
        password: password,
      });
    } else if (type === "register") {
      dispatch({
        type: "LOCAL_REGISTER_REQUEST",
        username: username,
        email: email,
        password: password,
      });
    }
  };

  const handleGotoRegister = () => {
    form.reset();
    setGotoRegister(true);
  };

  const handleGotoLogin = () => {
    form.reset();
    setGotoRegister(false);
  };
  const loginBottomText = (
    <Stack justify="center" align="center">
      <LoginFormNavigationButton
        text="비밀번호를 잊어버렸니까?"
        onClick={() => console.log("하잇")}
      />
      <LoginFormNavigationButton
        text="계정이 없습니까? 회원가입하러 가기"
        onClick={handleGotoRegister}
      />
    </Stack>
  );
  const registerBottomText = (
    <Stack justify="center" align="center">
      <LoginFormNavigationButton
        text="이미 계정이 있습니까? 로그인하러 가기"
        onClick={handleGotoLogin}
      />
    </Stack>
  );

  const formHandleChange = useCallback(() => {
    const isTouched = form.isTouched();
    if (isTouched) {
      dispatch(authReset());
    }
  }, []);
  return (
    <>
      <form
        onChange={formHandleChange}
        onSubmit={form.onSubmit((values, event) => {
          handleSubmit(values);
        })}
      >
        {type === "register" && (
          <TextInput
            withAsterisk
            label="username"
            placeholder="username"
            key={form.key("username")}
            {...form.getInputProps("username")}
            w="300"
          />
        )}

        <TextInput
          withAsterisk
          label={emailLabel}
          placeholder="your email"
          key={form.key("email")}
          {...form.getInputProps("email")}
          w="300"
        />
        <PasswordInput
          withAsterisk
          label={passwordLabel}
          placeholder="your password"
          key={form.key("password")}
          {...form.getInputProps("password")}
          w="300"
          mb="10"
        />
        {type === "register" && (
          <>
            <LoginError />
          </>
        )}
        {type === "login" && (
          <>
            <CheckBoxInput />
            <LoginError />
          </>
        )}

        <Button w="300" type="submit">
          {buttonText}
        </Button>
      </form>
      {!gotoRegister ? loginBottomText : registerBottomText}
    </>
  );
});

export default SignForm;
