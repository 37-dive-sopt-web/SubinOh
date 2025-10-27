import { members } from "./data.js";

const table = document.querySelector(".members__table");
const tbody = document.querySelector("tbody");

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
  checkbox.classList.add(`check-${member.id}`);
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

renderAllMembers();
