import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/tuyo-logo.png";

const Header = () => {
  const [open, setOpen] = React.useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="navbar" role="banner">
      <div className="container nav-inner">
        <nav
          aria-label="Navegação principal esquerda"
          className="desktop-nav desktop-nav-left"
          role="navigation"
        >
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Início
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sobre"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Nossa história
              </NavLink>
            </li>
          </ul>
        </nav>

        <Link
          to="/"
          className="brand"
          aria-label="Página inicial - Tuyo Psicologia"
          onClick={closeMenu}
        >
          <img src={logo} alt="Tuyo Psicologia" className="brand-logo" />
        </Link>

        <nav
          aria-label="Navegação principal esquerda"
          className="desktop-nav desktop-nav-right"
          role="navigation"
        >
          <ul className="nav-links">
            <li>
              <NavLink
                to="/doutores"
                end
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Equipe
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contato"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Contato
              </NavLink>
            </li>
          </ul>
        </nav>

        <button
          className="menu-toggle"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Navegação principal móvel"
            className="mobile-nav"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <ul>
              <li>
                <NavLink
                  to="/"
                  end
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  Início
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/sobre"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  Nossa história
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/doutores"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? "active" : undefined
                  }
                >
                  Equipe
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contato"
                  onClick={closeMenu}
                  className={({ isActive }) => (isActive ? "active" : undefined)}
                >
                  Contato
                </NavLink>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
