import { members } from "../data/data.js";

/**
 * 멤버 데이터 초기 세팅
 */
function initMembers() {
  if (!getMembers()) {
    localStorage.setItem("membersData", JSON.stringify(members));
  }
}

/**
 * 멤버 데이터 가져오기 (localStorage)
 * @returns {Array} 멤버 데이터
 */
function getMembers() {
  const members = localStorage.getItem("membersData");
  return JSON.parse(members);
}

/**
 * 멤버 데이터 저장하기 (localStorage)
 * @param {Array} newMembers
 */
function setMembers(newMembers) {
  localStorage.setItem("membersData", JSON.stringify(newMembers));
}

export { initMembers, getMembers, setMembers };
