import { useState } from "react";
import { LoginForm } from "../components/login/LoginForm";
import { registerForm } from "../components/login/RegisterForm";
export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login-page">
      <LoginForm
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
      ></LoginForm>
    </div>
  );
};
