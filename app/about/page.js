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
          <p className="section-subtitle">We focus on managed web hosting for businesses that need secure billing, practical setup support, and stable operations.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="content-block">
            <h2>Our approach</h2>
            <p>We keep hosting simple for operators and business owners: clear plans, secure billing, migration guidance, and practical support workflows.</p>
          </div>
          <div className="content-block">
            <h2>Where we help most</h2>
            <p>We are best suited for teams that need predictable setup, consistent communication, and managed platform operations without unnecessary complexity.</p>
          </div>
        </div>
      </section>
    </>
  );
}
