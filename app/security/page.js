import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  LockKeyhole,
  MonitorCheck,
  ShieldCheck,
  UserRound,
  WalletCards,
} from "lucide-react";

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
          <p className="section-subtitle">Security controls are embedded across provisioning, billing, access management, and platform monitoring workflows.</p>

          <div className="page-split">
            <article className="content-block">
              <h2>Security coverage includes</h2>
              <ul>
                <li>SSL included and provisioned for managed hosting plans.</li>
                <li>Service monitoring and issue escalation paths.</li>
                <li>Account-level protections for login and billing workflows.</li>
                <li>Backup and recovery procedures to support incident response.</li>
              </ul>
            </article>
            <div className="media-card">
              <Image
                src="/assets/images/marketing/security-infrastructure.jpg"
                alt="Close-up of hardware and infrastructure representing hosting security"
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
          <div className="security-grid">
            <article className="card"><span className="feature-icon"><ShieldCheck /></span><h3>SSL provisioning</h3><p>HTTPS setup is included as part of plan activation and launch readiness.</p></article>
            <article className="card"><span className="feature-icon"><MonitorCheck /></span><h3>Monitoring and alerts</h3><p>Platform monitoring supports earlier visibility into service-impacting incidents.</p></article>
            <article className="card"><span className="feature-icon"><WalletCards /></span><h3>Billing security</h3><p>Billing actions run through account workflows with controlled access patterns.</p></article>
            <article className="card"><span className="feature-icon"><UserRound /></span><h3>Account protection</h3><p>Access control and account hygiene are treated as part of operational support.</p></article>
          </div>

          <div className="content-block" style={{ marginTop: "1rem" }}>
            <h3>Shared responsibility boundaries</h3>
            <p>Platform-level security controls are managed by hosting operations, while application-level security, content integrity, and credential management remain shared responsibilities with customers.</p>
            <div className="badge-row">
              <span className="badge"><LockKeyhole size={14} /> Infrastructure controls</span>
              <span className="badge"><BadgeCheck size={14} /> Account governance</span>
              <span className="badge"><ShieldCheck size={14} /> SSL and transport protection</span>
            </div>
            <p className="link-row"><Link className="text-link" href="/support/">Need security clarification for your setup? Contact support.</Link></p>
          </div>
        </div>
      </section>
    </>
  );
}
