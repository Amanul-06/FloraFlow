import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>FloraFlow</h2>
          <p>Beautiful flowers for every moment.</p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-login">
          <a href="/login">Staff Login</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 FloraFlow. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
