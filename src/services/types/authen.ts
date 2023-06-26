export type LoginRequest = {
  code: string;
  username: string;
  password: string;
};

export const LoginRequestDefault: LoginRequest = {
  code: "",
  password: "",
  username:""
};
