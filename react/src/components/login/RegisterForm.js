import { useState } from "react";

export const RegisterForm = ({
  username,
  password,
  setUsername,
  setPassword,
}) => {
  const [confirmPassword, setConfirmPassword] = useState("");

  let canSubmit = confirmPassword == password;

  return (
    <form className="login-form">
      <div className="form-group">
        <label htmlFor="login">Identifiants:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="login">Mot de passe:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
    </form>
  );
};
