import { members } from "../data/data.js";

/**
 * 멤버 데이터 초기 세팅
 */
if (!getMembers()) {
  localStorage.setItem("membersData", JSON.stringify(members));
}

/**
 * 멤버 데이터 가져오기
 * @returns 멤버 데이터 (members)
 */
function getMembers() {
  const members = localStorage.getItem("membersData");
  return JSON.parse(members);
}

/**
 * 멤버목록 렌더링 함수
 * @param member
 */
const tbody = document.querySelector("tbody");
function renderMembers(member) {
  const column_key = [
    "name",
    "englishName",
    "github",
    "gender",
    "role",
    "codeReviewGroup",
    "age",
  ];

  const tr = document.createElement("tr");
  tr.classList.add(`members__row_${member.id}`);

  const td = document.createElement("td");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add(`check`);
  checkbox.id = member.id;
  td.appendChild(checkbox);
  tr.appendChild(td);

  column_key.forEach((key) => {
    const td = document.createElement("td");
    td.classList.add(`members__row_${key}`);

    if (key === "github") {
      td.innerHTML = `<a href="https://github.com/${member.github}" target="_blank" rel="noopener noreferrer">${member.github}</a>`;
    } else {
      td.textContent = `${member[key]}`;
    }
    tr.appendChild(td);
  });
  tbody.appendChild(tr);
}

/**
 * 전체 멤버 렌더링 함수
 */
function renderAllMembers() {
  tbody.innerHTML = "";
  getMembers().forEach(renderMembers);
}

/**
 * 멤버 필터링
 */
const filterInputs = {
  name: document.getElementById("user_name"),
  englishName: document.getElementById("user_name-eg"),
  github: document.getElementById("user_github"),
  gender: document.getElementById("user_gender"),
  role: document.getElementById("user_role"),
  codeReviewGroup: document.getElementById("user_team"),
  age: document.getElementById("user_age"),
};
const submit_btn = document.querySelector(".btn-submit");
const reset_btn = document.querySelector(".btn-reset");

// (1) 필터링 함수
function filterMembers() {
  const members = getMembers();

  const new_members = members.filter((member) => {
    return Object.keys(filterInputs).every((key) => {
      const filter_value = String(filterInputs[key].value).toLowerCase();
      const member_value = String(member[key]).toLowerCase();

      return member_value.includes(filter_value);
    });
  });
  tbody.innerHTML = "";
  new_members.forEach((member) => {
    renderMembers(member);
  });
}

// (2) 필터링 적용 버튼 함수
submit_btn.addEventListener("click", filterMembers);

// (3) 필터링 초기화 버튼 함수
function resetFilter() {
  filterInputs.name.value = "";
  filterInputs.englishName.value = "";
  filterInputs.github.value = "";
  filterInputs.gender.value = "";
  filterInputs.role.value = "";
  filterInputs.codeReviewGroup.value = "";
  filterInputs.age.value = "";

  renderAllMembers();
}
reset_btn.addEventListener("click", resetFilter);

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
  localStorage.setItem("membersData", JSON.stringify(new_members));
  renderAllMembers();
}
deleteBtn.addEventListener("click", deleteMembers);

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
    if (ModalInputs[key].value == "") {
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
    localStorage.setItem("membersData", JSON.stringify(members));

    // 모달 닫기 및 렌더링
    closeModal();
    renderAllMembers();
  }
}
modalCloseBtn.addEventListener("click", closeModal);
modalAddBtn.addEventListener("click", appendMember);

renderAllMembers();
