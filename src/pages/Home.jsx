import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ServiceCard from "../components/ServiceCard.jsx";
import TextReveal from "../components/TextReveal.jsx";
import BlobDecoration from "../components/BlobDecoration.jsx";
import AnimatedCounter from "../components/AnimatedCounter.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";
import testimonials from "../data/testimonials.js";
import { FiStar } from "react-icons/fi";
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
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroImgY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <main className="page-home">
      <section
        className="hero"
        ref={heroRef}
        style={{ position: "relative", overflow: "hidden" }}
      >
        <BlobDecoration className="blob--hero-1" />
        <BlobDecoration className="blob--hero-2" />
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
                text="Psicoterapia com ética, presença e acolhimento."
                as="h1"
                className="hero-title"
              />
              <p className="hero-subtitle">
                Atendimento presencial em Cosmópolis–SP e online. Uma equipe
                plural para diferentes fases da vida.
              </p>
              <div className="hero-actions">
                <Link to="/contato" className="button button-primary">
                  Agendar sessão
                </Link>
                <Link to="/doutores" className="button button-secondary">
                  Conhecer a equipe
                </Link>
              </div>

              <ul className="hero-points" aria-label="Destaques do atendimento">
                <li>Adultos, idosos e público infantojuvenil</li>
                <li>Escuta ética, humana e cuidadosa</li>
                <li>Sessões de até 50 minutos</li>
              </ul>
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
            style={{ y: heroImgY, overflow: "hidden", borderRadius: 18 }}
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
            Abordagens psicológicas se encontram para oferecer um cuidado
            plural, ético e humano. Atendemos diferentes fases da vida e
            demandas da rotina contemporânea, com um compromisso em comum:
            respeitar a singularidade de cada pessoa e construir vínculos que
            sustentem transformação.
          </motion.p>

          <motion.div
            className="grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ staggerChildren: 0.12 }}
          >
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
          </motion.div>
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
            O que dizem sobre nós
          </motion.h2>
          <motion.div
            className="testimonials-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            {testimonials.map((t) => (
              <TestimonialCard
                key={t.id}
                name={t.name}
                rating={t.rating}
                text={t.text}
              />
            ))}
          </motion.div>
          <div className="testimonials-badge">
            <FiStar className="star-filled" />
            <strong>5.0</strong>
            no Google
          </div>
        </div>
      </section>

      <section className="metrics-section">
        <div className="container">
          <div className="metrics-grid">
            <AnimatedCounter target={8} suffix="+" label="anos de atuação" />
            <AnimatedCounter
              target={7}
              suffix=""
              label="profissionais na equipe"
            />
            <AnimatedCounter target={3} suffix="" label="fundadoras" />
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
            Encontre uma profissional alinhada ao seu momento. Nossa equipe
            reúne diferentes formações e experiências, com um cuidado ético e
            singular desde 2017.
          </motion.p>

          <div
            className="helper-cta"
            role="region"
            aria-label="Ajuda para escolher um atendimento"
          >
            <div className="helper-cta__content">
              <h3 className="helper-cta__title">Não sabe por onde começar?</h3>
              <p className="helper-cta__text">
                Fale com a equipe e a gente te orienta sobre o atendimento mais
                indicado.
              </p>
            </div>
            <Link to="/contato" className="button button-primary">
              Tirar dúvidas
            </Link>
          </div>
          <motion.div
            className="grid mt-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ staggerChildren: 0.12 }}
          >
            {doctors.slice(0, 3).map((d) => (
              <DoctorCard key={d.id} doctor={d} />
            ))}
          </motion.div>

          <div className="mt-16">
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
