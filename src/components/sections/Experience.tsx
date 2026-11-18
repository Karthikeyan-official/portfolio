"use client";

const jobs = [
  {
    role: "Senior Software Engineer",
    company: "Crossbow Cybersecurity",
    period: "2026 — now",
    summary: "Cybersecurity SaaS on the MERN stack. Billing, architecture, and the releases that have to land.",
    points: ["Subscriptions with Stripe, NestJS, MongoDB, and AWS", "Prototypes that replaced legacy modules"],
  },
  {
    role: "Associate Full-stack Developer",
    company: "Crossbow Cybersecurity",
    period: "2025",
    summary: "Secure services, product UI, Stripe subscriptions, and PCI DSS tooling.",
    points: ["RBAC and cloud integrations", "Scrum delivery across MERN products"],
  },
  {
    role: "Associate Full Stack Developer",
    company: "Hibiz Solutions",
    period: "2023 — 2025",
    summary: "Client applications in MERN and Python, from planning through deployment.",
    points: ["Front and back integration on client deliverables"],
  },
  {
    role: "Project Intern",
    company: "Altimetrik",
    period: "2022",
    summary: "Digital engineering and platform modernization with client teams.",
    points: ["Delivery support on client platform work"],
  },
];

export function Experience() {
  return (
    <section id="experience">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-xs uppercase tracking-[0.14em] text-[#6b645c]">Experience</p>
        <h2 className="display mt-3 text-5xl">Where the work happened.</h2>
        <ol className="mt-12">
          {jobs.map((job) => (
            <li key={job.period + job.company} className="grid gap-4 border-t border-[#1a1814]/10 py-8 md:grid-cols-12">
              <p className="text-sm text-[#b8431f] md:col-span-3">{job.period}</p>
              <div className="md:col-span-9">
                <h3 className="text-xl">{job.role}</h3>
                <p className="mt-1 text-sm text-[#6b645c]">{job.company} · Chennai</p>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-[#3d3832]">{job.summary}</p>
                <ul className="mt-3 space-y-1 text-sm text-[#6b645c]">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
        <p className="border-t border-[#1a1814]/10 pt-6 text-sm text-[#6b645c]">
          B.E. Computer Science, Sri Venkateswara College of Engineering, 2018–2022. First class with distinction.
        </p>
      </div>
    </section>
  );
}
