import { members } from "./data.js";

const table = document.querySelector(".members__table");

// 멤버 데이터 초기 세팅
if (!getMembers()) {
  localStorage.setItem("membersData", JSON.stringify(members));
}

// 멤버 데이터 가져오기
function getMembers() {
  const members = localStorage.getItem("membersData");
  console.log(JSON.parse(members));
  return JSON.parse(members);
}

// 테이블 요소 초기화
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
  table.appendChild(tr);
}

getMembers().forEach(renderMembers);
