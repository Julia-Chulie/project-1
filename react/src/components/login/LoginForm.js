function LoginForm({ username, password, setUsername, setPassword }) {
  const canSubmit = username.length & password.length;
  return (
    <form className="login-form login-page-form box-shadow-medium">
      <h1>Connexion</h1>
      <div className="form-group">
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
          className="box-shadow-light"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button disabled={!canSubmit} className="button-submit text-high bold">
        Envoyer
      </button>
    </form>
  );
}
export default LoginForm;
