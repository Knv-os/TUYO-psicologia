import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FiPhone, FiMenu, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/tuyo-logo.png";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const drawerCloseBtnRef = React.useRef(null);

  const closeMenu = () => setOpen(false);

  React.useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  React.useEffect(() => {
    if (!open) return;

    drawerCloseBtnRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header className="navbar" role="banner">
      <div className="container nav-inner">
        <Link
          to="/"
          className="brand"
          aria-label="Página inicial - Tuyo Psicologia"
          onClick={closeMenu}
        >
          <img src={logo} alt="Tuyo Psicologia" className="brand-logo" />
        </Link>

        <nav
          aria-label="Navegação principal"
          className="desktop-nav"
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
          aria-controls="mobile-drawer"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setOpen(false);
            }}
          >
            <motion.aside
              id="mobile-drawer"
              aria-label="Menu"
              className="mobile-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              role="dialog"
              aria-modal="true"
            >
              <div className="mobile-drawer__header">
                <Link
                  to="/"
                  className="mobile-drawer__brand"
                  aria-label="Página inicial - Tuyo Psicologia"
                  onClick={closeMenu}
                >
                  <img src={logo} alt="Tuyo Psicologia" />
                </Link>
                <button
                  ref={drawerCloseBtnRef}
                  type="button"
                  className="menu-toggle"
                  aria-label="Fechar menu"
                  onClick={() => setOpen(false)}
                >
                  <FiX aria-hidden="true" />
                </button>
              </div>

              <nav aria-label="Navegação móvel" className="mobile-drawer__nav">
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
                      className={({ isActive }) =>
                        isActive ? "active" : undefined
                      }
                    >
                      Contato
                    </NavLink>
                  </li>
                </ul>
              </nav>

              <div className="mobile-drawer__footer">
                <Link
                  to="/contato"
                  className="button button-primary"
                  onClick={closeMenu}
                >
                  <FiPhone aria-hidden="true" />
                  Agendar sessão
                </Link>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
