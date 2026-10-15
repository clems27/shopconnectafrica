
import { ArrowRight, CheckCircle2, MapPin, Package, Search, ShieldCheck, ShoppingBag, Store, Truck } from "lucide-react";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";

import MarketplacePage from "./pages/MarketplacePage";
import MerchantApplicationPage from "./pages/MerchantApplicationPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const categories = [
  { name: "Groceries", icon: "🛒", description: "Everyday essentials" },
  { name: "Fashion", icon: "👕", description: "Clothing and accessories" },
  { name: "Beauty", icon: "✨", description: "Beauty and personal care" },
  { name: "Electronics", icon: "📱", description: "Devices and accessories" },
  { name: "Home & Living", icon: "🏠", description: "Items for your home" },
  { name: "Health", icon: "🧴", description: "Health and wellness goods" },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Trusted local sellers",
    text: "Merchant applications are reviewed before selling is enabled.",
  },
  {
    icon: Package,
    title: "More choice in one place",
    text: "Discover products from independent businesses across categories.",
  },
  {
    icon: MapPin,
    title: "Built for African commerce",
    text: "A marketplace designed around the needs of local businesses and shoppers.",
  },
];

function HomePage() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <Link to="/" className="brand" aria-label="ShopConnect Africa home">
          <span className="brand-mark">
            <Store size={23} />
          </span>
          <span>
            <strong>ShopConnect</strong>
            <small>AFRICA</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#categories">Categories</a>
          <a href="#how-it-works">How it works</a>
          <a href="#sell">Sell with us</a>
        </nav>

        <div className="header-actions">
          <Link to="/login" className="login-link">Log in</Link>
          <Link to="/register" className="button button-dark header-cta">
            Get started <ArrowRight size={16} />
          </Link>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="status-dot" />
              YOUR MARKETPLACE. YOUR COMMUNITY.
            </span>

            <h1>
              Local businesses.
              <br />
              <span>Limitless possibilities.</span>
            </h1>

            <p className="hero-description">
              Discover products from independent sellers and help local
              businesses reach more customers, all in one place.
            </p>

            <div className="hero-actions">
              <Link to="/shop" className="button button-primary">
                <ShoppingBag size={18} />
                Explore products
                <ArrowRight size={17} />
              </Link>
              <Link to="/sell" className="button button-outline">
                <Store size={18} />
                Start selling
              </Link>
            </div>

            <div className="trust-note">
              <CheckCircle2 size={17} />
              <span>Merchant approval helps build a more trusted marketplace.</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Marketplace illustration">
            <div className="visual-glow" />
            <div className="market-card market-card-main">
              <div className="market-card-heading">
                <span className="mini-store-icon"><Store size={19} /></span>
                <div>
                  <strong>Discover local</strong>
                  <small>Independent businesses</small>
                </div>
                <span className="online-indicator" />
              </div>

              <div className="illustration-grid">
                <div className="illustration-tile tile-grocery">
                  <span>🥑</span><span>🍊</span><span>🥬</span>
                  <small>Fresh finds</small>
                </div>
                <div className="illustration-tile tile-fashion">
                  <span>👟</span>
                  <small>Everyday style</small>
                </div>
                <div className="illustration-tile tile-tech">
                  <span>🎧</span>
                  <small>Smart tech</small>
                </div>
                <div className="illustration-tile tile-home">
                  <span>🪴</span>
                  <small>Home essentials</small>
                </div>
              </div>

              <div className="market-card-footer">
                <span className="avatar-stack">
                  <span>🧑🏿</span><span>👩🏾</span><span>🧑🏽</span>
                </span>
                <span>Supporting independent businesses</span>
              </div>
            </div>

            <div className="floating-note floating-note-top">
              <span className="floating-icon"><ShieldCheck size={19} /></span>
              <span><strong>Reviewed sellers</strong><small>Approval before selling</small></span>
            </div>

            <div className="floating-note floating-note-bottom">
              <span className="floating-icon floating-icon-green"><Truck size={19} /></span>
              <span><strong>Shop with confidence</strong><small>Clear product information</small></span>
            </div>
          </div>
        </section>

        <section className="category-section" id="categories">
          <div className="section-heading">
            <div>
              <span className="section-kicker">FIND YOUR NEXT FAVOURITE</span>
              <h2>Explore by category</h2>
            </div>
            <Link to="/shop" className="text-link">
              Browse all <ArrowRight size={17} />
            </Link>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <Link
                to={`/shop?category=${encodeURIComponent(category.name)}`}
                className="category-card"
                key={category.name}
              >
                <span className="category-icon">{category.icon}</span>
                <strong>{category.name}</strong>
                <small>{category.description}</small>
                <ArrowRight className="category-arrow" size={17} />
              </Link>
            ))}
          </div>
        </section>

        <section className="how-section" id="how-it-works">
          <div className="section-heading">
            <div>
              <span className="section-kicker">SIMPLE BY DESIGN</span>
              <h2>Commerce that works for you</h2>
            </div>
          </div>

          <div className="benefit-grid">
            {benefits.map(({ icon: Icon, title, text }, index) => (
              <article className="benefit-card" key={title}>
                <span className="benefit-icon"><Icon size={23} /></span>
                <span className="benefit-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="sell-banner" id="sell">
          <div className="sell-banner-icon"><Store size={27} /></div>
          <div className="sell-banner-copy">
            <span className="section-kicker">FOR MERCHANTS</span>
            <h2>Ready to grow your business?</h2>
            <p>Create your shop profile and apply to become a seller on ShopConnect Africa.</p>
          </div>
          <Link to="/sell" className="button button-light">
            Apply to sell <ArrowRight size={17} />
          </Link>
        </section>
      </main>

      <footer className="footer">
        <Link to="/" className="brand footer-brand">
          <span className="brand-mark"><Store size={20} /></span>
          <span><strong>ShopConnect</strong><small>AFRICA</small></span>
        </Link>
        <p>Connecting shoppers and independent businesses.</p>
        <span className="footer-copyright">© {new Date().getFullYear()} ShopConnect Africa</span>
      </footer>
    </div>
  );
}


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<MarketplacePage />} />
      <Route path="/sell" element={<MerchantApplicationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

