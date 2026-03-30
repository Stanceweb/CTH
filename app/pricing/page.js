import PricingSection from "@/components/PricingSection";

export const metadata = {
  title: "Hosting Plans and Pricing",
  description: "Compare hosting plans, features, billing cycles, and support options to choose the right fit for your website.",
  alternates: { canonical: "/pricing/" },
};

export default function PricingPage() {
  return (
    <>
      <section>
        <div className="container">
          <h1 className="section-title">Hosting plans and pricing</h1>
          <p className="section-subtitle">Choose monthly or annual billing and switch between USD and NGN pricing. Plan selection routes directly into your account signup and billing flow.</p>
        </div>
      </section>

      <section aria-labelledby="pricing-table-title">
        <div className="container">
          <h2 id="pricing-table-title" className="section-title">Compare plans</h2>
          <PricingSection />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="content-block">
            <h2>Billing notes</h2>
            <ul>
              <li>USD prices display intro pricing first, then renewal rates.</li>
              <li>NGN prices display curated local pricing with no live currency conversion.</li>
              <li>Annual billing displays the equivalent of two months free compared to monthly totals.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
