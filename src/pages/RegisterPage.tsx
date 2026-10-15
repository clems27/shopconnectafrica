
import { ArrowLeft, UserRoundPlus } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password.length < 8) {
      setMessage("Choose a password with at least 8 characters.");
      return;
    }

    if (role === "merchant") {
      setMessage("Demo only: your details have not been saved. Merchant registration and approval will be connected to the backend later.");
      return;
    }

    setMessage("Demo only: registration is not connected yet. No account has been created.");
  }

  return (
    <main className="application-page">
      <Link to="/" className="application-back"><ArrowLeft size={17} /> Home</Link>
      <section className="application-card">
        <span className="application-icon"><UserRoundPlus size={27} /></span>
        <span className="application-kicker">JOIN THE MARKETPLACE</span>
        <h1>Create your account.</h1>
        <p className="application-description">
          Join ShopConnect Africa to discover products or apply to sell your own.
        </p>

        <form className="application-form" onSubmit={handleSubmit}>
          <label>
            Account type
            <select value={role} onChange={(event) => setRole(event.target.value)}>
              <option value="customer">Customer — shop for products</option>
              <option value="merchant">Merchant — apply to sell</option>
            </select>
          </label>

          <label>
            Full name
            <input required minLength={2} maxLength={100} autoComplete="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter your full name" />
          </label>

          <label>
            Email address
            <input required type="email" maxLength={254} autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" />
          </label>

          <label>
            Password
            <input required type="password" minLength={8} autoComplete="new-password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="At least 8 characters" />
          </label>

          <button className="application-submit" type="submit">Create account</button>
          {message && <p className="application-form-message" role="status">{message}</p>}
        </form>

        <p className="application-login-prompt">
          Already registered? <Link to="/login">Log in</Link>
        </p>
        {role === "merchant" && (
          <p className="application-login-prompt">
            Merchant accounts must be approved before selling.
          </p>
        )}
      </section>
    </main>
  );
}
