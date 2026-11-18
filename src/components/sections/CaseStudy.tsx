"use client";

export function CaseStudy() {
  return (
    <section id="case-study" className="border-t border-[#1a1814]/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 lg:grid-cols-2">
        <div>
          <p className="text-sm text-[#6b645c]">Case study · Action points</p>
          <h2 className="display mt-3 text-4xl leading-[1.1]">
            Tasks were living in email, Slack, and spreadsheets.
          </h2>
          <ul className="mt-6 space-y-2 text-sm text-[#3d3832]">
            {["No owner on a task", "Items missed between tools", "No evidence trail", "Status updates by email"].map((item) => (
              <li key={item}>— {item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl bg-white p-8">
          <p className="text-sm text-[#b8431f]">What shipped</p>
          <p className="mt-3 leading-7 text-[#3d3832]">
            A single action-point system with threaded comments, @mentions, evidence attachments, and roles for admin, manager, and user. The stack is React, NestJS, MongoDB, and Socket.io, with JWT and RBAC in front of the data.
          </p>
          <p className="mt-4 text-sm text-[#6b645c]">Resolution time about 40% faster once the thread and the owner lived in one record.</p>
        </div>
      </div>
    </section>
  );
}
