import { postLogin } from "@/services/api/login";
import { useState } from "react";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const onLogin = async () => {
    const response = await postLogin({ email, password, remember });

    console.log({ response });
  };

  return {
    email,
    password,
    remember,
    setEmail,
    setPassword,
    setRemember,
    onLogin,
  };
};
