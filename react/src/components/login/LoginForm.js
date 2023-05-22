export const LoginForm = ({ username, password, setUsername, setPassword }) => {
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
