"use client";

import { useState } from "react";

const projects = [
  {
    n: "01",
    title: "PCI DSS client-side security",
    tag: "Enterprise SaaS",
    stack: "React · NestJS · MongoDB · WebSocket",
    summary: "Live monitoring for PCI DSS 4.0.1. The platform watches client-side scripts, catches unauthorized injections, and alerts a security team from one dashboard.",
    result: "About 80% fewer manual compliance checks.",
    role: "Full-stack, API architecture, security dashboards",
  },
  {
    n: "02",
    title: "Subscription billing",
    tag: "SaaS",
    stack: "Stripe · NestJS · MongoDB · React",
    summary: "Plans, add-ons, proration, dunning, and invoices, including mid-cycle changes and usage-based billing.",
    result: "Billing runs without a manual invoice step.",
    role: "Platform architecture and Stripe integration",
  },
  {
    n: "03",
    title: "Action point tracker",
    tag: "Internal tool",
    stack: "React · NestJS · Socket.io",
    summary: "One record for action items: threaded comments, mentions, evidence, roles, and an activity timeline.",
    result: "Resolution time about 40% faster.",
    role: "System design, full-stack, and UX",
  },
];

export function Projects() {
  const [open, setOpen] = useState(0);

  return (
    <section id="projects" className="bg-[#1a1814] text-[#f4f1ea]">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-[#e7c2b2]">Work</p>
            <h2 className="display mt-3 text-5xl">Three products, owned through.</h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-[#cfc6ba]">Click a row for the outcome and the part I owned.</p>
        </div>

        <div>
          {projects.map((project, index) => {
            const active = open === index;
            return (
              <button
                key={project.n}
                type="button"
                onClick={() => setOpen(index)}
                className={`grid w-full gap-4 border-t border-white/10 py-8 text-left transition-colors md:grid-cols-12 ${active ? "text-white" : "text-[#cfc6ba] hover:text-white"}`}
              >
                <span className="display text-3xl text-[#e7c2b2] md:col-span-1">{project.n}</span>
                <span className="md:col-span-5">
                  <span className="display block text-3xl text-[#f4f1ea]">{project.title}</span>
                  <span className="mt-2 block text-xs text-[#a3988c]">{project.tag} · {project.stack}</span>
                </span>
                <span className="text-sm leading-7 md:col-span-6">
                  {project.summary}
                  {active && (
                    <span className="mt-3 block text-[#f4f1ea]">
                      {project.result}
                      <span className="mt-1 block text-[#a3988c]">{project.role}</span>
                    </span>
                  )}
                </span>
              </button>
            );
          })}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
