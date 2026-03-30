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
          <p className="section-subtitle">Hosting services are continuously monitored. Current incidents and planned maintenance are communicated through support channels.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="content-block">
            <h2>Current state</h2>
            <p>Core services are monitored for uptime, response behavior, and billing workflow availability.</p>
          </div>
          <div className="content-block">
            <h2>Need urgent help?</h2>
            <p>For urgent incidents, use support channels with clear impact details so response priority can be assigned quickly.</p>
            {/* TODO(status): Integrate external status feed or incident timeline widget. */}
          </div>
        </div>
      </section>
    </>
  );
}
