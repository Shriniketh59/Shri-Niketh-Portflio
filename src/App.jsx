import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  X,
} from 'lucide-react';

const Github = ({ size = 20 }) => React.createElement('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': 'true' }, React.createElement('path', { d: 'M12 .5C5.65 .5 .5 5.65 .5 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2.2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18.91-.25 1.89-.38 2.87-.38.98 0 1.96.13 2.87.38 2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.73.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.39-5.25 5.68.41.35.78 1.05.78 2.12v3.14c0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35 .5 12 .5Z' }));

const Linkedin = ({ size = 20 }) => React.createElement('svg', { width: size, height: size, viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': 'true' }, React.createElement('path', { d: 'M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0h.01Z' }));

const nav = ['Home', 'About', 'Projects', 'Experience', 'Skills', 'Languages', 'Contact'];

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const experiences = [
  {
    role: 'Full Stack Developer',
    org: 'Aspiration Cleantech Ventures',
    period: 'May 2026 - Jul 2026',
    location: 'Chennai, Tamil Nadu - Hybrid',
    type: 'Internship',
    outcomes: ['Built SaaS product screens and API-connected workflows.', 'Improved dashboards, HR modules, and frontend/backend integration.', 'Worked with React, Node.js, REST APIs, and MongoDB patterns.'],
    skills: ['React', 'Node.js', 'SaaS', 'REST APIs'],
  },
  {
    role: 'Digital Marketing Intern',
    org: 'Aspiration Cleantech Ventures',
    period: 'Jun 2026 - Jul 2026',
    location: 'Chennai, Tamil Nadu - Hybrid',
    type: 'Growth + SaaS',
    outcomes: ['Supported campaign planning and brand visibility workflows.', 'Connected marketing execution with SaaS product positioning.', 'Collaborated on content and customer engagement strategies.'],
    skills: ['Campaigns', 'SaaS', 'Content', 'Analytics'],
  },
  {
    role: 'Data Science Intern',
    org: 'Infotact Solutions',
    period: 'Apr 2026 - Jun 2026',
    location: 'Bengaluru South, Karnataka - Remote',
    type: 'AI / ML',
    outcomes: ['Worked on data analysis, model evaluation, and ML workflows.', 'Explored neural networks and practical dataset pipelines.', 'Strengthened Python, preprocessing, and experiment documentation.'],
    skills: ['Python', 'ML', 'Neural Networks', 'Data Analysis'],
  },
  {
    role: 'Machine Learning Intern',
    org: 'Cognifyz Technologies',
    period: 'Apr 2026 - May 2026',
    location: 'Nagpur, Maharashtra - Remote',
    type: 'Model Building',
    outcomes: ['Built preprocessing and feature engineering workflows.', 'Evaluated model performance and improved project reasoning.', 'Practiced clean ML experimentation and technical reporting.'],
    skills: ['Feature Engineering', 'Python', 'Scikit-learn'],
  },
  {
    role: 'Cyber Security Analyst',
    org: 'Infotact Solutions',
    period: 'May 2025 - Jun 2026',
    location: 'Bengaluru, Karnataka',
    type: 'Security',
    outcomes: ['Assisted with vulnerability assessment and security monitoring.', 'Studied small-business network risks and mitigation patterns.', 'Built practical awareness of defensive security workflows.'],
    skills: ['Cybersecurity', 'Network Security', 'Assessment'],
  },
];

const projects = [
  {
    title: 'Nova AI',
    category: 'Agentic AI Platform',
    desc: 'Agentic AI platform focused on autonomous agents, RAG, memory systems, tool integration, and workflow automation.',
    tags: ['Python', 'RAG', 'Agents', 'LLM'],
    link: 'https://github.com/Shriniketh59/Nova-AI',
  },
  {
    title: 'R-Square Hospitals Journal',
    category: 'Healthcare Web App',
    desc: 'Medical journal workflow with role-based access, reviewer/admin flows, AI search concepts, notifications, and analytics.',
    tags: ['JavaScript', 'React', 'Express', 'Healthcare'],
    link: 'https://github.com/Shriniketh59/R-Square-Hospitals-Journal',
  },
  {
    title: 'Toy Manufacture Forecasting',
    category: 'Predictive Analytics',
    desc: 'Comparative analysis of forecasting models for manufacturing demand, designed as a data science notebook project.',
    tags: ['Jupyter', 'Forecasting', 'ML', 'Analytics'],
    link: 'https://github.com/Shriniketh59/Comparative-Analysis-of-Predictive-Models-for-Toy-Manufacture-Forecasting',
  },
  {
    title: 'AI Aircraft Collision Analysis',
    category: 'Safety AI',
    desc: 'Notebook-based analysis project exploring AI-assisted aircraft collision risk and decision-support concepts.',
    tags: ['Jupyter', 'AI', 'Risk Analysis'],
    link: 'https://github.com/Shriniketh59/AI-Based-Aircraft-Collision-System-Analysis-',
  },
  {
    title: 'Restaurant Demand Forecasting',
    category: 'Operations AI',
    desc: 'AI demand forecasting and inventory optimization concept for food and restaurant service workflows.',
    tags: ['Python', 'Forecasting', 'Optimization'],
    link: 'https://github.com/Shriniketh59/Food-Restaurant-Services---AI-Demand-Forecasting-and-Inventory-Optimization',
  },
  {
    title: 'Citizen Grievance Sentiment System',
    category: 'Public Sector AI',
    desc: 'Sentiment analysis concept for government grievance workflows, focused on public-sector feedback understanding.',
    tags: ['Jupyter', 'NLP', 'Sentiment'],
    link: 'https://github.com/Shriniketh59/Government-Public-Sector---AI-Driven-Citizen-Grievance-Sentiment-Analysis-System',
  },
  {
    title: 'Machine Learning Tasks',
    category: 'ML Practice Lab',
    desc: 'Collection of machine learning task notebooks for practice, experimentation, and strengthening fundamentals.',
    tags: ['Jupyter', 'Machine Learning', 'Practice'],
    link: 'https://github.com/Shriniketh59/Machine_Learning_Tasks',
  },
  {
    title: 'Student Management System',
    category: 'Java Application',
    desc: 'Java-based student management project focused on CRUD structure, object-oriented design, and data handling.',
    tags: ['Java', 'OOP', 'CRUD'],
    link: 'https://github.com/Shriniketh59/Student-Management-System',
  },
  {
    title: 'DAA Laboratory',
    category: 'Algorithms Lab',
    desc: 'Design and analysis of algorithms laboratory work with C implementations and core algorithm practice.',
    tags: ['C', 'Algorithms', 'DSA'],
    link: 'https://github.com/Shriniketh59/Design-and-analysis-of-algorithm-laboratory-',
  },
  {
    title: 'Small Business Network Vulnerabilities',
    category: 'Cybersecurity Study',
    desc: 'Security analysis project studying common vulnerabilities and defensive considerations in small-business networks.',
    tags: ['Security', 'Networking', 'Research'],
    link: 'https://github.com/Shriniketh59/Some-vulnerabilities-of-small-business-networks',
  },
  {
    title: 'GitHub Profile README',
    category: 'Developer Branding',
    desc: 'Profile repository used to present GitHub identity, technical focus, and developer presence.',
    tags: ['GitHub', 'Profile', 'Portfolio'],
    link: 'https://github.com/Shriniketh59/Shriniketh59',
  },
];


const languageItems = [
  { lang: 'English', level: 'Professional working proficiency', pct: 90, use: 'Technical writing, interviews, documentation, and team communication.' },
  { lang: 'Tamil', level: 'Native proficiency', pct: 100, use: 'Native communication, collaboration, and local stakeholder interaction.' },
  { lang: 'German', level: 'Elementary proficiency', pct: 25, use: 'Basic reading, greetings, and beginner-level learning progress.' },
];

function IntroScreen() {
  const [started, setStarted] = useState(false);
  const [ended, setEnded] = useState(false);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setEnded(true);
  };

  const handleStart = async () => {
    const video = videoRef.current;
    if (!video) return;

    setStarted(true);
    video.currentTime = 0;
    video.muted = false;

    try {
      await video.play();
    } catch {
      video.muted = true;
      try {
        await video.play();
      } catch {
        // Ignore autoplay blocking in browsers that still reject playback.
      }
    }
  };

  return (
    <div className={`intro-screen ${started ? 'playing' : ''} ${ended ? 'ended' : ''}`}>
      <video ref={videoRef} src="/intro.mp4" preload="metadata" playsInline muted onEnded={handleVideoEnd} className="intro-video" />
      <div className="intro-shade" />
      <div className="intro-topline">
        <a href="mailto:shriniketheng@gmail.com">Email me</a>
      </div>
      {ended && (
        <div className="intro-hero">
          <h1>Shri Niketh R</h1>
          <span>B.Tech in AI & Data Science</span>
        </div>
      )}
      {!started && (
        <button className="intro-play" onClick={handleStart} aria-label="Start intro video">
          <span>Start</span>
        </button>
      )}
      <div className="intro-scroll"><span>{started ? 'Scroll for more' : 'Press start'}</span><i /></div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goToPage = (page) => {
    setActivePage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pageClass = (page, extra = '') => `page-view ${extra} ${activePage === page ? 'active' : ''}`;

  return (
    <motion.div className="site-shell" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
        <div className="site-bg" />
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <div className="nav-links">
            {nav.map((item) => {
              const page = item.toLowerCase();
              return (
                <a key={item} href={`#${page}`} className={activePage === page ? 'active' : ''} onClick={(event) => { event.preventDefault(); goToPage(page); }}>
                  {item}
                </a>
              );
            })}
          </div>
          <a className="nav-email" href="mailto:shriniketheng@gmail.com">Email me</a>
          <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          {menuOpen && (
            <div className="mobile-menu">
              {nav.map((item) => {
                const page = item.toLowerCase();
                return (
                  <a key={item} href={`#${page}`} className={activePage === page ? 'active' : ''} onClick={(event) => { event.preventDefault(); goToPage(page); }}>
                    {item}
                  </a>
                );
              })}
            </div>
          )}
        </nav>

        <section id="home" className={pageClass('home', 'home-page')}>
          <IntroScreen />
        </section>

        <section id="about" className={pageClass('about', 'content-page')}>
          <div className="section-head"><p>About</p><h2>Shri Niketh R — Profile</h2></div>
          <div className="about-layout">
            <motion.div className="about-story panel" {...fadeUp}>
              <Sparkles size={24} />
              <img className="about-photo" src="/profile.png" alt="Shri Niketh R" />
              <h3>Profile</h3>
              <p>Hello! I am <strong>Shri Niketh R</strong>, a B.Tech student specializing in <strong>Computer Science Engineering (Artificial Intelligence and Data Analytics)</strong> with a strong passion for <strong>Software Engineering, Artificial Intelligence, Machine Learning, Generative AI, and Prompt Engineering</strong>.</p>
              <p>I enjoy building intelligent software solutions that solve real-world problems through technology. My interests span AI-powered applications, full-stack web development, data-driven systems, and modern software engineering practices.</p>
              <p>I continuously improve my technical expertise by developing practical projects, strengthening my software engineering fundamentals, and exploring emerging technologies.</p>
              <p>Throughout my academic journey, I have worked on projects including <strong>NOVA AI</strong>, an <strong>AI-Based Grievance and Complaint Management System</strong>, and research work published in the <strong>R-Square Journal</strong>. These experiences have enhanced my understanding of AI application development, software design, teamwork, and innovation.</p>
              <p>My technical skill set includes <strong>Python, HTML, CSS, JavaScript, React, SQL, Git, GitHub, Artificial Intelligence, Machine Learning, Generative AI, Prompt Engineering, and Data Analytics</strong>. I am committed to writing clean, maintainable code and continuously learning new technologies.</p>
              <p>I believe in continuous learning, leadership, professionalism, and collaboration. My goal is to build impactful software products, contribute to innovative engineering teams, and grow into a highly skilled Software Engineer specializing in AI-driven technologies.</p>
              <p>Thank you for visiting my portfolio. Feel free to explore my projects, GitHub repositories, certifications, and professional journey. I am always open to connecting with professionals, recruiters, and fellow developers.</p>
            </motion.div>
            <motion.div className="about-focus" {...fadeUp}>
              {[
                ['Current Goal', 'Build impactful AI-driven software products and grow into a skilled Software Engineer.'],
                ['Core Interests', 'Software Engineering, Artificial Intelligence, Machine Learning, Generative AI, and Prompt Engineering.'],
                ['Project Experience', 'NOVA AI, grievance management systems, R-Square Journal work, full-stack apps, and data projects.'],
                ['Professional Values', 'Continuous learning, leadership, clean code, maintainability, collaboration, and professionalism.'],
              ].map(([title, body]) => (
                <div className="focus-card" key={title}><span>{title}</span><p>{body}</p></div>
              ))}
            </motion.div>
          </div>
          <div className="about-facts">
            {[
              ['Degree', 'B.Tech CSE - AI and Data Analytics'],
              ['Batch', '2024 - 2028'],
              ['Location', 'Chennai, India'],
              ['Email', 'shriniketheng@gmail.com'],
            ].map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
          </div>
        </section>

        <section id="projects" className={pageClass('projects', 'content-page')}>
          <div className="section-head split-head"><div><p>Projects</p><h2>Full GitHub project showcase.</h2></div><a href="https://github.com/Shriniketh59" target="_blank" rel="noreferrer">GitHub Profile <ArrowUpRight size={16} /></a></div>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <motion.a className="project-card" key={project.title} href={project.link} target="_blank" rel="noreferrer" {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.035 }}>
                <div className="project-top"><BriefcaseBusiness size={22} /><span>{project.category}</span><ArrowUpRight size={18} /></div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </motion.a>
            ))}
          </div>
        </section>

        <section id="experience" className={pageClass('experience', 'content-page')}>
          <div className="section-head"><p>Experience</p><h2>Professional roadmap from learning to delivery.</h2></div>
          <div className="roadmap-summary">
            <div><strong>5</strong><span>roles and internships</span></div>
            <div><strong>AI + Web</strong><span>core direction</span></div>
            <div><strong>2025-2026</strong><span>hands-on timeline</span></div>
          </div>
          <div className="roadmap">
            {experiences.map((exp, i) => (
              <motion.article className="roadmap-item" key={exp.role + exp.org} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}>
                <div className="roadmap-index">{String(i + 1).padStart(2, '0')}</div>
                <div className="roadmap-card">
                  <div className="roadmap-meta"><span>{exp.type}</span><strong>{exp.period}</strong></div>
                  <h3>{exp.role}</h3>
                  <p className="org">{exp.org}</p>
                  <p className="location"><MapPin size={14} /> {exp.location}</p>
                  <ul>{exp.outcomes.map((item) => <li key={item}>{item}</li>)}</ul>
                  <div className="tag-row">{exp.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="skills" className={pageClass('skills', 'content-page skills-page')}>
          <div className="section-head"><p>Skills</p><h2>Technical skills and management strengths.</h2></div>
          <div className="skill-category-grid">
            {[
              {
                title: 'Technical Skills',
                score: '86%',
                desc: 'Building AI-powered and full-stack software with clean interfaces, APIs, data workflows, and reliable tooling.',
                items: ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express', 'Python', 'SQL', 'Git', 'GitHub', 'AI / ML', 'Generative AI', 'Prompt Engineering', 'Data Analytics'],
              },
              {
                title: 'Management Skills',
                score: '82%',
                desc: 'Coordinating people, tasks, communication, and execution for projects, college activities, and product growth work.',
                items: ['Leadership', 'Event Management', 'Marketing', 'Team Coordination', 'Communication', 'Planning', 'Documentation', 'Collaboration', 'Presentation', 'Problem Solving'],
              },
            ].map((group, i) => (
              <motion.div className={`skill-category-card ${i === 1 ? 'management' : ''}`} key={group.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}>
                <div className="skill-category-top"><span>{String(i + 1).padStart(2, '0')}</span><strong>{group.score}</strong></div>
                <h3>{group.title}</h3>
                <p>{group.desc}</p>
                <div className="skill-meter"><span style={{ width: group.score }} /></div>
                <div className="tag-row">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
              </motion.div>
            ))}
          </div>
          <div className="skill-stats">
            {[
              ['86%', 'Technical Stack', 'Frontend, backend, AI, databases, and engineering tools.'],
              ['84%', 'AI Focus', 'Generative AI, prompt engineering, ML, and data analytics.'],
              ['82%', 'Leadership', 'Team coordination, ownership, communication, and decision making.'],
              ['80%', 'Growth & Events', 'Marketing, event planning, presentations, and execution.'],
            ].map(([pct, label, body]) => (
              <div key={label}>
                <strong>{pct}</strong>
                <span>{label}</span>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="languages" className={pageClass('languages', 'content-page')}>
          <div className="section-head"><p>Languages</p><h2>Communication across technical and human contexts.</h2></div>
          <div className="language-grid">
            {languageItems.map((item, i) => (
              <motion.div className="language-card" key={item.lang} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.08 }}>
                <div className="language-top"><div><h3>{item.lang}</h3><p>{item.level}</p></div><strong>{item.pct}%</strong></div>
                <div className="progress"><span style={{ width: `${item.pct}%` }} /></div>
                <p>{item.use}</p>
              </motion.div>
            ))}
          </div>
          <div className="communication-panel panel">
            <h3>Communication strengths</h3>
            <div className="communication-grid">
              {['Technical documentation', 'Project walkthroughs', 'Team updates', 'Interview readiness'].map((item) => <span key={item}><CheckCircle2 size={16} />{item}</span>)}
            </div>
          </div>
        </section>

        <section id="contact" className={pageClass('contact', 'content-page contact-page')}>
          <motion.div className="contact-hero panel" {...fadeUp}>
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let us discuss internships, projects, or AI-powered products.</h2>
              <p>I am open to software engineering internships, AI/Data Science opportunities, full-stack projects, and professional collaborations.</p>
              <div className="hero-actions">
                <a href="mailto:shriniketheng@gmail.com" className="btn-primary"><Mail size={18} /> Send Email</a>
                <a href="https://github.com/Shriniketh59" target="_blank" rel="noreferrer" className="btn-secondary"><Github size={18} /> GitHub</a>
              </div>
            </div>
            <div className="contact-status">
              <span>Availability</span>
              <strong>Open for internships and entry-level roles</strong>
              <p>Best fit: React, Node.js, Python, AI/ML, RAG, data analytics, and product engineering teams.</p>
            </div>
          </motion.div>
          <div className="contact-grid">
            <a href="mailto:shriniketheng@gmail.com"><Mail size={20} /><span>Email</span><strong>shriniketheng@gmail.com</strong></a>
            <a href="tel:6369421899"><Phone size={20} /><span>Phone</span><strong>6369421899</strong></a>
            <a href="https://linkedin.com/in/shri-niketh-2337b0358" target="_blank" rel="noreferrer"><Linkedin size={20} /><span>LinkedIn</span><strong>shri-niketh-2337b0358</strong></a>
            <a href="https://github.com/Shriniketh59" target="_blank" rel="noreferrer"><Github size={20} /><span>GitHub</span><strong>Shriniketh59</strong></a>
          </div>
        </section>

        <footer>Designed and built by <strong>Shri Niketh R</strong> - 2026</footer>
      </motion.div>
  );
}
