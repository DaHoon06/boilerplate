import React, {
  ChangeEvent,
  ComponentProps,
  KeyboardEvent,
  ReactElement,
  ReactNode,
} from "react";
import { Label } from "./styles/InputText.styled";

interface InputTextProps extends ComponentProps<"input"> {
  value: string;
  icon?: ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputText = (props: InputTextProps): ReactElement => {
  const { icon, onChange, value, ...rest } = props;

  const handleChangeInputText = (e: ChangeEvent<HTMLInputElement>): void => {
    onChange && onChange(e);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      const form = e.currentTarget.form;
      if (form) {
        form.dispatchEvent(
          new Event("submit", { cancelable: true, bubbles: true }),
        );
      }
    }
  };

  return (
    <Label $icon={!!icon}>
      <input
        type={"text"}
        onChange={handleChangeInputText}
        value={value}
        onKeyDown={handleKeyDown}
        {...rest}
      />
      {icon && <span className={"icon"}>{icon}</span>}
    </Label>
  );
};
