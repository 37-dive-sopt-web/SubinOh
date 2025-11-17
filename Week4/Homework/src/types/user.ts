export interface User {
  id: string;
  name: string;
  email: string;
  age: string;
}

export interface UserInfo {
  id: number;
  username: string;
  name: string;
  email: string;
  age: number;
  status: string;
}

export interface UserRes {
  data: UserInfo;
}

export interface UpdateUserReq {
  name: string;
  email: string;
  age: number;
}

export interface UpdateUserRes {
  data: UserInfo;
}
