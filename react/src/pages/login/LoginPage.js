import { useState } from "react";
import LoginForm from "../../components/login/LoginForm";
import RegisterForm from "../../components/login/RegisterForm";
import "./LoginPage.scss";
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginForm, setIsLoginForm] = useState("");

  return (
    <div className="login-page">
      <div className="login-page-form-container">
        {isLoginForm ? (
          <>
            <LoginForm
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            ></LoginForm>
            <p>
              Pas encore inscrit?{" "}
              <span onClick={(e) => setIsLoginForm(false)}>Crée un compte</span>
            </p>
          </>
        ) : (
          <>
            <RegisterForm
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            ></RegisterForm>
            <p>
              Déja inscrit?{" "}
              <span onClick={(e) => setIsLoginForm(true)}>Connexion</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
export default LoginPage;
