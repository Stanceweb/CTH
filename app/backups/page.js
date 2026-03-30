import Link from "next/link";
import { DatabaseBackup, FileClock, HardDriveDownload, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Website Backups and Recovery",
  description: "Explore backup coverage, retention, and recovery options available with our hosting services.",
  alternates: { canonical: "/backups/" },
};

export default function BackupsPage() {
  return (
    <>
      <section>
        <div className="container">
          <h1 className="section-title">Website backups and recovery</h1>
          <p className="section-subtitle">Backup coverage is built into managed operations so restoration can be performed quickly when incidents occur.</p>

          <div className="backup-grid">
            <article className="card">
              <span className="feature-icon"><DatabaseBackup /></span>
              <h3>Automatic backup coverage</h3>
              <p>Backups run automatically according to plan scope and operational schedules.</p>
            </article>
            <article className="card">
              <span className="feature-icon"><FileClock /></span>
              <h3>Retention by plan tier</h3>
              <p>Retention windows depend on active plan level and backup policy settings.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-muted">
        <div className="container">
          <div className="highlights-grid">
            <article className="timeline-card">
              <h3>Restore expectations</h3>
              <ol className="timeline">
                <li><strong>Request intake:</strong> identify incident scope and target restore point.</li>
                <li><strong>Restore execution:</strong> apply recovery action and validate service behavior.</li>
                <li><strong>Post-restore checks:</strong> verify critical paths and monitor for regression.</li>
              </ol>
            </article>

            <div className="cue-grid">
              <article className="cue-card">
                <h4><HardDriveDownload size={16} /> Recovery workflow</h4>
                <p>Support reviews request urgency and confirms backup availability before restore.</p>
              </article>
              <article className="cue-card">
                <h4><ShieldCheck size={16} /> Integrity checks</h4>
                <p>Post-restore validation ensures core routes and business-critical flows are functional.</p>
              </article>
            </div>
          </div>

          <div className="content-block" style={{ marginTop: "1rem" }}>
            <h3>Plan differences</h3>
            <p>Backup retention and recovery scope may vary by plan tier and workload requirements.</p>
            <p className="form-note">TODO(policy): publish exact retention periods and restore SLA guidance per plan tier.</p>
            <p className="link-row"><Link className="text-link" href="/pricing/">Review plans and backup coverage</Link></p>
          </div>
        </div>
      </section>
    </>
  );
}
