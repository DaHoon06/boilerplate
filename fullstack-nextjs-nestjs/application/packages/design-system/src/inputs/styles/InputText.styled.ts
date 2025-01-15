import styled, { css } from "styled-components";

interface InputStyledProps {
  $width?: string | number;
  $icon?: boolean;
}

export const Label = styled.label<InputStyledProps>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: auto;
  position: relative;

  input {
    letter-spacing: -2px;
    position: relative;
    border-color: #999;
    max-height: 32px;
    padding: ${({ $icon }) =>
      $icon ? "8px 42px 8px 14px" : "8px 30px 8px 14px"};
    border-radius: 6px;
    outline: none;
    ${({ $width }) =>
      $width &&
      css`
        width: ${typeof $width === "number" ? `${$width}px` : $width};
      `}

    &:focus {
      border-color: #383838;
    }

    &::placeholder {
      letter-spacing: -0.5px;
      font-family: "NanumSquare", sans-serif;
    }
  }

  .icon {
    position: absolute;
    right: 12px;
    width: auto;
    max-width: 30px;
    height: auto;
    max-height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
      content: "|";
      color: #cccccc;
      margin-right: 10px;
    }
  }
`;
