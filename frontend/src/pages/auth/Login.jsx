import "./Login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-card">
        <h1>FloraFlow</h1>
        <p>Staff Login</p>

        <form>
          <div className="login-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>

          <div className="login-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
