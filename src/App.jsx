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
          <p>
            Open for freelance and full-time opportunities. Reach out and let’s
            build something useful.
          </p>
          <a className="mail-link" href="mailto:hello@example.com">
            hello@example.com
          </a>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Your Name. Built with React + Vite.</p>
      </footer>
    </div>
  );
}

export default App;
