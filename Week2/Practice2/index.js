const text = document.getElementById("add-text");
const button = document.getElementById("add-btn");
const ul = document.getElementById("todo-list");

// 로컬 스토리지에서 가져오기
const todos = JSON.parse(localStorage.getItem("todo")) || [];

// 투두 목록 초기화
todos.forEach((todo) => {
  const li = document.createElement("li");
  li.textContent = todo;
  ul.appendChild(li);
});

// 투두 목록 생성 및 로컬 스토리지 저장
const addTodoList = (todo) => {
  const li = document.createElement("li");
  li.textContent = todo;
  ul.appendChild(li);

  todos.push(todo);
  localStorage.setItem("todo", JSON.stringify(todos));
};

// 투두 목록 추가하기
const handleClickBtn = () => {
  const todo = text.value;
  if (!todo) return;

  addTodoList(todo);
  text.value = "";
};

// 버튼 이벤트 리스너 추가
button.addEventListener("click", handleClickBtn);
