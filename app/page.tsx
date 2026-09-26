
"use client";

import { useState } from "react";

export default function Home() {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [readme, setReadme] = useState("");

  async function generateReadme() {
    if (!projectName || !description) {
      alert("Please enter project name and description.");
      return;
    }

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        projectName,
        description,
      }),
    });

    const data = await response.json();
    setReadme(data.readme);
  }

  return (
    <main className="container">
      <nav className="navbar">
        <h1>DevHub</h1>

        <div>
          <a href="#dashboard">Dashboard</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#projects">Projects</a>
          <a href="#readme">README AI</a>
        </div>
      </nav>

      <section id="dashboard" className="hero">
        <p className="tag">AI-Powered Developer Hub</p>

        <h2>
          Build your <span>Developer Profile</span>
        </h2>

        <p>
          Manage your portfolio, projects and generate professional README
          files with AI.
        </p>

        <button onClick={() => {
          document
            .getElementById("readme")
            ?.scrollIntoView({ behavior: "smooth" });
        }}>
          Generate README
        </button>
      </section>

      <section className="cards">
        <div className="card">
          <h3>📁 Projects</h3>
          <p>Manage your development projects.</p>
        </div>

        <div className="card">
          <h3>👤 Portfolio</h3>
          <p>Create your developer profile.</p>
        </div>

        <div className="card">
          <h3>🤖 AI README</h3>
          <p>Generate README files automatically.</p>
        </div>
      </section>

      <section id="portfolio" className="section">
        <h2>My Portfolio</h2>

        <div className="profile">
          <h3>Harish Baser</h3>
          <p>B.Tech CSE - Artificial Intelligence</p>
          <p>
            Developer interested in Java, React, JavaScript and AI.
          </p>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>My Projects</h2>

        <div className="project">
          <h3>AI Blog Assistant</h3>
          <p>AI-powered application for generating blog content.</p>
          <span>React • Node.js • AI</span>
        </div>

        <div className="project">
          <h3>HealthTrack</h3>
          <p>Patient health monitoring system.</p>
          <span>React • Java • Spring Boot • MySQL</span>
        </div>
      </section>

      <section id="readme" className="section">
        <h2>🤖 AI README Generator</h2>

        <input
          type="text"
          placeholder="Project name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />

        <textarea
          placeholder="Describe your project..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={generateReadme}>
          Generate README
        </button>

        {readme && (
          <div className="result">
            <h3>Generated README</h3>
            <pre>{readme}</pre>
          </div>
        )}
      </section>

      <footer>
        <p>© 2026 DevHub • Built with Next.js + TypeScript</p>
      </footer>
    </main>
  );
}
