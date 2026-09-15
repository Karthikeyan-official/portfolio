"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { FadeInView } from "@/components/animations/FadeInView";
import { Briefcase, Calendar, MapPin } from "lucide-react";

type Responsibility = { text: string; year: string };

type JobExperience = {
  role: string;
  company: string;
  period: string;
  duration: string;
  location: string;
  type: string;
  current?: boolean;
  description: string;
  responsibilities: Responsibility[];
  tech: string[];
};

const experiences: JobExperience[] = [
  {
    role: "Senior Software Engineer",
    company: "Crossbow Cybersecurity",
    period: "Jan 2026 — Present",
    duration: "Current",
    location: "Chennai, India",
    type: "Full-time",
    current: true,
    description:
      "Driving end-to-end engineering of scalable cybersecurity SaaS platforms using the MERN stack, with full accountability for sprint execution and architectural quality.",
    responsibilities: [
      {
        text: "Architected multi-product subscription and billing systems with Stripe, NestJS, MongoDB, and AWS",
        year: "2026",
      },
      {
        text: "Accelerated product launches through rapid prototyping while modernizing legacy modules",
        year: "2026",
      },
      {
        text: "Led cross-team coordination delivering high-impact releases on tight timelines",
        year: "2026",
      },
    ],
    tech: ["React", "NestJS", "MongoDB", "Stripe", "AWS", "TypeScript", "MERN"],
  },
  {
    role: "Associate Full-stack Developer",
    company: "Crossbow Cybersecurity",
    period: "Jan 2025 — Dec 2025",
    duration: "11 months",
    location: "Chennai, India",
    type: "Full-time",
    description:
      "Contributed to end-to-end development of cybersecurity SaaS products — secure backend services, dynamic frontends, and subscription workflows.",
    responsibilities: [
      {
        text: "Built secure backend services and frontend modules with RBAC and cloud integrations",
        year: "2025",
      },
      {
        text: "Developed Stripe-based subscription management and PCI DSS compliance tooling",
        year: "2025",
      },
      {
        text: "Participated in Scrum ceremonies, sprint execution, and rapid prototyping",
        year: "2025",
      },
      {
        text: "Engineered cybersecurity products from design to implementation in MERN stack",
        year: "2025",
      },
    ],
    tech: ["React", "NestJS", "MongoDB", "Node.js", "Stripe", "Docker", "WebSocket"],
  },
  {
    role: "Associate Full Stack Developer",
    company: "Hibiz Solutions",
    period: "Jan 2023 — Jan 2025",
    duration: "2 years",
    location: "Chennai, India",
    type: "Full-time",
    description:
      "Developed full-stack applications using MERN and Python, collaborating with cross-functional teams from planning through deployment.",
    responsibilities: [
      {
        text: "Built full-stack applications using MERN and Python from planning to implementation",
        year: "2024",
      },
      {
        text: "Integrated front-end and back-end functionalities across client deliverables",
        year: "2023",
      },
      {
        text: "Implemented efficient coding practices to optimize performance and UX",
        year: "2023",
      },
    ],
    tech: ["React", "Node.js", "MongoDB", "Python", "Express", "MERN"],
  },
  {
    role: "Project Intern",
    company: "Altimetrik",
    period: "Jan 2022 — Aug 2022",
    duration: "7 months",
    location: "Chennai, India",
    type: "Internship",
    description:
      "Contributed to digital engineering solutions in a data and platform modernization environment.",
    responsibilities: [
      {
        text: "Supported project delivery in a fast-paced digital engineering consultancy",
        year: "2022",
      },
      {
        text: "Collaborated with engineering teams on client-facing platform work",
        year: "2022",
      },
    ],
    tech: ["JavaScript", "React", "Agile"],
  },
];

const education = {
  degree: "B.E. Computer Science & Engineering",
  school: "Sri Venkateswara College of Engineering",
  period: "2018 — 2022",
  honors: "First Class with Distinction",
};

function ResponsibilityLine({
  text,
  year,
  index,
  total,
}: {
  text: string;
  year: string;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-start gap-4 group"
    >
      <div className="flex flex-col items-center shrink-0 pt-1">
        <div className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 group-hover:scale-150 transition-transform" />
        {index < total - 1 && (
          <div className="w-px h-7 bg-gradient-to-b from-blue-500/20 to-transparent mt-1" />
        )}
      </div>
      <div className="flex items-baseline justify-between flex-1 pb-1">
        <span className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors leading-relaxed">
          {text}
        </span>
        <span className="text-[10px] font-mono text-gray-700 shrink-0 ml-3">{year}</span>
      </div>
    </motion.div>
  );
}

function ExperienceCard({ job, index }: { job: JobExperience; index: number }) {
  return (
    <FadeInView delay={index * 0.08} direction="right">
      <div
        className={`rounded-2xl border p-8 ${
          job.current ? "border-blue-500/20" : "border-white/8"
        }`}
        style={{
          background: job.current
            ? "linear-gradient(135deg, rgba(59,130,246,0.04) 0%, rgba(11,15,25,0.9) 100%)"
            : "linear-gradient(135deg, rgba(15,20,35,0.6) 0%, rgba(11,15,25,0.9) 100%)",
          boxShadow: job.current
            ? "0 20px 50px rgba(0,0,0,0.3), 0 0 0 1px rgba(59,130,246,0.08)"
            : "0 12px 40px rgba(0,0,0,0.2)",
        }}
      >
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              {job.current && (
                <>
                  <span className="flex items-center gap-1.5 text-[11px] text-green-400 font-mono">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                    </span>
                    Current
                  </span>
                  <span className="text-[11px] text-gray-600 font-mono">·</span>
                </>
              )}
              <span className="text-[11px] text-gray-600 font-mono">{job.type}</span>
            </div>
            <h3 className="text-xl font-bold text-white">{job.role}</h3>
            <div className="flex flex-wrap items-center gap-3 mt-1.5">
              <div className="flex items-center gap-1.5 text-sm text-blue-400 font-medium">
                <Briefcase className="w-3.5 h-3.5" />
                {job.company}
              </div>
              <div className="flex items-center gap-1.5 text-sm text-gray-500">
                <MapPin className="w-3.5 h-3.5" />
                {job.location}
              </div>
            </div>
          </div>

          <div
            className="rounded-xl border border-white/8 px-4 py-3 text-right"
            style={{ background: "rgba(255,255,255,0.025)" }}
          >
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Calendar className="w-3.5 h-3.5" />
              <span className="font-mono">{job.period}</span>
            </div>
            <div className="text-[11px] font-mono text-blue-400 mt-0.5">{job.duration}</div>
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-7">{job.description}</p>

        <div className="mb-7">
          <p className="text-[11px] text-gray-600 font-mono mb-4">{"// key contributions"}</p>
          <div className="space-y-0">
            {job.responsibilities.map((r, i) => (
              <ResponsibilityLine
                key={i}
                text={r.text}
                year={r.year}
                index={i}
                total={job.responsibilities.length}
              />
            ))}
          </div>
        </div>

        <div className="pt-5 border-t border-white/5">
          <div className="flex flex-wrap gap-2">
            {job.tech.map((t) => (
              <motion.span
                key={t}
                className="px-2.5 py-1 rounded-md text-xs font-mono text-blue-400 bg-blue-500/8 border border-blue-500/15"
                whileHover={{ scale: 1.06, y: -1 }}
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </FadeInView>
  );
}

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 0.6], ["0%", "100%"]);

  return (
    <section id="experience" ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div
        className="orb w-[400px] h-[400px] right-[-80px] top-1/3"
        style={{ background: "rgba(37,99,235,0.06)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <FadeInView className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-xs text-gray-500 font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            experience
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Work{" "}
            <span className="text-gradient-blue">History</span>
          </h2>
          <p className="text-gray-500 text-lg">
            4+ years building cybersecurity SaaS — full-stack product, now with AI in the same systems.
          </p>
        </FadeInView>

        <div className="flex gap-10">
          <div className="hidden sm:flex flex-col items-center shrink-0 pt-2">
            <div className="relative w-px flex-1" style={{ background: "rgba(255,255,255,0.05)" }}>
              <motion.div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 to-violet-500 origin-top"
                style={{ height: lineHeight }}
              />
            </div>
          </div>

          <div className="flex-1 space-y-8">
            {experiences.map((job, i) => (
              <ExperienceCard key={`${job.company}-${job.period}`} job={job} index={i} />
            ))}

            <FadeInView delay={0.3} direction="right">
              <div
                className="rounded-2xl border border-violet-500/15 p-6"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(139,92,246,0.04) 0%, rgba(11,15,25,0.85) 100%)",
                }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-xl flex-shrink-0"
                    style={{ boxShadow: "0 8px 20px rgba(139,92,246,0.25)" }}
                  >
                    🎓
                  </div>
                  <div>
                    <p className="text-[10px] text-violet-400 font-mono uppercase tracking-wider mb-0.5">
                      Education
                    </p>
                    <h3 className="font-semibold text-white">{education.degree}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">
                      {education.school} · {education.period} · {education.honors}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </div>
    </section>
  );
}
