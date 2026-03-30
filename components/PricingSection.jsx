"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { PLAN_DATA } from "@/lib/plans";

const STORAGE_KEYS = {
  currency: "cto_currency",
  billing: "cto_billing",
};

function detectDefaultCurrency() {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
  const lang = (typeof navigator !== "undefined" ? navigator.language : "").toUpperCase();

  if (tz.includes("Lagos") || lang.includes("-NG")) {
    return "NGN";
  }

  return "USD";
}

function formatPrice(currency, amount) {
  if (currency === "NGN") {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

function getInitialState() {
  if (typeof window === "undefined") {
    return { currency: "USD", billing: "monthly" };
  }

  const savedCurrency = localStorage.getItem(STORAGE_KEYS.currency);
  const savedBilling = localStorage.getItem(STORAGE_KEYS.billing);

  const currency = savedCurrency === "USD" || savedCurrency === "NGN" ? savedCurrency : detectDefaultCurrency();
  const billing = savedBilling === "monthly" || savedBilling === "yearly" ? savedBilling : "monthly";

  return { currency, billing };
}

export default function PricingSection({ showDetailsLink = false }) {
  const [{ currency, billing }, setState] = useState(getInitialState);

  const billingSuffix = billing === "monthly" ? "mo" : "yr";

  const pricingNote = currency === "NGN"
    ? "Intro offer for first billing cycle"
    : "Renews at standard rate after first term";

  const billingBadge = billing === "yearly" ? "2 months free with annual billing" : "";

  const rows = useMemo(() => {
    const row = (label, values) => ({ label, values });

    return [
      row("Price", PLAN_DATA.map((plan) => `${formatPrice(currency, plan.prices[currency][billing])} / ${billingSuffix}`)),
      row("Billing cycle", PLAN_DATA.map(() => (billing === "monthly" ? "Monthly billing" : "Annual billing"))),
      row(
        "Renewal price",
        PLAN_DATA.map((plan) => {
          if (currency !== "USD") {
            return "N/A";
          }
          const renewal = billing === "monthly" ? plan.prices.USD.renewMonthly : plan.prices.USD.renewYearly;
          return `${formatPrice("USD", renewal)} / ${billingSuffix}`;
        })
      ),
      row("Websites / domains", PLAN_DATA.map((plan) => plan.features.websites)),
      row("Storage", PLAN_DATA.map((plan) => plan.features.storage)),
      row("Bandwidth", PLAN_DATA.map((plan) => plan.features.bandwidth)),
      row("SSL", PLAN_DATA.map((plan) => plan.features.ssl)),
      row("Backups", PLAN_DATA.map((plan) => `${plan.features.backups} (retention by plan)`)),
      row("Support", PLAN_DATA.map((plan) => plan.features.support)),
      row("Best for", PLAN_DATA.map((plan) => plan.features.bestFor)),
    ];
  }, [currency, billing, billingSuffix]);

  const setCurrency = (nextCurrency) => {
    setState((prev) => {
      const next = { ...prev, currency: nextCurrency };
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEYS.currency, next.currency);
        localStorage.setItem(STORAGE_KEYS.billing, next.billing);
      }
      return next;
    });
  };

  const setBilling = (nextBilling) => {
    setState((prev) => {
      const next = { ...prev, billing: nextBilling };
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEYS.currency, next.currency);
        localStorage.setItem(STORAGE_KEYS.billing, next.billing);
      }
      return next;
    });
  };

  return (
    <div className="pricing-shell" data-pricing-root>
      <div className="toggle-row" role="group" aria-label="Pricing controls">
        <div>
          <span className="sr-only" id="currency-toggle-label">Select currency</span>
          <div className="toggle" role="group" aria-labelledby="currency-toggle-label">
            <button type="button" aria-pressed={currency === "USD"} onClick={() => setCurrency("USD")}>USD</button>
            <button type="button" aria-pressed={currency === "NGN"} onClick={() => setCurrency("NGN")}>NGN</button>
          </div>
        </div>

        <div>
          <span className="sr-only" id="billing-toggle-label">Select billing cycle</span>
          <div className="toggle" role="group" aria-labelledby="billing-toggle-label">
            <button type="button" aria-pressed={billing === "monthly"} onClick={() => setBilling("monthly")}>Monthly</button>
            <button type="button" aria-pressed={billing === "yearly"} onClick={() => setBilling("yearly")}>Annual</button>
          </div>
        </div>

        <strong>{billingBadge}</strong>
      </div>

      <p className="notice">{pricingNote}</p>

      <div className="plan-cards">
        {PLAN_DATA.map((plan) => {
          const currentPrice = plan.prices[currency][billing];
          const renewal = currency === "USD" ? (billing === "monthly" ? plan.prices.USD.renewMonthly : plan.prices.USD.renewYearly) : null;

          return (
            <article key={plan.key} className={plan.recommended ? "plan-card plan-card--recommended" : "plan-card"} aria-label={`${plan.name} plan`}>
              {plan.recommended ? <p className="plan-badge">Recommended</p> : null}
              <h3>{plan.name}</h3>
              <p className="plan-price">{formatPrice(currency, currentPrice)} <span className="plan-meta">/{billingSuffix}</span></p>

              {currency === "USD" ? (
                <p className="plan-meta">Renews at {formatPrice("USD", renewal)} / {billingSuffix}</p>
              ) : (
                <p className="plan-meta">Intro offer for first billing cycle</p>
              )}

              <ul className="plan-list">
                <li><CheckCircle2 size={16} className="check-icon" aria-hidden="true" />{plan.features.websites}</li>
                <li><CheckCircle2 size={16} className="check-icon" aria-hidden="true" />{plan.features.storage}</li>
                <li><CheckCircle2 size={16} className="check-icon" aria-hidden="true" />{plan.features.bandwidth}</li>
                <li><CheckCircle2 size={16} className="check-icon" aria-hidden="true" />{plan.features.ssl} and {plan.features.backups}</li>
                <li><CheckCircle2 size={16} className="check-icon" aria-hidden="true" />{plan.features.support}</li>
              </ul>

              <div className="plan-cta-row">
                <a className="btn btn-primary" href={`https://app.continentaltrustonline.online/register?plan=${plan.slugs[billing]}`}>
                  Get {plan.name}
                </a>
              </div>
            </article>
          );
        })}
      </div>

      <div className="comparison-shell">
        <h3>Quick comparison table</h3>
        <div className="table-wrap" aria-label="Plans comparison table">
          <table className="comparison-table">
            <thead>
              <tr>
                <th scope="col">Feature</th>
                {PLAN_DATA.map((plan) => <th key={plan.key} scope="col">{plan.name}</th>)}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label}>
                  <td className="row-label">{row.label}</td>
                  {row.values.map((value, index) => <td key={`${row.label}-${PLAN_DATA[index].key}`}>{value}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showDetailsLink ? (
        <p className="link-row">
          <Link className="text-link" href="/pricing/">Need full plan and billing details? Open the complete pricing page.</Link>
        </p>
      ) : null}
    </div>
  );
}
