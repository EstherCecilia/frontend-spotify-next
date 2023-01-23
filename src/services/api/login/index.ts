import * as mock from "@/services/api/login/mock";

const selectedModule = process.env.REACT_APP_USE_MOCKS === "true" ? mock : mock; //FIXME: add integration

export type LoginRequest = {
  email: string;
  password: string;
  remember: boolean;
};

export type LoginResponse = {
  id: string;
  token: string;
  user: string;
  email: string;
};

export type PostLogin = (request: LoginRequest) => Promise<LoginResponse>;

export const postLogin: PostLogin = selectedModule.postLogin;
