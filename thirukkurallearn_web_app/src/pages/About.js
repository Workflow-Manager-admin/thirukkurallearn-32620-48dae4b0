import React from "react";
import "../App.css";

// PUBLIC_INTERFACE
/**
 * About Page
 * Static educational content about Thirukkural and Thiruvalluvar.
 * Responsive, visually appealing, styled for readability.
 */
function About() {
  return (
    <div className="container about-content">
      <h1 className="title" style={{ marginTop: "2rem", marginBottom: 18 }}>
        About Thirukkural
      </h1>
      <section className="about-section">
        <h2 className="about-section-title">What is Thirukkural?</h2>
        <p>
          <b>Thirukkural</b> (திருக்குறள்), authored by <b>Thiruvalluvar</b>, is a classic Tamil text
          composed over 2,000 years ago. It is considered one of the greatest works on
          ethics and morality, transcending the boundaries of time, religion, and culture.
        </p>
        <p>
          Comprising <b>1,330 couplets (Kurals)</b> organized into 133 chapters
          (Athigaarams), Thirukkural addresses all aspects of life—covering <b>Virtue (Aram)</b>,
          <b>Wealth (Porul)</b>, and <b>Love (Inbam)</b>.
        </p>
      </section>
      <section className="about-section">
        <h2 className="about-section-title">About Thiruvalluvar</h2>
        <p>
          <b>Thiruvalluvar</b>, a celebrated Tamil poet and philosopher, is believed to have lived between
          the 4th century BCE and 1st century BCE. His concise, universal wisdom has
          earned him reverence among scholars and laypeople alike. <br />
          Thiruvalluvar’s immortal work emphasizes righteousness, harmonious living, and the
          importance of compassion, truth, and non-violence.
        </p>
      </section>
      <section className="about-section">
        <h2 className="about-section-title">Significance</h2>
        <ul>
          <li>
            Regarded as the universal code of ethics, its couplets have stood the test of time.
          </li>
          <li>
            Thirukkural is translated into many languages, reflecting its universal relevance.
          </li>
          <li>
            The text inspires and guides people across generations—encouraging them to live
            virtuous, meaningful, and harmonious lives.
          </li>
        </ul>
      </section>
      <section className="about-section">
        <h2 className="about-section-title">Structure</h2>
        <ol>
          <li><b>Aram (Virtue):</b> Moral values, personal discipline, and righteous living (Chapters 1-38)</li>
          <li><b>Porul (Wealth):</b> Social, economic ethics, politics, and governance (Chapters 39-108)</li>
          <li><b>Inbam (Love):</b> Love and human relationships (Chapters 109-133)</li>
        </ol>
      </section>
      <section className="about-section" style={{ textAlign: "center", marginTop: "2.8rem" }}>
        <em style={{ color: "var(--accent)", fontSize: "1.15rem" }}>
          “Thirukkural is a mirror to life – simple in form, profound in wisdom.”
        </em>
        <div style={{ marginTop: 10, color: "#888", fontSize: "0.95em" }}>
          — Tribute to Thiruvalluvar and his immortal Kural
        </div>
      </section>
    </div>
  );
}

export default About;
