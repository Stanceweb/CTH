import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Clock3, FileCheck2, ShieldCheck } from "lucide-react";

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
          <p className="section-subtitle">Move production websites with a structured migration workflow focused on speed, integrity, and controlled cutover.</p>

          <div className="page-split">
            <article className="content-block">
              <h2>What migration includes</h2>
              <ul>
                <li>Pre-migration scope review (DNS, app dependencies, access requirements).</li>
                <li>Data and configuration transfer with validation checks.</li>
                <li>Cutover coordination and post-launch checks.</li>
              </ul>
              <h3 style={{ marginTop: "0.9rem" }}>Typical timeline</h3>
              <p>Most standard migrations complete within <strong>24 to 72 hours</strong>, depending on workload complexity.</p>
            </article>

            <div className="media-card">
              <Image
                src="/assets/images/marketing/migration-workflow.jpg"
                alt="Hosting specialists planning a website migration"
                width={1200}
                height={800}
                sizes="(max-width: 1080px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-muted" aria-labelledby="migration-process-title">
        <div className="container">
          <h2 id="migration-process-title" className="section-title">Migration process and expectations</h2>

          <div className="highlights-grid">
            <article className="timeline-card">
              <h3>Process timeline</h3>
              <ol className="timeline">
                <li><strong>Intake:</strong> credentials, DNS ownership, app stack, and risk points are reviewed.</li>
                <li><strong>Transfer:</strong> files/database and key paths are migrated into target environment.</li>
                <li><strong>Validation:</strong> routes, SSL, login, forms, and payment-critical pages are checked.</li>
                <li><strong>Cutover:</strong> DNS switch and monitoring window during stabilization.</li>
              </ol>
            </article>

            <div className="cue-grid">
              <article className="cue-card">
                <h4><Clock3 size={16} /> Downtime expectations</h4>
                <p>Downtime is minimized through pre-cutover validation and planned switch windows.</p>
              </article>
              <article className="cue-card">
                <h4><ShieldCheck size={16} /> Security checks</h4>
                <p>SSL and critical access settings are validated during migration handoff.</p>
              </article>
              <article className="cue-card">
                <h4><FileCheck2 size={16} /> Post-migration checklist</h4>
                <p>Core workflows are verified after launch before migration completion is confirmed.</p>
              </article>
            </div>
          </div>

          <div className="form-card" style={{ marginTop: "1rem" }}>
            <h3>Migration intake form</h3>
            <p className="form-note">Share your workload details and we&apos;ll use this to scope your migration request.</p>
            <form method="get" action="/contact/" className="form-grid" aria-label="Migration intake form">
              <div className="field">
                <label htmlFor="mig-name">Full name</label>
                <input id="mig-name" name="name" required />
              </div>
              <div className="field">
                <label htmlFor="mig-email">Work email</label>
                <input id="mig-email" type="email" name="email" required />
              </div>
              <div className="field">
                <label htmlFor="mig-domain">Domain</label>
                <input id="mig-domain" name="domain" placeholder="example.com" required />
              </div>
              <div className="field">
                <label htmlFor="mig-stack">Current platform</label>
                <input id="mig-stack" name="platform" placeholder="WordPress, Laravel, custom app" />
              </div>
              <div className="field full">
                <label htmlFor="mig-notes">Migration notes</label>
                <textarea id="mig-notes" name="notes" placeholder="Traffic pattern, database size, deadline, or downtime constraints" />
              </div>
              <div className="field full">
                <button className="btn btn-primary" type="submit"><CheckCircle2 size={16} /> Submit migration request</button>
              </div>
            </form>
            <p className="form-note">TODO(process): connect this form to a dedicated migration intake endpoint in app backend.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="final-cta">
            <div>
              <h2>Ready to plan your migration?</h2>
              <p>Share your hosting details and preferred window so we can scope a safe move.</p>
            </div>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/contact/">Talk to migration support</Link>
              <Link className="btn btn-outline" href="/pricing/">Compare plans first</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
