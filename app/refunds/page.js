import Link from "next/link";
import { BadgeCheck, CircleDollarSign, ReceiptText } from "lucide-react";

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
          <p className="section-subtitle">Plain-language guidance on refund review and eligibility handling for hosting services.</p>

          <div className="legal-summary">
            <ul>
              <li><CircleDollarSign size={15} /> Refund review depends on service term, payment timing, and account standing.</li>
              <li><ReceiptText size={15} /> Requests should include billing reference and account details for verification.</li>
              <li><BadgeCheck size={15} /> Policy wording should be reviewed before purchase and renewal decisions.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-muted">
        <div className="container">
          <div className="content-block">
            <h2>Plain-language summary</h2>
            <p>Refund eligibility is assessed case-by-case based on term details, renewal state, and payment records.</p>
            <p className="form-note">TODO(legal): replace with final legal-approved refund terms and eligibility window.</p>
          </div>
          <div className="content-block">
            <h2>How to request a refund</h2>
            <p>Submit a billing support request with your account identity, payment reference, and reason for request.</p>
            <p className="link-row"><Link className="text-link" href="/contact/">Open contact form</Link></p>
          </div>
        </div>
      </section>
    </>
  );
}
