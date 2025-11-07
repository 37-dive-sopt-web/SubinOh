import { getMembers } from "./storage.js";
import { renderAllMembers, renderMembers } from "./render.js";

const tbody = document.querySelector("tbody");
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
      const filter_value = String(filterInputs[key].value.trim()).toLowerCase();
      const member_value = String(member[key]).toLowerCase();

      return member_value.includes(filter_value);
    });
  });
  tbody.innerHTML = "";
  const fragment = new DocumentFragment();

  new_members.forEach((member) => {
    const tr = renderMembers(member);
    fragment.appendChild(tr);
  });

  tbody.appendChild(fragment);
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
