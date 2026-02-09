import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import SmoothScroll from "./components/SmoothScroll.jsx";
import PageTransition from "./components/PageTransition.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import WhatsAppFab from "./components/WhatsAppFab.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Doctors from "./pages/Doctors.jsx";
import DoctorProfile from "./pages/DoctorProfile.jsx";
import Contact from "./pages/Contact.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfUse from "./pages/TermsOfUse.jsx";

function App() {
  const location = useLocation();

  return (
    <SmoothScroll>
      <ScrollToTop />
      <Header />
      <div className="app-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/sobre"
              element={
                <PageTransition>
                  <About />
                </PageTransition>
              }
            />
            <Route
              path="/doutores"
              element={
                <PageTransition>
                  <Doctors />
                </PageTransition>
              }
            />
            <Route
              path="/doutores/:id"
              element={
                <PageTransition>
                  <DoctorProfile />
                </PageTransition>
              }
            />
            <Route
              path="/contato"
              element={
                <PageTransition>
                  <Contact />
                </PageTransition>
              }
            />
            <Route
              path="/politica-de-privacidade"
              element={
                <PageTransition>
                  <PrivacyPolicy />
                </PageTransition>
              }
            />
            <Route
              path="/termos-de-uso"
              element={
                <PageTransition>
                  <TermsOfUse />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
      <WhatsAppFab />
      <Footer />
    </SmoothScroll>
  );
}

export default App;
