import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/lib/profile";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Résumé — Karthikeyan Aruldoss",
  description: "Résumé for Karthikeyan Aruldoss, AI engineer and senior full-stack engineer in Chennai.",
};

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-12 text-[#16202b]">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-medium tracking-tight">{SITE.name}</h1>
          <p className="mt-2 text-sm text-[#526272]">{profile.role} · {profile.place}</p>
        </div>
        <Link href="/" className="text-sm text-[#23486a] print:hidden">Back to site</Link>
      </div>
      <ul className="mt-4 space-y-1 text-sm text-[#526272]">
        <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
        <li><a href={SITE.linkedin}>{SITE.linkedinLabel}</a></li>
        <li><a href={SITE.github}>github.com/{SITE.githubHandle}</a></li>
      </ul>
      <p className="mt-6 leading-7">{profile.line}</p>

      <h2 className="mt-10 text-lg font-medium">Experience</h2>
      <ol className="mt-4 space-y-5">
        {profile.jobs.map((job) => (
          <li key={`${job.company}-${job.period}`}>
            <p className="text-sm text-[#23486a]">{job.period}</p>
            <p className="font-medium">{job.role}</p>
            <p className="text-sm text-[#5c6b7c]">{job.company}</p>
            <p className="mt-1 text-sm leading-6 text-[#526272]">{job.summary}</p>
          </li>
        ))}
      </ol>

      <h2 className="mt-10 text-lg font-medium">Selected work</h2>
      <ol className="mt-4 space-y-4">
        {profile.projects.map((project) => (
          <li key={project.n}>
            <p className="font-medium">{project.title}</p>
            <p className="text-sm text-[#5c6b7c]">{project.stack}</p>
            <p className="mt-1 text-sm leading-6 text-[#526272]">{project.summary} {project.result}</p>
          </li>
        ))}
      </ol>

      <h2 className="mt-10 text-lg font-medium">Certification</h2>
      <p className="mt-2 text-sm">
        <a href={profile.cert.href}>{profile.cert.name}</a>
        <span className="text-[#5c6b7c]"> · {profile.cert.meta}</span>
      </p>

      <h2 className="mt-10 text-lg font-medium">Education</h2>
      <p className="mt-2 text-sm leading-6">{profile.education}</p>
    </main>
  );
}
