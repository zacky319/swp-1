export type LoginRequest = {
  username: string;
  password: string;
};

export const LoginRequestDefault: LoginRequest = {
  password: "",
  username:""
};
