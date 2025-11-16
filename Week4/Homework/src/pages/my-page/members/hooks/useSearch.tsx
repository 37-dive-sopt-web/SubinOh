import { useState } from "react";
import type { SearchUser } from "../../../../types/user";

export function useSearch() {
  const [userId, setUserId] = useState<number | null>(null);
  const [userInfo, setUserInfo] = useState<SearchUser | null>(null);

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
