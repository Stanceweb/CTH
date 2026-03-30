import { BadgeCheck, CircleDollarSign, FileCheck2 } from "lucide-react";

export const metadata = {
  title: "Terms of Service",
  description: "Review the terms governing the use of Continental Trust Hosting services, accounts, and website access.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <>
      <section>
        <div className="container">
          <h1 className="section-title">Terms of service</h1>
          <p className="section-subtitle">Core terms for account usage, service scope, and operational responsibilities.</p>

          <div className="legal-summary">
            <ul>
              <li><FileCheck2 size={15} /> Services are provided according to active plan scope and acceptable use standards.</li>
              <li><CircleDollarSign size={15} /> Billing cycles and renewal behavior apply as disclosed at checkout and pricing pages.</li>
              <li><BadgeCheck size={15} /> Customers remain responsible for lawful usage and account credential security.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-muted">
        <div className="container">
          <div className="content-block"><h2>Service scope</h2><p>Hosting plans provide managed infrastructure and support capabilities as published on product pages.</p></div>
          <div className="content-block"><h2>Account responsibilities</h2><p>Customers are responsible for account credentials, lawful content, and compliance with applicable regulations.</p></div>
          <div className="content-block"><h2>Billing and renewals</h2><p>Billing cycles, plan pricing, and renewals apply according to active subscription terms and payment status.</p></div>
          <div className="content-block"><h2>Operational limitations</h2><p>Availability can be affected by maintenance windows, abuse controls, upstream incidents, or force majeure events.</p></div>
        </div>
      </section>
    </>
  );
}
