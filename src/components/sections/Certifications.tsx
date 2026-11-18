"use client";

export function Certifications() {
  return (
    <section id="certifications" className="border-t border-[#1a1814]/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-24 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm text-[#6b645c]">Credential</p>
          <h2 className="display mt-2 text-3xl leading-snug">
            AWS Certified Solutions Architect – Associate
          </h2>
          <p className="mt-2 text-sm text-[#6b645c]">SAA-C03 · Amazon Web Services · issued Jul 2026 · expires Jul 2029</p>
        </div>
        <a
          href="https://www.credly.com/badges/153bd6d0-222f-49bb-a93c-6a42929c6093"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#b8431f] underline underline-offset-4"
        >
          View certificate
        </a>
      </div>
    </section>
  );
}
