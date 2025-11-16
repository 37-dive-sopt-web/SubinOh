import { useState } from "react";
import type { User } from "../../../../types/user";

export function useInfo() {
  const [userData, setUserData] = useState<User>({
    id: "",
    name: "",
    email: "",
    age: "",
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
    console.log(userData);
    const result = true;
    if (result) {
      alert("정보가 저장되었어요");
    } else {
      alert("수정 실패");
    }
  };

  return { userData, handleChangeUserData, handleSubmit };
}
