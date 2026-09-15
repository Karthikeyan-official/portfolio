import dynamic from "next/dynamic";
import { Navbar } from "@/components/shared/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SectionDivider } from "@/components/shared/SectionDivider";

// Lazy-load everything below the fold so the hero paints immediately
const CursorSpotlight = dynamic(
  () => import("@/components/shared/CursorSpotlight").then((m) => ({ default: m.CursorSpotlight })),
  { ssr: false }
);

const About = dynamic(() =>
  import("@/components/sections/About").then((m) => ({ default: m.About }))
);
const TechStack = dynamic(() =>
  import("@/components/sections/TechStack").then((m) => ({ default: m.TechStack }))
);
const Projects = dynamic(() =>
  import("@/components/sections/Projects").then((m) => ({ default: m.Projects }))
);
const CaseStudy = dynamic(() =>
  import("@/components/sections/CaseStudy").then((m) => ({ default: m.CaseStudy }))
);
const EngineeringHighlights = dynamic(() =>
  import("@/components/sections/EngineeringHighlights").then((m) => ({
    default: m.EngineeringHighlights,
  }))
);
const Experience = dynamic(() =>
  import("@/components/sections/Experience").then((m) => ({ default: m.Experience }))
);
const Certifications = dynamic(() =>
  import("@/components/sections/Certifications").then((m) => ({ default: m.Certifications }))
);
const Publications = dynamic(() =>
  import("@/components/sections/Publications").then((m) => ({ default: m.Publications }))
);
const Testimonials = dynamic(() =>
  import("@/components/sections/Testimonials").then((m) => ({ default: m.Testimonials }))
);
const OpenSource = dynamic(() =>
  import("@/components/sections/OpenSource").then((m) => ({ default: m.OpenSource }))
);
const Contact = dynamic(() =>
  import("@/components/sections/Contact").then((m) => ({ default: m.Contact }))
);
const Footer = dynamic(() =>
  import("@/components/shared/Footer").then((m) => ({ default: m.Footer }))
);

export default function Home() {
  return (
    <main className="relative">
      <CursorSpotlight />
      <Navbar />
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <TechStack />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <CaseStudy />
      <SectionDivider />
      <EngineeringHighlights />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Certifications />
      <SectionDivider />
      <Publications />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <OpenSource />
      <SectionDivider />
      <Contact />
      <Footer />
    </main>
  );
}
