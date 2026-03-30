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
          <p className="section-subtitle">Backup coverage is automated so restoration can happen quickly when issues occur.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="content-block">
            <h2>Backup coverage</h2>
            <p>Backups are performed automatically and retained according to the active hosting plan.</p>
            {/* TODO(policy): Confirm exact retention periods for each plan and update this section. */}
          </div>
          <div className="content-block">
            <h2>Recovery process</h2>
            <p>Restoration requests are reviewed by support, validated against backup availability, then applied with post-restore checks to confirm service health.</p>
          </div>
        </div>
      </section>
    </>
  );
}
