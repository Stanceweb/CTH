import Link from "next/link";
import PricingSection from "@/components/PricingSection";

export const metadata = {
  title: "Managed Web Hosting for Businesses",
  description: "Fast, secure managed hosting with SSL, backups, monitoring, and responsive support for growing businesses.",
  alternates: { canonical: "/" },
};

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Continental Trust Hosting",
      url: "https://continentaltrustonline.online/",
      logo: "https://continentaltrustonline.online/favicon.ico",
      sameAs: ["https://app.continentaltrustonline.online", "https://t.me/continentaltrust"],
    },
    {
      "@type": "WebSite",
      name: "Continental Trust Hosting",
      url: "https://continentaltrustonline.online/",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />

      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero-shell">
            <div>
              <span className="pill">Managed Hosting Platform</span>
              <h1 id="hero-title">Managed web hosting for businesses that need fast setup, secure billing, and real support.</h1>
              <p>Launch and manage websites with SSL, backups, monitoring, and a control panel that keeps hosting simple.</p>
              <div className="hero-actions">
                <Link className="btn btn-primary" href="/pricing/">Compare Plans</Link>
                <Link className="btn btn-secondary" href="/support/">Talk to Support</Link>
              </div>
              <p className="hero-trustline">
                <span>Secure billing</span>
                <span>SSL included</span>
                <span>Monitored services</span>
                <span>Guided migration</span>
              </p>
            </div>

            <aside className="hero-visual" aria-label="Product preview mockup">
              <div className="mock-panel">
                <div className="mock-top">
                  <p className="mock-title">Hosting Operations Dashboard</p>
                  <span className="mock-pill">All systems monitored</span>
                </div>

                <div className="mock-stat-grid">
                  <div className="mock-stat">
                    <strong>99.95%</strong>
                    <span>Uptime trend</span>
                  </div>
                  <div className="mock-stat">
                    <strong>6 mins</strong>
                    <span>Avg support first response*</span>
                  </div>
                  <div className="mock-stat">
                    <strong>Daily</strong>
                    <span>Backup automation</span>
                  </div>
                </div>

                <div className="mock-chart">
                  <h3>Performance trend (last 8 checks)</h3>
                  <div className="mock-bars" aria-hidden="true">
                    <span style={{ height: "38%" }}></span>
                    <span style={{ height: "54%" }}></span>
                    <span style={{ height: "61%" }}></span>
                    <span style={{ height: "48%" }}></span>
                    <span style={{ height: "68%" }}></span>
                    <span style={{ height: "74%" }}></span>
                    <span style={{ height: "82%" }}></span>
                    <span style={{ height: "88%" }}></span>
                  </div>
                </div>

                <div className="mock-cards">
                  <article className="mock-card">
                    <h4>Deploy Queue</h4>
                    <p>Website setup in progress: 1</p>
                  </article>
                  <article className="mock-card">
                    <h4>Billing</h4>
                    <p>Next invoice cycle synchronized</p>
                  </article>
                  <article className="mock-card">
                    <h4>SSL</h4>
                    <p>Certificates active and monitored</p>
                  </article>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-muted" aria-labelledby="trust-strip-title">
        <div className="container">
          <h2 id="trust-strip-title" className="section-title">Built for trust and predictable operations</h2>
          <p className="section-subtitle">No fake logos. Just practical signals customers care about before buying hosting.</p>

          <div className="trust-strip" role="list">
            <article className="trust-item" role="listitem">
              <span className="trust-icon" aria-hidden="true">BILL</span>
              <strong>Secure billing workflows</strong>
              <span>Plan-driven checkout and account billing visibility.</span>
            </article>
            <article className="trust-item" role="listitem">
              <span className="trust-icon" aria-hidden="true">SSL</span>
              <strong>SSL included</strong>
              <span>TLS setup is included as part of managed hosting.</span>
            </article>
            <article className="trust-item" role="listitem">
              <span className="trust-icon" aria-hidden="true">MON</span>
              <strong>Monitored services</strong>
              <span>Platform health and incidents are tracked with status visibility.</span>
            </article>
            <article className="trust-item" role="listitem">
              <span className="trust-icon" aria-hidden="true">MIG</span>
              <strong>Guided migration</strong>
              <span>Structured migration process with practical support guidance.</span>
            </article>
          </div>
        </div>
      </section>

      <section aria-labelledby="features-title">
        <div className="container">
          <h2 id="features-title" className="section-title">Core platform capabilities</h2>
          <p className="section-subtitle">Visual feature blocks designed for clarity so buyers can quickly understand what they get.</p>

          <div className="feature-grid">
            <article className="feature-card">
              <span className="feature-icon" aria-hidden="true">SET</span>
              <h3>Fast onboarding</h3>
              <p>Provision hosting quickly and start deployment with guided setup paths.</p>
              <p className="link-row"><Link className="text-link" href="/migrations/">See migration flow</Link></p>
            </article>
            <article className="feature-card">
              <span className="feature-icon" aria-hidden="true">PAY</span>
              <h3>Secure billing</h3>
              <p>Billing cycles, pricing visibility, and subscription control in one place.</p>
              <p className="link-row"><Link className="text-link" href="/pricing/">Review pricing details</Link></p>
            </article>
            <article className="feature-card">
              <span className="feature-icon" aria-hidden="true">SSL</span>
              <h3>SSL and security controls</h3>
              <p>SSL provisioning and account protections integrated into managed operations.</p>
              <p className="link-row"><Link className="text-link" href="/security/">Explore security page</Link></p>
            </article>
            <article className="feature-card">
              <span className="feature-icon" aria-hidden="true">BKP</span>
              <h3>Automatic backups</h3>
              <p>Backups run automatically with retention determined by active plan scope.</p>
              <p className="link-row"><Link className="text-link" href="/backups/">Read backup policy</Link></p>
            </article>
            <article className="feature-card">
              <span className="feature-icon" aria-hidden="true">SUP</span>
              <h3>Support operations</h3>
              <p>Issue response prioritizes severity so urgent production issues are escalated.</p>
              <p className="link-row"><Link className="text-link" href="/support/">Open support resources</Link></p>
            </article>
            <article className="feature-card">
              <span className="feature-icon" aria-hidden="true">STS</span>
              <h3>Status visibility</h3>
              <p>Service monitoring cues and status communication for operational confidence.</p>
              <p className="link-row"><Link className="text-link" href="/status/">View service status</Link></p>
            </article>
          </div>
        </div>
      </section>

      <section id="plans" className="section-muted" aria-labelledby="plans-title">
        <div className="container">
          <h2 id="plans-title" className="section-title">Pricing that feels clear, not cluttered</h2>
          <p className="section-subtitle">Toggle currency and billing cycle instantly. Cards come first for decision speed, with a comparison table below for deeper checks.</p>
          <PricingSection showDetailsLink />
        </div>
      </section>

      <section aria-labelledby="highlights-title">
        <div className="container">
          <h2 id="highlights-title" className="section-title">Migration, backups, and security workflow</h2>
          <p className="section-subtitle">A visual process section so this does not read like plain documentation.</p>

          <div className="highlights-grid">
            <article className="timeline-card">
              <h3>Migration timeline</h3>
              <ol className="timeline">
                <li><strong>Scope and access review:</strong> credentials, DNS, and app requirements are validated.</li>
                <li><strong>Transfer and verification:</strong> data and configuration are migrated and tested.</li>
                <li><strong>Cutover and monitoring:</strong> DNS switch with post-cutover checks and support follow-up.</li>
              </ol>
              <p className="link-row"><Link className="text-link" href="/migrations/">Most standard migrations complete in 24-72 hours.</Link></p>
            </article>

            <div className="cue-grid">
              <article className="cue-card">
                <h4>Backups</h4>
                <p>Automatic backups with retention based on active plan scope.</p>
                <p className="link-row"><Link className="text-link" href="/backups/">Backup details</Link></p>
              </article>
              <article className="cue-card">
                <h4>Security and SSL</h4>
                <p>SSL included with monitoring and account-level protections.</p>
                <p className="link-row"><Link className="text-link" href="/security/">Security controls</Link></p>
              </article>
              <article className="cue-card">
                <h4>Support visibility</h4>
                <p>Severity-based response with clear escalation for critical issues.</p>
                <p className="link-row"><Link className="text-link" href="/support/">Support channels</Link></p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="section-muted" aria-labelledby="faq-title">
        <div className="container">
          <h2 id="faq-title" className="section-title">Frequently asked questions</h2>
          <p className="section-subtitle">Practical answers, not placeholder copy.</p>

          <div className="faq-list">
            <details>
              <summary>How long does migration take?</summary>
              <p>Most standard website migrations are completed within 24 to 72 hours, depending on the size and complexity of the site.</p>
            </details>
            <details>
              <summary>What is your backup retention policy?</summary>
              <p>Backups are performed automatically and retained based on the active hosting plan.</p>
              {/* TODO(policy): Confirm and publish exact backup retention periods per plan. */}
            </details>
            <details>
              <summary>What is your refund policy?</summary>
              <p>
                Refund eligibility depends on the service term, payment timing, and account standing. A plain-language summary is available on the{" "}
                <Link className="text-link" href="/refunds/">refund policy page</Link>.
              </p>
              {/* TODO(legal): Confirm final refund wording with legal/business policy owner. */}
            </details>
            <details>
              <summary>How does billing work?</summary>
              <p>You can choose monthly or annual billing. Intro pricing may apply to the first term, and renewals follow the applicable standard rate. Customers manage subscriptions and invoices in the account billing area.</p>
            </details>
            <details>
              <summary>Is SSL included?</summary>
              <p>Yes. Free SSL is included and provisioned as part of the managed hosting setup.</p>
            </details>
            <details>
              <summary>How fast is support response?</summary>
              <p>We aim to respond as quickly as possible, with priority based on issue severity and service impact.</p>
            </details>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="final-cta">
            <div>
              <h2>Ready to launch with managed hosting?</h2>
              <p>Compare plans, choose billing preference, and start with secure onboarding and real support visibility.</p>
            </div>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/pricing/">Compare Plans</Link>
              <Link className="btn btn-outline" href="/contact/">Talk to Team</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
