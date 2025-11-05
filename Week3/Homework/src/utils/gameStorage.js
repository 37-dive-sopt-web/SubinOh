export const LOCAL_STORAGE_KEY = "gameLog";

// 클리어 시간이 짧은 순서대로 정렬
function sortedLogs(gameLogs) {
  const sorted = gameLogs.sort((a, b) => a.clearTime - b.clearTime);
  return sorted;
}

/**
 * getGameLogs : 게임로그 가져오기 함수
 * @returns {Array} 게임로그 데이터
 */
export function getGameLogs() {
  const gameLogs = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!gameLogs) return [];
  return sortedLogs(JSON.parse(gameLogs));
}

/**
 * setGameLogs : 게임로그 저장 함수
 * @param {Array} newLogs
 */
export function setGameLogs(newLogs) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newLogs));
}
