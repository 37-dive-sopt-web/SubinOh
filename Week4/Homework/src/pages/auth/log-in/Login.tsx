import { Link } from "react-router";
import { useState } from "react";

import * as styles from "./Login.css";
import { InputBox } from "../../../components/input-box/InputBox";
import { Button } from "../../../components/button/Button";

export function Login() {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
  });
  const [error] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
        {error && <div className={styles.error}>임시 에러 메시지</div>}
        <div className={styles.group}>
          <Button
            variant="primary"
            disabled={formData.id == "" || formData.password == ""}
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
