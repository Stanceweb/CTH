(function () {
  const PLAN_DATA = [
    {
      key: "starter",
      name: "Starter",
      slugs: { monthly: "starter_monthly", yearly: "starter_yearly" },
      prices: {
        USD: {
          monthly: 3.99,
          yearly: 39.9,
          renewMonthly: 6.99,
          renewYearly: 69.9,
        },
        NGN: {
          monthly: 3900,
          yearly: 39000,
        },
      },
      features: {
        websites: "Up to 3 websites",
        storage: "Managed storage allocation",
        bandwidth: "Managed traffic allocation",
        ssl: "Free SSL",
        backups: "Automatic backups",
        support: "Standard support",
        bestFor: "New and small business sites",
      },
    },
    {
      key: "business",
      name: "Business",
      recommended: true,
      slugs: { monthly: "business_monthly", yearly: "business_yearly" },
      prices: {
        USD: {
          monthly: 9.99,
          yearly: 99.9,
          renewMonthly: 19.99,
          renewYearly: 199.9,
        },
        NGN: {
          monthly: 9900,
          yearly: 99000,
        },
      },
      features: {
        websites: "Up to 10 websites",
        storage: "Expanded managed storage",
        bandwidth: "Higher managed traffic allocation",
        ssl: "Free SSL",
        backups: "Automatic backups",
        support: "Priority support queue",
        bestFor: "Growing businesses and teams",
      },
    },
    {
      key: "pro",
      name: "Pro",
      slugs: { monthly: "pro_monthly", yearly: "pro_yearly" },
      prices: {
        USD: {
          monthly: 24.99,
          yearly: 249.9,
          renewMonthly: 49.99,
          renewYearly: 499.9,
        },
        NGN: {
          monthly: 24900,
          yearly: 249000,
        },
      },
      features: {
        websites: "Unlimited websites",
        storage: "Highest managed storage tier",
        bandwidth: "Highest managed traffic allocation",
        ssl: "Free SSL",
        backups: "Automatic backups",
        support: "Priority handling",
        bestFor: "High-growth and multi-site operations",
      },
    },
  ];

  const STORAGE_KEYS = {
    currency: "cto_currency",
    billing: "cto_billing",
  };
  const ZOHO_WIDGET_URL = "https://salesiq.zohopublic.com/widget?wc=siq87dbae343a4d60e77b60846805f4a6293a9ae448021831060240d77cc90fe883";

  function detectDefaultCurrency() {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const lang = (navigator.language || "").toUpperCase();

    if (tz.includes("Lagos") || lang.includes("-NG")) {
      return "NGN";
    }

    return "USD";
  }

  function loadState() {
    const savedCurrency = localStorage.getItem(STORAGE_KEYS.currency);
    const savedBilling = localStorage.getItem(STORAGE_KEYS.billing);

    const currency = savedCurrency === "USD" || savedCurrency === "NGN"
      ? savedCurrency
      : detectDefaultCurrency();

    const billing = savedBilling === "monthly" || savedBilling === "yearly"
      ? savedBilling
      : "monthly";

    return { currency, billing };
  }

  function saveState(state) {
    localStorage.setItem(STORAGE_KEYS.currency, state.currency);
    localStorage.setItem(STORAGE_KEYS.billing, state.billing);
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

  function setPressed(buttons, activeValue, attr) {
    buttons.forEach((button) => {
      const current = button.getAttribute(attr);
      button.setAttribute("aria-pressed", String(current === activeValue));
    });
  }

  function renderPricingNote(currency) {
    const nodes = document.querySelectorAll("[data-pricing-note]");
    const text = currency === "NGN"
      ? "Intro offer for first billing cycle"
      : "Renews at standard rate after first term";

    nodes.forEach((node) => {
      node.textContent = text;
    });
  }

  function row(label, values) {
    const cells = values.map((value) => `<td>${value}</td>`).join("");
    return `<tr><td class=\"row-label\">${label}</td>${cells}</tr>`;
  }

  function renderComparisonTable(state) {
    const tableBodies = document.querySelectorAll("[data-plan-table-body]");

    tableBodies.forEach((tbody) => {
      const priceValues = PLAN_DATA.map((plan) => {
        const amount = plan.prices[state.currency][state.billing];
        return `${formatPrice(state.currency, amount)} <strong>/ ${state.billing === "monthly" ? "mo" : "yr"}</strong>`;
      });

      const renewalValues = PLAN_DATA.map((plan) => {
        if (state.currency !== "USD") {
          return "N/A";
        }
        const amount = state.billing === "monthly"
          ? plan.prices.USD.renewMonthly
          : plan.prices.USD.renewYearly;

        return `${formatPrice("USD", amount)} / ${state.billing === "monthly" ? "mo" : "yr"}`;
      });

      const billingCycle = PLAN_DATA.map(() => state.billing === "monthly" ? "Monthly billing" : "Annual billing");
      const websiteValues = PLAN_DATA.map((plan) => plan.features.websites);
      const storageValues = PLAN_DATA.map((plan) => plan.features.storage);
      const bandwidthValues = PLAN_DATA.map((plan) => plan.features.bandwidth);
      const sslValues = PLAN_DATA.map((plan) => plan.features.ssl);
      const backupValues = PLAN_DATA.map((plan) => `${plan.features.backups} (retention by plan)`);
      const supportValues = PLAN_DATA.map((plan) => plan.features.support);
      const bestFor = PLAN_DATA.map((plan) => plan.features.bestFor);

      tbody.innerHTML = [
        row("Price", priceValues),
        row("Billing cycle", billingCycle),
        row("Renewal price", renewalValues),
        row("Websites / domains", websiteValues),
        row("Storage", storageValues),
        row("Bandwidth", bandwidthValues),
        row("SSL", sslValues),
        row("Backups", backupValues),
        row("Support", supportValues),
        row("Best for", bestFor),
      ].join("");
    });
  }

  function planCTA(plan, billing) {
    const slug = plan.slugs[billing];
    const href = `https://app.continentaltrustonline.online/register?plan=${slug}`;
    return `<a class=\"btn btn-primary\" href=\"${href}\">Get ${plan.name}</a>`;
  }

  function renderPlanCards(state) {
    const containers = document.querySelectorAll("[data-plan-cards]");

    containers.forEach((container) => {
      container.innerHTML = PLAN_DATA.map((plan) => {
        const recommended = Boolean(plan.recommended);
        const cardClass = recommended ? "plan-card plan-card--recommended" : "plan-card";
        const current = plan.prices[state.currency][state.billing];
        const renewal = state.currency === "USD"
          ? (state.billing === "monthly" ? plan.prices.USD.renewMonthly : plan.prices.USD.renewYearly)
          : null;

        const renewalText = state.currency === "USD"
          ? `<p class=\"plan-meta\">Renews at ${formatPrice("USD", renewal)} / ${state.billing === "monthly" ? "mo" : "yr"}</p>`
          : `<p class=\"plan-meta\">Intro offer for first billing cycle</p>`;

        const badge = recommended ? "<p class=\"plan-badge\">Recommended</p>" : "";

        return `
          <article class=\"${cardClass}\" aria-label=\"${plan.name} plan\">
            ${badge}
            <h3>${plan.name}</h3>
            <p class=\"plan-price\">${formatPrice(state.currency, current)} <span class=\"plan-meta\">/${state.billing === "monthly" ? "mo" : "yr"}</span></p>
            ${renewalText}
            <ul class=\"plan-list\">
              <li><span class=\"check-icon\" aria-hidden=\"true\">✓</span>${plan.features.websites}</li>
              <li><span class=\"check-icon\" aria-hidden=\"true\">✓</span>${plan.features.storage}</li>
              <li><span class=\"check-icon\" aria-hidden=\"true\">✓</span>${plan.features.bandwidth}</li>
              <li><span class=\"check-icon\" aria-hidden=\"true\">✓</span>${plan.features.ssl} and ${plan.features.backups}</li>
              <li><span class=\"check-icon\" aria-hidden=\"true\">✓</span>${plan.features.support}</li>
            </ul>
            <div class=\"plan-cta-row\">${planCTA(plan, state.billing)}</div>
          </article>
        `;
      }).join("");
    });
  }

  function renderTableHeader() {
    const headers = document.querySelectorAll("[data-plan-table-head]");
    headers.forEach((head) => {
      head.innerHTML = `
        <tr>
          <th scope=\"col\">Feature</th>
          ${PLAN_DATA.map((plan) => `<th scope=\"col\">${plan.name}</th>`).join("")}
        </tr>
      `;
    });
  }

  function renderAll(state) {
    renderTableHeader();
    renderComparisonTable(state);
    renderPlanCards(state);
    renderPricingNote(state.currency);

    const billingBadges = document.querySelectorAll("[data-billing-badge]");
    billingBadges.forEach((node) => {
      node.textContent = state.billing === "yearly" ? "2 months free with annual billing" : "";
    });

    const currencyButtons = Array.from(document.querySelectorAll("[data-currency-toggle]"));
    const billingButtons = Array.from(document.querySelectorAll("[data-billing-toggle]"));
    setPressed(currencyButtons, state.currency, "data-currency-toggle");
    setPressed(billingButtons, state.billing, "data-billing-toggle");
  }

  function initPricing() {
    if (!document.querySelector("[data-pricing-root]")) {
      return;
    }

    const state = loadState();
    renderAll(state);

    document.querySelectorAll("[data-currency-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        state.currency = button.getAttribute("data-currency-toggle") === "NGN" ? "NGN" : "USD";
        saveState(state);
        renderAll(state);
      });
    });

    document.querySelectorAll("[data-billing-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        state.billing = button.getAttribute("data-billing-toggle") === "yearly" ? "yearly" : "monthly";
        saveState(state);
        renderAll(state);
      });
    });
  }

  function initMobileNav() {
    const button = document.querySelector("[data-menu-toggle]");
    const shell = document.querySelector("[data-nav-shell]");

    if (!button || !shell) {
      return;
    }

    button.addEventListener("click", () => {
      const currentlyOpen = shell.getAttribute("data-open") === "true";
      shell.setAttribute("data-open", currentlyOpen ? "false" : "true");
      button.setAttribute("aria-expanded", currentlyOpen ? "false" : "true");
    });
  }

  function initZohoSupportBot() {
    const host = window.location.hostname.replace(/^www\./, "");
    if (host !== "continentaltrustonline.online") {
      return;
    }

    if (document.getElementById("zsiqscript")) {
      return;
    }

    window.$zoho = window.$zoho || {};
    window.$zoho.salesiq = window.$zoho.salesiq || { ready: function () {} };

    const script = document.createElement("script");
    script.id = "zsiqscript";
    script.src = ZOHO_WIDGET_URL;
    script.defer = true;
    document.head.appendChild(script);
  }

  function init() {
    window.CTO_PLAN_DATA = PLAN_DATA;
    initPricing();
    initMobileNav();
    initZohoSupportBot();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
