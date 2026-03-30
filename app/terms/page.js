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
          <p className="section-subtitle">These terms outline service access, account responsibilities, and acceptable use expectations.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="content-block"><h2>Service scope</h2><p>Hosting plans provide managed website infrastructure and related support services as described on pricing and support pages.</p></div>
          <div className="content-block"><h2>Account responsibilities</h2><p>Customers are responsible for account credentials, lawful content, and compliance with applicable laws.</p></div>
          <div className="content-block"><h2>Billing and renewals</h2><p>Billing cycles, pricing, and renewal behavior are disclosed on the pricing page and during checkout. Non-payment may result in service suspension.</p></div>
          <div className="content-block"><h2>Operational limitations</h2><p>Service availability may be affected by maintenance, abuse prevention, upstream provider incidents, or force majeure events.</p></div>
        </div>
      </section>
    </>
  );
}
