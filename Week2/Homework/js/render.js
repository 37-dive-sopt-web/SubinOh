import { getMembers } from "./storage.js";

const tbody = document.querySelector("tbody");
/**
 * 각 멤버에 대한 렌더링 함수
 * @param {object} member
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

export { renderMembers, renderAllMembers };
