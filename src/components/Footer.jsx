import { RiTruckLine, RiInstagramLine, RiFacebookLine, RiTwitterLine } from "react-icons/ri";

/**
 * Componente Footer que representa el pie de página de la aplicación.
 * Contiene el logo de la empresa, una breve descripción, enlaces a redes sociales y derechos de autor.
 *
 * @component
 * @returns {JSX.Element} El componente Footer.
 */

function Footer() {
  return (
    <footer className="bg-secondary-200 p-10 xl:p-20 text-white">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 items-center border-b pb-8 border-gray-400">
        {/* Logo */}
        <div className="flex flex-col items-center xl:items-start">
          <a href="#" className="text-xl font-bold flex items-center gap-2">
            <RiTruckLine className="text-5xl text-primary" />
            <span>Transportes C&N</span>
          </a>
          <p className="text-gray-300 mt-2 text-sm text-center xl:text-left">
            Tu mejor aliado para mudanzas y transportes en Asturias.
          </p>
        </div>

        {/* Enlaces rápidos */}
        <div className="text-center">
        </div>
        {/* Redes sociales */}
        <div className="flex flex-col items-center xl:items-end">
          <h3 className="text-lg font-bold mb-4">Síguenos</h3>
          <div className="flex items-center gap-4">
            <a href="#" className="block bg-primary p-3 rounded-full hover:scale-105 transition">
              <RiInstagramLine className="text-2xl text-black" />
            </a>
            <a href="#" className="block bg-primary p-3 rounded-full hover:scale-105 transition">
              <RiFacebookLine className="text-2xl text-black" />
            </a>
            <a href="#" className="block bg-primary p-3 rounded-full hover:scale-105 transition">
              <RiTwitterLine className="text-2xl text-black" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8">
        <p className="text-gray-300 text-center text-sm">
          © Camilo 2025 - Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
