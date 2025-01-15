"use client";

import { CategoryItem } from "@/entities/editor/ui";
import { Fragment, JSX } from "react";
import {
  IoRadioButtonOnOutline,
  IoClipboardOutline,
  IoCheckmarkDoneOutline,
} from "react-icons/io5";
import {
  MdTableView,
  MdShortText,
  MdOutlineFormatListNumbered,
  MdBalance,
} from "react-icons/md";
import { AiOutlineTable } from "react-icons/ai";
import { BsTextLeft } from "react-icons/bs";
import { RiText } from "react-icons/ri";
import styled from "styled-components";

const mockData = [
  {
    id: "asd-214ab-asad-vbasd",
    label: "단일 선택형",
    value: "radio",
    type: "radio",
    index: 0,
  },
  {
    id: "asd-214ab-asad-vbasd2",
    label: "복수 선택형",
    value: "check",
    type: "check",
    index: 1,
  },
  {
    id: "asd-214ab-asad-vbasd3",
    label: "척도형",
    value: "radioSet",
    type: "radioSet",
    index: 2,
  },
  {
    id: "asd-214ab-asad-vbasd4",
    label: "순위형",
    value: "grade",
    type: "grade",
    index: 3,
  },
  {
    id: "asd-214ab-asad-vbasd5",
    label: "행렬형",
    value: "radioSets",
    type: "radioSets",
    index: 4,
  },
  {
    id: "asd-214ab-asad-vbasd6",
    label: "복수 행렬형",
    value: "checkSets",
    type: "checkSets",
    index: 5,
  },
  {
    id: "asd-214ab-asad-vbasd7",
    label: "주관식 단답형",
    value: "text",
    type: "text",
    index: 6,
  },
  {
    id: "asd-214ab-asad-vbasd8",
    label: "주관식 장문형",
    value: "textarea",
    type: "textarea",
    index: 7,
  },
  {
    id: "asd-214ab-asad-vbasd9",
    label: "설문 제목",
    value: "title",
    type: "title",
    index: 8,
  },
  {
    id: "asd-214ab-asad-vbasd10",
    label: "안내문",
    value: "description",
    type: "description",
    index: 9,
  },
];
//TODO 이름 더 직관적으로 바꾸기 너무 헷갈린다....
enum SurveyType {
  RADIO = "radio", // 단일 선택형
  CHECK = "check", // 복수 선택형
  RADIO_SET = "radioSet", // 척도형
  RADIO_SETS = "radioSets", // 행렬형
  CHECK_SETS = "checkSets", // 복수 행렬형
  GRADE = "grade", // 순위형
  TITLE = "title", // 제목
  TEXT = "text", // 주관식 단답형
  TEXTAREA = "textarea", // 주관식 장문형
  DESC = "description", // 안내문
}

export const SurveyTypeForm = () => {
  const icon = (type: string): JSX.Element | null => {
    const size = 20;
    const color = "#222";

    switch (type) {
      case SurveyType.RADIO:
        return <IoRadioButtonOnOutline size={size} color={color} />;
      case SurveyType.CHECK:
        return <IoCheckmarkDoneOutline size={size} color={color} />;
      case SurveyType.CHECK_SETS:
        return <MdTableView size={size} color={color} />;
      case SurveyType.DESC:
        return <IoClipboardOutline size={size} color={color} />;
      case SurveyType.GRADE:
        return <MdOutlineFormatListNumbered size={size} color={color} />;
      case SurveyType.RADIO_SET:
        return <MdBalance size={size} color={color} />;
      case SurveyType.RADIO_SETS:
        return <AiOutlineTable size={size} color={color} />;
      case SurveyType.TEXT:
        return <MdShortText size={size} color={color} />;
      case SurveyType.TEXTAREA:
        return <BsTextLeft size={size} color={color} />;
      case SurveyType.TITLE:
        return <RiText size={size} color={color} />;
      default:
        return null;
    }
  };
  return (
    <SurveyTypeFormContainer>
      <div className="category-item-container">
        {mockData.map((type) => (
          <Fragment key={type.id}>
            <CategoryItem
              label={type.label}
              id={type.id}
              icon={icon(type.value)}
            />
          </Fragment>
        ))}
      </div>
    </SurveyTypeFormContainer>
  );
};

const SurveyTypeFormContainer = styled.article`
  border: 1px solid black;
  border-radius: 4px;
  background-color: aliceblue;
  max-width: 356px;
  padding: 1em;

  .category-item-container {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    gap: 10px;
  }
`;
