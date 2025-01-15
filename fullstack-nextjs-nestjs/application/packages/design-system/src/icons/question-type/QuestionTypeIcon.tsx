import { FC, ReactElement } from "react";
import { QUESTION_TYPE, QuestionType } from "@unisurvey/interfaces/enums";
import { QuestionIcon } from "@pmi/ui/icons";
import styled from "styled-components";

const QuestionTypeIconContainer = styled.div`
  width: 30px;
  display: flex;
`;
interface QuestionTypeIconProps {
  questionType?: QuestionType | string;
  active?: boolean;
}

const QuestionTypeIcon: FC<QuestionTypeIconProps> = ({
  questionType,
  active = false,
}): ReactElement => {
  const {
    RadioIcon,
    RadioSetIcon,
    RadioSetsIcon,
    CheckIcon,
    TitleIcon,
    CheckSetsIcon,
    TextareaIcon,
    GradeIcon,
    MultiTextIcon,
    NoticeIcon,
    QuestionCopyIcon,
    LockedIcon,
  } = QuestionIcon;
  return (
    <QuestionTypeIconContainer>
      {questionType === QUESTION_TYPE.RADIO && <RadioIcon active={active} />}
      {questionType === QUESTION_TYPE.RADIOSET && (
        <RadioSetIcon active={active} />
      )}
      {questionType === QUESTION_TYPE.RADIOSETS && (
        <RadioSetsIcon active={active} />
      )}
      {questionType === QUESTION_TYPE.CHECK && <CheckIcon active={active} />}
      {questionType === QUESTION_TYPE.CHECKSETS && (
        <CheckSetsIcon active={active} />
      )}
      {questionType === QUESTION_TYPE.TEXTAREA && (
        <TextareaIcon active={active} />
      )}
      {questionType === QUESTION_TYPE.MULTI_TEXT && (
        <MultiTextIcon active={active} />
      )}
      {questionType === QUESTION_TYPE.GARDE_CLICK && (
        <GradeIcon active={active} />
      )}
      {questionType === QUESTION_TYPE.TITLE && <TitleIcon active={active} />}
      {questionType === QUESTION_TYPE.DESC && <NoticeIcon active={active} />}
      {/*{questionType === QUESTION_TYPE.QUESTION_COPY && (*/}
      {/*  <QuestionCopyIcon active={active} />*/}
      {/*)}*/}
    </QuestionTypeIconContainer>
  );
};

export default QuestionTypeIcon;
