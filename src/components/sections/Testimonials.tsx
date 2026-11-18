"use client";

const quotes = [
  ["Karthikeyan built critical product features quickly and handled complex backend systems reliably.", "Team lead, Crossbow Labs"],
  ["The security platform reduced compliance overhead. He understood the technical requirements and the business from day one.", "Project manager, enterprise client"],
  ["The Stripe work was clean, documented, and covered edge cases we had not scoped.", "Product owner, SaaS startup"],
];

export function Testimonials() {
  return (
    <section id="testimonials" className="border-t border-[#1a1814]/10">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="display text-5xl">Notes from teams</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {quotes.map(([quote, who]) => (
            <figure key={who} className="rounded-2xl bg-[#ebe6dc] p-6">
              <blockquote className="text-sm leading-7 text-[#1a1814]">“{quote}”</blockquote>
              <figcaption className="mt-4 text-xs text-[#6b645c]">{who}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
