"use client";

import LoginFormNavigationButton from "@/components/button/LoginFormNavigationButton";
import useCustomForm from "@/hooks/useCustomForm";
import { useAppDispatch } from "@/src/app/lib/hooks";
import { Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import { memo, SetStateAction } from "react";

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

  return (
    <>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
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
        <Button w="300" type="submit">
          {buttonText}
        </Button>
      </form>
      {!gotoRegister ? loginBottomText : registerBottomText}
    </>
  );
});

export default SignForm;
