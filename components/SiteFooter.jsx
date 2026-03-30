import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <section>
            <h3>Continental Trust Hosting</h3>
            <p>Managed web hosting for businesses that need fast setup, secure billing, and real support.</p>
          </section>
          <section>
            <h4>Product</h4>
            <div className="footer-links">
              <Link href="/pricing/">Pricing</Link>
              <Link href="/migrations/">Migrations</Link>
              <Link href="/security/">Security</Link>
              <Link href="/backups/">Backups</Link>
            </div>
          </section>
          <section>
            <h4>Support &amp; Company</h4>
            <div className="footer-links">
              <Link href="/support/">Support</Link>
              <Link href="/status/">Status</Link>
              <Link href="/about/">About</Link>
              <Link href="/contact/">Contact</Link>
            </div>
          </section>
        </div>

        <div className="footer-grid" style={{ marginTop: "1rem", gridTemplateColumns: "1fr 1fr 1fr" }}>
          <section>
            <h4>Legal</h4>
            <div className="footer-links">
              <Link href="/privacy/">Privacy</Link>
              <Link href="/terms/">Terms</Link>
              <Link href="/refunds/">Refunds</Link>
            </div>
          </section>
          <section>
            <h4>Account</h4>
            <div className="footer-links">
              <a href="https://app.continentaltrustonline.online/register">Create account</a>
              <a href="https://app.continentaltrustonline.online/login">Sign in</a>
            </div>
          </section>
          <section>
            <h4>Direct support</h4>
            <div className="footer-links">
              <a href="https://t.me/continentaltrust">Telegram @continentaltrust</a>
              <Link href="/support/">Support resources</Link>
            </div>
          </section>
        </div>

        <p className="footer-bottom">© 2026 Continental Trust Hosting. All rights reserved.</p>
      </div>
    </footer>
  );
}
