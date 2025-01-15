"use client";

import React, { ChangeEvent, FormEvent } from "react";
import { IdInput, PasswordInput } from "@/entities/login/ui";
import { useLoginForm, useLoginMutation } from "@/features/login-form/hooks";
import { LoginType } from "@/features/login-form/types";
import { validateLogin } from "@/features/login-form/utils";
import styled from "styled-components";
import { Button } from "@datasketch/design-system/buttons";

const Form = styled.form`
  width: 300px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1em;
`;

export const LoginForm = (): React.ReactElement => {
  const login = useLoginForm<LoginType>({
    initialState: {
      id: "",
      password: "",
    },
    validate: validateLogin,
  });
  const loginMutation = useLoginMutation();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    login.getInputStateProps(name as keyof LoginType).onChangeInput(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const values = login.values;
    loginMutation.mutate(values);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <IdInput
        idValue={login.getInputStateProps("id").value}
        onChange={handleChangeInput}
      />
      <PasswordInput
        onChange={handleChangeInput}
        passwordValue={login.getInputStateProps("password").value}
      />
      <Button type={"submit"}>로그인</Button>
    </Form>
  );
};
