import React, { useState } from "react";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

/**
 * Componente Header que representa la barra de navegación de la aplicación.
 * Contiene un logo, enlaces de navegación y un botón de menú para dispositivos móviles.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {boolean} props.darkMode - Indica si el modo oscuro está activado.
 * @param {Function} props.toggleDarkMode - Función para alternar el modo oscuro.
 * @returns {JSX.Element} El componente Header.
 */

const Header = ({ darkMode, toggleDarkMode }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <section className="flex flex-col items-center space-y-4">
      {/* Barra superior con datos de contacto */}
      <div className="w-full bg-primary text-white text-sm md:text-base flex justify-center px-4 md:px-20 py-2">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
          <span className="flex items-center">
            📧 <a href="mailto:contacto@transportescn-mudanzas.es" className="ml-2 hover:underline">
              contacto@transportescn-mudanzas.es
            </a>
          </span>
          <span className="flex items-center">
            📞 <a href="tel:+34613816121" className="ml-2 hover:underline">
              +34 613 816 121
            </a>
          </span>
        </div>
      </div>
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
          <span className="text-[18px] md:text-[20px] font-bold text-secondary-200 md:mt-4">
            Transportes <span className="text-primary">C & N</span>
          </span>
        </div>

        {/* Menú centrado */}
        <nav
          className={`fixed bg-white dark:bg-gray-800 w-[70%] md:w-[40%] xl:w-full h-full text-[16px] md:text-[18px] mt-6 ${
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
            to="/servicios-mudanzas"
            className="hover:text-primary dark:hover:text-gray-300 md:mt-8"
            onClick={() => setShowMenu(false)}
          >
            Servicios
          </Link>
          <Link
            to="/solicitar-presupuesto"
            className="hover:text-primary dark:hover:text-gray-300 md:mt-8"
            onClick={() => setShowMenu(false)}
          >
            Presupuesto
          </Link>
          <Link
            to="/contacto-transportes"
            className="hover:text-primary dark:hover:text-gray-300 md:mt-8"
            onClick={() => setShowMenu(false)}
          >
            Contacto
          </Link>
          <Link
            to="/consejos-mudanzas"
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
