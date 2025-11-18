export const validatePassword = (pw: string) => {
  if (pw.length <= 8 || pw.length >= 64) {
    return "8~64자 사이로만 입력해주세요";
  }
  if (!/[a-z]/.test(pw)) {
    return "소문자를 포함해주세요";
  }
  if (!/[A-Z]/.test(pw)) {
    return "대문자를 포함해주세요";
  }
  if (!/[0-9]/.test(pw)) {
    return "숫자를 포함해주세요";
  }
  if (!/[!@#$%^&*]/.test(pw)) {
    return "특수문자(!@#$%^&*)를 포함해주세요";
  }
  if (/\s/.test(pw)) {
    return "공백은 허가되지 않습니다";
  }
  return "";
};

export const validateEmail = (email: string) => {
  const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  if (!email_regex.test(email)) {
    return "올바른 이메일 형식을 입력해주세요";
  }
  return "";
};
