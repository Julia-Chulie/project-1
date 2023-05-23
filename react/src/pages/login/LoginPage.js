import { useState } from "react";
import LoginForm from "../../components/login/LoginForm";
import RegisterForm from "../../components/login/RegisterForm";
import "./LoginPage.scss";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginForm, setIsLoginForm] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="login-page">
      <div className="login-page-form-container">
        {!isLoginForm ? (
          <>
            <LoginForm
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
              email={email}
              setEmail={setEmail}
            ></LoginForm>
            <p className="switch-form">
              Pas encore inscrit?{" "}
              <span onClick={(e) => setIsLoginForm(!isLoginForm)}>
                Créer un compte
              </span>
            </p>
          </>
        ) : (
          <>
            <RegisterForm
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
              email={email}
              setEmail={setEmail}
            ></RegisterForm>
            <p className="switch-form">
              Déja inscrit?{" "}
              <span onClick={(e) => setIsLoginForm(!isLoginForm)}>
                Connexion
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
export default LoginPage;
