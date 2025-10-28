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
  if (!confirm("선택된 멤버를 삭제하시겠습니까?")) return;

  // 선택된 멤버ID 배열
  const check_ids = new Set(
    Array.from(check_members).map((member) => Number(member.id))
  );
  // 삭제할 멤버를 제외한 멤버목록
  const new_members = members.filter((member) => !check_ids.has(member.id));

  // 새로운 멤버목록 업데이트
  setMembers(new_members);
  renderAllMembers();
}
deleteBtn.addEventListener("click", deleteMembers);
