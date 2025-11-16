import { useMemo } from "react";
import { Button } from "../../../../../components/button/Button";
import { InputBox } from "../../../../../components/input-box/InputBox";

import * as styles from "./Step.css";
import { validateEmail } from "../../utils/validateData";

export function Step3({
  name,
  email,
  age,
  handleSubmit,
  handleChangeFormData,
}: {
  name: string;
  email: string;
  age: string;
  handleSubmit: () => void;
  handleChangeFormData: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const isEmpty =
    name.trim().length === 0 ||
    email.trim().length === 0 ||
    age.trim().length === 0;

  const emailError = useMemo(() => {
    if (email.length > 0) {
      return validateEmail(email);
    }
  }, [email]);

  const ageError = useMemo(() => {
    if (age.length > 0 && (isNaN(Number(age)) || Number(age) <= 0)) {
      return "나이는 0보다 큰 숫자여야 합니다.";
    }
    return "";
  }, [age]);

  const errorMessage = emailError || ageError || "";
  const isDisabled = isEmpty || emailError !== "" || ageError !== "";

  return (
    <div className={styles.container}>
      <InputBox
        label="이름"
        type="text"
        id="name"
        name="name"
        placeholder="이름을 입력해주세요"
        value={name}
        onChange={(e) => handleChangeFormData(e)}
      />
      <InputBox
        label="이메일"
        type="email"
        id="email"
        name="email"
        placeholder="name@gmail.com"
        value={email}
        onChange={(e) => handleChangeFormData(e)}
      />
      <InputBox
        label="나이"
        type="number"
        id="age"
        name="age"
        placeholder="숫자로 입력"
        value={age}
        onChange={(e) => handleChangeFormData(e)}
      />
      <span className={styles.message}>{errorMessage}</span>
      <Button variant="primary" disabled={isDisabled} onClick={handleSubmit}>
        회원가입
      </Button>
    </div>
  );
}
