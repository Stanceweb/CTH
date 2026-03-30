import Link from "next/link";
import BrandMark from "@/components/BrandMark";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <section>
            <BrandMark href={null} compact={false} />
            <p style={{ marginTop: "0.8rem" }}>
              Reliable managed hosting for Nigerian teams that need secure billing,
              predictable operations, and practical support.
            </p>
          </section>

          <section>
            <h4>Platform</h4>
            <div className="footer-links">
              <Link href="/pricing/">Pricing</Link>
              <Link href="/migrations/">Migrations</Link>
              <Link href="/security/">Security</Link>
              <Link href="/backups/">Backups</Link>
              <Link href="/status/">Status</Link>
            </div>
          </section>

          <section>
            <h4>Company &amp; Legal</h4>
            <div className="footer-links">
              <Link href="/about/">About</Link>
              <Link href="/support/">Support</Link>
              <Link href="/contact/">Contact</Link>
              <Link href="/privacy/">Privacy</Link>
              <Link href="/terms/">Terms</Link>
              <Link href="/refunds/">Refunds</Link>
            </div>
          </section>
        </div>

        <div className="footer-grid" style={{ marginTop: "1rem", gridTemplateColumns: "1fr 1fr 1fr" }}>
          <section>
            <h4>Account Portal</h4>
            <div className="footer-links">
              <a href="https://app.continentaltrustonline.online/register">Create account</a>
              <a href="https://app.continentaltrustonline.online/login">Sign in</a>
            </div>
          </section>

          <section>
            <h4>Direct Channels</h4>
            <div className="footer-links">
              <a href="https://t.me/continentaltrust">Telegram @continentaltrust</a>
              <Link href="/support/">Support requests</Link>
            </div>
          </section>

          <section>
            <h4>Coverage</h4>
            <div className="footer-links">
              <span>NGN and USD pricing</span>
              <span>.com.ng and global domains</span>
            </div>
          </section>
        </div>

        <p className="footer-bottom">© 2026 Continental Trust Hosting. All rights reserved.</p>
      </div>
    </footer>
  );
}
