"use client";

import { motion } from "framer-motion";
import { FadeInView } from "@/components/animations/FadeInView";
import { BookOpen, ExternalLink, FileText } from "lucide-react";

const publications = [
  {
    title: "Refining Automated Image Annotations with Transfer Learning and Dynamic Sampling Strategies",
    description:
      "Developed Active Learning strategies to streamline data labeling workflows, reducing labeled data volume while improving model accuracy through transfer learning and dynamic sampling.",
    href: "https://www.ijaresm.com/refining-automated-image-annotations-with-transfer-learning-and-dynamic-sampling-strategies",
    venue: "IJARESM",
    topic: "Machine Learning · Active Learning",
  },
  {
    title: "Secure Hybrid Steganography Message System",
    description:
      "Designed a secure hybrid steganography system for IoT data transmission using advanced codecs and CNNs, increasing payload capacity and robustness of hidden data against cyber threats.",
    href: "https://ijaem.net/issue_dcp/Secure%20Hybrid%20Steganography%20Message%20System.pdf",
    venue: "IJAEM",
    topic: "Cybersecurity · Deep Learning",
    coAuthors: "Karthik P, Nagarjuna Sureshkumar",
  },
  {
    title: "COVID-19 Diagnosis Using Deep Learning Techniques",
    description:
      "Pioneered a deep-learning diagnostic approach leveraging DenseNet-121 with data augmentation and ensemble learning, delivering superior accuracy for rapid medical decision-making.",
    href: "https://www.ijraset.com/best-journal/covid19-diagnosis-using-deep-learning-techniques",
    venue: "IJRASET",
    topic: "Healthcare AI · CNN",
    coAuthors: "Hemachandran Gopinath, Nagarjuna Sureshkumar",
  },
];

export function Publications() {
  return (
    <section id="publications" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div
        className="orb w-[400px] h-[400px] left-[-80px] top-1/4"
        style={{ background: "rgba(139,92,246,0.06)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <FadeInView className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-xs text-gray-500 font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            research
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Public{" "}
            <span className="text-gradient-blue">Publications</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Peer-reviewed research in AI, machine learning, and secure systems — published during my undergraduate studies.
          </p>
        </FadeInView>

        <div className="space-y-5">
          {publications.map((pub, i) => (
            <FadeInView key={pub.title} delay={i * 0.1} direction="up">
              <motion.article
                className="group rounded-2xl border border-violet-500/15 p-6 sm:p-8 transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(139,92,246,0.04) 0%, rgba(11,15,25,0.9) 100%)",
                }}
                whileHover={{
                  borderColor: "rgba(139,92,246,0.35)",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.3), 0 0 30px rgba(139,92,246,0.08)",
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center flex-shrink-0"
                    style={{ boxShadow: "0 8px 20px rgba(139,92,246,0.25)" }}
                  >
                    <FileText className="w-5 h-5 text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="text-[10px] font-mono text-violet-400 px-2 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20">
                        {pub.venue}
                      </span>
                      <span className="text-[10px] font-mono text-gray-600">{pub.topic}</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-semibold text-white leading-snug mb-2 group-hover:text-violet-100 transition-colors">
                      {pub.title}
                    </h3>

                    {pub.coAuthors && (
                      <p className="text-[11px] text-gray-600 font-mono mb-2">
                        Co-authors: {pub.coAuthors}
                      </p>
                    )}

                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{pub.description}</p>

                    <motion.a
                      href={pub.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      View Publication
                      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
