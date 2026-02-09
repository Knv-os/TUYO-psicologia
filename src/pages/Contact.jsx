import React from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <motion.h1
            className="section-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Entre em Contato
          </motion.h1>
          <motion.p
            className="lead"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Estamos aqui para ouvir você. Encontre-nos ou envie uma mensagem.
          </motion.p>
        </div>
      </section>
      <section className="section">
        <div className="container contact-grid">
          <motion.div
            className="contact-details"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="section-title" style={{ marginBottom: 24 }}>
              Nossa Localização
            </h2>
            <ul className="contact-list" style={{ gap: 16 }}>
              <li style={{ alignItems: "flex-start" }}>
                <FiMapPin
                  aria-hidden="true"
                  style={{ marginTop: 4, flexShrink: 0 }}
                />
                <span>
                  Rua Santa Gertrudes, 506 – Centro, Cosmópolis – SP, 13150-027
                </span>
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
            <p style={{ marginTop: 24, color: "var(--color-muted)" }}>
              Nosso espaço foi pensado para ser um ambiente seguro e acolhedor.
              Será um prazer receber você.
            </p>
          </motion.div>
          <motion.div
            className="contact-map"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1841.1031636069508!2d-47.20037702730212!3d-22.646094609860626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c893990d1ff3c1%3A0xd3398fa7f2f82ee0!2sTuyo%20Psicologia%20Integrada!5e0!3m2!1spt-BR!2sbr!4v1761750860100!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{
                border: 0,
                borderRadius: "var(--radius)",
                minHeight: 400,
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
