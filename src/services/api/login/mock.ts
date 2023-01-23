import { freeze } from "@/utils/freeze";
import { LoginRequest, LoginResponse, PostLogin } from ".";

const mockedPostLoginResponse = (): LoginResponse => ({
  id: "1",
  user: "name",
  email: "email",
  token: "token",
});

export const postLogin: PostLogin = async (
  request: LoginRequest
): Promise<LoginResponse> => {
  console.log("postLogin", request);
  await freeze();
  return mockedPostLoginResponse();
};
