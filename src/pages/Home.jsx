import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard.jsx";
import acolhimentoIcon from "../assets/acolhimento.svg";
import afetoIcon from "../assets/afeto.svg";
import vinculoIcon from "../assets/vinculo.svg";
import DoctorCard from "../components/DoctorCard.jsx";
import doctors from "../data/doctors.js";
import { Link } from "react-router-dom";
import clinicaBkg from "../assets/sala-clinica.png";
import stars from "../assets/stars.png";
import rabisco from "../assets/rabisco.png";
import laco from "../assets/laço.png";

const Home = () => {
  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ position: "relative" }}
          >
            <div style={{ position: "relative", zIndex: 1 }}>
              <h1 className="hero-title">
                Na Tuyo, cada pessoa importa. <br />
                Cada detalhe comunica. <br />
                Cada vínculo transforma.
              </h1>
              <p className="hero-subtitle">
                Psicologia Integrada com ética, afeto e presença.
              </p>
              <a href="#contato" className="button button-primary">
                Agende sua sessão
              </a>
            </div>
            <img
              src={stars}
              alt=""
              aria-hidden="true"
              className="hero-star hero-star--top"
            />
            <img
              src={stars}
              alt=""
              aria-hidden="true"
              className="hero-star hero-star--bottom"
            />
          </motion.div>
          <motion.div
            className="hero-figure"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <img
              src={clinicaBkg}
              alt="Ambiente da clínica com flores ao fundo e uma cadeira com almofada"
              width="640"
              height="420"
            />
          </motion.div>
        </div>
      </section>

      <section className="section" id="atendimentos">
        <div className="container">
          <div className="section-title-wrap">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Nossos atendimentos
            </motion.h2>
          </div>
          <motion.p
            className="lead"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Aqui, as diversas abordagens psicólogicas se encontram para oferecer
            um cudado plural, ético e humano. Do atendimento infantil ao adulto,
            do trablho com famílias às demandas específicas da vida
            contemporânea, nossa essência é a mesma: respeitar a singularidade
            de cada pessoa e criar vínculos que sustentem processos de
            transformação. Cada profissional traz sua sensibilidade e
            conhecimento para compor um espaço em que a saúde mental é cuidada
            com afeto.
          </motion.p>

          <div className="grid">
            <ServiceCard
              icon={acolhimentoIcon}
              title="Psicoterapia jovem, adulto e idoso"
              description="Um espaço de escuta, ética e acolhimento. Sessões semanais com até 50 minutos de duração, guiadas pela presença e pelo compromisso com o cuidado."
            />
            <ServiceCard
              icon={afetoIcon}
              title="Psicoterapia infantil e infantojuvenil"
              description="A escuta acontece de forma lúdica — no gesto, no desenho e na troca com a família. Acolhemos a criança e sua rede, porque nenhum desenvolvimento acontece sozinho."
            />
            <ServiceCard
              icon={vinculoIcon}
              title="Terapia ABA"
              description="Acompanhamos crianças neuroatípicas com sensibilidade e respeito ao ritmo de cada uma. Nosso olhar vai além dos comportamentos visíveis: escutamos, fortalecemos vínculos e criamos caminhos humanos para o florescer."
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nossos profissionais
          </motion.h2>
          <motion.p
            className="lead"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            A Tuyo nasceu do encontro entre três mulheres — Brenda, Carol e
            Thais — unidas pelo desejo de oferecer um cuidado ético, afetuoso e
            singular. Desde 2017, nossa jornada é guiada pela escuta e pela
            construção de vínculos genuínos.
          </motion.p>
          <div className="grid" style={{ marginTop: 32 }}>
            {doctors.slice(0, 3).map((d) => (
              <DoctorCard key={d.id} doctor={d} />
            ))}
          </div>

          <div style={{ marginTop: 16 }}>
            <Link to="/doutores" className="button">
              Ver todos os profissionais
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
