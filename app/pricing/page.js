import Link from "next/link";
import {
  BadgeCheck,
  Banknote,
  Briefcase,
  Building2,
  ReceiptText,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import PricingSection from "@/components/PricingSection";

export const metadata = {
  title: "Hosting Plans and Pricing",
  description: "Compare hosting plans, features, billing cycles, and support options to choose the right fit for your website.",
  alternates: { canonical: "/pricing/" },
};

const fitCards = [
  {
    title: "Starter",
    body: "Best for freelancers, portfolio websites, and early-stage launches that need reliable managed hosting.",
    icon: UserRound,
  },
  {
    title: "Business",
    body: "Ideal for growing companies and agencies managing multiple client or business workloads.",
    icon: Briefcase,
  },
  {
    title: "Pro",
    body: "Built for teams with heavier workloads, multi-site operations, and higher support expectations.",
    icon: Building2,
  },
];

export default function PricingPage() {
  return (
    <>
      <section>
        <div className="container">
          <h1 className="section-title">Hosting plans and pricing</h1>
          <p className="section-subtitle">Choose monthly or annual billing, switch between USD and NGN, and move into signup with clear plan expectations.</p>

          <div className="badge-row" aria-label="Pricing trust highlights">
            <span className="badge"><Banknote size={14} /> NGN and USD pricing</span>
            <span className="badge"><ReceiptText size={14} /> Renewal transparency</span>
            <span className="badge"><ShieldCheck size={14} /> SSL included</span>
            <span className="badge"><BadgeCheck size={14} /> Guided onboarding</span>
          </div>
        </div>
      </section>

      <section className="section-muted" aria-labelledby="pricing-table-title">
        <div className="container">
          <h2 id="pricing-table-title" className="section-title">Compare plans</h2>
          <p className="section-subtitle">Pricing is always visible with server-rendered defaults, then updates instantly as users switch currency and billing options.</p>
          <PricingSection />
        </div>
      </section>

      <section aria-labelledby="fit-title">
        <div className="container">
          <h2 id="fit-title" className="section-title">Which plan fits your workload?</h2>
          <p className="section-subtitle">Use this quick guide to choose the right starting tier.</p>

          <div className="grid-3">
            {fitCards.map((card) => (
              <article key={card.title} className="plan-compare-card">
                <span className="icon-pill" aria-hidden="true"><card.icon /></span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </article>
            ))}
          </div>

          <div className="pricing-depth-grid">
            <article className="content-block">
              <h3>Billing and renewal clarity</h3>
              <ul>
                <li>USD pricing shows intro pricing first, then renewal pricing for monthly and annual billing.</li>
                <li>NGN pricing uses curated fixed pricing with no live FX conversion.</li>
                <li>Annual billing displays the equivalent of two months free versus monthly totals.</li>
              </ul>
            </article>
            <article className="content-block">
              <h3>Risk reduction and support</h3>
              <ul>
                <li>SSL included on managed plans.</li>
                <li>Automatic backups included (retention depends on active plan).</li>
                <li>Support routing by issue type and severity.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section-muted" aria-labelledby="pricing-faq-title">
        <div className="container">
          <h2 id="pricing-faq-title" className="section-title">Pricing FAQ</h2>
          <div className="faq-list">
            <details>
              <summary>Can I switch from monthly to annual later?</summary>
              <p>Yes, billing cycle changes can be made through account management, subject to plan and billing state.</p>
            </details>
            <details>
              <summary>Do you support both NGN and USD payments?</summary>
              <p>Yes. The pricing interface supports NGN and USD selections with fixed curated values.</p>
            </details>
            <details>
              <summary>Where do I see renewal pricing?</summary>
              <p>Renewal pricing appears for USD plans directly inside pricing cards and comparison rows.</p>
            </details>
            <details>
              <summary>Is there a refund policy?</summary>
              <p>Yes. Review the policy details on the <Link className="text-link" href="/refunds/">refunds page</Link> before checkout.</p>
            </details>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="final-cta">
            <div>
              <h2>Need help choosing the right plan?</h2>
              <p>Share your workload details and we can recommend the most practical setup before you subscribe.</p>
            </div>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/contact/">Talk through your setup</Link>
              <Link className="btn btn-outline" href="https://app.continentaltrustonline.online/register">Go to signup</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
