import {
  emailRegexFunc,
  passwordRegexFunc,
  usernameRegexFunc,
} from "@/utils/formInputRegex";
import { useForm } from "@mantine/form";

const registerInitialValue = {
  username: "",
  email: "",
  password: "",
};
const loginInitialValue = {
  email: "",
  password: "",
};

const registerValidation = {
  username: (value: string) =>
    usernameRegexFunc(value) ? null : "유효하지않은 username형식",
  email: (value: string) =>
    emailRegexFunc(value) ? null : "유효하지 않은 email형식",
  password: (value: string) =>
    passwordRegexFunc(value) ? null : "유효하지 않은 password형식",
};

const loginValidation = {
  email: (value: string) =>
    emailRegexFunc(value) ? null : "유효하지 않은 email형식",
  password: (value: string) =>
    passwordRegexFunc(value) ? null : "유효하지 않은 password형식",
};

function useCustomForm(type: string) {
  const form = useForm({
    mode: "uncontrolled",
    initialValues:
      type === "register" ? registerInitialValue : loginInitialValue,
    validate: type === "register" ? registerValidation : loginValidation,
  });

  return form;
}

export default useCustomForm;
