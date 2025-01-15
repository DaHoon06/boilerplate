export enum Connection {
  GET_DATA = 'getData',
  SIMPLE_SURVEY = 'simpleSurvey',
  SURVEY_MATE = 'surveymate',
  SURVEY_MATE_PLATFORM = 'surveymate_platform',
  SURVEY_MATE_ANSWER = 'surveymate_answer', // getData > ANSWER 분리
  SURVEY_MATE_DATA = 'surveymate_data', // getData > DATA_ 분리
  SURVEY_MATE_OTHER = 'surveymate_other', // getData > LIST_ 분리 (기타 등등)
}

export enum DatabaseName {
  GET_DATA = 'getData',
  SIMPLE_SURVEY = 'simpleSurvey',
  SURVEY_MATE = 'surveymate',
  SURVEY_MATE_PLATFORM = 'surveymate_platform',
  ANSWER = 'surveymate_answer', // getData > ANSWER 분리
  DATA = 'surveymate_data', // getData > DATA_ 분리
  OTHER = 'surveymate_other', // getData > LIST_ 분리 (기타 등등)
}

export enum COLLECTIONS {
  QUESTION = 'QUESTION',
  USERS = 'USER',
  ACCESS_KEY = 'ACCESS_KEY',
  ANSWER = 'ANSWER',
  DOWNLOAD_CSV_QUEUE = 'DOWNLOAD_CSV_QUEUE',
  DOWNLOAD_QUEUE = 'UNI_DOWNLOAD_QUEUE', // // unisurvey queue 분리
  DATA_QUEUE = 'DATA_QUEUE',
  FILES = 'FILES',

  /**
   * 데이터베이스 분리 (simpleSurvey)
   */
  TEMPLATE = 'TEMPLATE',
  HELP = 'HELP',
  NEW_PROJECT_SETTING = 'NEW_PROJECT_SETTING',
  QUOTA_DATA = 'QUOTA_DATA',
  BOARD_QUESTION = 'BOARD_QUESTION',
  BOOTPAY_AUTH = 'bootPayAuth',
  ROUTE_LOG = 'ROUTE_LOG',
  ROUTE_JOIN_LOG = 'ROUTE_JOIN_LOG',
  BOOTPAY_PAYMENT = 'bootpayPayment',
  FIELD_WORK_JOBS = 'fieldwork.jobs',
  REPEAT_JOBS = 'repeat.jobs',
  MESSAGE_JOBS = 'message.jobs',
  //회원탈퇴 관련 정보 저장
  WITHDRAWAL = 'WITHDRAWAL',
  API_LOG = 'api.log',
  COST = 'cost',
  FEASIBILITY = 'feasibility',
  //블로그
  BLOG = 'BLOG',

  // QUESTION COLLECTION 분리 작업
  PROJECT = 'PROJECT',
  LOG_HISTORY = 'LOG_HISTORY',
  LOGIN_HISTORY = 'LOGIN_HISTORY',
  //Admin 검수항목
  SVY_CHECKLIST = 'SVY_CHECKLIST',
  // 차트 색상
  PALETTE = 'PALETTE',
  LIST_COST = 'list.cost',
  PANEL_COST = 'panel.cost',
}
