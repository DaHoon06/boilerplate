export default function WorkspacePage() {
  return (
    <div>
      <a href='/editor'>
        설문 생성
      </a>
      <div>
        <section>
          추천 템플릿
          <ul>
            <li>
              <div>템플릿 설문 제목</div>
            </li>
          </ul>
        </section>
        <section>
          내 작업 공간
          <div>
            <label>
              <input type="text" placeholder="설문 검색" />
            </label>
            <select>
              <option>제목</option>
            </select>
          </div>
          <ul>
            <li>
              <div>설문 제목</div>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
