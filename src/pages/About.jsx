import React, { useMemo, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TextReveal from "../components/TextReveal.jsx";
import iconAfeto from "../assets/afeto.png";
import iconAcolhimento from "../assets/acolhimento.png";
import iconEtica from "../assets/etica.png";
import iconVinculo from "../assets/vinculo.png";
import iconOrganizacao from "../assets/organização.png";
import equipe from "../assets/equipe-tuyo.jpg";
import stars from "../assets/stars.png";
import { Link } from "react-router-dom";
const About = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress: timelineScroll } = useScroll({
    target: timelineRef,
    offset: ["start 0.85", "end 0.25"],
  });
  const timelineScaleX = useTransform(timelineScroll, [0, 1], [0, 1]);

  const milestones = useMemo(
    () => [
      {
        year: "2017",
        side: "bottom",
        title: "Incentive Psicologia",
        text: "nascimento da Incentive",
      },
      {
        year: "2019",
        side: "top",
        title: "Novo quadro societário",
        text: "nova direção",
      },
      {
        year: "2021",
        side: "bottom",
        title: "Mudança de visual",
        text: "nasce a Tuyo",
      },
      {
        year: "2023",
        side: "top",
        title: "Consolidação",
        text: "consolidação do espaço atual",
      },
      {
        year: "2025",
        side: "bottom",
        title: "Equipe",
        text: "formação da equipe",
      },
    ],
    [],
  );

  return (
    <main className="page-about">
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
              <TextReveal
                text="A Tuyo é feita por mulheres que acreditam na força do cuidado, do afeto e da ciência."
                as="h1"
                className="hero-title"
              />
              <p className="hero-subtitle">
                Psicologia Integrada com ética, afeto e presença.
              </p>
              <Link to="/contato" className="button button-primary">
                Agende sua sessão
              </Link>
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
              src={equipe}
              alt="Ambiente da clínica com flores ao fundo e uma cadeira com almofada"
              width="640"
              height="420"
            />
          </motion.div>
        </div>
      </section>
      <div className="container">
        <motion.h1
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nossa história nasce do afeto.
        </motion.h1>

        <motion.p
          className="lead"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Nosso time de psicólogas reúne diferentes trajetórias, experiências e
          especializações, cada uma trazendo uma forma única de olhar e acolher.
        </motion.p>
        <motion.p
          className="lead"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Aqui, as diversas abordagens psicológicas se encontram para oferecer
          um cuidado plural, ético e humano. Do atendimento infantil ao adulto,
          do trabalho com famílias às demandas específicas da vida
          contemporânea, nossa essência é a mesma: respeitar a singularidade de
          cada pessoa e criar vínculos que sustentem processos de transformação.
          Cada profissional traz sua sensibilidade e conhecimento para compor um
          espaço em que a saúde mental é cuidada com afeto.
        </motion.p>

        <motion.p
          className="lead"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          A Tuyo nasceu do encontro entre três mulheres — Brenda, Carol e Thais
          — unidas pelo desejo de oferecer um cuidado ético, afetuoso e
          singular. Desde 2017, nossa jornada é guiada pela escuta e pela
          construção de vínculos genuínos.
        </motion.p>

        <section
          ref={timelineRef}
          className="timeline timeline--horizontal"
          aria-label="Linha do tempo da Tuyo"
        >
          <motion.span
            className="timeline-progress"
            aria-hidden="true"
            style={{ scaleX: timelineScaleX }}
          />
          {milestones.map((m) => (
            <motion.div
              key={m.year}
              className={`milestone ${m.side}`}
              initial={{ opacity: 0, y: m.side === "top" ? -18 : 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <motion.span
                className="year-badge"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {m.year}
              </motion.span>
              <motion.span
                className="stem"
                aria-hidden="true"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                style={{ transformOrigin: "top" }}
              />
              <h4 className="milestone-title">{m.title}</h4>
              <p className="milestone-text">{m.text}</p>
            </motion.div>
          ))}
        </section>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          O que acreditamos.
        </motion.h2>
        <p>
          Oferecer um espaço de acolhimento e cuidado, onde cada pessoa seja
          recebida com respeito, ética e afeto. Promovemos o bem-estar emocional
          por meio de uma escuta ativa e sensível, fortalecendo vínculos
          terapêuticos e relações de confiança.
        </p>

        <motion.div
          className="grid mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.article
            className="card service-card"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <div className="card-icon">
              <img src={iconAfeto} alt="Ícone Afeto" />
            </div>
            <h3 className="card-title">Afeto presente</h3>
            <p className="card-text">
              Cada gesto e cada escuta carregam intenção e presença.
            </p>
          </motion.article>
          <motion.article
            className="card service-card"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <div className="card-icon">
              <img src={iconAcolhimento} alt="Ícone Acolhimento" />
            </div>
            <h3 className="card-title">Acolhimento que abraça</h3>
            <p className="card-text">
              Criamos espaços seguros, onde cada singularidade pode existir.
            </p>
          </motion.article>
          <motion.article
            className="card service-card"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <div className="card-icon">
              <img src={iconEtica} alt="Ícone Ética" />
            </div>
            <h3 className="card-title">Ética que orienta</h3>
            <p className="card-text">
              Agimos com clareza, respeito e compromisso.
            </p>
          </motion.article>
          <motion.article
            className="card service-card"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <div className="card-icon">
              <img src={iconVinculo} alt="Ícone Vínculo" />
            </div>
            <h3 className="card-title">Vínculo que sustenta</h3>
            <p className="card-text">
              Caminhamos junto com cada pessoa em seu próprio tempo.
            </p>
          </motion.article>
          <motion.article
            className="card service-card"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <div className="card-icon">
              <img src={iconOrganizacao} alt="Ícone Organização" />
            </div>
            <h3 className="card-title">Organização que cuida</h3>
            <p className="card-text">
              O cuidado também mora na estrutura — processos bem pensados
              garantem segurança e fluidez.
            </p>
          </motion.article>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          style={{ marginTop: 12 }}
        >
          Sempre desviamos de um “padrão” de clínica — porque acreditamos que a
          psicologia pode ser ética, afetiva e autêntica.
        </motion.p>
      </div>
    </main>
  );
};

export default About;
