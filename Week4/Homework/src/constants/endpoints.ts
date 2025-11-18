export const ENDPOINTS = {
  // 로그인
  USER_LOGIN: "api/v1/auth/login",
  // 회원가입
  USER_SIGNUP: "api/v1/users",
  // 개인정보 수정
  MODIFY_USER_INFO: (id: number) => `api/v1/users/${id}`,
  // 회원정보 조회
  SEARCH_USER: (id: number) => `api/v1/users/${id}`,
  // 회원 탈퇴
  WITHDRAW_USER: (id: number) => `api/v1/users/${id}`,
} as const;
