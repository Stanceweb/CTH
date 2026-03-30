import Link from "next/link";

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
          <p className="section-subtitle">Reach us for sales, support, billing, migration planning, or service questions.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid-3">
            <article className="card">
              <h2>Support</h2>
              <p>For active account support, use the in-app support workflow.</p>
              <p className="link-row"><a className="text-link" href="https://app.continentaltrustonline.online">Open app portal</a></p>
            </article>
            <article className="card">
              <h2>Telegram</h2>
              <p>For fast coordination and incident reporting.</p>
              <p className="link-row"><a className="text-link" href="https://t.me/continentaltrust">Message @continentaltrust</a></p>
            </article>
            <article className="card">
              <h2>Plan guidance</h2>
              <p>Not sure which plan fits? Start with pricing and we can help scope requirements.</p>
              <p className="link-row"><Link className="text-link" href="/pricing/">Compare plans</Link></p>
            </article>
          </div>

          <div className="content-block">
            <h2>Before you contact support</h2>
            <ul>
              <li>Your domain and account email</li>
              <li>Issue summary and time first observed</li>
              <li>Any recent billing, DNS, or deployment changes</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
