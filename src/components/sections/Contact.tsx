"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "Could not send the message.");
      }
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send the message.");
    } finally {
      setSending(false);
    }
  };

  const field = "w-full rounded-xl border border-[#1a1814]/12 bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-[#a3988c] focus:border-[#1a1814]";

  return (
    <section id="contact" className="border-t border-[#1a1814]/10">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-[#6b645c]">Contact</p>
          <h2 className="display mt-3 text-5xl leading-[1.05]">
            Tell me what you are hiring for.
          </h2>
          <ul className="mt-8 space-y-3 text-sm">
            <li><a className="underline decoration-[#1a1814]/20 underline-offset-4 hover:decoration-[#b8431f]" href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li><a className="underline decoration-[#1a1814]/20 underline-offset-4 hover:decoration-[#b8431f]" href={SITE.linkedin} target="_blank" rel="noopener noreferrer">{SITE.linkedinLabel}</a></li>
            <li><a className="underline decoration-[#1a1814]/20 underline-offset-4 hover:decoration-[#b8431f]" href={SITE.github} target="_blank" rel="noopener noreferrer">github.com/{SITE.githubHandle}</a></li>
          </ul>
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-[0_16px_40px_rgba(26,24,20,0.05)] sm:p-8">
          {sent ? (
            <p className="text-sm leading-7 text-[#3d3832]">Message sent. I reply from {SITE.email}.</p>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <label className="block text-xs text-[#6b645c]">
                Name
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={`${field} mt-1.5`} />
              </label>
              <label className="block text-xs text-[#6b645c]">
                Email
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={`${field} mt-1.5`} />
              </label>
              <label className="block text-xs text-[#6b645c]">
                Message
                <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${field} mt-1.5`} />
              </label>
              {error ? <p className="text-sm text-[#8a3a2a]">{error}</p> : null}
              <button type="submit" disabled={sending} className="h-12 rounded-full bg-[#b8431f] px-6 text-sm text-white transition-colors hover:bg-[#9c3819] disabled:opacity-60">
                {sending ? "Sending…" : "Send"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
