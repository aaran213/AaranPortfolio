import React from "react";
import CV from "../assets/Aaran-Moody-9.pdf";

const Home = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section" style={{ marginTop: "90px" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="hero-content">
              <div className="profile-image">
                <i className="fas fa-user"></i>
              </div>

              <h1 className="hero-title">Aaran</h1>
              <h2 className="hero-subtitle">Frontend Web Developer</h2>

              <p className="hero-description">
                Passionate Computer Science student specializing in modern web
                development. I create responsive, user-friendly applications
                using React, JavaScript, and contemporary web technologies.
                Currently seeking internship opportunities to apply my skills in
                real-world projects and contribute to innovative solutions.
              </p>

              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <a href={CV} download="Aaran-Moody-CV.pdf">
                  <button className="btn btn-accent">
                    <i className="fas fa-download me-2"></i>
                    Download Resume
                  </button>
                </a>
                <button
                  className="btn btn-outline-accent"
                  onClick={handleContactClick}
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
