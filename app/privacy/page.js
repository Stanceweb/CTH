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
          <p className="section-subtitle">This page summarizes how data is handled for marketing site visitors and account customers.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="content-block"><h2>Information collected</h2><p>We may collect account details, billing records, support communications, technical logs, and website analytics required to operate and improve services.</p></div>
          <div className="content-block"><h2>How data is used</h2><p>Data is used for account creation, billing, service delivery, support operations, fraud prevention, and legal compliance.</p></div>
          <div className="content-block"><h2>Data sharing and protection</h2><p>Data is shared only with required processors and service providers needed to run hosting and billing systems. Security controls are applied to reduce unauthorized access risk.</p></div>
          <div className="content-block"><h2>Policy updates</h2><p>We may revise this policy as services evolve. Material updates will be reflected on this page.</p></div>
          {/* TODO(legal): Replace summary text with fully approved legal policy language. */}
        </div>
      </section>
    </>
  );
}
