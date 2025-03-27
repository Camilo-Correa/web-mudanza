import React, { useState } from "react";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = ({ darkMode, toggleDarkMode }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <section className="flex flex-col items-center space-y-4">
      {/* Logo centrado */}
      <header className="flex items-center justify-between xl:justify-start w-full py-2 px-6 md:px-20 h-[8vh] z-50 mt-2">
        {/* Título centrado con ícono alineado a la izquierda */}
        <div className="flex items-center gap-4 md:mt-12">
          {/* Ícono */}
          <a href="/" className="p-2">
            <img
              src="/principal.ico"
              alt="Ícono principal"
              className="w-12 h-12 md:w-20 md:h-20"
            />
          </a>

          {/* Título */}
          <span className="text-[16px] md:text-[20px] font-bold text-secondary-200 md:mt-4">
            Transportes <span className="text-primary">C & N</span>
          </span>
        </div>

        {/* Menú centrado */}
        <nav
          className={`fixed bg-white dark:bg-gray-800 w-[70%] md:w-[40%] xl:w-full h-full text-[16px] md:text-[18px] ${
            showMenu ? "left-0" : "-left-full"
          } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-6 md:gap-10 transition-all duration-500 z-50`}
        >
          <Link
            to="/home"
            className="hover:text-primary dark:hover:text-gray-300 md:mt-8"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            to="/services"
            className="hover:text-primary dark:hover:text-gray-300 md:mt-8"
            onClick={() => setShowMenu(false)}
          >
            Servicios
          </Link>
          <Link
            to="/presupuesto"
            className="hover:text-primary dark:hover:text-gray-300 md:mt-8"
            onClick={() => setShowMenu(false)}
          >
            Presupuesto
          </Link>
          <Link
            to="/contacto"
            className="hover:text-primary dark:hover:text-gray-300 md:mt-8"
            onClick={() => setShowMenu(false)}
          >
            Contacto
          </Link>
          <Link
            to="/consejos"
            className="hover:text-primary dark:hover:text-gray-300 md:mt-8"
            onClick={() => setShowMenu(false)}
          >
            Consejos
          </Link>
        </nav>

        {/* Botón para abrir/cerrar el menú */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="xl:hidden text-3xl p-2"
        >
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </header>
    </section>
  );
};

export default Header;
