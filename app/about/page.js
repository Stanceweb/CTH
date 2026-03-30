import Image from "next/image";
import { BadgeCheck, Building2, HeartHandshake, Rocket, Users } from "lucide-react";

export const metadata = {
  title: "About Continental Trust Hosting",
  description: "Learn about Continental Trust Hosting, our hosting approach, and the team behind our platform and support.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <section>
        <div className="container">
          <h1 className="section-title">About Continental Trust Hosting</h1>
          <p className="section-subtitle">We build managed hosting for Nigerian businesses and digital teams that need secure billing, practical support, and predictable operations.</p>

          <div className="about-story">
            <div className="media-card">
              <Image
                src="/assets/images/marketing/about-team.jpg"
                alt="Team discussion in a modern office workspace"
                width={1200}
                height={800}
                sizes="(max-width: 1080px) 100vw, 45vw"
              />
            </div>
            <article className="content-block">
              <h2>Why we exist</h2>
              <p>Too many businesses struggle with hosting setups that feel opaque, under-supported, or disconnected from local realities. Continental Trust Hosting exists to simplify that journey with clearer plan guidance, reliable operations, and support you can actually reach.</p>
              <h3 style={{ marginTop: "0.8rem" }}>Who we serve</h3>
              <ul>
                <li>Developers and freelancers shipping client websites.</li>
                <li>Agencies managing multiple business domains.</li>
                <li>Startups and SMEs that need practical uptime and billing clarity.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section-muted">
        <div className="container">
          <div className="grid-3">
            <article className="card"><span className="feature-icon"><Rocket /></span><h3>Execution-first</h3><p>We prioritize practical hosting outcomes over marketing noise.</p></article>
            <article className="card"><span className="feature-icon"><HeartHandshake /></span><h3>Support-centered</h3><p>Support quality is treated as a core product feature, not an afterthought.</p></article>
            <article className="card"><span className="feature-icon"><Building2 /></span><h3>Business-ready</h3><p>Plans and operations are structured for teams running real business workloads.</p></article>
          </div>

          <div className="content-block" style={{ marginTop: "1rem" }}>
            <h3>Credibility details</h3>
            <ul>
              <li><BadgeCheck size={15} /> Managed hosting with account portal and billing controls.</li>
              <li><Users size={15} /> Support channels for sales, billing, and technical operations.</li>
            </ul>
            <p className="form-note">TODO(company): add verified business registration details, office location, and leadership profile summary.</p>
          </div>
        </div>
      </section>
    </>
  );
}
