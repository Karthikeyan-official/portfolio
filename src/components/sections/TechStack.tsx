"use client";

const groups = [
  ["AI", "LLMs, RAG, agents, Python, OpenAI, embeddings, LangChain"],
  ["Frontend", "React, Next.js, TypeScript, Tailwind, shadcn/ui"],
  ["Backend", "Node.js, NestJS, Express, REST, WebSockets, GraphQL"],
  ["Data", "MongoDB, PostgreSQL, Redis, Mongoose, Prisma"],
  ["Delivery", "Docker, AWS, CI/CD, Stripe, GitHub Actions, Nginx"],
];

export function TechStack() {
  return (
    <section id="skills" className="border-t border-[#1a1814]/10 bg-[#ebe6dc]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="display text-5xl">Tools</h2>
        <ul className="mt-10 divide-y divide-[#1a1814]/10 border-y border-[#1a1814]/10">
          {groups.map(([name, items]) => (
            <li key={name} className="grid gap-2 py-5 sm:grid-cols-12">
              <span className="text-sm text-[#b8431f] sm:col-span-3">{name}</span>
              <span className="text-sm leading-6 text-[#1a1814] sm:col-span-9">{items}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
