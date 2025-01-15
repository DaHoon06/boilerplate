import { IS_PROD } from '@app/shared/config/processEnv';

export const DEPART_ID: string = IS_PROD
  ? '071877a1-334c-4651-a728-292751068bfb'
  : 'e22c9933-74c6-405c-beb4-e130c4c88a4e';

export enum USER_TYPE {
  NORMAL = 'NORMAL',
  COMPANY = 'COMPANY',
  UNIVERSITY = 'UNIVERSITY',
  INTEGRATED = '통합서비스', // 통합서비스 로그인
}

export enum USER_RATING {
  BRONZE = 'BRONZE',
  SILVER = 'SILVER',
  GOLD = 'GOLD',
  VIP = 'VIP',
  PM = 'PM',
}

export enum LOGIN_TYPE {
  NORMAL = 'NORMAL',
  KAKAO = 'KAKAO',
  NAVER = 'NAVER',
}
