import React from "react";
import { ComponentProps, CSSProperties, useMemo } from "react";
import styles from "./theme-button.module.css";
import { clsx } from "clsx";

export type ThemeButtonVariant = "default";

interface ThemeButtonProps extends ComponentProps<"button"> {
  variant?: ThemeButtonVariant;
  icon?: JSX.Element;
  width?: string | number;
  height?: string | number;
}

export const ThemeButtonBase = (props: ThemeButtonProps) => {
  const {
    variant = "default",
    icon,
    type = "button",
    disabled = false,
    width = 120,
    height = 64,
    children,
    className,
    ...rest
  } = props;

  const style: CSSProperties = useMemo(
    () => ({
      width: width ? `${width}px` : "auto",
      height: height ? `${height}px` : "auto",
    }),
    [width, height]
  );

  return (
    <button
      className={clsx(styles[variant], className)}
      type={type}
      disabled={disabled}
      {...rest}
      style={style}
    >
      {icon ? icon : null}
      {children}
    </button>
  );
};

export const ThemeButton = React.memo(ThemeButtonBase);
