import { Outlet } from "react-router";

export function MyPageLayout() {
  return (
    <div>
      <header>마이페이지 레이아웃</header>
      <Outlet />
    </div>
  );
}
