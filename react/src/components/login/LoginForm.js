import { useEffect, useRef, useState } from "react";
import { EMAIL_REGEX, PASSWORD_REGEX, USERNAME_REGEX } from "../../const/Regex";

function LoginForm({
  username,
  password,
  setUsername,
  setPassword,
  email,
  setEmail,
}) {
  useEffect(() => {
    setEmail("");
    setPassword("");
    setUsername("");
  }, []);

  // const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidUsername, setIsValidUsername] = useState(true);
  const formRef = useRef();
  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  //   setIsValidEmail(EMAIL_REGEX.test(e.target.value));
  // };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setIsValidUsername(USERNAME_REGEX.test(e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsValidPassword(PASSWORD_REGEX.test(e.target.value));
  };

  const isPasswordValid = PASSWORD_REGEX.test(password);
  const isUsernameValid = USERNAME_REGEX.test(username);
  const canSubmit = isUsernameValid && isPasswordValid;
  return (
    <form
      className="login-form login-page-form box-shadow-medium"
      ref={formRef}
    >
      <h1>Connexion</h1>

      {/* <div className={`form-group is-error-${!isValidEmail}`}>
        <label htmlFor="email" className="text-medium">
          Adresse mail:
          <input
            className="box-shadow-light"
            name="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <p className="err-message">Adresse mail invalide</p>
        </label>
      </div> */}

      <div className={`form-group is-error-${!isValidUsername}`}>
        <label htmlFor="username" className="text-medium">
          Identifiant:
          <input
            className="box-shadow-light"
            name="username"
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
          <p className="err-message">Au moin 8 caractères</p>
        </label>
      </div>

      <div className={`form-group is-error-${!isValidPassword}`}>
        <label htmlFor="password" className="text-medium">
          Mot de passe:
          <input
            className="box-shadow-light"
            name="password"
            type="password"
            value={password}
            onChange={(e) => handlePasswordChange(e)}
          />
          <p className="err-message">Au moin 8 caractères et un chiffre</p>
        </label>
      </div>

      <button disabled={!canSubmit} className="button-submit text-high bold">
        Envoyer
      </button>
    </form>
  );
}
export default LoginForm;
