
import { ArrowLeft, LockKeyhole, Store } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Demo only: authentication is not connected yet. No login was performed.");
  }

  return (
    <main className="application-page">
      <Link to="/" className="application-back"><ArrowLeft size={17} /> Home</Link>
      <section className="application-card">
        <span className="application-icon"><LockKeyhole size={27} /></span>
        <span className="application-kicker">WELCOME BACK</span>
        <h1>Log in to ShopConnect.</h1>
        <p className="application-description">
          Access your account to continue shopping or manage your business.
        </p>

        <form className="application-form" onSubmit={handleSubmit}>
          <label>
            I want to log in as
            <select value={role} onChange={(event) => setRole(event.target.value)}>
              <option value="customer">Customer</option>
              <option value="merchant">Merchant</option>
            </select>
          </label>

          <label>
            Email address
            <input type="email" required autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" />
          </label>

          <label>
            Password
            <input type="password" required autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your password" />
          </label>

          <button className="application-submit" type="submit">Log in</button>
          {message && <p className="application-form-message" role="status">{message}</p>}
        </form>

        <p className="application-login-prompt">
          New to ShopConnect Africa? <Link to="/register">Create an account</Link>
        </p>
        <p className="application-login-prompt">
          Want to sell? <Link to="/sell">Apply as a merchant</Link>
        </p>
        <p className="application-login-prompt">
          <Store size={14} style={{ verticalAlign: "middle" }} /> Merchant access requires approval.
        </p>
      </section>
    </main>
  );
}
