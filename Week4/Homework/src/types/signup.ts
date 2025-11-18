export interface SignUp {
  id: string;
  password: string;
  passwordConfirm: string;
  name: string;
  email: string;
  age: number | string;
}

export interface SignUpReq {
  username: string;
  password: string;
  name: string;
  email: string;
  age: number | string;
}

export interface SignUpRes {
  id: string;
  username: string;
  password: string;
  name: string;
  email: string;
  age: number;
}
