import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { SITE } from "@/lib/site";
import { thankYouEmail } from "@/lib/thankYouEmail";

export const runtime = "nodejs";

const MAX = { name: 120, email: 200, message: 5000 };
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const record = body as { name?: unknown; email?: unknown; message?: unknown; website?: unknown };
  if (typeof record.website === "string" && record.website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (limited(ip)) {
    return NextResponse.json({ error: "Too many messages. Please email me directly." }, { status: 429 });
  }

  const name = typeof record.name === "string" ? record.name.trim() : "";
  const email = typeof record.email === "string" ? record.email.trim() : "";
  const message = typeof record.message === "string" ? record.message.trim() : "";

  if (!name || !email || !message || name.length > MAX.name || email.length > MAX.email || message.length > MAX.message) {
    return NextResponse.json({ error: "Please check the form and try again." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM_EMAIL || user;

  if (!host || !user || !pass || !from) {
    return NextResponse.json({ error: "Mail is not configured." }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  try {
    const thankYou = thankYouEmail(name);
    await transporter.sendMail({
      from: `"${SITE.name}" <${from}>`,
      to: SITE.email,
      replyTo: email,
      subject: `Portfolio inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    await transporter.sendMail({
      from: `"${SITE.name}" <${from}>`,
      to: email,
      replyTo: SITE.email,
      subject: thankYou.subject,
      text: thankYou.text,
      html: thankYou.html,
    });
  } catch {
    return NextResponse.json({ error: "Could not send the message. Please email me directly." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
