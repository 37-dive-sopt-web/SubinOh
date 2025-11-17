import { useMutation, useQuery } from "@tanstack/react-query";
import { Button } from "../../../components/button/Button";
import { InputBox } from "../../../components/input-box/InputBox";
import * as styles from "./MyPageInfo.css";
import { useInfo } from "./hooks/useInfo";
import { userQueryOptions } from "../../../apis/queries/user";
import { getUserId } from "../../../utils/auth-storage";
import { useEffect } from "react";
import { modifyMutationOptions } from "./../../../apis/mutations/modify-user";

export function MyPageInfo() {
  const { data, isLoading } = useQuery(userQueryOptions.getUser(getUserId()));
  const { mutate: modifyMutate } = useMutation({
    ...modifyMutationOptions.modify,
    onSuccess: () => {
      alert("정보가 저장되었어요");
    },
    onError: () => {
      alert("정보 저장에 실패했어요");
    },
  });
  const { userData, setUserData, handleChangeUserData, handleSubmit } =
    useInfo(modifyMutate);

  useEffect(() => {
    if (data) {
      setUserData({
        id: data?.username,
        name: data?.name,
        email: data?.email,
        age: String(data?.age),
      });
    }
  }, [data, setUserData]);

  return (
    <div className={styles.container}>
      <h2>내 정보</h2>
      {isLoading ? (
        <div>데이터를 불러오는 중입니다...</div>
      ) : (
        <>
          <div className={styles.idContainer}>
            <span className={styles.caption}>아이디</span>
            <span className={styles.id}>{userData.id}</span>
          </div>
          <div className={styles.form}>
            <InputBox
              label="이름"
              type="text"
              id="name"
              name="name"
              value={userData.name}
              placeholder=""
              onChange={(e) => handleChangeUserData(e)}
            />
            <InputBox
              label="이메일"
              type="email"
              id="email"
              name="email"
              value={userData.email}
              placeholder=""
              onChange={(e) => handleChangeUserData(e)}
            />
            <InputBox
              label="나이"
              type="number"
              id="age"
              name="age"
              value={userData.age}
              placeholder=""
              onChange={(e) => handleChangeUserData(e)}
            />
            <Button variant="primary" onClick={handleSubmit}>
              저장
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
