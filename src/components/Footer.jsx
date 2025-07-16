import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="social-links">
              <a 
                href="https://github.com/alexjohnson" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href="#" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a 
                href="mailto:aaron@student.edu" 
                className="social-link"
                aria-label="Email Contact"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a 
                href="#" 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
            
            <div className="text-center">
              <p className="footer-text">
                © {currentYear} Aaron. Crafted with <span className="text-accent">❤️</span> and lots of ☕
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;