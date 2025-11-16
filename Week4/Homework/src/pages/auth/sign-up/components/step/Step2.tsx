import { useMemo } from "react";
import { Button } from "../../../../../components/button/Button";
import { InputBox } from "../../../../../components/input-box/InputBox";
import { validatePassword } from "../../utils/validateData";

import * as styles from "./Step.css";

export function Step2({
  password,
  passwordConfirm,
  handleNextStep,
  handleChangeFormData,
}: {
  password: string;
  passwordConfirm: string;
  handleNextStep: () => void;
  handleChangeFormData: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const isEmpty = password.length == 0 || passwordConfirm.length == 0; // 비밀번호, 비밀번호 확인 입력값 없는지 체크

  // 1. 비밀번호 정책 위반하는지 체크하는 함수
  const validateError = useMemo(() => {
    if (password.length > 0) {
      return validatePassword(password);
    }
    return "";
  }, [password]);

  // 2. 비밀번호 + 비밀번호 확인란 일치하는지 체크하는 함수
  const mismatchError = useMemo(() => {
    if (passwordConfirm.length > 0 && password !== passwordConfirm) {
      return "비밀번호가 일치하지 않습니다.";
    }
    return "";
  }, [password, passwordConfirm]);

  const errorMessage = mismatchError || validateError; // 에러메시지
  const isDisabled = isEmpty || validateError !== "" || mismatchError !== ""; // 버튼 활성화

  return (
    <div className={styles.container}>
      <InputBox
        label="비밀번호"
        type="password"
        id="password"
        name="password"
        placeholder="비밀번호를 입력해주세요"
        value={password}
        onChange={(e) => handleChangeFormData(e)}
      />
      <InputBox
        label="비밀번호 확인"
        type="password"
        id="passwordConfirm"
        name="passwordConfirm"
        placeholder="비밀번호 확인"
        value={passwordConfirm}
        onChange={(e) => handleChangeFormData(e)}
      />
      <span className={styles.message}>{errorMessage}</span>
      <Button variant="primary" disabled={isDisabled} onClick={handleNextStep}>
        다음
      </Button>
    </div>
  );
}
