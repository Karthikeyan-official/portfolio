"use client";

const items = [
  ["RBAC surfaces", "Permission-driven components and protected routes."],
  ["Mentions", "Tagging, notifications, and threaded replies."],
  ["Stripe", "Checkout, webhooks, dunning, proration, invoices."],
  ["MongoDB", "Indexes and aggregations for heavier collections."],
  ["Component library", "Shared TypeScript components, about 60% less duplication."],
  ["PCI dashboard", "Live script monitoring over WebSocket."],
  ["API speed", "Queries, Redis, and pooling aimed at sub-200ms."],
  ["CI/CD", "Staging and production with zero-downtime deploys."],
];

export function EngineeringHighlights() {
  return (
    <section id="engineering" className="border-t border-[#1a1814]/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="display text-5xl">Engineering notes</h2>
        <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {items.map(([title, body]) => (
            <div key={title} className="border-t border-[#1a1814]/10 pt-4">
              <dt className="text-base">{title}</dt>
              <dd className="mt-1 text-sm leading-6 text-[#6b645c]">{body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
