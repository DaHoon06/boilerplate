import {InputText} from "@datasketch/design-system/inputs";
import React, {ChangeEvent} from "react";

type InputBaseType = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
}

type IdInputProps = InputBaseType & {
  idValue: string;
}

const IdInput = ({idValue, onChange, error, disabled}: IdInputProps): React.ReactElement => {
  return <InputText value={idValue} onChange={onChange} type={'text'} name={'id'} disabled={disabled || false} />
}

type PasswordInputProps = Omit<IdInputProps, 'idValue'> & {
  passwordValue: string;
}

const PasswordInput = ({passwordValue, onChange, error, disabled}: PasswordInputProps): React.ReactElement => {
  return (
    <InputText value={passwordValue} onChange={onChange} type={'password'} name={'password'} disabled={disabled || false} />
  )
}

export {
  IdInput, PasswordInput
}
