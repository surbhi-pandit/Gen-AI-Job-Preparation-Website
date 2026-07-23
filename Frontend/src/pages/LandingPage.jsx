import React from "react";
import { Link } from "react-router";
import "../style/LandingPage.scss";

const features = [
  {
    icon: "📄",
    title: "Resume Analysis",
    desc: "Upload your resume and let AI analyze your profile."
  },
  {
    icon: "🎯",
    title: "Match Score",
    desc: "Compare your resume with any job description."
  },
  {
    icon: "📚",
    title: "Skill Gap Analysis",
    desc: "Identify missing skills required for your dream job."
  },
  {
    icon: "💻",
    title: "Technical Questions",
    desc: "Generate personalized technical interview questions."
  },
  {
    icon: "🗣️",
    title: "Behavioral Questions",
    desc: "Practice HR and behavioral interview questions."
  },
  {
    icon: "📅",
    title: "10-Day Roadmap",
    desc: "Get a personalized learning roadmap."
  },
  {
    icon: "📄",
    title: "ATS Resume",
    desc: "Download an ATS-friendly resume ready for job applications."
  }
];

export default function LandingPage() {
  return (
    <div className="landing">

      {/* Navbar */}

      <nav className="navbar">

        <h2>🤖 InterviewPrepAI</h2>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#workflow">How it Works</a>

          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/register" className="register-btn">
            Register
          </Link>

        </div>

      </nav>

      {/* Hero */}

      <section className="hero">

        <div className="hero-left">

          <h1>
            Crack Your Dream Job with
            <span> Generative AI</span>
          </h1>

          <p>
            Upload your resume, compare it with your dream job,
            identify skill gaps, generate interview questions,
            receive a personalized roadmap and download an ATS
            optimized resume.
          </p>

          <div className="buttons">

            <Link to="/register" className="primary">
              Get Started
            </Link>

            <Link to="/login" className="secondary">
              Login
            </Link>

          </div>

        </div>

        <div className="hero-right">

          <div className="hero-card">
            🤖 AI Resume Analysis
            <br />
            📈 Match Score
            <br />
            📚 Skill Gap
            <br />
            💻 Interview Questions
            <br/>
            📅 10-Days Preparation Roadmap
          </div>

        </div>

      </section>

      {/* Features */}

      <section className="features" id="features">

        <h2>Everything That You Need to Prepare</h2>

        <div className="grid">

          {features.map((feature, index) => (

            <div className="card" key={index}>

              <div className="icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.desc}</p>

            </div>

          ))}

        </div>

      </section>

      {/* Workflow */}

      <section className="workflow" id="workflow">

        <h2>How It Works</h2>

        <div className="steps">

          <div>📄 Upload Resume</div>

          <span>↓</span>

          <div>📋 Job Description</div>

          <span>↓</span>

          <div>🙋 Self Description</div>

          <span>↓</span>

          <div>🤖 AI Analysis</div>

          <span>↓</span>

          <div>🎯 Interview Preparation</div>

          <span>↓</span>

          <div>📄 Download ATS Resume</div>

        </div>

      </section>

      {/* CTA */}

      <section className="cta">

        <h2>Ready to Ace Your Next Interview?</h2>

        <p>
          Join now and prepare smarter with AI-powered interview assistance.
        </p>

        <Link to="/register" className="primary">
          Start Preparing
        </Link>

      </section>

      {/* Footer */}

      <footer>

        <p>
          Built with ❤️ using React, Node.js, MongoDB and Google Gemini AI
        </p>

      </footer>

    </div>
  );
}