import React from "react";

const PROJECTS = [
  {
    title: "API Project",
    description:
      "Backend-focused demo with API integration, data handling, and deployable endpoints.",
    url: "https://my-first-api-project-eight.vercel.app/",
  },
  {
    title: "Multi-Step Form",
    description:
      "Guided multi-page form with clear steps, validation, and a polished responsive layout.",
    url: "https://multi-setup-form-page.vercel.app/",
  },
  {
    title: "Food Ordering Experience",
    description:
      "Restaurant-themed interface for browsing items and exploring an order-style user flow.",
    url: "https://tdt-foods-master-master.vercel.app/",
  },
  {
    title: "Browser Extension",
    description:
      "Landing experience for a browser extension with feature highlights and install context.",
    url: "https://browser-extentions-three.vercel.app/",
  },
  {
    title: "Lafiya Health App",
    description:
      "Health-oriented web application with structured content and user-focused screens.",
    url: "https://lafiya-main-1-j9v6.vercel.app/",
  },
  {
    title: "Interactive Form App",
    description:
      "Form-driven interface with responsive fields, layout patterns, and submission handling.",
    url: "https://form-seven-cyan.vercel.app/",
  },
  {
    title: "Clipboard Landing Page",
    description:
      "Product-style landing page with sections, typography, and conversion-focused layout.",
    url: "https://clipboard-landing-page-ebon.vercel.app/",
  },
  {
    title: "Loop Studio Landing",
    description:
      "Media-forward landing page with strong visuals and immersive hero presentation.",
    url: "https://loop-studio-landing-page-ten.vercel.app/",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-body">
        <div className="projects-inner">
          <h2 className="projects-heading">My Projects</h2>
          <div className="projects-grid">
            {PROJECTS.map((project) => (
              <article key={project.url} className="project-card">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>
                <a
                  className="project-card-link"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Demo →
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
