import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
            Política de Privacidade
          </motion.h1>
        </div>
      </section>
      <section className="section">
        <div className="container narrow prose">
          <h2>1. Coleta de dados</h2>
          <p>
            A Tuyo Psicologia Integrada coleta apenas os dados estritamente
            necessários para agendamento e atendimento clínico, como nome,
            telefone e e-mail, fornecidos voluntariamente pelo usuário.
          </p>

          <h2>2. Uso das informações</h2>
          <p>
            As informações coletadas são utilizadas exclusivamente para contato,
            agendamento de sessões e comunicação relacionada ao atendimento
            psicológico.
          </p>

          <h2>3. Compartilhamento</h2>
          <p>
            Seus dados pessoais não são compartilhados com terceiros, exceto
            quando exigido por lei ou por determinação judicial.
          </p>

          <h2>4. Sigilo profissional</h2>
          <p>
            Todo o conteúdo das sessões é protegido pelo sigilo profissional,
            conforme o Código de Ética Profissional do Psicólogo (Resolução CFP
            nº 010/2005).
          </p>

          <h2>5. Contato</h2>
          <p>
            Para dúvidas sobre esta política, entre em contato pelo e-mail{" "}
            <a href="mailto:tuyopsicologia@gmail.com">
              tuyopsicologia@gmail.com
            </a>
            .
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

export default PrivacyPolicy;
