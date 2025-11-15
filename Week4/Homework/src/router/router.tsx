import { createBrowserRouter, Navigate } from "react-router";
import { Login } from "../pages/auth/log-in/Login";
import { SignUp } from "../pages/auth/sign-up/SignUp";
import { MyPageLayout } from "../pages/my-page/MyPageLayout";
import { MyPageInfo } from "../pages/my-page/info/MyPageInfo";
import { Members } from "../pages/my-page/members/Members";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="login" replace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/mypage",
    element: <MyPageLayout />,
    children: [
      { index: true, element: <MyPageInfo /> },
      { path: "members", element: <Members /> },
    ],
  },
]);
