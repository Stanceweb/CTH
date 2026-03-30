import Link from "next/link";
import { CircleDollarSign, Headset, MessageSquareMore, Send, Wrench } from "lucide-react";

export const metadata = {
  title: "Contact Continental Trust Hosting",
  description: "Contact Continental Trust Hosting for sales, support, billing, or general questions about our hosting services.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <section>
        <div className="container">
          <h1 className="section-title">Contact us</h1>
          <p className="section-subtitle">Choose the right channel for sales, billing, technical support, or migration planning.</p>

          <div className="contact-grid">
            <article className="card">
              <span className="contact-icon"><Headset /></span>
              <h3>Sales and setup</h3>
              <p>Need help choosing a plan or planning your onboarding flow?</p>
              <p className="link-row"><Link className="text-link" href="/pricing/">Compare plans</Link></p>
            </article>
            <article className="card">
              <span className="contact-icon"><CircleDollarSign /></span>
              <h3>Billing support</h3>
              <p>Questions about subscription renewals, invoices, or payment references.</p>
              <p className="link-row"><a className="text-link" href="https://app.continentaltrustonline.online">Open account portal</a></p>
            </article>
            <article className="card">
              <span className="contact-icon"><Wrench /></span>
              <h3>Technical support</h3>
              <p>Issue triage for runtime incidents, SSL, backups, and access challenges.</p>
              <p className="link-row"><Link className="text-link" href="/support/">Support resources</Link></p>
            </article>
            <article className="card">
              <span className="contact-icon"><MessageSquareMore /></span>
              <h3>Direct chat channel</h3>
              <p>Telegram remains available for fast coordination and incident updates.</p>
              <p className="link-row"><a className="text-link" href="https://t.me/continentaltrust">Message @continentaltrust</a></p>
            </article>
          </div>
        </div>
      </section>

      <section className="section-muted">
        <div className="container">
          <div className="form-card">
            <h2>Contact request form</h2>
            <p className="form-note">Share your request and we&apos;ll route it to the right support queue.</p>
            <form className="form-grid" method="get" action="/contact/" aria-label="Contact request form">
              <div className="field">
                <label htmlFor="contact-name">Full name</label>
                <input id="contact-name" name="name" required />
              </div>
              <div className="field">
                <label htmlFor="contact-email">Work email</label>
                <input id="contact-email" name="email" type="email" required />
              </div>
              <div className="field">
                <label htmlFor="contact-topic">Request type</label>
                <select id="contact-topic" name="topic" defaultValue="sales">
                  <option value="sales">Sales / plan guidance</option>
                  <option value="billing">Billing support</option>
                  <option value="technical">Technical support</option>
                  <option value="migration">Migration planning</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="contact-domain">Website / domain</label>
                <input id="contact-domain" name="domain" placeholder="example.com" />
              </div>
              <div className="field full">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" required placeholder="Tell us what you need help with" />
              </div>
              <div className="field full">
                <button className="btn btn-primary" type="submit"><Send size={15} /> Submit request</button>
              </div>
            </form>
            <p className="form-note">TODO(contact): wire this form to a persistent contact endpoint and add verified business email + WhatsApp if enabled.</p>
          </div>
        </div>
      </section>
    </>
  );
}
