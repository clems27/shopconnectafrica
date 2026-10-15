
import { ArrowRight, Search, ShoppingBag, SlidersHorizontal, Store } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./MarketplacePage.css";
import {
  countries,
  convertCurrency,
  detectCountry,
  extraCurrencies,
  formatCurrency,
} from "../currency";

type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  currency: string;
  merchant: string;
  originCountryCode: string;
  sellerCountryCode: string;
  emoji: string;
  background: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Fresh Market Basket",
    category: "Groceries",
    price: 8500,
    currency: "NGN",
    merchant: "Green Basket Store",
    originCountryCode: "NG",
    sellerCountryCode: "NG",
    emoji: "🥑",
    background: "#edf5e8",
  },
  {
    id: 2,
    name: "Everyday Trainers",
    category: "Fashion",
    price: 18500,
    currency: "NGN",
    merchant: "Urban Style",
    originCountryCode: "KE",
    sellerCountryCode: "NG",
    emoji: "👟",
    background: "#f7ede7",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 32000,
    currency: "NGN",
    merchant: "Tech Corner",
    originCountryCode: "CN",
    sellerCountryCode: "ZA",
    emoji: "🎧",
    background: "#e9eef9",
  },
  {
    id: 4,
    name: "Skincare Essentials",
    category: "Beauty",
    price: 12500,
    currency: "NGN",
    merchant: "Glow & Care",
    originCountryCode: "GH",
    sellerCountryCode: "GH",
    emoji: "🧴",
    background: "#f7eaf0",
  },
  {
    id: 5,
    name: "Decorative Plant",
    category: "Home & Living",
    price: 9500,
    currency: "NGN",
    merchant: "The Home Edit",
    originCountryCode: "ZA",
    sellerCountryCode: "KE",
    emoji: "🪴",
    background: "#edf3e7",
  },
  {
    id: 6,
    name: "Reusable Water Bottle",
    category: "Health",
    price: 6000,
    currency: "NGN",
    merchant: "Everyday Essentials",
    originCountryCode: "EG",
    sellerCountryCode: "NG",
    emoji: "🧴",
    background: "#e9f3f4",
  },
  {
    id: 7,
    name: "Casual T-Shirt",
    category: "Fashion",
    price: 7500,
    currency: "NGN",
    merchant: "Urban Style",
    originCountryCode: "NG",
    sellerCountryCode: "GH",
    emoji: "👕",
    background: "#f1eefa",
  },

  {
    id: 8,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 24500,
    currency: "NGN",
    merchant: "Tech Corner",
    originCountryCode: "CN",
    sellerCountryCode: "ZA",
    emoji: "🎵",
    background: "#edf0f7",
  },
];

const categories = ["All", "Groceries", "Fashion", "Beauty", "Electronics", "Home & Living", "Health"];

export default function MarketplacePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(searchParams.get("category") || "All");
  const [cartCount, setCartCount] = useState(0);

  const [selectedCountryCode, setSelectedCountryCode] = useState(
  () => detectCountry(),
);

const [displayCurrency, setDisplayCurrency] = useState(() => {
  const detectedCode = detectCountry();
  return countries.find((country) => country.code === detectedCode)?.currency ?? "NGN";
});

const [originCountry, setOriginCountry] = useState("All");
const [sellerCountry, setSellerCountry] = useState("All");

const selectedCountry =
  countries.find((country) => country.code === selectedCountryCode) ??
  countries.find((country) => country.code === "NG")!;

const availableCurrencies = [
  ...new Set([
    ...countries.map((country) => country.currency),
    ...extraCurrencies.map((currency) => currency.code),
  ]),
].sort();

  const filteredProducts = useMemo(() => {
  const term = search.trim().toLowerCase();

  return products.filter((product) => {
    const origin = countries.find(
      (country) => country.code === product.originCountryCode,
    );

    const seller = countries.find(
      (country) => country.code === product.sellerCountryCode,
    );

    const matchesCategory =
      category === "All" || product.category === category;

    const matchesSearch =
      !term ||
      product.name.toLowerCase().includes(term) ||
      product.merchant.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term) ||
      (origin?.name.toLowerCase().includes(term) ?? false) ||
      (seller?.name.toLowerCase().includes(term) ?? false);

    const matchesOrigin =
      originCountry === "All" ||
      product.originCountryCode === originCountry;

    const matchesSeller =
      sellerCountry === "All" ||
      product.sellerCountryCode === sellerCountry;

    return (
      matchesCategory &&
      matchesSearch &&
      matchesOrigin &&
      matchesSeller
    );
  });
}, [category, search, originCountry, sellerCountry]);

  function chooseCategory(value: string) {
    setCategory(value);
    const next = new URLSearchParams(searchParams);
    if (value === "All") next.delete("category");
    else next.set("category", value);
    setSearchParams(next);
  }

  return (
    <div className="marketplace-page">
      <header className="marketplace-header">
        <Link to="/" className="marketplace-brand">
          <span className="marketplace-brand-icon"><Store size={21} /></span>
          <span><strong>ShopConnect</strong><small>AFRICA</small></span>
        </Link>
        <nav className="marketplace-nav">
          <Link to="/shop" className="active">Marketplace</Link>
          <Link to="/sell">Become a seller</Link>
        </nav>
        <Link to="/login" className="marketplace-cart">
          <ShoppingBag size={19} />
          <span>Sign in{cartCount > 0 ? ` · ${cartCount} items` : ""}</span>
        </Link>
      </header>

      <main className="marketplace-main">
        <section className="marketplace-intro">
          <span className="section-kicker">SHOP INDEPENDENT. SHOP LOCAL.</span>
          <h1>Find something <span>you’ll love.</span></h1>
          <p>Explore products from independent businesses on ShopConnect Africa.</p>

          <label className="market-search">
            <Search size={20} />
            <input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search products, shops or categories..."
              aria-label="Search products, shops or categories"
            />
            <SlidersHorizontal size={19} className="search-filter-icon" />
          </label>
        </section>

        <section className="market-category-section">
          <h2>Browse categories</h2>
          <div className="market-category-list">
            {categories.map((item) => (
              <button
                type="button"
                key={item}
                className={`market-category-chip ${category === item ? "selected" : ""}`}
                onClick={() => chooseCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </section>


<section className="market-location-controls">
  <div className="market-location-heading">
    <h2>Your shopping preferences</h2>
    <p>Choose your country, currency and the countries you want to shop from.</p>
  </div>

  <div className="market-location-grid">
    <label className="market-filter-field">
      <span>Your country</span>
      <select
        value={selectedCountryCode}
        onChange={(event) => {
          const code = event.target.value;
          setSelectedCountryCode(code);

          const country = countries.find((item) => item.code === code);
          if (country) setDisplayCurrency(country.currency);
        }}
      >
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    </label>

    <label className="market-filter-field">
      <span>Display currency</span>
      <select
        value={displayCurrency}
        onChange={(event) => setDisplayCurrency(event.target.value)}
      >
        {availableCurrencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </label>

    <label className="market-filter-field">
      <span>Product country of origin</span>
      <select
        value={originCountry}
        onChange={(event) => setOriginCountry(event.target.value)}
      >
        <option value="All">All countries</option>
        <option value="CN">China</option>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    </label>

    <label className="market-filter-field">
      <span>Seller's country</span>
      <select
        value={sellerCountry}
        onChange={(event) => setSellerCountry(event.target.value)}
      >
        <option value="All">All seller countries</option>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    </label>
  </div>

  <p className="market-currency-note">
    Prices are displayed in {displayCurrency}. Exchange rates are for
    demonstration only.
  </p>

  <button
    type="button"
    className="market-reset-button"
    onClick={() => {
      setOriginCountry("All");
      setSellerCountry("All");
      setSearch("");
      chooseCategory("All");
    }}
  >
    Clear product filters
  </button>
</section>


        <section className="market-products-section">
          <div className="market-products-heading">
            <div>
              <h2>Discover products</h2>
              <p>{filteredProducts.length} sample products</p>
            </div>
            <span className="demo-label">DEMO CATALOGUE</span>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="market-product-grid">
              {filteredProducts.map((product) => (
                <article className="market-product-card" key={product.id}>
                  <div
                    className="market-product-art"
                    style={{ background: product.background }}
                  >
                    <span>{product.emoji}</span>
                    <span className="sample-tag">Sample</span>
                  </div>
                  <div className="market-product-info">
                    <span className="market-product-category">{product.category}</span>
                    <h3>{product.name}</h3>
                    <p className="market-product-merchant"> <Store size={13} /> {product.merchant}</p>
                    <p className="market-product-country">
                        Origin: {
                        countries.find((country) => country.code === product.originCountryCode)?.name
                            ?? product.originCountryCode
                        }
                    </p>
                    <p className="market-product-country">Seller based in: {
                        countries.find((country) => country.code === product.sellerCountryCode)?.name
                            ?? product.sellerCountryCode
                        }
                    </p>
                    <div className="market-product-bottom">
                      <strong>
                        {formatCurrency(
                             convertCurrency(product.price, product.currency, displayCurrency),
                            displayCurrency,
                            selectedCountry.locale,
                     )}
                        </strong>
                      <button
                        type="button"
                        aria-label={`Add ${product.name} to demo basket`}
                        onClick={() => setCartCount((count) => count + 1)}
                      >
                        <ShoppingBag size={17} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="market-empty-state">
              <Search size={30} />
              <h3>No matching products</h3>
              <p>Try another search or choose a different category.</p>
              <button
                className="market-reset-button"
                onClick={() => {
                    setSearch("");
                    setOriginCountry("All");
                    setSellerCountry("All");
                    chooseCategory("All");
                    }}
              >
                Clear filters
              </button>
            </div>
          )}
        </section>

        <section className="market-seller-banner">
          <div>
            <span className="section-kicker">OWN A BUSINESS?</span>
            <h2>Bring your products to more customers.</h2>
            <p>Apply to open your shop. Selling access is enabled after administrator approval.</p>
          </div>
          <Link to="/sell" className="market-seller-button">
            Apply to sell <ArrowRight size={17} />
          </Link>
        </section>
      </main>

      <footer className="marketplace-footer">
        <Link to="/">ShopConnect Africa</Link>
        <span>Sample catalogue · Not available for real purchase yet</span>
      </footer>
    </div>
  );
}
