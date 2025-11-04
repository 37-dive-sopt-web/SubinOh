//  게임 상태 정의
export const GAME_STATE = {
  LOADING: "loading",
  READY: "ready",
  INCOMPLETE: "incomplete",
  ALREADY: "already",
  SUCCESS: "success",
  FAIL: "fail",
  WIN: "win",
  TIMEOUT: "timeout",
};

// 게임 상태 별 안내메시지
export const GUIDE_MESSAGES = {
  [GAME_STATE.LOADING]: "잠시만 기다려주세요",
  [GAME_STATE.READY]: "카드를 눌러 게임을 시작",
  [GAME_STATE.INCOMPLETE]: "카드를 한장 더 선택",
  [GAME_STATE.ALREADY]: "이미 선택된 카드입니다",
  [GAME_STATE.SUCCESS]: "성공!",
  [GAME_STATE.FAIL]: "실패!",
  [GAME_STATE.WIN]: "게임 클리어",
  [GAME_STATE.TIMEOUT]: "시간 초과",
};

// 게임 레벨
export const GAME_LEVEL = {
  1: "Level1",
  2: "Level2",
  3: "Level3",
};

// 게임 레벨별 시간
export const TIME_LIMIT = {
  1: 40,
  2: 60,
  3: 100,
};

// 게임 레벨별 [행,열] 개수
export const GAME_DECK = {
  1: [4, 4],
  2: [4, 6],
  3: [6, 6],
};
