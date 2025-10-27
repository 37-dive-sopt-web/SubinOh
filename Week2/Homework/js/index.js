import { initMembers } from "./storage.js";
import { renderAllMembers } from "./render.js";
import "./filter.js";
import "./checkbox.js";
import "./modal.js";

initMembers(); // 로컬 스토리지 초기화
renderAllMembers(); // 초기 화면 렌더링
