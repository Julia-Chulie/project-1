import { useEffect, useState } from "react";
import { EMAIL_REGEX, PASSWORD_REGEX, USERNAME_REGEX } from "../../const/Regex";

function RegisterForm({
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
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);
  const [isValidUsername, setIsValidUsername] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(EMAIL_REGEX.test(e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsValidPassword(PASSWORD_REGEX.test(e.target.value));
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setIsValidConfirmPassword(password === e.target.value);
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setIsValidUsername(USERNAME_REGEX.test(e.target.value));
  };

  const isEmailValid = EMAIL_REGEX.test(email);
  const isPasswordValid = PASSWORD_REGEX.test(password);
  const isUsernameValid = USERNAME_REGEX.test(username);
  const canSubmit =
    password === confirmPassword &&
    isPasswordValid &&
    isUsernameValid &&
    isEmailValid;

  return (
    <form className="register-form login-page-form box-shadow-medium">
      <h1>Inscription</h1>
      <div className={`form-group is-error-${!isValidEmail}`}>
        <label htmlFor="username" className="text-medium">
          Adresse mail:
        </label>

        <input
          className="box-shadow-light"
          name="email"
          type="email"
          value={email}
          onChange={(e) => handleEmailChange(e)}
        />
        <p className="err-message">Adresse mail invalide</p>
      </div>
      <div className={`form-group is-error-${!isValidUsername}`}>
        <label htmlFor="username" className="text-medium">
          Identifiant:
          <input
            className="box-shadow-light"
            name="username"
            type="text"
            value={username}
            onChange={(e) => handleUsernameChange(e)}
          />
          <p className="err-message">Au moin 8 caractères</p>
        </label>
      </div>
      <div className={`form-group is-error-${!isValidPassword}`}>
        <label htmlFor="password" className="text-medium">
          Mot de passe:
          <input
            name="password"
            type="password"
            value={password}
            className="box-shadow-light"
            onChange={(e) => handlePasswordChange(e)}
          />
          <p className="err-message">Au moin 8 caractères et un chiffre</p>
        </label>
      </div>
      <div className={`form-group is-error-${!isValidConfirmPassword}`}>
        <label htmlFor="confirm-password" className="text-medium">
          Confirmer le mot de passe:
          <input
            className="box-shadow-light"
            name="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(e) => handleConfirmPasswordChange(e)}
          />
          <p className="err-message">Les mots de passe ne correspondent pas</p>
        </label>
      </div>

      <button disabled={!canSubmit} className="button-submit text-high bold">
        Envoyer
      </button>
    </form>
  );
}
export default RegisterForm;
