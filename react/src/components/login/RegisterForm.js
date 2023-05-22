import { useEffect, useState } from "react";

function RegisterForm({ username, password, setUsername, setPassword }) {
  const [confirmPassword, setConfirmPassword] = useState("");
  const canSubmit =
    password === confirmPassword && username.length && password.length;

  return (
    <form className="register-form login-page-form box-shadow-medium">
      <h1>Inscription</h1>
      <div className="form-group text-medium">
        <label htmlFor="username" className="text-medium">
          Identifiants:
        </label>
        <input
          className="box-shadow-light"
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="text-medium">
          Mot de passe:
        </label>
        <input
          name="password"
          type="password"
          value={password}
          className="box-shadow-light"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="confirm-password" className="text-medium">
          Confirmer le mot de passe:
        </label>
        <input
          className="box-shadow-light"
          name="confirm-password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <button disabled={!canSubmit} className="button-submit text-high bold">
        Envoyer
      </button>
    </form>
  );
}
export default RegisterForm;
