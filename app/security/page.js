export const metadata = {
  title: "Hosting Security Features",
  description: "Learn how SSL, monitoring, account protections, and hosting security practices help protect your website.",
  alternates: { canonical: "/security/" },
};

export default function SecurityPage() {
  return (
    <>
      <section>
        <div className="container">
          <h1 className="section-title">Hosting security features</h1>
          <p className="section-subtitle">Security controls are integrated into the hosting workflow, from SSL provisioning to account-level protection.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid-3">
            <article className="card"><h2>SSL included</h2><p>Free SSL is included and provisioned as part of managed hosting setup.</p></article>
            <article className="card"><h2>Monitoring and alerts</h2><p>Infrastructure and service health are monitored to surface incidents early.</p></article>
            <article className="card"><h2>Account protections</h2><p>Billing and account workflows are designed to reduce unauthorized access risk.</p></article>
          </div>
          <div className="content-block">
            <h2>Security scope</h2>
            <p>Security is a shared responsibility. Platform controls cover infrastructure and account-level protections, while customers remain responsible for application-level security and credential hygiene.</p>
          </div>
        </div>
      </section>
    </>
  );
}
