import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TermsOfUse = () => {
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
            Termos de Uso
          </motion.h1>
        </div>
      </section>
      <section className="section">
        <div className="container narrow prose">
          <h2>1. Sobre o site</h2>
          <p>
            Este site é mantido pela Tuyo Psicologia Integrada e tem caráter
            exclusivamente informativo e institucional. O conteúdo aqui
            apresentado não substitui atendimento psicológico profissional.
          </p>

          <h2>2. Agendamento</h2>
          <p>
            O agendamento de sessões é realizado por meio dos canais de contato
            disponíveis no site (telefone, e-mail ou redes sociais). A
            confirmação depende da disponibilidade da equipe.
          </p>

          <h2>3. Propriedade intelectual</h2>
          <p>
            Todo o conteúdo deste site — textos, imagens, logotipos e
            ilustrações — é de propriedade da Tuyo Psicologia Integrada e está
            protegido por direitos autorais. A reprodução sem autorização prévia
            é proibida.
          </p>

          <h2>4. Responsabilidade</h2>
          <p>
            A Tuyo Psicologia não se responsabiliza por decisões tomadas com
            base exclusivamente nas informações deste site. Para orientação
            profissional, procure atendimento especializado.
          </p>

          <h2>5. Alterações</h2>
          <p>
            Estes termos podem ser atualizados a qualquer momento. Recomendamos
            a consulta periódica desta página.
          </p>

          <div style={{ marginTop: 32 }}>
            <Link to="/" className="button">
              Voltar ao início
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TermsOfUse;
