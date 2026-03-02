const skills = [
  "React.js",
  "JavaScript (ES6+)",
  "Responsive UI",
  "REST APIs",
  "Git & GitHub",
  "Vite"
];

const projects = [
  {
    name: "Product Landing Page",
    description:
      "High-converting marketing page with smooth section scrolling and reusable UI blocks.",
    stack: "React, CSS, Vite"
  },
  {
    name: "Task Tracker",
    description:
      "Minimal task manager with filters, local persistence, and keyboard-friendly UX.",
    stack: "React, Hooks, LocalStorage"
  },
  {
    name: "Analytics Dashboard",
    description:
      "Clean dashboard interface for KPI tracking with reusable card components.",
    stack: "React, Chart-ready architecture"
  }
];

const aboutHighlights = [
  {
    title: "Product Mindset",
    description:
      "I focus on user outcomes first, then build interfaces that are fast, clear, and easy to evolve."
  },
  {
    title: "Clean Delivery",
    description:
      "I structure components and styles for maintainability so teams can ship updates without regressions."
  },
  {
    title: "Reliable Collaboration",
    description:
      "I communicate clearly with designers and founders to move from idea to production with less friction."
  }
];

const contactLinks = [
  { label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourname",
    href: "https://www.linkedin.com/in/yourname"
  },
  {
    label: "GitHub",
    value: "github.com/yourname",
    href: "https://github.com/yourname"
  },
  {
    label: "Location",
    value: "Cairo, Egypt (UTC+2)",
    href: "https://maps.google.com/?q=Cairo"
  }
];

function App() {
  return (
    <div className="site">
      <header className="hero" id="home">
        <nav className="top-nav">
          <p className="brand">Your Name</p>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Frontend Developer</p>
          <h1>Building focused digital products with React.</h1>
          <p className="hero-copy">
            I design and build performant web experiences with clean UI systems
            and practical engineering decisions.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="section about" id="about">
          <h2>About</h2>
          <p>
            I am a React developer focused on creating maintainable, user-first
            web apps. I work with modern JavaScript, component-driven
            architecture, and lightweight tooling that stays easy to deploy and
            sync.
          </p>
          <div className="about-points">
            {aboutHighlights.map((item) => (
              <article className="about-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <div className="chip-grid">
            {skills.map((skill) => (
              <span className="chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="section projects" id="projects">
          <h2>Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <span>{project.stack}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <h2>Contact</h2>
          <div className="contact-layout">
            <div>
              <p>
                Open for freelance and full-time opportunities. Reach out and
                let&apos;s build something useful.
              </p>
              <div className="contact-list">
                {contactLinks.map((link) => (
                  <a
                    className="contact-item"
                    href={link.href}
                    key={link.label}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    <span>{link.label}</span>
                    <strong>{link.value}</strong>
                  </a>
                ))}
              </div>
            </div>

            <form className="contact-form">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" />

              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell me about your project..."
              />

              <a className="btn btn-primary" href="mailto:hello@example.com">
                Send via Email
              </a>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Your Name. Built with React + Vite.</p>
      </footer>
    </div>
  );
}

export default App;
