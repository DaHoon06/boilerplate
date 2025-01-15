'use client';

import { useEffect, useState } from 'react';

interface UseLoginFormProps<T> {
  initialState: T;
  validate: (values: T) => Record<keyof T, string>;
}

function useLoginForm<T>({initialState, validate}: UseLoginFormProps<T>) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChangeText = (name: keyof T, text: string): void => {
    setValues({
      ...values,
      [name]: text
    });
  }

  const getInputStateProps = (name: keyof T) => {
    const value = values[name];
    const onChangeInput = (text: string) => handleChangeText(name, text);
    return {
      value, onChangeInput
    }
  }

  useEffect(() => {
    const newErrors = validate(values);
    setErrors(newErrors);
  }, [validate, values]);

  return {
    values, errors, getInputStateProps
  }
}

export default useLoginForm;



