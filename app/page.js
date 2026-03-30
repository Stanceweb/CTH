import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  Banknote,
  CheckCircle2,
  CloudUpload,
  CreditCard,
  DatabaseBackup,
  Gauge,
  Globe,
  Handshake,
  Headset,
  Layers3,
  LockKeyhole,
  MonitorCheck,
  ShieldCheck,
  UserRound,
} from "lucide-react";
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

const proofCards = [
  {
    title: "Secure billing",
    body: "Payments and plan changes run through a structured account portal with clear visibility.",
    icon: CreditCard,
  },
  {
    title: "SSL included",
    body: "SSL provisioning is included on managed plans so sites launch with HTTPS by default.",
    icon: ShieldCheck,
  },
  {
    title: "Guided migration",
    body: "Migration planning is handled with checklists and verification steps before cutover.",
    icon: Handshake,
  },
  {
    title: "Monitored services",
    body: "Core hosting services are monitored, with escalation based on impact and severity.",
    icon: MonitorCheck,
  },
  {
    title: "Portal access",
    body: "Billing, subscriptions, and account controls are available in one customer portal.",
    icon: UserRound,
  },
  {
    title: "Local-friendly support",
    body: "Support workflows are optimized for Nigerian businesses and global teams alike.",
    icon: Globe,
  },
];

const features = [
  {
    title: "Fast onboarding",
    body: "Launch quickly with guided setup paths for developers, freelancers, and small teams.",
    icon: CloudUpload,
    href: "/migrations/",
    cta: "See migration flow",
  },
  {
    title: "NGN and USD billing",
    body: "Choose local or international pricing, with transparent intro and renewal visibility.",
    icon: Banknote,
    href: "/pricing/",
    cta: "Review plan pricing",
  },
  {
    title: "Security controls",
    body: "SSL, account protection, and monitoring coverage are built into managed operations.",
    icon: LockKeyhole,
    href: "/security/",
    cta: "Explore security",
  },
  {
    title: "Automated backups",
    body: "Automatic backups support quick restore workflows when incidents affect production.",
    icon: DatabaseBackup,
    href: "/backups/",
    cta: "Read backup coverage",
  },
  {
    title: "Support that responds",
    body: "Sales, billing, and technical support channels are clearly separated for speed.",
    icon: Headset,
    href: "/support/",
    cta: "Open support page",
  },
  {
    title: "Operational visibility",
    body: "Status communication and issue triage reduce uncertainty during critical moments.",
    icon: Gauge,
    href: "/status/",
    cta: "View status approach",
  },
];

const faqItems = [
  {
    q: "How long does migration take?",
    a: "Most standard website migrations are completed within 24 to 72 hours, depending on the size and complexity of the site.",
  },
  {
    q: "What is your backup retention policy?",
    a: "Backups are performed automatically and retained based on your active hosting plan. Retention windows differ by plan tier.",
    todo: "TODO(policy): confirm exact retention windows per plan.",
  },
  {
    q: "How does refund eligibility work?",
    a: "Refund eligibility depends on service term, payment timing, and account standing. See the refund policy page for full context.",
  },
  {
    q: "How do billing and renewals work?",
    a: "You can select monthly or annual billing. Intro pricing may apply to the first term, and renewal pricing is shown for USD plans.",
  },
  {
    q: "Is SSL included on plans?",
    a: "Yes. SSL is included and provisioned as part of managed hosting setup.",
  },
  {
    q: "How fast is support response?",
    a: "We aim to respond as quickly as possible, with priority based on issue severity and service impact.",
  },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />

      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero-shell">
            <div className="hero-grid">
              <div>
                <span className="pill">Managed Hosting Platform</span>
                <h1 id="hero-title">Managed web hosting for businesses that need fast setup, secure billing, and real support.</h1>
                <p>Launch and manage websites with SSL, backups, monitoring, and a control panel that keeps hosting simple for Nigerian businesses and growing teams.</p>

                <div className="hero-actions">
                  <Link className="btn btn-primary" href="/pricing/">Compare Plans</Link>
                  <Link className="btn btn-secondary" href="/#included">See What&apos;s Included</Link>
                </div>

                <div className="hero-trustline" aria-label="Core trust signals">
                  <span className="trust-chip"><ShieldCheck className="icon-dot" aria-hidden="true" /> SSL included</span>
                  <span className="trust-chip"><DatabaseBackup className="icon-dot" aria-hidden="true" /> Automatic backups</span>
                  <span className="trust-chip"><MonitorCheck className="icon-dot" aria-hidden="true" /> Monitored services</span>
                  <span className="trust-chip"><CreditCard className="icon-dot" aria-hidden="true" /> Secure billing</span>
                </div>
              </div>

              <aside className="hero-visual-stack" aria-label="Hosting platform preview">
                <div className="hero-photo-wrap">
                  <Image
                    src="/assets/images/marketing/hero-team.jpg"
                    alt="Developers collaborating while reviewing hosting operations"
                    fill
                    priority
                    sizes="(max-width: 1080px) 100vw, 42vw"
                    className="hero-photo"
                  />
                  <div className="overlay-card">
                    <strong>Account dashboard</strong>
                    <p>Billing, support, backups, and subscriptions in one customer portal.</p>
                  </div>
                </div>

                <div className="hero-ui-grid">
                  <article className="hero-ui-card">
                    <h3>Backup status</h3>
                    <p>Automatic snapshot workflows active.</p>
                  </article>
                  <article className="hero-ui-card">
                    <h3>SSL readiness</h3>
                    <p>HTTPS provisioning included on managed plans.</p>
                  </article>
                  <article className="hero-ui-card">
                    <h3>Support routing</h3>
                    <p>Sales, billing, and technical queues separated.</p>
                  </article>
                </div>
              </aside>
            </div>
          </div>

          <div className="kpi-row" aria-label="Service credibility highlights">
            <article className="kpi-card">
              <div className="kpi-line"><strong>NGN + USD</strong><span className="kpi-icon"><Banknote /></span></div>
              <p>Local and international billing options.</p>
            </article>
            <article className="kpi-card">
              <div className="kpi-line"><strong>SSL Included</strong><span className="kpi-icon"><ShieldCheck /></span></div>
              <p>HTTPS setup included on managed plans.</p>
            </article>
            <article className="kpi-card">
              <div className="kpi-line"><strong>Guided Migration</strong><span className="kpi-icon"><Handshake /></span></div>
              <p>Structured migration checklist and verification.</p>
            </article>
            <article className="kpi-card">
              <div className="kpi-line"><strong>Portal Access</strong><span className="kpi-icon"><Layers3 /></span></div>
              <p>One account area for billing and support.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-muted" aria-labelledby="proof-title">
        <div className="container">
          <h2 id="proof-title" className="section-title">Trust signals built for real buying decisions</h2>
          <p className="section-subtitle">Everything below is based on current platform capabilities and support workflows.</p>

          <div className="proof-strip">
            {proofCards.map((item) => (
              <article key={item.title} className="proof-card">
                <span className="trust-icon" aria-hidden="true"><item.icon /></span>
                <strong>{item.title}</strong>
                <span>{item.body}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="included" aria-labelledby="features-title">
        <div className="container">
          <h2 id="features-title" className="section-title">What you get after signup</h2>
          <p className="section-subtitle">A managed platform shaped for developers, agencies, startups, and small businesses running production sites.</p>

          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <span className="feature-icon" aria-hidden="true"><feature.icon /></span>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
                <p className="link-row"><Link className="text-link" href={feature.href}>{feature.cta}</Link></p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="plans" className="section-muted" aria-labelledby="plans-title">
        <div className="container">
          <h2 id="plans-title" className="section-title">Pricing designed for confident decisions</h2>
          <p className="section-subtitle">Cards for quick plan choice, comparison table for deeper evaluation, and renewal visibility where applicable.</p>
          <PricingSection showDetailsLink />
        </div>
      </section>

      <section aria-labelledby="why-title">
        <div className="container">
          <h2 id="why-title" className="section-title">Why teams choose Continental Trust</h2>
          <p className="section-subtitle">Built for practical hosting outcomes: faster launch, less billing friction, and clearer support escalation.</p>

          <div className="why-grid">
            <article className="reason-card">
              <span className="reason-icon" aria-hidden="true"><BadgeCheck /></span>
              <h3>Transparent billing and renewals</h3>
              <p>Plan inclusions and billing cycle behavior are visible before checkout, with renewal context available for USD plans.</p>
            </article>
            <article className="reason-card">
              <span className="reason-icon" aria-hidden="true"><Layers3 /></span>
              <h3>One portal for account operations</h3>
              <p>Customers manage subscriptions, billing, and support interactions from a single account experience.</p>
            </article>
            <article className="reason-card">
              <span className="reason-icon" aria-hidden="true"><MonitorCheck /></span>
              <h3>Operational support mindset</h3>
              <p>Issue routing prioritizes production impact so critical incidents are escalated quickly.</p>
            </article>
            <article className="reason-card">
              <span className="reason-icon" aria-hidden="true"><Globe /></span>
              <h3>Local relevance, global readiness</h3>
              <p>NGN pricing support, local-friendly communication, and infrastructure suited to global traffic needs.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-muted" aria-labelledby="workflow-title">
        <div className="container">
          <h2 id="workflow-title" className="section-title">Migration, security, and backup workflow</h2>
          <p className="section-subtitle">Clear process coverage from pre-migration planning to ongoing protection and recovery.</p>

          <div className="page-split">
            <article className="timeline-card">
              <h3>Migration process</h3>
              <ol className="timeline">
                <li><strong>Discovery:</strong> account scope, DNS dependencies, and app requirements are reviewed.</li>
                <li><strong>Transfer and validation:</strong> files, databases, and critical functions are tested before cutover.</li>
                <li><strong>Go-live and monitoring:</strong> DNS switch and post-launch checks to reduce risk.</li>
              </ol>

              <div className="badge-row">
                <span className="badge"><CheckCircle2 size={14} /> SSL setup</span>
                <span className="badge"><DatabaseBackup size={14} /> Backup checks</span>
                <span className="badge"><Headset size={14} /> Support escalation</span>
              </div>

              <p className="link-row"><Link className="text-link" href="/migrations/">Start a migration request</Link></p>
            </article>

            <div className="media-card">
              <Image
                src="/assets/images/marketing/migration-workflow.jpg"
                alt="Team reviewing migration and deployment workflow"
                width={1200}
                height={800}
                sizes="(max-width: 1080px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="proof-ready-title">
        <div className="container">
          <h2 id="proof-ready-title" className="section-title">Customer proof and outcomes</h2>
          <p className="section-subtitle">This block is intentionally ready for verified testimonials and case studies.</p>

          <div className="testimonial-ready">
            <h3>Proof section ready for publishing</h3>
            <p>Add verified customer quotes, measurable outcomes, and approved logos here once available.</p>
            {/* TODO(proof): replace with real customer quotes and approved attribution. */}
          </div>
        </div>
      </section>

      <section id="faq" className="section-muted" aria-labelledby="faq-title">
        <div className="container">
          <h2 id="faq-title" className="section-title">Frequently asked questions</h2>
          <p className="section-subtitle">Straight answers to the questions buyers ask before moving production workloads.</p>

          <div className="faq-list">
            {faqItems.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
                {item.todo ? <p className="form-note">{item.todo}</p> : null}
              </details>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="final-cta">
            <div>
              <h2>Ready to pick the right hosting setup?</h2>
              <p>Compare plans, review what is included, and get help choosing the right setup for your workload.</p>
            </div>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/pricing/">Compare hosting plans</Link>
              <Link className="btn btn-outline" href="/contact/">Talk through your setup</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
