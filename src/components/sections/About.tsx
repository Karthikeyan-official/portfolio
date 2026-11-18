"use client";

const specs = ["LLMs, RAG, agents", "React & NestJS", "Stripe billing", "RBAC", "PCI DSS tooling", "AWS"];

export function About() {
  return (
    <section id="about" className="border-y border-[#1a1814]/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 lg:grid-cols-12">
        <p className="text-xs uppercase tracking-[0.14em] text-[#6b645c] lg:col-span-3">About</p>
        <div className="lg:col-span-9">
          <p className="display text-[34px] leading-[1.15] sm:text-[42px]">
            Four years in cybersecurity SaaS, from the schema to the screen a security team opens every morning.
          </p>
          <div className="mt-8 grid gap-8 text-[15px] leading-7 text-[#3d3832] sm:grid-cols-2">
            <p>
              Models sit next to the rest of the stack. Retrieval, evals, and fallbacks have to fail the same way a payment webhook fails: visibly, and with a path back.
            </p>
            <p>
              The other half is product work. Billing, access control, and releases in startups where the scope is still moving.
            </p>
          </div>
          <ul className="mt-10 flex flex-wrap gap-2">
            {specs.map((item) => (
              <li key={item} className="rounded-full border border-[#1a1814]/12 bg-white px-3.5 py-1.5 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
