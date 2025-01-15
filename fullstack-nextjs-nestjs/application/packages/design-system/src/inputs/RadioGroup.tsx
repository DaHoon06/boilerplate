import {
  ChangeEvent,
  ComponentProps,
  createContext,
  PropsWithChildren,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { Typography } from "../text";

type RadioValue = string | number | null | any; //enum 타입일 경우 타입 체크를 할 수 없어 any 타입.

interface Props extends ComponentProps<"input">, PropsWithChildren {
  label?: string;
  state: RadioValue;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface RadioContextType {
  value: string | number | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export const RadioContext = createContext<RadioContextType>({
  value: null,
  onChange: () => {},
  disabled: false,
});

export const RadioGroup = (props: Props): ReactElement => {
  const { label, children, state, disabled, onChange } = props;
  const [value, setValue] = useState<RadioValue>(state);

  useEffect(() => {
    setValue(props.state);
  }, [props.state]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange && onChange(e);
  };

  const contextValue: RadioContextType = {
    value,
    disabled,
    onChange: handleChange,
  };

  return (
    <fieldset>
      <legend>
        {label && <Typography $fontWeight={600}>{label}</Typography>}
      </legend>
      <RadioContext.Provider value={contextValue}>
        {children}
      </RadioContext.Provider>
    </fieldset>
  );
};
