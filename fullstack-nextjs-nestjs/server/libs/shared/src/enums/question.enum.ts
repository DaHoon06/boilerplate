export const FIXED_QUESTIONS: string[] = [
  'COUNT',
  'SQ1',
  'SQ2',
  'AGE',
  'AGE_R',
  'SQ3',
  'AREA',
  'QUOTA_SQ1_AGE_R',
  'QUOTA_COUNT',
];

export const QUESTION_CHECK: string[] = [...FIXED_QUESTIONS, 'OUT'];

export enum QUESTION_TYPE {
  RADIO = 'RADIO', // 단일 선택형
  RADIOSET = 'RADIOSET', // 척도형
  RADIOSETS = 'RADIOSETS', // 행렬형
  CHECK = 'CHECK', // 복수 선택형
  CHECKSETS = 'CHECKSETS', // 복수 행렬형
  GRADE = 'GRADE',
  GRADE_CLICK = 'GRADE_CLICK', // 순위형
  TEXT = 'TEXT',
  TEXTAREA = 'TEXTAREA', // 주관식 장문형
  MULTI_TEXT = 'MULTI_TEXT', // 주관식 단답형
  DESC = 'DESC', // 안내문
  TITLE = 'TITLE', // 제목 유형
  COMPLETE = 'COMPLETE',
  QUOTA = 'QUOTA',
  RECODE_EXACT = 'RECODE_EXACT',
  RECODE_RANGE = 'RECODE_RANGE',
}

export enum QUESTION_STATUS {
  HOLD = 'HOLD',
  OPEN = 'OPEN',
  STOP = 'STOP',
  CANCEL = 'CANCEL',
  END = 'END',
}

export enum DEFAULT_CONFIG {
  OPEN_START_DT = '2000-01-01',
  STATUS = 'HOLD',
  PANEL_DEFAULT = 'OPEN',
  STATUS_EDIT_MSG = '조사 편집중입니다',
  STATUS_HOLD_MSG = '조사 준비중입니다',
  STATUS_HOLD_MSG_LIST = '조사 준비중입니다.\n[현황] 탭에서 [조사 진행]으로 설정해 주세요.',
  STATUS_STOP_MSG = '조사가 중단되었습니다',
  STATUS_CANCEL_MSG = '조사가 취소되었습니다',
  STATUS_END_MSG = '조사가 종료되었습니다',
  MULTI_ANSWER_DIVIDER = '_',
  FILE_SERVER = 'S3',
  SKIN = 'DEFAULT',
  LOGO_POSITION = 'HIDDEN',
  LOGO_SCALE = 'SRC',
  FONT = 'MalgunGothic',
  IS_CATI_PROJECT = 'N',
  LANG = 'KOR',
  FROM_EMAIL = 'teamcp@pmirnc.com',
  SCRIPT = "const footer = document.createElement('p');\n" +
    "footer.className = 's-question';\n" +
    "footer.textContent = 'Copyright 2023. Powered by UNISURVEY';\n" +
    "footer.style.textAlign = 'center';\n" +
    "footer.style.height = '100px';\n" +
    "footer.style.paddingTop = '100px';\n" +
    'document.body.appendChild(footer);',
}

export enum FIXED_ANSWERS {
  ETC_KEY = '9997',
  ETC_TEXT = '기타 [TEXT_1]',
  NOT_KEY = '9998',
  NOT_TEXT = '없음',
  NONE_COMM_KEY = '9999',
  NONE_COMM_TEXT = '의견 없음',
}

export enum DEFAULT_DATA {
  COMPLETE = 'COMPLETE',
  COMPLETE2 = 'COMPLETE2',
  COMPLETE3 = 'COMPLETE3',
  OUT = 'OUT',
  OUT2 = 'OUT2',
  OUT3 = 'OUT3',
  TXT_COMPLETE = 'TXT_COMPLETE',
  TXT_COMPLETE2 = 'TXT_COMPLETE2',
  TXT_COMPLETE3 = 'TXT_COMPLETE3',
  TXT_OUT = 'TXT_OUT',
  TXT_OUT2 = 'TXT_OUT2',
  TXT_OUT3 = 'TXT_OUT3',
  BTN_HIDE = 'TRUE',
  OVER = 'OVER',
  TXT_OVER = 'TXT_OVER',
  BAD = 'BAD',
  TXT_BAD = 'TXT_BAD',
  COMPLETE_MSG = '조사에 참여해 주셔서 대단히 감사합니다.',
  OUT_MSG = '죄송합니다. 귀하는 조사 대상이 아닙니다.',
  OVER_MSG = '죄송합니다. 조사가 마감되었습니다.',
  BAD_MSG = '죄송합니다. 조사가 중단되었습니다.',
}
export enum QUOTA_SQ1 {
  NAME = 'SQ1',
  QNUM = 'SQ1',
  NUM_IN_ROW = '2',
  QUESTION = '귀하의 성별은 어떻게 되십니까?',
  K1 = '1',
  V1 = '남성',
  K2 = '2',
  V2 = '여성',
}
export enum QUOTA_SQ1_R {
  NAME = 'SQ1_R',
  QUESTION = 'SQ1_R',
  MATCH_SRC_K1 = '1',
  MATCH_SRC_V1 = '남성',
  MATCH_K1 = '1',
  MATCH_V1 = '남자',
  MATCH_SRC_K2 = '2',
  MATCH_SRC_V2 = '여성',
  MATCH_K2 = '2',
  MATCH_V2 = '여자',
}

/*export enum QUOTA_SQ2 {
  NAME = 'SQ2',
  QNUM = 'SQ2',
  QUESTION = '귀하의 출생연도를 정확하게 적어주십시오.',
  MAX_COUNT = '1',
  TAIL = '년 생',
  WIDTH = '120',
  //REG = '^[0-9]+$',
  REG = '[1-9][0-9][0-9][0-9]',
  //MSG = '숫자만 입력하실수 있습니다.',
  MSG = '1900이상인 숫자만 입력할 수 있습니다',
}*/

export enum QUOTA_SQ2 {
  NAME = 'SQ2',
  QNUM = 'SQ2',
  QUESTION = '귀하의 만 나이를 입력해주십시오.',
  HTML = '만 [NUMBER_1] 세',
  MAX_COUNT = '1',
  HEAD = '만 ',
  TAIL = ' 세',
  WIDTH = '120',
  REG = '^[0-9]+$',
  //REG = '[1-9][0-9][0-9][0-9]',
  MSG = '숫자만 입력하실수 있습니다.',
  MIN_LENGTH = '2',
  MAX_LENGTH = '2',
  //MSG = '1900이상인 숫자만 입력할 수 있습니다',
}

export enum QUOTA_AGE0 {
  NAME = 'AGE',
  QNUM = 'AGE',
  QUESTION = '연령대 (10세 단위)',
  NUM_IN_ROW = '1',
  K1 = '2',
  V1 = '20~69',
  K98 = '1',
  K99 = '7',
  V98 = '19세 이하',
  V99 = '70세 이상',
  //SCRIPT = 'var today = new Date();\nvar bYear = parseInt(AO.SQ2[1]);\nvar num = (today.getFullYear() - bYear) - 1;\nif(num >= 20 && num <= 29) $("#AGE_2").prop("checked", true);\nif(num >= 30 && num <= 39) $("#AGE_3").prop("checked", true);\nif(num >= 40 && num <= 49) $("#AGE_4").prop("checked", true);\nif(num >= 50 && num <= 59) $("#AGE_5").prop("checked", true);\nif(num >= 60 && num <= 69) $("#AGE_6").prop("checked", true);\nif(num < 20) $("#AGE_1").prop("checked", true);\nif(num >= 70) $("#AGE_7").prop("checked", true);',
  SCRIPT = 'var num = parseInt(AO.SQ2[1]);\nif(num >= 20 && num <= 29) $("#AGE_2").prop("checked", true);\nif(num >= 30 && num <= 39) $("#AGE_3").prop("checked", true);\nif(num >= 40 && num <= 49) $("#AGE_4").prop("checked", true);\nif(num >= 50 && num <= 59) $("#AGE_5").prop("checked", true);\nif(num >= 60 && num <= 69) $("#AGE_6").prop("checked", true);\nif(num < 20) $("#AGE_1").prop("checked", true);\nif(num >= 70) $("#AGE_7").prop("checked", true);',
}

export enum QUOTA_AGE0_R {
  NAME = 'AGE_R',
  QUESTION = 'AGE',
  MATCH_MIN1 = '1',
  MATCH_MAX1 = '1',
  MATCH_K1 = '1',
  MATCH_V1 = '19세 이하',
  MATCH_MIN2 = '2',
  MATCH_MAX2 = '6',
  MATCH_K2 = '2',
  MATCH_V2 = '20~69',
  MATCH_MIN7 = '7',
  MATCH_MAX7 = '7',
  MATCH_K7 = '7',
  MATCH_V7 = '70세 이상',
}

export enum QUOTA_AGE1 {
  NAME = 'AGE',
  QNUM = 'AGE',
  QUESTION = '연령대 (10세 단위)',
  NUM_IN_ROW = '1',
  K1 = '2',
  K2 = '3',
  K3 = '4',
  K4 = '5',
  K5 = '6',
  V1 = '20~29',
  V2 = '30~39',
  V3 = '40~49',
  V4 = '50~59',
  V5 = '60~69',
  K98 = '1',
  K99 = '7',
  V98 = '19세 이하',
  V99 = '70세 이상',
  //SCRIPT = 'var today = new Date();\nvar bYear = parseInt(AO.SQ2[1]);\nvar num = (today.getFullYear() - bYear) - 1;\nif(num >= 20 && num <= 24) $("#AGE_2").prop("checked", true);\nif(num >= 25 && num <= 29) $("#AGE_3").prop("checked", true);\nif(num >= 30 && num <= 34) $("#AGE_4").prop("checked", true);\nif(num >= 35 && num <= 39) $("#AGE_5").prop("checked", true);\nif(num >= 40 && num <= 44) $("#AGE_6").prop("checked", true);\nif(num >= 45 && num <= 49) $("#AGE_7").prop("checked", true);\nif(num >= 50 && num <= 54) $("#AGE_8").prop("checked", true);\nif(num >= 55 && num <= 59) $("#AGE_9").prop("checked", true);\nif(num >= 60 && num <= 64) $("#AGE_10").prop("checked", true);\nif(num >= 65 && num <= 69) $("#AGE_11").prop("checked", true);\nif(num < 20) $("#AGE_1").prop("checked", true);\nif(num >= 70) $("#AGE_12").prop("checked", true);',
  SCRIPT = 'var num = parseInt(AO.SQ2[1]);\nif(num >= 20 && num <= 29) $("#AGE_2").prop("checked", true);\nif(num >= 30 && num <= 39) $("#AGE_3").prop("checked", true);\nif(num >= 40 && num <= 49) $("#AGE_4").prop("checked", true);\nif(num >= 50 && num <= 59) $("#AGE_5").prop("checked", true);\nif(num >= 60 && num <= 69) $("#AGE_6").prop("checked", true);\nif(num < 20) $("#AGE_1").prop("checked", true);\nif(num >= 70) $("#AGE_7").prop("checked", true);',
}
export enum QUOTA_AGE1_R {
  NAME = 'AGE_R',
  QUESTION = 'AGE',
  MATCH_MIN1 = '1',
  MATCH_MAX1 = '1',
  MATCH_K1 = '1',
  MATCH_V1 = '19세 이하',
  MATCH_MIN2 = '2',
  MATCH_MAX2 = '2',
  MATCH_K2 = '2',
  MATCH_V2 = '20~29',
  MATCH_MIN3 = '3',
  MATCH_MAX3 = '3',
  MATCH_K3 = '3',
  MATCH_V3 = '30~39',
  MATCH_MIN4 = '4',
  MATCH_MAX4 = '4',
  MATCH_K4 = '4',
  MATCH_V4 = '40~49',
  MATCH_MIN5 = '5',
  MATCH_MAX5 = '5',
  MATCH_K5 = '5',
  MATCH_V5 = '50~59',
  MATCH_MIN6 = '6',
  MATCH_MAX6 = '6',
  MATCH_K6 = '6',
  MATCH_V6 = '60~69',
  MATCH_MIN7 = '7',
  MATCH_MAX7 = '7',
  MATCH_K7 = '7',
  MATCH_V7 = '70세 이상',
}
export enum QUOTA_AGE2 {
  NAME = 'AGE',
  QNUM = 'AGE',
  QUESTION = '연령대 (5세 단위)',
  NUM_IN_ROW = '1',
  K1 = '2',
  K2 = '3',
  K3 = '4',
  K4 = '5',
  K5 = '6',
  K6 = '7',
  K7 = '8',
  K8 = '9',
  K9 = '10',
  K10 = '11',
  V1 = '20~24',
  V2 = '25~29',
  V3 = '30~34',
  V4 = '35~39',
  V5 = '40~44',
  V6 = '45~49',
  V7 = '50~54',
  V8 = '55~59',
  V9 = '60~64',
  V10 = '65~69',
  K98 = '1',
  K99 = '12',
  V98 = '19세 이하',
  V99 = '70세 이상',
  //SCRIPT = 'var today = new Date();\nvar bYear = parseInt(AO.SQ2[1]);\nvar num = (today.getFullYear() - bYear) - 1;\nif(num >= 20 && num <= 24) $("#AGE_2").prop("checked", true);\nif(num >= 25 && num <= 29) $("#AGE_3").prop("checked", true);\nif(num >= 30 && num <= 34) $("#AGE_4").prop("checked", true);\nif(num >= 35 && num <= 39) $("#AGE_5").prop("checked", true);\nif(num >= 40 && num <= 44) $("#AGE_6").prop("checked", true);\nif(num >= 45 && num <= 49) $("#AGE_7").prop("checked", true);\nif(num >= 50 && num <= 54) $("#AGE_8").prop("checked", true);\nif(num >= 55 && num <= 59) $("#AGE_9").prop("checked", true);\nif(num >= 60 && num <= 64) $("#AGE_10").prop("checked", true);\nif(num >= 65 && num <= 69) $("#AGE_11").prop("checked", true);\nif(num < 20) $("#AGE_1").prop("checked", true);\nif(num >= 70) $("#AGE_12").prop("checked", true);',
  SCRIPT = 'var num = parseInt(AO.SQ2[1]);\nif(num >= 20 && num <= 24) $("#AGE_2").prop("checked", true);\nif(num >= 25 && num <= 29) $("#AGE_3").prop("checked", true);\nif(num >= 30 && num <= 34) $("#AGE_4").prop("checked", true);\nif(num >= 35 && num <= 39) $("#AGE_5").prop("checked", true);\nif(num >= 40 && num <= 44) $("#AGE_6").prop("checked", true);\nif(num >= 45 && num <= 49) $("#AGE_7").prop("checked", true);\nif(num >= 50 && num <= 54) $("#AGE_8").prop("checked", true);\nif(num >= 55 && num <= 59) $("#AGE_9").prop("checked", true);\nif(num >= 60 && num <= 64) $("#AGE_10").prop("checked", true);\nif(num >= 65 && num <= 69) $("#AGE_11").prop("checked", true);\nif(num < 20) $("#AGE_1").prop("checked", true);\nif(num >= 70) $("#AGE_12").prop("checked", true);',
}
export enum QUOTA_AGE2_R {
  NAME = 'AGE_R',
  QUESTION = 'AGE',
  MATCH_MIN1 = '1',
  MATCH_MAX1 = '1',
  MATCH_K1 = '1',
  MATCH_V1 = '19세 이하',

  MATCH_MIN2 = '2',
  MATCH_MAX2 = '2',
  MATCH_K2 = '2',
  MATCH_V2 = '20~24',
  MATCH_MIN3 = '3',
  MATCH_MAX3 = '3',
  MATCH_K3 = '3',
  MATCH_V3 = '25~29',

  MATCH_MIN4 = '4',
  MATCH_MAX4 = '4',
  MATCH_K4 = '4',
  MATCH_V4 = '30~34',
  MATCH_MIN5 = '5',
  MATCH_MAX5 = '5',
  MATCH_K5 = '5',
  MATCH_V5 = '35~39',

  MATCH_MIN6 = '6',
  MATCH_MAX6 = '6',
  MATCH_K6 = '6',
  MATCH_V6 = '40~44',
  MATCH_MIN7 = '7',
  MATCH_MAX7 = '7',
  MATCH_K7 = '7',
  MATCH_V7 = '45~49',

  MATCH_MIN8 = '8',
  MATCH_MAX8 = '8',
  MATCH_K8 = '8',
  MATCH_V8 = '50~54',
  MATCH_MIN9 = '9',
  MATCH_MAX9 = '9',
  MATCH_K9 = '9',
  MATCH_V9 = '55~59',

  MATCH_MIN10 = '10',
  MATCH_MAX10 = '10',
  MATCH_K10 = '10',
  MATCH_V10 = '60~64',
  MATCH_MIN11 = '11',
  MATCH_MAX11 = '11',
  MATCH_K11 = '11',
  MATCH_V11 = '65~69',

  MATCH_MIN12 = '12',
  MATCH_MAX12 = '12',
  MATCH_K12 = '12',
  MATCH_V12 = '70세 이상',
}
export enum QUOTA_SQ3 {
  NAME = 'SQ3',
  QNUM = 'SQ3',
  QUESTION = '현재 살고 계신 곳은 어디입니까?',
  NUM_IN_ROW = '5',
  K1 = '1',
  K2 = '2',
  K3 = '3',
  K4 = '4',
  K5 = '5',
  K6 = '6',
  K7 = '7',
  K8 = '8',
  K9 = '9',
  K10 = '10',
  K11 = '11',
  K12 = '12',
  K13 = '13',
  K14 = '14',
  K15 = '15',
  K16 = '16',
  K17 = '17',
  V1 = '서울특별시',
  V2 = '부산광역시',
  V3 = '대구광역시',
  V4 = '인천광역시',
  V5 = '광주광역시',
  V6 = '대전광역시',
  V7 = '울산광역시',
  V8 = '경기도',
  V9 = '세종특별자치시',
  V10 = '강원도',
  V11 = '충청북도',
  V12 = '충청남도',
  V13 = '전라북도',
  V14 = '전라남도',
  V15 = '경상북도',
  V16 = '경상남도',
  V17 = '제주특별자치도',
}

export enum QUOTA_AREA {
  NAME = 'AREA',
  QUESTION = 'SQ3',
  QNUM = 'AREA',
  MATCH_SRC_K1 = '1',
  MATCH_SRC_V1 = '서울특별시',
  MATCH_SRC_K2 = '2',
  MATCH_SRC_V2 = '부산광역시',
  MATCH_SRC_K3 = '3',
  MATCH_SRC_V3 = '대구광역시',
  MATCH_SRC_K4 = '4',
  MATCH_SRC_V4 = '인천광역시',
  MATCH_SRC_K5 = '5',
  MATCH_SRC_V5 = '광주광역시',
  MATCH_SRC_K6 = '6',
  MATCH_SRC_V6 = '대전광역시',
  MATCH_SRC_K7 = '7',
  MATCH_SRC_V7 = '울산광역시',
  MATCH_SRC_K8 = '8',
  MATCH_SRC_V8 = '경기도',
  MATCH_SRC_K9 = '9',
  MATCH_SRC_V9 = '세종특별자치시',
  MATCH_SRC_K10 = '10',
  MATCH_SRC_V10 = '강원도',
  MATCH_SRC_K11 = '11',
  MATCH_SRC_V11 = '충청북도',
  MATCH_SRC_K12 = '12',
  MATCH_SRC_V12 = '충청남도',
  MATCH_SRC_K13 = '13',
  MATCH_SRC_V13 = '전라북도',
  MATCH_SRC_K14 = '14',
  MATCH_SRC_V14 = '전라남도',
  MATCH_SRC_K15 = '15',
  MATCH_SRC_V15 = '경상북도',
  MATCH_SRC_K16 = '16',
  MATCH_SRC_V16 = '경상남도',
  MATCH_SRC_K17 = '17',
  MATCH_SRC_V17 = '제주특별자치도',
  MATCH_K1 = '1',
  MATCH_V1 = '서울',
  MATCH_K2 = '2',
  MATCH_V2 = '인천/경기',
  MATCH_K3 = '3',
  MATCH_V3 = '지방 5대 광역시',
  MATCH_K4 = '4',
  MATCH_V4 = '그 외 지역',
}

export enum QUOTA_GAGE0 {
  //NAME = 'GAGE1',
  NAME = 'QUOTA_SQ1_AGE_R',
  OVER_NEXT = 'OVER',

  ROW1 = 'SQ1',
  COL1 = 'AGE_R',

  //QUOTA_row1k_1_1 = '2',
  QUOTA_col1k_1_1 = '2',
  //QUOTA_row1v_1_1 = '20~69',
  QUOTA_col1v_1_1 = '20~69',
  //QUOTA_quotaType_1_1 = '2///',
}

export enum QUOTA_GAGE1 {
  //NAME = 'GAGE1',
  NAME = 'QUOTA_SQ1_AGE_R',
  OVER_NEXT = 'OVER',
  ROW1 = 'SQ1',
  COL1 = 'AGE_R',

  QUOTA_row1k_1_1 = '1',
  QUOTA_col1k_1_1 = '2',
  QUOTA_row1v_1_1 = '남성',
  QUOTA_col1v_1_1 = '20~29',
  QUOTA_quotaType_1_1 = '1//2/',

  QUOTA_row1k_1_2 = '1',
  QUOTA_col1k_1_2 = '3',
  QUOTA_row1v_1_2 = '남성',
  QUOTA_col1v_1_2 = '30~39',
  QUOTA_quotaType_1_2 = '1//3/',

  QUOTA_row1k_1_3 = '1',
  QUOTA_col1k_1_3 = '4',
  QUOTA_row1v_1_3 = '남성',
  QUOTA_col1v_1_3 = '40~49',
  QUOTA_quotaType_1_3 = '1//4/',

  QUOTA_row1k_1_4 = '1',
  QUOTA_col1k_1_4 = '5',
  QUOTA_row1v_1_4 = '남성',
  QUOTA_col1v_1_4 = '50~59',
  QUOTA_quotaType_1_4 = '1//5/',

  QUOTA_row1k_1_5 = '1',
  QUOTA_col1k_1_5 = '6',
  QUOTA_row1v_1_5 = '남성',
  QUOTA_col1v_1_5 = '60~69',
  QUOTA_quotaType_1_5 = '1//6/',

  QUOTA_row1k_2_1 = '2',
  QUOTA_col1k_2_1 = '2',
  QUOTA_row1v_2_1 = '여성',
  QUOTA_col1v_2_1 = '20~29',
  QUOTA_quotaType_2_1 = '2//2/',

  QUOTA_row1k_2_2 = '2',
  QUOTA_col1k_2_2 = '3',
  QUOTA_row1v_2_2 = '여성',
  QUOTA_col1v_2_2 = '30~39',
  QUOTA_quotaType_2_2 = '2//3/',

  QUOTA_row1k_2_3 = '2',
  QUOTA_col1k_2_3 = '4',
  QUOTA_row1v_2_3 = '여성',
  QUOTA_col1v_2_3 = '40~49',
  QUOTA_quotaType_2_3 = '2//4/',

  QUOTA_row1k_2_4 = '2',
  QUOTA_col1k_2_4 = '5',
  QUOTA_row1v_2_4 = '여성',
  QUOTA_col1v_2_4 = '50~59',
  QUOTA_quotaType_2_4 = '2//5/',

  QUOTA_row1k_2_5 = '2',
  QUOTA_col1k_2_5 = '6',
  QUOTA_row1v_2_5 = '여성',
  QUOTA_col1v_2_5 = '60~69',
  QUOTA_quotaType_2_5 = '2//6/',
}

export enum QUOTA_GAGE2 {
  //NAME = 'GAGE2',
  NAME = 'QUOTA_SQ1_AGE_R',
  OVER_NEXT = 'OVER',
  ROW1 = 'SQ1',
  COL1 = 'AGE_R',

  QUOTA_row1k_1_1 = '1',
  QUOTA_col1k_1_1 = '2',
  QUOTA_row1v_1_1 = '남성',
  QUOTA_col1v_1_1 = '20~24',
  QUOTA_quotaType_1_1 = '1//2/',
  QUOTA_row1k_1_2 = '1',
  QUOTA_col1k_1_2 = '3',
  QUOTA_row1v_1_2 = '남성',
  QUOTA_col1v_1_2 = '25~29',
  QUOTA_quotaType_1_2 = '1//3/',

  QUOTA_row1k_1_3 = '1',
  QUOTA_col1k_1_3 = '4',
  QUOTA_row1v_1_3 = '남성',
  QUOTA_col1v_1_3 = '30~34',
  QUOTA_quotaType_1_3 = '1//4/',
  QUOTA_row1k_1_4 = '1',
  QUOTA_col1k_1_4 = '5',
  QUOTA_row1v_1_4 = '남성',
  QUOTA_col1v_1_4 = '35~39',
  QUOTA_quotaType_1_4 = '1//5/',

  QUOTA_row1k_1_5 = '1',
  QUOTA_col1k_1_5 = '6',
  QUOTA_row1v_1_5 = '남성',
  QUOTA_col1v_1_5 = '40~44',
  QUOTA_quotaType_1_5 = '1//6/',
  QUOTA_row1k_1_6 = '1',
  QUOTA_col1k_1_6 = '7',
  QUOTA_row1v_1_6 = '남성',
  QUOTA_col1v_1_6 = '45~49',
  QUOTA_quotaType_1_6 = '1//7/',

  QUOTA_row1k_1_7 = '1',
  QUOTA_col1k_1_7 = '8',
  QUOTA_row1v_1_7 = '남성',
  QUOTA_col1v_1_7 = '50~54',
  QUOTA_quotaType_1_7 = '1//8/',
  QUOTA_row1k_1_8 = '1',
  QUOTA_col1k_1_8 = '9',
  QUOTA_row1v_1_8 = '남성',
  QUOTA_col1v_1_8 = '55~59',
  QUOTA_quotaType_1_8 = '1//9/',

  QUOTA_row1k_1_9 = '1',
  QUOTA_col1k_1_9 = '10',
  QUOTA_row1v_1_9 = '남성',
  QUOTA_col1v_1_9 = '60~64',
  QUOTA_quotaType_1_9 = '1//10/',
  QUOTA_row1k_1_10 = '1',
  QUOTA_col1k_1_10 = '11',
  QUOTA_row1v_1_10 = '남성',
  QUOTA_col1v_1_10 = '65~69',
  QUOTA_quotaType_1_10 = '1//11/',

  QUOTA_row1k_2_1 = '2',
  QUOTA_col1k_2_1 = '2',
  QUOTA_row1v_2_1 = '여성',
  QUOTA_col1v_2_1 = '20~24',
  QUOTA_quotaType_2_1 = '1//2/',
  QUOTA_row1k_2_2 = '2',
  QUOTA_col1k_2_2 = '3',
  QUOTA_row1v_2_2 = '여성',
  QUOTA_col1v_2_2 = '25~29',
  QUOTA_quotaType_2_2 = '1//3/',

  QUOTA_row1k_2_3 = '2',
  QUOTA_col1k_2_3 = '4',
  QUOTA_row1v_2_3 = '여성',
  QUOTA_col1v_2_3 = '30~34',
  QUOTA_quotaType_2_3 = '1//4/',
  QUOTA_row1k_2_4 = '2',
  QUOTA_col1k_2_4 = '5',
  QUOTA_row1v_2_4 = '여성',
  QUOTA_col1v_2_4 = '35~39',
  QUOTA_quotaType_2_4 = '1//5/',

  QUOTA_row1k_2_5 = '2',
  QUOTA_col1k_2_5 = '6',
  QUOTA_row1v_2_5 = '여성',
  QUOTA_col1v_2_5 = '40~44',
  QUOTA_quotaType_2_5 = '1//6/',
  QUOTA_row1k_2_6 = '2',
  QUOTA_col1k_2_6 = '7',
  QUOTA_row1v_2_6 = '여성',
  QUOTA_col1v_2_6 = '45~49',
  QUOTA_quotaType_2_6 = '1//7/',

  QUOTA_row1k_2_7 = '2',
  QUOTA_col1k_2_7 = '8',
  QUOTA_row1v_2_7 = '여성',
  QUOTA_col1v_2_7 = '50~54',
  QUOTA_quotaType_2_7 = '1//8/',
  QUOTA_row1k_2_8 = '2',
  QUOTA_col1k_2_8 = '9',
  QUOTA_row1v_2_8 = '여성',
  QUOTA_col1v_2_8 = '55~59',
  QUOTA_quotaType_2_8 = '1//9/',

  QUOTA_row1k_2_9 = '2',
  QUOTA_col1k_2_9 = '10',
  QUOTA_row1v_2_9 = '여성',
  QUOTA_col1v_2_9 = '60~64',
  QUOTA_quotaType_2_9 = '1//10/',
  QUOTA_row1k_2_10 = '2',
  QUOTA_col1k_2_10 = '11',
  QUOTA_row1v_2_10 = '여성',
  QUOTA_col1v_2_10 = '65~69',
  QUOTA_quotaType_2_10 = '1//11/',
}

export enum QUESTION_MOVE_TYPE {
  PREV = 'prev',
  APPEND = 'append',
}

export enum CHILD_TYPE {
  SHOW = 'show',
  HIDE = 'hide',
}

export enum DEFAULT_QUESTION_OWNER {
  SIMPLE_SURVEY = 'SIMPLE-SURVEY',
}

export const typeArray: string[] = [
  QUESTION_TYPE.DESC,
  QUESTION_TYPE.TITLE,
  QUESTION_TYPE.COMPLETE,
  QUESTION_TYPE.QUOTA,
  QUESTION_TYPE.RECODE_EXACT,
  QUESTION_TYPE.RECODE_RANGE,
];
export const descDefaultArray: string[] = [
  DEFAULT_DATA.TXT_COMPLETE,
  DEFAULT_DATA.TXT_COMPLETE2,
  DEFAULT_DATA.TXT_COMPLETE3,
  DEFAULT_DATA.TXT_OUT,
  DEFAULT_DATA.TXT_OUT2,
  DEFAULT_DATA.TXT_OUT3,
  DEFAULT_DATA.TXT_OVER,
  DEFAULT_DATA.TXT_BAD,
];

export enum GENDER {
  MALE_KEY = '1',
  MALE_VALUE = 'MALE',
  FEMALE_KEY = '2',
  FEMALE_VALUE = 'FEMALE',
}

/**
 * 설문 타입
 */
export enum CREATE_TYPE {
  PMI_PANEL = 1, // PMI 패널조사
  LIST = 2, // LIST 조사
}

/**
 * 링크 상태
 */
export enum LINK_STATUS {
  DEFAULT = -1, //링크 생성 전
  TEST = 0, // 테스트 링크 생성
  REAL = 1, // 링크 확정 (링크 확정 후에는 설문 수정 불가능 하도록 적용)
  // PAID = 2, // 패널 조사인 경우 결제된 상태
  REJECT = 3, // 패널 조사인 경우 ADMIN이 조사에 대해 거절한 상태
  REFUND = 4, // 패널 조사인 경우 ADMIN이 환불해준 상태

  REVIEW_HOLD = 201, // 검수 대기
  REVIEW = 202, // 검수 중
  REVIEW_DONE = 203, // 검수 완료
  RE_REVIEW = 204,

  FW_START = 101, // 실사가 시작된 상태
  FW_END = 102, // 실사 종료
  FW_PAUSE = 103, // 실사 일시 중단
  FW_CANCEL = 104, // 실사 취소
  FW_SHUT_DOWN = 105, // 실사 강제 종료

  SAMPLE = 999, // SAMPLE 프로젝트
}
/**
 * 지역 설정
 */
export enum CREATE_REGION {
  ALL = 4, // 전국
  SEOUL = 1, // 서울
  IC_GG = 2, //인천, 경기
  METRO_5 = 3, // 수도권 제외 5대 광역시
}
// 문항 최대 등록 갯수
export enum maxQuestionCount {
  PANEL = 100,
  LIST = 30,
}

// radioSets, checkSets 행 보기 최대 수
export const setsValueMax = 15;

export const QUESTION_TYPES_LIST = [
  {
    text: '주관식 단답형',
    value: QUESTION_TYPE.MULTI_TEXT,
    icons: ['fas', 'quote-right'],
    desc: '여러개의입력값을 응답받을 수 있는 문항입니다.',
  },
  {
    text: '주관식 장문형',
    value: QUESTION_TYPE.TEXTAREA,
    icons: ['fas', 'keyboard'],
    desc: '여러줄의 주관식 입력을 받을 수 있는 문항입니다.',
  },
  {
    text: '단일 선택형',
    value: QUESTION_TYPE.RADIO,
    icons: ['fas', 'dot-circle'],
    desc: '한개의 보기를 선택하는 문항입니다.',
  },
  {
    text: '복수 선택형',
    value: QUESTION_TYPE.CHECK,
    icons: ['fas', 'check-square'],
    desc: '여러개의 보기를 선택할 수 있는 문항입니다.',
  },
  {
    text: '복수 행렬형',
    value: QUESTION_TYPE.CHECKSETS,
    icons: ['fas', 'check-square'],
    desc: '여러 항목을 복수로 응답할 수 있는 문항입니다.',
  },
  {
    text: '척도형',
    value: QUESTION_TYPE.RADIOSET,
    icons: ['fas', 'balance-scale-right'],
    desc: '척도형 문항입니다.',
  },
  {
    text: '행렬형',
    value: QUESTION_TYPE.RADIOSETS,
    icons: ['fas', 'table'],
    desc: '여러 항목에 응답할 수 있는 척도형 문항입니다.',
  },
  {
    text: '순위형',
    value: QUESTION_TYPE.GRADE_CLICK,
    icons: ['fas', 'sort-numeric-up'],
    desc: '순위를 클릭해서 입력할 수 있는 문항입니다.',
  },
  {
    text: '설문 제목',
    value: QUESTION_TYPE.TITLE,
    icons: ['fas', 'heading'],
    desc: '제목입니다.',
  },
  {
    text: '안내문',
    value: QUESTION_TYPE.DESC,
    icons: ['fas', 'box'],
    desc: '안내문입니다.',
  },
];

//
export enum OUT_STATUS {
  COMPLETE = 'complete',
  OVER = 'over',
  OUT = 'out',
  BAD = 'bad',
}
