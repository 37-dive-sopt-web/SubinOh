export interface SignUpForm {
  id: string;
  password: string;
  passwordConfirm: string;
  name: string;
  email: string;
  age: string;
}

export interface SignUpReq {
  username: string;
  password: string;
  name: string;
  email: string;
  age: number;
}
