import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Store,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { countries, detectCountry } from "../currency";
import "./MerchantApplicationPage.css";

export default function MerchantApplicationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [businessName, setBusinessName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("Groceries");
  const [countryCode, setCountryCode] = useState(() => detectCountry());
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  const selectedCountry =
    countries.find((country) => country.code === countryCode) ??
    countries.find((country) => country.code === "NG")!;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="application-page">
        <Link to="/" className="application-back">
          <ArrowLeft size={17} /> Home
        </Link>

        <section className="application-card application-success">
          <span className="application-icon success-icon">
            <CheckCircle2 size={28} />
          </span>

          <span className="application-kicker">DEMONSTRATION ONLY</span>
          <h1>Application preview complete</h1>

          <p>
            Your form has been validated in this browser. No application has
            been sent or saved. Once accounts and the database are connected,
            this step will submit your shop for administrator review.
          </p>

          <div className="application-status">
            <ShieldCheck size={20} />
            <span>
              <strong>Approval required</strong>
              <small>
                Your shop cannot sell until an administrator approves it.
              </small>
            </span>
          </div>

          <div className="application-preview-details">
            <h2>Application details</h2>
            <p>
              <strong>Business:</strong> {businessName}
            </p>
            <p>
              <strong>Owner:</strong> {ownerName}
            </p>
            <p>
              <strong>Email:</strong> {email}
            </p>
            <p>
              <strong>Country:</strong> {selectedCountry.name}
            </p>
            <p>
              <strong>Location:</strong> {location}
            </p>
            <p>
              <strong>Category:</strong> {category}
            </p>
          </div>

          <button
            className="application-submit"
            onClick={() => setSubmitted(false)}
          >
            Return to form
          </button>

          <Link to="/" className="application-secondary-link">
            Return to home
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="application-page">
      <Link to="/" className="application-back">
        <ArrowLeft size={17} /> Home
      </Link>

      <section className="application-card">
        <span className="application-icon">
          <Store size={27} />
        </span>

        <span className="application-kicker">
          SELL ON SHOPCONNECT AFRICA
        </span>

        <h1>Bring your business online.</h1>

        <p className="application-description">
          Tell us about your business. An administrator must review and approve
          your application before you can sell products.
        </p>

        <div className="application-notice">
          <ShieldCheck size={21} />
          <span>
            <strong>Merchant review process</strong>
            <small>
              Submitting an application does not automatically grant selling
              access.
            </small>
          </span>
        </div>

        <form className="application-form" onSubmit={handleSubmit}>
          <label>
            Business name
            <input
              required
              minLength={2}
              maxLength={100}
              value={businessName}
              onChange={(event) => setBusinessName(event.target.value)}
              placeholder="e.g. Green Basket Store"
            />
          </label>

          <label>
            Business owner's full name
            <input
              required
              minLength={2}
              maxLength={100}
              value={ownerName}
              onChange={(event) => setOwnerName(event.target.value)}
              placeholder="Enter your full name"
            />
          </label>

          <div className="application-form-row">
            <label>
              Email address
              <input
                required
                type="email"
                maxLength={254}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
              />
            </label>

            <label>
              Phone number
              <input
                required
                type="tel"
                maxLength={25}
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="Include your country code"
              />
            </label>
          </div>

          <label>
            Country of business
            <select
              required
              value={countryCode}
              onChange={(event) => setCountryCode(event.target.value)}
            >
              {countries
                .slice()
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
                ))}
            </select>
          </label>

          <label>
            Main product category
            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option>Groceries</option>
              <option>Fashion</option>
              <option>Beauty</option>
              <option>Electronics</option>
              <option>Home &amp; Living</option>
              <option>Health</option>
              <option>Other</option>
            </select>
          </label>

          <label>
            Business location
            <input
              required
              maxLength={150}
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder={`Town or city, region, ${selectedCountry.name}`}
            />
          </label>

          <label>
            Tell us about your business
            <textarea
              required
              minLength={20}
              maxLength={1000}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="What products do you sell, and who do you serve?"
              rows={4}
            />
          </label>

          <button className="application-submit" type="submit">
            Review application <ArrowRight size={17} />
          </button>

          <p className="application-terms">
            By continuing, you confirm that the information supplied is
            accurate.
          </p>
        </form>

        <p className="application-login-prompt">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </section>
    </main>
  );
}