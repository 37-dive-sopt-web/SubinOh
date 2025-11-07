import { getMembers, setMembers } from "./storage.js";
import { renderAllMembers } from "./render.js";

/**
 * 체크박스 - 멤버 선택 및 삭제
 */

// (1) 멤버 일괄 선택
const checkAll = document.querySelector(".check-all");

function selectAllChecks() {
  const checkArr = document.querySelectorAll(".check");
  for (const check of checkArr) {
    check.checked = checkAll.checked;
  }
}
checkAll.addEventListener("change", selectAllChecks);

// (2) 선택 멤버 삭제
const deleteBtn = document.querySelector(".btn-del");

function deleteMembers() {
  const members = getMembers();
  const check_members = document.querySelectorAll(".check:checked"); // 선택된 체크박스

  // 선택된 멤버가 없는 경우, return.
  if (check_members.length === 0) {
    alert("선택된 멤버가 없습니다.");
    return;
  }
  if (!confirm(`선택된 ${check_members.length}명의 멤버를 삭제하시겠습니까?`)) {
    // 삭제 철회 시, 선택된 멤버의 체크박스 초기화
    check_members.forEach((member) => (member.checked = false));
    if (checkAll) {
      checkAll.checked = false;
    }
    return;
  }

  // 선택된 멤버ID 배열
  const check_ids = new Set(
    Array.from(check_members).map((member) => Number(member.id))
  );
  // 삭제할 멤버를 제외한 멤버목록
  const new_members = members.filter((member) => !check_ids.has(member.id));

  // 새로운 멤버목록 업데이트
  setMembers(new_members);
  renderAllMembers();

  // 전체 체크상태를 false로 변경
  if (checkAll) {
    checkAll.checked = false;
  }
}
deleteBtn.addEventListener("click", deleteMembers);
