import { useState } from "react";
import type { UserReq } from "../../../../types/user";

export function useInfo(modifyMutate: (data: UserReq) => void) {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState<UserReq>({
    name: "",
    email: "",
    age: 0,
  });

  // 1. 이벤트 핸들링 함수
  const handleChangeUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((pre) => ({
      ...pre,
      [name]: String(value),
    }));
  };

  // 2. 유저 데이터 수정 함수
  const handleSubmit = () => {
    modifyMutate({
      name: userData.name,
      email: userData.email,
      age: Number(userData.age),
    });
  };

  return {
    username,
    setUsername,
    userData,
    setUserData,
    handleChangeUserData,
    handleSubmit,
  };
}
