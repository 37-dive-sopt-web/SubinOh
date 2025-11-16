export interface LoginForm {
  id: string;
  password: string;
}
export interface LoginReq {
  username: string;
  password: string;
}

export interface LoginRes {
  data: {
    userId: number;
    message: string;
  };
}
