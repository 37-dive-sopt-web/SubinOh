import { Link } from "react-router";
import icArrow from "../../../assets/ic-arrow-left.svg";
import * as styles from "./SignUp.css";
import { Step1 } from "./components/step/Step1";
import { Step2 } from "./components/step/Step2";
import { Step3 } from "./components/step/Step3";
import { useSignUp } from "./hooks/useSignUp";

export function SignUp() {
  const {
    step,
    formData,
    handleChangeFormData,
    handleNextStep,
    handleBackToStep,
    handleSubmit,
  } = useSignUp();

  return (
    <main className={styles.container}>
      <div>
        <img
          className={styles.backToStep}
          src={icArrow}
          alt="회원가입 단계 되돌아가기"
          onClick={handleBackToStep}
        />
        <h1>회원가입</h1>
      </div>
      {step === 1 && (
        <Step1
          id={formData.id}
          handleNextStep={handleNextStep}
          handleChangeFormData={handleChangeFormData}
        />
      )}
      {step == 2 && (
        <Step2
          password={formData.password}
          passwordConfirm={formData.passwordConfirm}
          handleNextStep={handleNextStep}
          handleChangeFormData={handleChangeFormData}
        />
      )}
      {step == 3 && (
        <Step3
          name={formData.name}
          email={formData.email}
          age={String(formData.age)}
          handleSubmit={handleSubmit}
          handleChangeFormData={handleChangeFormData}
        />
      )}
      <div>
        <span>이미 계정이 있나요?</span>
        &nbsp;
        <Link className={styles.backToLogin} to="/login">
          로그인으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
