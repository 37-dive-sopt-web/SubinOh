import { useState } from "react";
import { useNavigate } from "react-router";

type FormData = {
  id: string;
  password: string;
  passwordConfirm: string;
  name: string;
  email: string;
  age: string;
};

const INITIAL_FORM_DATA: FormData = {
  id: "",
  password: "",
  passwordConfirm: "",
  name: "",
  email: "",
  age: "",
};

export function useSignUp() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);

  // 1. 이벤트 핸들링 함수
  const handleChangeFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((pre) => ({
      ...pre,
      [name]: String(value),
    }));
  };

  // 2. 다음 단계 이동
  const handleNextStep = () => {
    setStep((pre) => pre + 1);
  };

  // 3. 단계 되돌아가기
  const handleBackToStep = () => {
    if (step == 1) {
      navigate("/login");
      return;
    }
    setStep((pre) => pre - 1);
  };

  // 4. 회원가입 폼 제출
  const handleSubmit = () => {
    console.log(formData); //(임시)
    navigate("/login", { replace: true });
  };

  return {
    step,
    formData,
    handleChangeFormData,
    handleNextStep,
    handleBackToStep,
    handleSubmit,
  };
}
