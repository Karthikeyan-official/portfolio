import React from 'react';
import {
  ArrowRight, ArrowUpRight, Bot, BriefcaseBusiness, Cloud,
  Code2, ExternalLink, Github, Linkedin, Mail, MapPin, Menu,
  Network, ShieldCheck, Sparkles, X, Zap
} from 'lucide-react';

const A = `${import.meta.env.BASE_URL}assets/`;
const RESUME = `${import.meta.env.BASE_URL}resume.pdf`;

const fullstackTech = [
  ['react', 'React'], ['typescript', 'TypeScript'], ['nodejs', 'Node.js'],
  ['nestjs', 'NestJS'], ['mongodb', 'MongoDB'], ['postgresql', 'PostgreSQL'],
  ['aws', 'AWS'], ['docker', 'Docker'], ['kafka', 'Kafka'],
  ['redis', 'Redis'], ['vercel', 'Vercel'], ['git', 'Git']
];

const aiTech = [
  ['python', 'Python'], ['fastapi', 'FastAPI'], ['azure-openai', 'Azure OpenAI'],
  ['azure', 'Azure']
];

const aiSkills = [
  'RAG Systems', 'Embeddings & Vector Search', 'LLM APIs',
  'Prompt Engineering', 'AI Agents', 'LangChain',
  'Semantic Search', 'AI Product UX'
];

const focusAreas = [
  {
    icon: Code2,
    label: 'Full-Stack Engineering',
    title: 'Product-ready web platforms',
    text: 'I design and ship end-to-end SaaS experiences — React/TypeScript frontends, NestJS & Node APIs, data models, Stripe billing, auth, and AWS/Azure cloud delivery.',
    points: ['MERN & NestJS architectures', 'Subscription & multi-tenant SaaS', 'Secure, scalable cloud systems']
  },
  {
    icon: Bot,
    label: 'AI Engineering',
    title: 'Production LLM applications',
    text: 'I build applied AI features teams can ship: retrieval pipelines, embeddings, Azure OpenAI integrations, and FastAPI services that connect models to real product workflows.',
    points: ['RAG & semantic media search', 'Azure OpenAI + FastAPI backends', 'Evaluation-minded iteration']
  }
];

const projects = [
  {
    icon: Sparkles,
    focus: 'AI',
    title: 'AI Media Search',
    text: 'Production-style AI media discovery with embeddings, RAG retrieval, and Azure OpenAI — paired with a modern React experience for fast, relevant results.',
    tags: ['Azure OpenAI', 'RAG', 'FastAPI', 'React', 'Embeddings'],
    visual: 'project-ai-media-search.png'
  },
  {
    icon: ShieldCheck,
    focus: 'Full-Stack',
    title: 'Client Side Security (CSS)',
    text: 'A security platform for detecting and mitigating client-side risks in modern web applications, built as a full-stack cybersecurity product.',
    tags: ['React', 'Node.js', 'AWS', 'Security'],
    visual: 'project-client-side-security.png'
  },
  {
    icon: Network,
    focus: 'Full-Stack',
    title: 'Subscription & Licensing',
    text: 'Scalable payment and licensing architecture with Stripe integration for multi-product SaaS — NestJS services, event flows, and reliable billing workflows.',
    tags: ['NestJS', 'Stripe', 'Kafka', 'MongoDB'],
    visual: 'project-subscription-licensing.png'
  }
];

const experience = [
  {
    period: 'Dec 2025 — Present',
    duration: '10 mos',
    role: 'Senior Software Engineer',
    company: 'Crossbow Cybersecurity',
    description: 'Leading end-to-end engineering of cybersecurity SaaS platforms across full-stack and cloud. Architected multi-product subscription and billing systems with Stripe, NestJS, MongoDB, and AWS, while raising architecture quality, sprint execution, and release reliability.'
  },
  {
    period: 'Jan 2025 — Nov 2025',
    duration: '11 mos',
    role: 'Associate Full-stack Developer',
    company: 'Crossbow Cybersecurity',
    description: 'Built cybersecurity SaaS products end to end with the MERN stack — secure APIs, dynamic frontend modules, subscription workflows, RBAC, and cloud integrations. Partnered across Scrum teams to ship features through rapid prototyping and iteration.'
  },
  {
    period: 'Jan 2023 — Jan 2025',
    duration: '2 yrs 1 mo',
    role: 'Analyst Full Stack Developer',
    company: 'Hibiz Solutions',
    description: 'Developed full-stack applications with MERN and Python, including AI-powered product work such as media search with embeddings and RAG. Integrated frontend and backend systems and improved performance and UX with practical engineering practices.'
  },
  {
    period: 'Jan 2022 — Aug 2022',
    duration: '8 mos',
    role: 'Project Intern',
    company: 'Altimetrik',
    description: 'Contributed to digital engineering projects in Chennai, gaining hands-on experience across the software delivery lifecycle in a data and digital engineering environment.'
  }
];

const publications = [
  {
    date: 'AUG 2024',
    venue: 'IJARESM',
    title: 'Refining Automated Image Annotations with Transfer Learning and Dynamic Sampling Strategies',
    text: 'Active learning and transfer learning to cut annotation cost while improving labeling accuracy under limited labeled data.',
    href: 'https://www.ijaresm.com/refining-automated-image-annotations-with-transfer-learning-and-dynamic-sampling-strategies'
  },
  {
    date: '2022',
    venue: 'IJAEM',
    title: 'Secure Hybrid Steganography Message System',
    text: 'Hybrid steganography for IoT data transmission using advanced codecs and CNNs to increase payload capacity and robustness.',
    href: 'https://ijaem.net/issue_dcp/Secure%20Hybrid%20Steganography%20Message%20System.pdf'
  },
  {
    date: 'SEP 2022',
    venue: 'IJRASET',
    title: 'COVID-19 Diagnosis Using Deep Learning Techniques',
    text: 'CNN comparison (DenseNet-121, ResNet-50, InceptionV3, Xception) for reliable COVID-19 detection from chest X-rays.',
    href: 'https://www.ijraset.com/best-journal/covid19-diagnosis-using-deep-learning-techniques'
  }
];

function Logo({ name, label }) {
  return (
    <div className="tech-item">
      <img src={`${A}${name}.svg`} alt={`${label} logo`} loading="lazy" />
      <span>{label}</span>
    </div>
  );
}

function SectionHeading({ eyebrow, title, action }) {
  return (
    <div className="section-heading">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
      </div>
      {action && <a className="text-link" href={action.href}>{action.label} <ArrowRight size={15}/></a>}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">
      <header className="nav">
        <a className="brand" href="#top" onClick={closeMenu}>
          <img className="brand-mark" src={`${A}logo.png?v=2`} alt="Karthikeyan Aruldoss logo" />
          <span className="brand-divider" />
          <span className="brand-copy">
            <strong>Karthikeyan Aruldoss</strong>
            {/* <small>FULLSTACK · AI · SHIP</small> */}
          </span>
        </a>

        <button className="menu-btn" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Primary">
          {['About', 'Focus', 'Experience', 'Projects', 'Skills', 'Certifications', 'Publications', 'Blog', 'Contact'].map(item =>
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          )}
        </nav>
        <a className="resume-btn" href={RESUME} download>
          <BriefcaseBusiness size={16}/> Download Resume
        </a>
      </header>

      <main id="top">
        <section className="hero shell" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <div className="eyebrow">HI, I'M KARTHIKEYAN ARULDOSS</div>
            <h1 id="hero-heading">
              Full-Stack &amp; AI<br/>Engineer <em>shipping products<br/>and intelligent systems.</em>
            </h1>
            <p className="lead">
              I build scalable web platforms and production AI experiences with equal depth —
              React/NestJS SaaS on one side, RAG, embeddings, and Azure OpenAI on the other.
              Ready for the 2026 market where full-stack and AI engineering meet.
            </p>

            <div className="hero-actions">
              <a className="primary-btn" href="#projects">View My Work <ArrowRight size={18}/></a>
              <a className="secondary-btn" href="#contact">Let's Talk <ArrowRight size={17}/></a>
            </div>

            <div className="socials">
              <a href="https://www.linkedin.com/in/karthikeyan-aruldoss/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a>
              <a href="https://github.com/Karthikeyan-official/portfolio" target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a>
              <a href="#contact" aria-label="Email"><Mail/></a>
            </div>
          </div>

          <div className="hero-photo-wrap">
            <div className="photo-glow"/>
            <img className="hero-photo" src={`${A}profile.png`} alt="Karthikeyan Aruldoss, Full-Stack and AI Engineer" />
            <div className="code-window" aria-label="engineer.ts profile snippet">
              <div className="code-window-header">
                <div className="code-window-dots" aria-hidden="true">
                  <span/><span/><span/>
                </div>
                <span className="code-window-title">engineer.ts</span>
              </div>
              <div className="code-window-body" role="presentation">
                <div className="code-line"><span className="ln">1</span><span><span className="kw">const</span> <span className="id">engineer</span> <span className="punc">=</span> <span className="punc">{'{'}</span></span></div>
                <div className="code-line"><span className="ln">2</span><span>  <span className="key">role</span><span className="punc">:</span> <span className="str">"AI Full-Stack SSE"</span><span className="punc">,</span></span></div>
                <div className="code-line"><span className="ln">3</span><span>  <span className="key">ai</span><span className="punc">:</span> <span className="punc">[</span><span className="str">"LLMs"</span><span className="punc">,</span> <span className="str">"RAG"</span><span className="punc">,</span> <span className="str">"Agents"</span><span className="punc">],</span></span></div>
                <div className="code-line"><span className="ln">4</span><span>  <span className="key">stack</span><span className="punc">:</span> <span className="punc">[</span></span></div>
                <div className="code-line"><span className="ln">5</span><span>    <span className="str">"React"</span><span className="punc">,</span> <span className="str">"NestJS"</span><span className="punc">,</span></span></div>
                <div className="code-line"><span className="ln">6</span><span>    <span className="str">"AWS"</span><span className="punc">,</span> <span className="str">"MongoDB"</span><span className="punc">,</span></span></div>
                <div className="code-line"><span className="ln">7</span><span>    <span className="str">"PostgreSQL"</span></span></div>
                <div className="code-line"><span className="ln">8</span><span>  <span className="punc">],</span></span></div>
                <div className="code-line"><span className="ln">9</span><span>  <span className="key">available</span><span className="punc">:</span> <span className="kw">true</span></span></div>
                <div className="code-line"><span className="ln">10</span><span className="punc">{'}'}</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats shell" aria-label="Highlights">
          <div><Code2/><strong>4+</strong><span>Years Full-Stack</span></div>
          <div><Bot/><strong>AI + RAG</strong><span>Shipped LLM Features</span></div>
          <div><Cloud/><strong>AWS Certified</strong><span>Solutions Architect</span></div>
          <div><BriefcaseBusiness/><strong>10+</strong><span>Projects Delivered</span></div>
        </section>

        <section className="section shell" id="about" aria-labelledby="about-heading">
          <SectionHeading eyebrow="ABOUT ME" title={<><span id="about-heading">Engineering</span><br/>Ideas into Impact</>} />
          <div className="about-grid">
            <div className="about-text">
              <p>
                I’m a Senior Software Engineer who treats <strong>full-stack product engineering</strong> and
                <strong> applied AI</strong> as one craft. I ship secure SaaS platforms and AI-powered tools —
                from NestJS billing systems to RAG media search with Azure OpenAI.
              </p>
              <p>
                I’m actively deepening AI skills for the 2026 job market — agents, retrieval quality,
                and production LLM workflows — while keeping the same bar for reliability, UX, and cloud delivery.
              </p>
              <a className="primary-btn small" href="#focus">Explore My Focus <ArrowRight size={17}/></a>
            </div>
            <div className="about-facts">
              <div><MapPin/><span>Based in Chennai, India</span></div>
              <div><BriefcaseBusiness/><span>Open to Full-Stack &amp; AI roles</span></div>
              <div><ShieldCheck/><span>AWS Certified Solutions Architect</span></div>
              <div><Sparkles/><span>Salesforce AI Associate · building RAG systems</span></div>
              <div><Zap/><span>Outside work: Bikes, Travel, Gaming</span></div>
            </div>
            <blockquote>“Better software<br/>and smarter AI<br/>for a more open<br/>and secure world.”</blockquote>
          </div>
        </section>

        <section className="section shell" id="focus" aria-labelledby="focus-heading">
          <SectionHeading
            eyebrow="DUAL FOCUS"
            title={<><span id="focus-heading">Full-Stack</span> &amp; AI, equally</>}
          />
          <div className="focus-grid">
            {focusAreas.map(({ icon: Icon, label, title, text, points }) => (
              <article className="focus-card" key={label}>
                <div className="focus-card-top">
                  <span className="focus-icon"><Icon/></span>
                  <span className="focus-label">{label}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <ul>
                  {points.map(point => <li key={point}>{point}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell" id="skills" aria-labelledby="skills-heading">
          <SectionHeading
            eyebrow="TECH STACK"
            title={<><span id="skills-heading">Full-Stack</span> &amp; AI toolkit</>}
          />

          <div className="skills-block">
            <div className="skills-block-head">
              <Code2 size={16}/>
              <h3>Full-Stack &amp; Cloud</h3>
            </div>
            <div className="tech-grid tech-grid-wide">
              {fullstackTech.map(([name, label]) => <Logo key={name} name={name} label={label}/>)}
            </div>
          </div>

          <div className="skills-block">
            <div className="skills-block-head">
              <Bot size={16}/>
              <h3>AI Engineering</h3>
            </div>
            <div className="tech-grid tech-grid-ai">
              {aiTech.map(([name, label]) => <Logo key={name} name={name} label={label}/>)}
            </div>
            <div className="skill-chips" aria-label="AI skills">
              {aiSkills.map(skill => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        </section>

        <section className="section shell" id="projects" aria-labelledby="projects-heading">
          <SectionHeading
            eyebrow="FEATURED PROJECTS"
            title={<><span id="projects-heading">Selected</span> AI &amp; product work</>}
            action={{ label: 'View all projects', href: '#projects' }}
          />
          <div className="projects-grid">
            {projects.map(({ icon: Icon, focus, title, text, tags, visual }) => (
              <article className="project-card" key={title}>
                <div className="project-top">
                  <span className="project-icon"><Icon/></span>
                  <span className={`project-focus ${focus === 'AI' ? 'ai' : 'web'}`}>{focus}</span>
                  <ExternalLink size={16} aria-hidden="true"/>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="tags">{tags.map(t => <span key={t}>{t}</span>)}</div>
                <div className="project-image">
                  <img src={`${A}${visual}`} alt={`${title} — ${focus} project preview`} loading="lazy" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section shell" id="experience" aria-labelledby="experience-heading">
          <SectionHeading eyebrow="EXPERIENCE" title={<span id="experience-heading">My professional journey</span>} />
          <div className="timeline">
            {experience.map((item, i) => (
              <div className="timeline-item" key={`${item.role}-${item.company}`}>
                <div className={`timeline-dot ${i === 0 ? 'active' : ''}`}/>
                <div className="timeline-period">
                  <span>{item.period}</span>
                  <span className="timeline-duration">{item.duration}</span>
                </div>
                <div className="timeline-content">
                  <h3>{item.role}</h3>
                  <strong>{item.company}</strong>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section shell" id="certifications" aria-labelledby="certs-heading">
          <SectionHeading eyebrow="CERTIFICATIONS" title={<span id="certs-heading">Continuous learning</span>} />
          <div className="cert-grid">
            <div className="cert-card">
              <img className="cert-logo" src={`${A}aws.svg`} alt="AWS logo" loading="lazy" />
              <div>
                <strong>AWS Certified<br/>Solutions Architect</strong>
                <span>SAA-C03 · Cloud architecture</span>
              </div>
              <ArrowUpRight/>
            </div>
            <div className="cert-card">
              <img className="cert-logo" src={`${A}salesforce.svg`} alt="Salesforce logo" loading="lazy" />
              <div>
                <strong>Salesforce<br/>AI Associate</strong>
                <span>AI fundamentals · CRM + LLM literacy</span>
              </div>
              <ArrowUpRight/>
            </div>
          </div>
        </section>

        <section className="section shell" id="publications" aria-labelledby="publications-heading">
          <SectionHeading eyebrow="PUBLICATIONS" title={<span id="publications-heading">Research &amp; papers</span>} />
          <div className="publications">
            {publications.map(({ date, venue, title, text, href }) => (
              <a
                className="publication-card"
                key={title}
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                <div className="publication-meta">
                  <small>{date}</small>
                  <span>{venue}</span>
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="publication-link">
                  View publication <ExternalLink size={14}/>
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="section shell" id="blog" aria-labelledby="blog-heading">
          <SectionHeading eyebrow="RECENT ARTICLES" title={<span id="blog-heading">Thoughts &amp; Learnings</span>} />
          <div className="articles">
            <article>
              <small>SEP 10, 2026</small>
              <h3>Building Scalable RAG Applications</h3>
              <p>Chunking, embeddings, retrieval quality, and lessons from shipping production-grade RAG.</p>
            </article>
            <article>
              <small>AUG 22, 2026</small>
              <h3>Full-Stack Engineers in the AI Era</h3>
              <p>Why 2026 roles reward engineers who can ship product UX and LLM workflows together.</p>
            </article>
            <article>
              <small>JUL 15, 2026</small>
              <h3>Securing Client-Side Applications</h3>
              <p>Key practices to detect and prevent client-side security risks in modern web apps.</p>
            </article>
          </div>
        </section>

        <section className="contact shell" id="contact" aria-labelledby="contact-heading">
          <div>
            <div className="eyebrow">LET'S CONNECT</div>
            <h2 id="contact-heading">Get in touch</h2>
            <p>
              Open to full-stack, AI engineering, and hybrid roles. Happy to talk opportunities,
              RAG/LLM product ideas, or building the next secure SaaS.
            </p>
          </div>
          <div className="contact-details">
            <a href="https://www.linkedin.com/in/karthikeyan-aruldoss/" target="_blank" rel="noreferrer">
              <Linkedin/> linkedin.com/in/karthikeyan-aruldoss
            </a>
            <span><MapPin/> Chennai, India</span>
          </div>
          <a
            className="primary-btn"
            href="https://www.linkedin.com/in/karthikeyan-aruldoss/"
            target="_blank"
            rel="noreferrer"
          >
            Send a Message <ArrowRight size={18}/>
          </a>
        </section>
      </main>

      <footer className="footer shell">
        <a className="brand" href="#top">
          <img className="brand-mark" src={`${A}logo.png?v=2`} alt="Karthikeyan Aruldoss logo" />
          <span className="brand-divider"/>
          <span className="brand-copy">
            <strong>Karthikeyan Aruldoss</strong>
            <small>Fullstack · AI · Ship</small>
          </span>
        </a>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#focus">Focus</a>
          <a href="#projects">Projects</a>
          <a href="#publications">Publications</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/karthikeyan-aruldoss/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin/></a>
          <a href="https://github.com/Karthikeyan-official/portfolio" target="_blank" rel="noreferrer" aria-label="GitHub"><Github/></a>
          <a href="#contact" aria-label="Email"><Mail/></a>
        </div>
        <small>© 2026 Karthikeyan Aruldoss.<br/>Full-Stack &amp; AI Engineer. All rights reserved.</small>
      </footer>
    </div>
  );
}
