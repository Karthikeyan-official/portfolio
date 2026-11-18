"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Mail, Menu, X } from "lucide-react";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { profile } from "@/lib/profile";
import { useSmoothScroll } from "@/components/shared/SmoothScrollProvider";

const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;

const nav = [
  ["Work", "work"],
  ["Experience", "experience"],
  ["Writing", "writing"],
  ["Contact", "contact"],
] as const;

export default function Home() {
  const { scrollTo } = useSmoothScroll();
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("work");
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    const ids = nav.map(([, id]) => id);
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -50% 0px" }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  const go = (id: string) => {
    setMenu(false);
    scrollTo(`#${id}`);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const [lead, ...rest] = profile.projects;

  return (
    <main className="min-h-screen bg-[#e8edf3] text-[#16202b]">
      <header className="sticky top-0 z-40 border-b border-[#d3dbe4] bg-[#e8edf3]/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <button type="button" onClick={() => scrollTo(0)} className="flex min-w-0 items-center gap-2.5 text-sm font-medium tracking-tight">
            <Image
              src={asset("/assets/logo.png")}
              alt="KA"
              width={820}
              height={454}
              className="h-8 w-auto max-w-[92px] shrink-0 object-contain"
              style={{ height: 32, width: "auto" }}
            />
            <span className="truncate">Karthikeyan Aruldoss</span>
          </button>
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map(([label, id]) => (
              <button
                key={id}
                type="button"
                onClick={() => go(id)}
                className={`rounded-lg px-3 py-2 text-sm transition-colors ${active === id ? "bg-white text-[#16202b]" : "text-[#5c6b7c] hover:text-[#16202b]"}`}
              >
                {label}
              </button>
            ))}
            <button type="button" onClick={() => go("contact")} className="ml-2 h-9 rounded-lg bg-[#23486a] px-4 text-sm text-white hover:bg-[#1b3a56]">
              Hire me
            </button>
          </nav>
          <button type="button" className="md:hidden" aria-label="Menu" onClick={() => setMenu((v) => !v)}>
            {menu ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menu && (
          <div className="border-t border-[#d3dbe4] px-4 py-3 md:hidden">
            {nav.map(([label, id]) => (
              <button key={id} type="button" onClick={() => go(id)} className="block w-full rounded-lg px-3 py-2 text-left text-sm">
                {label}
              </button>
            ))}
          </div>
        )}
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-8 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:pt-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs text-[#5c6b7c] shadow-[0_1px_0_rgba(22,32,43,0.06)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2f7d4a]" />
            Open to senior roles · Chennai
          </p>
          <h1 className="mt-6 text-[44px] font-medium leading-[1.02] tracking-[-0.035em] sm:text-[64px]">
            AI engineer.
            <span className="block text-[#23486a]">Full-stack systems for LLMs, RAG, and cybersecurity SaaS.</span>
          </h1>
          <p className="mt-6 max-w-lg text-[17px] leading-8 text-[#526272]">{profile.line}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" onClick={() => go("work")} className="inline-flex h-12 items-center gap-2 rounded-lg bg-[#23486a] px-5 text-sm text-white hover:bg-[#1b3a56]">
              Selected work <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </button>
            <a href={`mailto:${SITE.email}`} className="inline-flex h-12 items-center gap-2 rounded-lg bg-white px-5 text-sm shadow-[0_1px_0_rgba(22,32,43,0.06)] hover:bg-[#f7f9fb]">
              <Mail className="h-4 w-4" strokeWidth={1.5} /> Email
            </a>
          </div>
        </div>

        <figure className="overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_rgba(22,32,43,0.08)]">
          <Image
            src={asset("/portrait.jpg")}
            alt="Karthikeyan Aruldoss"
            width={800}
            height={1000}
            priority
            className="aspect-[4/5] w-full object-cover object-[center_15%]"
          />
          <figcaption className="grid grid-cols-3 divide-x divide-[#e4ebf1] border-t border-[#e4ebf1] text-center">
            {profile.stats.slice(0, 3).map(([value, label]) => (
              <div key={label} className="px-2 py-3">
                <p className="text-lg font-medium tabular-nums">{value}</p>
                <p className="text-[11px] text-[#5c6b7c]">{label}</p>
              </div>
            ))}
          </figcaption>
        </figure>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl bg-white p-8 shadow-[0_1px_0_rgba(22,32,43,0.04)] lg:p-10">
          <p className="text-sm text-[#5c6b7c]">About</p>
          <p className="mt-4 max-w-3xl text-[28px] font-medium leading-snug tracking-[-0.02em] sm:text-[32px]">
            AI engineer for four years of cybersecurity SaaS, from retrieval and agents to the screen a security team opens every morning.
          </p>
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <p className="leading-7 text-[#526272]">
              Models sit next to the rest of the stack. Retrieval, evals, and fallbacks have to fail the same way a payment webhook fails: visibly, and with a path back. The other half is billing, access control, and releases while the scope is still moving.
            </p>
            <ul className="flex flex-wrap content-start gap-2">
              {profile.specs.map((item) => (
                <li key={item} className="rounded-full bg-[#e8edf3] px-3 py-1.5 text-sm">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="work" className="bg-[#16202b] text-[#e8edf3]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-4xl font-medium tracking-[-0.03em]">Selected work</h2>
          <article className="mt-8 grid gap-8 rounded-2xl bg-[#1e2936] p-6 lg:grid-cols-[1.2fr_0.8fr] lg:p-8">
            <div>
              <p className="text-xs text-[#8fb4d4]">{lead.n} · {lead.tag}</p>
              <h3 className="mt-3 text-3xl font-medium tracking-tight">{lead.title}</h3>
              <p className="mt-4 max-w-xl leading-7 text-[#c5d0dc]">{lead.summary}</p>
              <p className="mt-6 text-sm text-[#d7e4f0]">{lead.result}</p>
            </div>
            <div className="flex flex-wrap content-end gap-2 lg:justify-end">
              {lead.stack.split(", ").map((item) => (
                <span key={item} className="rounded-full bg-[#16202b] px-3 py-1 text-xs text-[#c5d0dc]">{item}</span>
              ))}
            </div>
          </article>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {rest.map((project) => (
              <article key={project.n} className="rounded-2xl bg-[#1e2936] p-6">
                <p className="text-xs text-[#8fb4d4]">{project.n} · {project.tag}</p>
                <h3 className="mt-3 text-2xl font-medium tracking-tight">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#c5d0dc]">{project.summary}</p>
                <p className="mt-4 text-sm">{project.result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-6 py-20 lg:grid-cols-5">
        <div className="rounded-2xl bg-white p-7 lg:col-span-2">
          <p className="text-xs text-[#23486a]">The problem</p>
          <h2 className="mt-3 text-2xl font-medium tracking-tight">{profile.caseStudy.title}</h2>
          <ul className="mt-5 space-y-3 text-sm text-[#526272]">
            {profile.caseStudy.pains.map((pain) => (
              <li key={pain} className="border-t border-[#e4ebf1] pt-3">{pain}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-[#23486a] p-7 text-white lg:col-span-3">
          <p className="text-xs text-[#c5d5e6]">What shipped</p>
          <p className="mt-4 text-lg leading-8">{profile.caseStudy.built}</p>
          <p className="mt-6 inline-flex rounded-full bg-white/10 px-3 py-1 text-sm">{profile.caseStudy.result}</p>
        </div>
      </section>

      <section className="border-y border-[#d3dbe4] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-4xl font-medium tracking-[-0.03em]">Engineering notes</h2>
          <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl bg-[#e4ebf1] sm:grid-cols-2">
            {profile.notes.map(([title, body]) => (
              <div key={title} className="bg-white p-5">
                <dt className="font-medium">{title}</dt>
                <dd className="mt-1 text-sm leading-6 text-[#526272]">{body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-4xl font-medium tracking-[-0.03em]">Experience</h2>
        <ol className="mt-10">
          {profile.jobs.map((job, index) => (
            <li key={job.period} className="grid grid-cols-[16px_1fr] gap-5">
              <div className="flex flex-col items-center">
                <span className={`mt-1.5 h-2.5 w-2.5 rounded-full ${index === 0 ? "bg-[#23486a]" : "bg-[#c5d0dc]"}`} />
                {index < profile.jobs.length - 1 && <span className="mt-1 w-px flex-1 bg-[#d3dbe4]" />}
              </div>
              <div className="pb-8">
                <p className="text-xs text-[#23486a]">{job.period}</p>
                <p className="mt-1 text-lg font-medium">{job.role}</p>
                <p className="text-sm text-[#5c6b7c]">{job.company} · Chennai</p>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#526272]">{job.summary}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="ml-9 text-sm text-[#5c6b7c]">{profile.education}</p>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-4xl font-medium tracking-[-0.03em]">Tools</h2>
          <div className="mt-8 space-y-6">
            {profile.tools.map(([name, items]) => (
              <div key={name} className="grid gap-3 border-t border-[#e4ebf1] pt-5 sm:grid-cols-[140px_1fr]">
                <p className="text-sm font-medium text-[#23486a]">{name}</p>
                <ul className="flex flex-wrap gap-2">
                  {items.split(", ").map((item) => (
                    <li key={item} className="rounded-full bg-[#e8edf3] px-3 py-1 text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <a href={profile.cert.href} target="_blank" rel="noopener noreferrer" className="flex flex-col justify-between gap-4 rounded-2xl bg-[#16202b] p-6 text-[#e8edf3] sm:flex-row sm:items-center">
          <span>
            <span className="text-xs text-[#8fb4d4]">AWS · {profile.stats[3][0]}</span>
            <span className="mt-1 block text-xl font-medium">{profile.cert.name}</span>
            <span className="mt-1 block text-sm text-[#9aabbd]">{profile.cert.meta}</span>
          </span>
          <span className="inline-flex items-center gap-1 text-sm text-[#8fb4d4]">
            View certificate <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </span>
        </a>
      </section>

      <section id="writing" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-4xl font-medium tracking-[-0.03em]">Publications</h2>
        <ul className="mt-6 overflow-hidden rounded-2xl bg-white">
          {profile.papers.map((paper) => (
            <li key={paper.title} className="border-b border-[#e4ebf1] last:border-b-0">
              <a href={paper.href} target="_blank" rel="noopener noreferrer" className="group flex items-start justify-between gap-6 px-6 py-5">
                <span>
                  <span className="text-xs text-[#23486a]">{paper.venue}</span>
                  <span className="mt-1 block text-lg font-medium leading-snug group-hover:underline">{paper.title}</span>
                  <span className="mt-1 block text-sm text-[#5c6b7c]">{paper.topic}</span>
                </span>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[#5c6b7c]" strokeWidth={1.5} />
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <h2 className="text-4xl font-medium tracking-[-0.03em]">Notes from teams</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {profile.quotes.map(([quote, who]) => (
            <figure key={who} className="flex flex-col rounded-2xl bg-white p-6">
              <blockquote className="flex-1 text-[15px] leading-7">“{quote}”</blockquote>
              <figcaption className="mt-6 border-t border-[#e4ebf1] pt-4 text-xs text-[#5c6b7c]">{who}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-[#16202b] text-[#e8edf3]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-4xl font-medium tracking-[-0.03em]">More AI work</h2>
            <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="text-sm text-[#8fb4d4]">github.com/{SITE.githubHandle}</a>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {profile.experiments.map(([name, text], index) => (
              <li key={name} className="rounded-2xl bg-[#1e2936] p-5">
                <p className="text-xs text-[#8fb4d4]">0{index + 1}</p>
                <p className="mt-2 font-medium">{name}</p>
                <p className="mt-2 text-sm leading-6 text-[#c5d0dc]">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="mx-auto grid max-w-6xl gap-8 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <h2 className="text-5xl font-medium leading-[1.05] tracking-[-0.03em]">Tell me what you are hiring for.</h2>
          <div className="mt-8 space-y-3">
            {[
              ["Email", SITE.email, `mailto:${SITE.email}`],
              ["LinkedIn", SITE.linkedinLabel, SITE.linkedin],
              ["GitHub", `github.com/${SITE.githubHandle}`, SITE.github],
            ].map(([label, value, href]) => (
              <a key={label} href={href} className="flex items-center justify-between rounded-xl bg-white px-4 py-3 text-sm hover:bg-[#f7f9fb]">
                <span>
                  <span className="block text-xs text-[#5c6b7c]">{label}</span>
                  <span>{value}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-[#5c6b7c]" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
        <div className="rounded-2xl bg-white p-6 sm:p-8">
          {sent ? (
            <p className="text-sm leading-7 text-[#526272]">Your mail app should open with the draft. I reply from {SITE.email}.</p>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-xs text-[#5c6b7c]">
                  Name
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1.5 h-11 w-full rounded-lg border border-[#d3dbe4] px-3 text-sm text-[#16202b] outline-none focus:border-[#23486a]" />
                </label>
                <label className="block text-xs text-[#5c6b7c]">
                  Email
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-1.5 h-11 w-full rounded-lg border border-[#d3dbe4] px-3 text-sm outline-none focus:border-[#23486a]" />
                </label>
              </div>
              <label className="block text-xs text-[#5c6b7c]">
                Message
                <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="mt-1.5 w-full rounded-lg border border-[#d3dbe4] px-3 py-3 text-sm outline-none focus:border-[#23486a]" />
              </label>
              <button type="submit" className="h-11 rounded-lg bg-[#23486a] px-5 text-sm text-white hover:bg-[#1b3a56]">Send</button>
            </form>
          )}
        </div>
      </section>

      <footer className="border-t border-[#d3dbe4]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-[#5c6b7c]">
          <p>© {new Date().getFullYear()} {SITE.name}</p>
          <button type="button" onClick={() => scrollTo(0)}>Back to top</button>
        </div>
      </footer>
    </main>
  );
}
