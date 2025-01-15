"use client";

import React from "react";
import styled from "styled-components";

interface CategoryItemProps {
  label: string;
  id: string;
  icon?: React.ReactNode | null;
}

export const CategoryItem = ({
  label,
  id,
  icon,
}: CategoryItemProps): React.ReactElement => {
  const handleClickType = (id: string) => {
    //TODO 이벤트 전달
  };
  return (
    <CategoryItemContainer>
      <div className="category-item">
        {icon && <div>{icon}</div>}
        <span className="label">{label}</span>
      </div>
    </CategoryItemContainer>
  );
};

const CategoryItemContainer = styled.div`
  width: 100px;
  height: 40px;
  border: 1px solid black;
  background-color: aliceblue;
  border-radius: 4px;

  .category-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 4px;

    .label {
      font-size: 0.725rem;
    }
  }
`;
