import Image from "next/image";
import Link from "next/link";
import { AlertCircle, BadgeCheck, CircleDollarSign, Headset, MessageSquareMore, Wrench } from "lucide-react";

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
          <p className="section-subtitle">Business-ready support across sales, billing, and technical issues with escalation based on impact.</p>

          <div className="page-split">
            <div className="content-block">
              <h2>Support categories</h2>
              <ul>
                <li><strong>Sales &amp; onboarding:</strong> plan guidance and pre-purchase questions.</li>
                <li><strong>Billing support:</strong> subscription, renewal, and payment inquiries.</li>
                <li><strong>Technical support:</strong> runtime errors, performance, and access incidents.</li>
                <li><strong>Urgent issues:</strong> production-impacting incidents requiring immediate triage.</li>
              </ul>
            </div>
            <div className="media-card">
              <Image
                src="/assets/images/marketing/support-collaboration.jpg"
                alt="Support and operations team collaborating around a laptop"
                width={1200}
                height={800}
                sizes="(max-width: 1080px) 100vw, 45vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-muted">
        <div className="container">
          <div className="support-grid">
            <article className="card"><span className="feature-icon"><Headset /></span><h3>Sales and onboarding</h3><p>Get plan fit guidance and launch recommendations before subscribing.</p></article>
            <article className="card"><span className="feature-icon"><CircleDollarSign /></span><h3>Billing support</h3><p>Resolve invoice, renewal, and payment flow questions with clear account context.</p></article>
            <article className="card"><span className="feature-icon"><Wrench /></span><h3>Technical support</h3><p>Issue triage for hosting environment, SSL, deployment, and runtime failures.</p></article>
            <article className="card"><span className="feature-icon"><AlertCircle /></span><h3>Urgent incidents</h3><p>Severity-based escalation for high-impact outages and critical platform issues.</p></article>
          </div>

          <div className="content-block" style={{ marginTop: "1rem" }}>
            <h3>Response expectations</h3>
            <p>We aim to respond as quickly as possible, with priority based on issue severity and production impact.</p>
            <div className="badge-row">
              <span className="badge"><BadgeCheck size={14} /> Severity-based prioritization</span>
              <span className="badge"><MessageSquareMore size={14} /> Multi-channel support</span>
            </div>
            <p className="form-note">TODO(sla): add formal response windows if/when internal SLA is approved.</p>
            <p className="link-row"><Link className="text-link" href="/contact/">Open contact and support channels</Link></p>
          </div>
        </div>
      </section>
    </>
  );
}
