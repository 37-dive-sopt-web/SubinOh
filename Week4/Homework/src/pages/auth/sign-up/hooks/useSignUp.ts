import { useState } from "react";
import { useNavigate } from "react-router";
import type { SignUp, SignUpReq } from "../../../../types/signup";
import { useMutation } from "@tanstack/react-query";
import { signupMutationOptions } from "../../../../apis/mutations/signup";

const INITIAL_FORM_DATA: SignUp = {
  id: "",
  password: "",
  passwordConfirm: "",
  name: "",
  email: "",
  age: "",
};

export function useSignUp() {
  const navigate = useNavigate();
  const { mutate: signupMutate } = useMutation(signupMutationOptions.signup);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<SignUp>(INITIAL_FORM_DATA);

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
  const handleSubmit = async () => {
    const data: SignUpReq = {
      username: formData.id,
      password: formData.password,
      name: formData.name,
      email: formData.email,
      age: Number(formData.age),
    };
    signupMutate(data, {
      onSuccess: () => {
        alert(`${formData.id}님, 회원가입이 완료되었습니다`);
        navigate("/login", { replace: true });
      },
      onError: (err) => {
        alert(err.message);
      },
    });
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
