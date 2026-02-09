import React from "react";
import { Link } from "react-router-dom";
import { FiMapPin, FiPhone, FiMail, FiInstagram } from "react-icons/fi";
import logo from "../assets/tuyo-logo.svg";

const Footer = () => {
  return (
    <footer className="footer" id="contato">
      <div className="container footer-grid">
        <div className="footer-col">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="Tuyo Psicologia" style={{ height: 40 }} />
          </Link>
          <p style={{ marginTop: 16, color: "var(--color-muted)" }}>
            Mais presença, mais sentido, mais vida.
          </p>
        </div>

        <div className="footer-col">
          <h3 className="footer-title">Navegue</h3>
          <ul className="footer-nav">
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/sobre">Nossa História</Link>
            </li>
            <li>
              <Link to="/#atendimentos">Atendimentos</Link>
            </li>
            <li>
              <Link to="/doutores">Profissionais</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-title">Contato</h3>
          <ul className="contact-list">
            <li>
              <FiMapPin aria-hidden="true" />
              <span>Rua Santa Gertrudes, 506 – Centro, Cosmópolis – SP</span>
            </li>
            <li>
              <FiPhone aria-hidden="true" />
              <a href="tel:+5519993998442">(19) 99399-8442</a>
            </li>
            <li>
              <FiMail aria-hidden="true" />
              <a href="mailto:tuyopsicologia@gmail.com">
                tuyopsicologia@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-title">Redes Sociais</h3>
          <div className="socials">
            <a
              href="https://instagram.com/tuyopsicologia"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram @tuyopsicologia"
              className="social-link"
            >
              <FiInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom container">
        <p>
          Tuyo Psicologia © {new Date().getFullYear()}. Todos os direitos
          reservados.
        </p>
        <div className="footer-bottom-links">
          <Link to="/politica-de-privacidade">Política de Privacidade</Link>
          <Link to="/termos-de-uso">Termos de Uso</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
