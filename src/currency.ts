
export type Country = {
  code: string;
  name: string;
  currency: string;
  locale: string;
};

export const countries: Country[] = [
  { code: "DZ", name: "Algeria", currency: "DZD", locale: "fr-DZ" },
  { code: "AO", name: "Angola", currency: "AOA", locale: "pt-AO" },
  { code: "BJ", name: "Benin", currency: "XOF", locale: "fr-BJ" },
  { code: "BW", name: "Botswana", currency: "BWP", locale: "en-BW" },
  { code: "BF", name: "Burkina Faso", currency: "XOF", locale: "fr-BF" },
  { code: "BI", name: "Burundi", currency: "BIF", locale: "fr-BI" },
  { code: "CV", name: "Cabo Verde", currency: "CVE", locale: "pt-CV" },
  { code: "CM", name: "Cameroon", currency: "XAF", locale: "fr-CM" },
  { code: "CF", name: "Central African Republic", currency: "XAF", locale: "fr-CF" },
  { code: "TD", name: "Chad", currency: "XAF", locale: "fr-TD" },
  { code: "KM", name: "Comoros", currency: "KMF", locale: "fr-KM" },
  { code: "CG", name: "Republic of the Congo", currency: "XAF", locale: "fr-CG" },
  { code: "CD", name: "Democratic Republic of the Congo", currency: "CDF", locale: "fr-CD" },
  { code: "CI", name: "Côte d’Ivoire", currency: "XOF", locale: "fr-CI" },
  { code: "DJ", name: "Djibouti", currency: "DJF", locale: "fr-DJ" },
  { code: "EG", name: "Egypt", currency: "EGP", locale: "ar-EG" },
  { code: "GQ", name: "Equatorial Guinea", currency: "XAF", locale: "es-GQ" },
  { code: "ER", name: "Eritrea", currency: "ERN", locale: "en-ER" },
  { code: "SZ", name: "Eswatini", currency: "SZL", locale: "en-SZ" },
  { code: "ET", name: "Ethiopia", currency: "ETB", locale: "am-ET" },
  { code: "GA", name: "Gabon", currency: "XAF", locale: "fr-GA" },
  { code: "GM", name: "The Gambia", currency: "GMD", locale: "en-GM" },
  { code: "GH", name: "Ghana", currency: "GHS", locale: "en-GH" },
  { code: "GN", name: "Guinea", currency: "GNF", locale: "fr-GN" },
  { code: "GW", name: "Guinea-Bissau", currency: "XOF", locale: "pt-GW" },
  { code: "KE", name: "Kenya", currency: "KES", locale: "en-KE" },
  { code: "LS", name: "Lesotho", currency: "LSL", locale: "en-LS" },
  { code: "LR", name: "Liberia", currency: "LRD", locale: "en-LR" },
  { code: "LY", name: "Libya", currency: "LYD", locale: "ar-LY" },
  { code: "MG", name: "Madagascar", currency: "MGA", locale: "fr-MG" },
  { code: "MW", name: "Malawi", currency: "MWK", locale: "en-MW" },
  { code: "ML", name: "Mali", currency: "XOF", locale: "fr-ML" },
  { code: "MR", name: "Mauritania", currency: "MRU", locale: "ar-MR" },
  { code: "MU", name: "Mauritius", currency: "MUR", locale: "en-MU" },
  { code: "MA", name: "Morocco", currency: "MAD", locale: "ar-MA" },
  { code: "MZ", name: "Mozambique", currency: "MZN", locale: "pt-MZ" },
  { code: "NA", name: "Namibia", currency: "NAD", locale: "en-NA" },
  { code: "NE", name: "Niger", currency: "XOF", locale: "fr-NE" },
  { code: "NG", name: "Nigeria", currency: "NGN", locale: "en-NG" },
  { code: "RW", name: "Rwanda", currency: "RWF", locale: "en-RW" },
  { code: "ST", name: "São Tomé and Príncipe", currency: "STN", locale: "pt-ST" },
  { code: "SN", name: "Senegal", currency: "XOF", locale: "fr-SN" },
  { code: "SC", name: "Seychelles", currency: "SCR", locale: "en-SC" },
  { code: "SL", name: "Sierra Leone", currency: "SLE", locale: "en-SL" },
  { code: "SO", name: "Somalia", currency: "SOS", locale: "so-SO" },
  { code: "ZA", name: "South Africa", currency: "ZAR", locale: "en-ZA" },
  { code: "SS", name: "South Sudan", currency: "SSP", locale: "en-SS" },
  { code: "SD", name: "Sudan", currency: "SDG", locale: "ar-SD" },
  { code: "TZ", name: "Tanzania", currency: "TZS", locale: "sw-TZ" },
  { code: "TG", name: "Togo", currency: "XOF", locale: "fr-TG" },
  { code: "TN", name: "Tunisia", currency: "TND", locale: "ar-TN" },
  { code: "UG", name: "Uganda", currency: "UGX", locale: "en-UG" },
  { code: "ZM", name: "Zambia", currency: "ZMW", locale: "en-ZM" },
  { code: "ZW", name: "Zimbabwe", currency: "ZWG", locale: "en-ZW" },
];

// Demonstration rates only: units of each currency per 1 NGN.
// Replace these with reliable exchange-rate data before real transactions.
export const demoRates: Record<string, number> = {
  NGN: 1,
  USD: 0.00065,
  GBP: 0.00049,
  EUR: 0.00056,
  DZD: 0.086,
  AOA: 0.60,
  BWP: 0.0087,
  BIF: 1.9,
  CVE: 0.059,
  XAF: 0.36,
  XOF: 0.36,
  KMF: 0.27,
  CDF: 1.5,
  DJF: 0.12,
  EGP: 0.032,
  ERN: 0.0098,
  SZL: 0.011,
  ETB: 0.086,
  GMD: 0.045,
  GHS: 0.010,
  GNF: 5.6,
  KES: 0.084,
  LSL: 0.011,
  LRD: 0.12,
  LYD: 0.0031,
  MGA: 2.9,
  MWK: 1.1,
  MRU: 0.026,
  MUR: 0.030,
  MAD: 0.0065,
  MZN: 0.042,
  NAD: 0.011,
  RWF: 0.87,
  STN: 0.013,
  SCR: 0.009,
  SLE: 0.015,
  SOS: 0.37,
  ZAR: 0.011,
  SSP: 0.085,
  SDG: 0.39,
  TZS: 1.7,
  TND: 0.0020,
  UGX: 2.4,
  ZMW: 0.017,
  ZWG: 0.021,
};

export const extraCurrencies = [
  { code: "USD", name: "US Dollar" },
  { code: "GBP", name: "British Pound" },
  { code: "EUR", name: "Euro" },
];

export function detectCountry(): string {
  if (typeof navigator === "undefined") return "NG";

  const languages = [
    ...(navigator.languages ?? []),
    navigator.language,
  ].filter(Boolean);

  for (const language of languages) {
    const match = language.match(/[-_]([A-Z]{2})(?:$|-)/i);
    const countryCode = match?.[1]?.toUpperCase();

    if (countryCode && countries.some((country) => country.code === countryCode)) {
      return countryCode;
    }
  }

  return "NG";
}

export function convertCurrency(
  amount: number,
  fromCurrency: string,
  toCurrency: string,
): number {
  const fromRate = demoRates[fromCurrency];
  const toRate = demoRates[toCurrency];

  if (!Number.isFinite(amount) || fromRate === undefined || toRate === undefined) {
    return amount;
  }

  // Rates are expressed as currency units per 1 NGN.
  return (amount / fromRate) * toRate;
}

export function formatCurrency(
  amount: number,
  currency: string,
  locale = "en-NG",
): string {
  try {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      maximumFractionDigits: 2,
    }).format(amount);
  } catch {
    return `${currency} ${amount.toFixed(2)}`;
  }
}
