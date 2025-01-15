'use client';

import React, { ButtonHTMLAttributes, FC } from "react";
import styled from "styled-components";

type ButtonVariant = "primary" | "secondary" | "dark" | "icon";

interface ButtonProps extends ButtonHTMLAttributes<'button'> {
  $width?: number;
  $height?: number;
  $borderRadius?: number;
  $variant?: ButtonVariant;
  $fontSize?: number;
  $fontWeight?: number;
  $toggle?: boolean;
}

const ButtonLayout = styled.button<ButtonProps>`
  background-color: ${({ $variant }) =>
    $variant === "primary" || $variant === "secondary"
      ? "#FFFFFF"
      : $variant === "icon"
        ? ""
        : "#333333"};
  border: ${({ $variant }) =>
      $variant === "primary" || $variant === "secondary"
        ? "#CCCCCC"
        : $variant === "icon"
          ? "none"
          : "#333333"}
    1px solid;
  color: ${({ $variant }) =>
    $variant === "primary" || $variant === "secondary" ? "#999999" : "#FFFFFF"};
  width: ${({ $width }) => ($width ? `${$width}px` : "auto")};
  height: ${({ $height, $variant }) =>
    $variant === "icon" ? "auto" : `${$height}px`};
  border-radius: ${({ $borderRadius }) => $borderRadius}px;
  padding: 0 ${({ $variant }) => ($variant === "icon" ? 0 : "10px")};
  transition: all 0.2s;
  font-family: "NanumSquare", sans-serif;
  font-size: ${({ $fontSize }) => $fontSize}px;
  font-weight: ${({ $fontWeight }) => $fontWeight};
  display: flex;
  align-items: center;
  justify-content: center;

  &.toggle {
    background-color: ${({ $variant }) =>
      $variant === "primary" || $variant === "dark" ? "#00BDE1" : "#666666"};
    border: ${({ $variant }) =>
        $variant === "primary" || $variant === "dark" ? "#00BDE1" : "#666666"}
      1px solid;
    color: #ffffff;
  }
`;

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    onClick,
    $width,
    $height = 40,
    $borderRadius = 5,
    $variant = "primary" as ButtonVariant,
    $toggle = false,
    $fontSize = 14,
    $fontWeight = 400,
    ...rest
  } = props;
  return (
    <ButtonLayout
      $borderRadius={$borderRadius}
      $width={$width}
      $height={$height}
      $variant={$variant}
      $fontSize={$fontSize}
      $fontWeight={$fontWeight}
      className={$toggle ? className + " toggle" : className}
      onClick={onClick}
      style={rest.style}
      {...rest}
    >
      {children}
    </ButtonLayout>
  );
};
