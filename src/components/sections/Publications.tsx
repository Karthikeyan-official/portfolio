"use client";

const publications = [
  {
    title: "Refining automated image annotations with transfer learning and dynamic sampling",
    venue: "IJARESM",
    topic: "Active learning",
    href: "https://www.ijaresm.com/refining-automated-image-annotations-with-transfer-learning-and-dynamic-sampling-strategies",
  },
  {
    title: "Secure hybrid steganography message system",
    venue: "IJAEM",
    topic: "Cybersecurity · with Karthik P and Nagarjuna Sureshkumar",
    href: "https://ijaem.net/issue_dcp/Secure%20Hybrid%20Steganography%20Message%20System.pdf",
  },
  {
    title: "COVID-19 diagnosis using deep learning techniques",
    venue: "IJRASET",
    topic: "DenseNet-121 · with Hemachandran Gopinath and Nagarjuna Sureshkumar",
    href: "https://www.ijraset.com/best-journal/covid19-diagnosis-using-deep-learning-techniques",
  },
];

export function Publications() {
  return (
    <section id="publications" className="border-t border-[#1a1814]/10 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="display text-5xl">Publications</h2>
        <p className="mt-3 max-w-xl text-sm text-[#6b645c]">Undergraduate research in machine learning and secure systems.</p>
        <ul className="mt-10 space-y-8">
          {publications.map((pub) => (
            <li key={pub.title}>
              <a href={pub.href} target="_blank" rel="noopener noreferrer" className="group block">
                <p className="text-xs text-[#b8431f]">{pub.venue}</p>
                <h3 className="display mt-1 text-2xl group-hover:underline">
                  {pub.title}
                </h3>
                <p className="mt-1 text-sm text-[#6b645c]">{pub.topic}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
