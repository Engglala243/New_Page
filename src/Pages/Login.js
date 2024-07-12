import './Log-in.css';
import Navigation from '../Components/Navigation';
function Login() {
  document.title = 'React page - Login';
  return (
    <>
    <Navigation/>
      <div className="login-container">
        <header className="login-header">
          <h1>Logn In</h1>
        </header>
        <section className="login-form-section">
          <form className="login-form">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            
            <button type="submit">Log In</button>
          </form>
        </section>
      </div>
    </>
  );
}

export default Login;
