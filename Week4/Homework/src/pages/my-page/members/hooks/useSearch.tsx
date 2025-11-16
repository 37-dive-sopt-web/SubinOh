import { useState } from "react";

type UserInfo = {
  id: number;
  username: string;
  name: string;
  email: string;
  age: number;
  status: string;
};

export function useSearch() {
  const [userId, setUserId] = useState<number | null>(null);
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  const handleUserId = (id: number) => {
    setUserId(Number(id));
  };

  const handleSearch = () => {
    console.log("검색 성공");
    setUserInfo({
      id: 0,
      username: "",
      name: "",
      email: "",
      age: 0,
      status: "ACTIVE",
    });
  };

  return { userId, handleUserId, handleSearch, userInfo };
}
