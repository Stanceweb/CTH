import { LockKeyhole, ShieldCheck, UserRound } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description: "Read the privacy policy explaining how Continental Trust Hosting collects, uses, and protects personal information.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <>
      <section>
        <div className="container">
          <h1 className="section-title">Privacy policy</h1>
          <p className="section-subtitle">How personal and service data is handled for site visitors and hosting customers.</p>

          <div className="legal-summary">
            <ul>
              <li><UserRound size={15} /> We collect data required to operate accounts, billing, and support workflows.</li>
              <li><ShieldCheck size={15} /> Data is processed for service delivery, fraud prevention, and legal compliance.</li>
              <li><LockKeyhole size={15} /> Security controls are used to reduce unauthorized access risks.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-muted">
        <div className="container">
          <div className="content-block"><h2>Information collected</h2><p>We may collect account details, billing records, support communications, technical logs, and website analytics needed to operate services.</p></div>
          <div className="content-block"><h2>How data is used</h2><p>Data is used for account provisioning, billing operations, support response, service quality improvements, and compliance obligations.</p></div>
          <div className="content-block"><h2>Data sharing and protection</h2><p>Data is shared with required processors and providers needed to run hosting and billing systems. Access controls and security measures are applied.</p></div>
          <div className="content-block"><h2>Policy updates</h2><p>Policy text may be updated as services evolve. Material updates will be reflected on this page.</p></div>
          <p className="form-note">TODO(legal): replace this summary with fully legal-reviewed policy language.</p>
        </div>
      </section>
    </>
  );
}
