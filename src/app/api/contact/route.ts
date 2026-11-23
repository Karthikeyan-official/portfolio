import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { SITE } from "@/lib/site";

export const runtime = "nodejs";

const MAX = { name: 120, email: 200, message: 5000 };

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = typeof (body as { name?: unknown }).name === "string" ? (body as { name: string }).name.trim() : "";
  const email = typeof (body as { email?: unknown }).email === "string" ? (body as { email: string }).email.trim() : "";
  const message = typeof (body as { message?: unknown }).message === "string" ? (body as { message: string }).message.trim() : "";

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
    await transporter.sendMail({
      from: `"${SITE.name}" <${from}>`,
      to: SITE.email,
      replyTo: email,
      subject: `Portfolio inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
  } catch {
    return NextResponse.json({ error: "Could not send the message. Please email me directly." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
