function LoginForm() {
  return (
    <div>
      <h2>User Login</h2>

      <form>
        <div>
          <label>Username:</label>
          <br />
          <input type="username" placeholder="Enter your name" name="Nikhat" />
        </div>
        <br />

        <div>
          <label>Email:</label>
          <br />
          <input type="email" placeholder="Enter your email" name="email" />
        </div>

        <br />
        <div>
          <label>Password:</label>
          <br />
          <input type="password" placeholder=" password" name="password" />
        </div>

        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
