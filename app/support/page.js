export const metadata = {
  title: "Hosting Support",
  description: "Get help with setup, billing, migrations, and technical issues through our hosting support resources.",
  alternates: { canonical: "/support/" },
};

export default function SupportPage() {
  return (
    <>
      <section>
        <div className="container">
          <h1 className="section-title">Hosting support</h1>
          <p className="section-subtitle">Support is available for setup, billing, migrations, and operational incidents.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid-3">
            <article className="card"><h2>Sales and onboarding</h2><p>Plan and setup guidance for first-time deployments and migration planning.</p></article>
            <article className="card"><h2>Billing support</h2><p>Questions about subscription status, invoicing, and payment behavior.</p></article>
            <article className="card"><h2>Technical support</h2><p>Issue triage and escalation for runtime incidents and access problems.</p></article>
          </div>
          <div className="content-block">
            <h2>Response expectations</h2>
            <p>We aim to respond as quickly as possible, with priority based on issue severity and production impact.</p>
          </div>
        </div>
      </section>
    </>
  );
}
