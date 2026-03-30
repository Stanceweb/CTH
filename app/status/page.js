import Link from "next/link";
import { Activity, AlertTriangle, CalendarClock, CheckCircle2, Wrench } from "lucide-react";

export const metadata = {
  title: "Service Status",
  description: "Check the current status of hosting services, platform availability, and maintenance updates.",
  alternates: { canonical: "/status/" },
};

export default function StatusPage() {
  return (
    <>
      <section>
        <div className="container">
          <h1 className="section-title">Service status</h1>
          <p className="section-subtitle">Service availability is monitored continuously. Incident communication and maintenance notices are published through support channels.</p>

          <div className="status-grid">
            <article className="card">
              <span className="feature-icon"><CheckCircle2 /></span>
              <h3>Current state</h3>
              <p>Core hosting services are currently monitored and operational.</p>
            </article>
            <article className="card">
              <span className="feature-icon"><Activity /></span>
              <h3>Monitoring scope</h3>
              <p>Infrastructure health, uptime signals, and billing-critical workflows are tracked.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-muted">
        <div className="container">
          <div className="highlights-grid">
            <article className="status-log">
              <h3>Incident communication pattern</h3>
              <ul>
                <li>1. Issue detected and triaged by severity.</li>
                <li>2. Impact updates shared through support channels.</li>
                <li>3. Resolution update and follow-up checks communicated.</li>
              </ul>
            </article>

            <article className="status-log">
              <h3>Maintenance notices</h3>
              <ul>
                <li><CalendarClock size={15} /> Planned maintenance notices should be shared in advance.</li>
                <li><Wrench size={15} /> Emergency fixes are communicated with impact and recovery context.</li>
                <li><AlertTriangle size={15} /> Major incidents include follow-up recommendations where relevant.</li>
              </ul>
            </article>
          </div>

          <div className="content-block" style={{ marginTop: "1rem" }}>
            <h3>Incident log placeholder</h3>
            <p>No public incident feed is currently connected to this page.</p>
            <p className="form-note">TODO(status): integrate a live status provider or internal incident feed.</p>
            <p className="link-row"><Link className="text-link" href="/support/">Report an issue to support</Link></p>
          </div>
        </div>
      </section>
    </>
  );
}
