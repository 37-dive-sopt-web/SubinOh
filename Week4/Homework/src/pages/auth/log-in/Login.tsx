import { Link, useNavigate } from "react-router";
import { useState } from "react";

import * as styles from "./Login.css";
import { InputBox } from "../../../components/input-box/InputBox";
import { Button } from "../../../components/button/Button";
import type { LoginForm, LoginRes } from "../../../types/login";
import { useMutation } from "@tanstack/react-query";
import { loginMutationOptions } from "../../../apis/mutations/login";
import { setUserId } from "../../../utils/auth-storage";

export function Login() {
  const navigate = useNavigate();
  const { mutate: loginMutate } = useMutation(loginMutationOptions.login);

  const [formData, setFormData] = useState<LoginForm>({
    id: "",
    password: "",
  }); // 로그인 데이터
  const [error, setError] = useState(""); // 로그인 에러 메시지

  /**
   * @description
   * - 입력 이벤트 핸들링
   * @param e
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /**
   * @description
   * - 로그인 API
   * - 서버응답값(userId) sessionStorage 저장
   */
  const handleSubmit = async () => {
    const data = {
      username: formData.id,
      password: formData.password,
    };
    loginMutate(data, {
      onSuccess: (res: LoginRes) => {
        setUserId(res.data.userId);
        navigate("/mypage");
      },
      onError: (err) => {
        console.log("로그인 실패:", err);
        setError(err.message);
      },
    });
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>로그인</h1>
      <div className={styles.form}>
        <InputBox
          label="아이디"
          type="text"
          id="id"
          name="id"
          placeholder="아이디를 입력해주세요"
          value={formData.id}
          onChange={handleChange}
        />
        <InputBox
          label="비밀번호"
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
          value={formData.password}
          onChange={handleChange}
        />
        {error !== "" && <div className={styles.error}>{error}</div>}
        <div className={styles.group}>
          <Button
            variant="primary"
            disabled={formData.id == "" || formData.password == ""}
            onClick={handleSubmit}
          >
            로그인
          </Button>
          <Link className={styles.link} to="/signup">
            회원가입
          </Link>
        </div>
      </div>
    </main>
  );
}
