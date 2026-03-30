"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/pricing/", label: "Pricing" },
  { href: "/migrations/", label: "Migrations" },
  { href: "/security/", label: "Security" },
  { href: "/backups/", label: "Backups" },
  { href: "/support/", label: "Support" },
  { href: "/status/", label: "Status" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link className="brand" href="/">
          Continental Trust Hosting
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-controls="primary-nav"
          aria-expanded={open ? "true" : "false"}
          onClick={() => setOpen((prev) => !prev)}
        >
          Menu
        </button>

        <div className="header-actions">
          <a className="text-link" href="https://app.continentaltrustonline.online/login">
            Sign In
          </a>
          <Link className="btn btn-primary" href="/pricing/">
            Compare Plans
          </Link>
        </div>

        <div className="nav-shell" id="primary-nav" data-nav-shell data-open={open ? "true" : "false"}>
          <nav className="nav-links" aria-label="Primary">
            {NAV_LINKS.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
