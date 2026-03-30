export const metadata = {
  title: "Website Migration Services",
  description: "Move your website with guided migration support designed to reduce downtime and simplify setup.",
  alternates: { canonical: "/migrations/" },
};

export default function MigrationsPage() {
  return (
    <>
      <section>
        <div className="container">
          <h1 className="section-title">Website migration services</h1>
          <p className="section-subtitle">Move production websites with a structured process focused on speed, integrity, and minimal disruption.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="content-block">
            <h2>Typical migration timeline</h2>
            <p>Most standard website migrations are completed within 24 to 72 hours, depending on the size and complexity of the site.</p>
          </div>

          <div className="grid-3">
            <article className="card"><h3>1. Intake and scope</h3><p>We review your current host setup, DNS, app requirements, and expected cutover window.</p></article>
            <article className="card"><h3>2. Transfer and validation</h3><p>Files, database, and configuration are transferred and validated in the target environment.</p></article>
            <article className="card"><h3>3. Cutover and monitoring</h3><p>DNS cutover is coordinated, then monitored for errors and performance regressions.</p></article>
          </div>

          <div className="content-block">
            <h2>What to prepare</h2>
            <ul>
              <li>Current hosting credentials and domain registrar access</li>
              <li>CMS/app admin access for verification steps</li>
              <li>A preferred maintenance window for cutover</li>
            </ul>
            <p><a className="btn btn-primary" href="/contact/">Start Migration Request</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
