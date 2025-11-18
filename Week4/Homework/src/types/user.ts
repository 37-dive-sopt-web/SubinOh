export interface DefaultUser {
  id: string;
  name: string;
  email: string;
  age: number | string;
}

export interface User extends DefaultUser {
  username: string;
  status: string;
}

export type UserReq = Omit<User, "id" | "username" | "status">;
export type UserRes = User;
