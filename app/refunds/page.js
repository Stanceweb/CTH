export const metadata = {
  title: "Refund Policy",
  description: "Read the refund policy for hosting purchases, renewals, cancellations, and eligible refund requests.",
  alternates: { canonical: "/refunds/" },
};

export default function RefundsPage() {
  return (
    <>
      <section>
        <div className="container">
          <h1 className="section-title">Refund policy</h1>
          <p className="section-subtitle">This page provides a plain-language summary of refund behavior for hosting services.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="content-block">
            <h2>Plain-language summary</h2>
            <p>Refund eligibility depends on service term, renewal timing, and account standing. Review this policy before purchase and renewal.</p>
            {/* TODO(legal): Confirm and replace with final legal-approved refund wording. */}
          </div>
          <div className="content-block">
            <h2>How to request a refund</h2>
            <p>Contact support with your account details, payment reference, and reason for request so the billing team can review eligibility.</p>
          </div>
        </div>
      </section>
    </>
  );
}
