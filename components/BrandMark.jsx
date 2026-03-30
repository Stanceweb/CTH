import Link from "next/link";

export default function BrandMark({ href = "/", compact = false }) {
  const content = (
    <>
      <span className="brand-emblem" aria-hidden="true">CT</span>
      <span className="brand-text">
        <span className="brand-title">Continental Trust Hosting</span>
        {!compact ? <span className="brand-caption">Managed Hosting Platform</span> : null}
      </span>
    </>
  );

  if (!href) {
    return <div className="brand-link">{content}</div>;
  }

  return (
    <Link className="brand-link" href={href} aria-label="Continental Trust Hosting home">
      {content}
    </Link>
  );
}
