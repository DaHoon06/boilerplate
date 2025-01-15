import { LoginType } from "@/features/login-form/types";

export function validateLogin(values: LoginType) {
  const errors = {
    id: "",
    password: "",
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(values.id)) {
    errors.id = "올바른 이메일 형식이 아닙니다.";
  }

  if (!(values.password.length >= 8 && values.password.length < 20)) {
    errors.password = "비밀번호는 8~20자 사이로 입력해주세요.";
  }

  return errors;
}
