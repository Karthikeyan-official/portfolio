"use client";

import { SITE } from "@/lib/site";

const experiments = [
  ["react-form-wizard", "Headless multi-step forms for React, with validation and TypeScript."],
  ["nestjs-audit-logger", "Interceptor that logs API mutations with user context."],
  ["mongo-schema-validator", "CLI that checks MongoDB documents against Zod schemas."],
  ["ui-component-kit", "Personal React and Tailwind components used on internal projects."],
];

export function OpenSource() {
  return (
    <section id="open-source" className="border-t border-[#1a1814]/10 bg-[#1a1814] text-[#f4f1ea]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="display text-5xl">Side projects</h2>
          <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="text-sm text-[#e7c2b2] underline underline-offset-4">
            github.com/{SITE.githubHandle}
          </a>
        </div>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {experiments.map(([name, text]) => (
            <li key={name}>
              <p className="font-medium">{name}</p>
              <p className="mt-1 text-sm leading-6 text-[#cfc6ba]">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
