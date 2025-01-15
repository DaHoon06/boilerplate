import {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
  PropsWithChildren,
  useContext,
} from "react";
import { RadioContext, RadioContextType } from "./RadioGroup";
import { Typography } from "../text";

interface Props extends PropsWithChildren {
  name?: string;
  value: string | number;
  label?: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  id?: string;
}

export const Radio = forwardRef(
  (props: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const group = useContext<RadioContextType>(RadioContext);
    const {
      name,
      onChange,
      value,
      disabled = false,
      children,
      label,
      id,
    } = props;

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
      if (onChange) onChange(e); // radio group을 사용하지 않을 경우
      if (group.onChange) group.onChange(e);
    };

    const isChecked =
      group.value !== undefined ? value === group.value : undefined;

    return (
      <label>
        <input
          ref={ref}
          type="radio"
          value={value}
          id={id}
          name={name}
          disabled={disabled || group.disabled}
          checked={isChecked}
          onChange={handleChange}
        />
        <Typography
          as={"span"}
          $fontWeight={400}
          $fontColor={"textGray000"}
          $fontSize={16}
        >
          {children || label}
        </Typography>
      </label>
    );
  },
);
