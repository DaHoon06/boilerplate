import { CategoryItem, SurveyTitle } from "@/entities/editor/ui";
import { SurveyTypeForm } from "@/features/editor/ui";

export default function EditorPage() {
  return (
    <div>
      <SurveyTitle />
      <div>
        <div>설문 유형을 선택한다.</div>
        <SurveyTypeForm />
      </div>
    </div>
  );
}
