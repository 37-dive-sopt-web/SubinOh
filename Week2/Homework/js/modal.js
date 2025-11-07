import { getMembers, setMembers } from "./storage.js";
import { renderAllMembers } from "./render.js";

/**
 * 멤버 추가
 */
// (1) 멤버 추가 버튼 함수
const addBtn = document.querySelector(".btn-add");
function clickAddBtn() {
  modal.style.display = "block";
}
addBtn.addEventListener("click", clickAddBtn);

/**
 * (모달) 새로운 멤버 추가
 */
const ModalInputs = {
  name: document.getElementById("modal_name"),
  englishName: document.getElementById("modal_name-eg"),
  github: document.getElementById("modal_github"),
  gender: document.getElementById("modal_gender"),
  role: document.getElementById("modal_role"),
  codeReviewGroup: document.getElementById("modal_team"),
  age: document.getElementById("modal_age"),
};

const modal = document.querySelector(".modal__overlay");
const modalCloseBtn = document.querySelector(".btn-modal-close");
const modalAddBtn = document.querySelector(".btn-modal-add");

// (1) 모달 데이터 초기화 함수
function clearModal() {
  Object.keys(ModalInputs).map((key) => {
    ModalInputs[key].value = "";
  });
}
// (2) 모달 닫기 함수
function closeModal() {
  modal.style.display = "none";
  clearModal();
}
// (3) 모달 외부 클릭 시 닫기
modal.addEventListener("click", (event) => {
  if (event.target == event.currentTarget) {
    closeModal();
  }
});

// (4) 모달 유효성 검사 함수
function validateModal() {
  for (const key of Object.keys(ModalInputs)) {
    if (ModalInputs[key].value.trim() == "") {
      alert("모든 항목이 입력되어야 합니다.");
      return false;
    }
  }
  return true;
}
// (5) 멤버 추가 업데이트 함수
function appendMember() {
  if (validateModal()) {
    const members = getMembers();
    const maxId = Math.max(
      0,
      Math.max(...members.map((member) => Number(member.id)))
    );
    // 새로운 멤버 객체
    const new_member = {
      id: maxId + 1, // 멤버 ID 중 현재 가장 큰 값 + 1
      name: ModalInputs.name.value,
      englishName: ModalInputs.englishName.value,
      github: ModalInputs.github.value,
      gender: ModalInputs.gender.value,
      role: ModalInputs.role.value,
      codeReviewGroup: ModalInputs.codeReviewGroup.value,
      age: ModalInputs.age.value,
    };

    // 새로운 멤버 객체 추가
    members.push(new_member);
    setMembers(members);

    // 모달 닫기 및 렌더링
    closeModal();
    renderAllMembers();
  }
}
modalCloseBtn.addEventListener("click", closeModal);
modalAddBtn.addEventListener("click", appendMember);
