import React , {useState} from "react";
import { RiTruckLine , RiMenu3Fill, RiCloseLine} from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <section className="flex flex-col items-center space-y-4 ">
      {/* Logo centrado */}
      <div className="flex justify-center">
        <a href='/home' className='text-2xl font-bold relative p-2 bg-white'>
        <RiTruckLine className="text-5xl text-gray-800" />
        </a>
      </div>
      <header className='flex items-center justify-between xl:justify-start w-full py-4 px-20 h-[10vh] z-50'>
      {/* Título centrado */}
      <div className="xk:w-1/6 text-center -mt-4">
        <span className="text-[18px] font-bold text-secondary-200 ">Transportes <span className='text-primary'>C & N</span> 
        </span>
      </div>

      {/* Menú centrado */}
      <nav className={`fixed bg-white w-[70%] md:w-[40%] xl:w-full h-full ${
        showMenu ? 'left-0': '-left-full'
      } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 
      transition-all duration-500 z-50 `}
      >
          <Link to="/home" 
          className="hover:text-primary"
          onClick={() => setShowMenu(false)}>
            Home
          </Link>
          <Link to="/services" 
          className="hover:text-primary"
          onClick={() => setShowMenu(false)}>
            Servicios
          </Link>
          <Link to="/presupuesto" 
          className="hover:text-primary"
          onClick={() => setShowMenu(false)}>
            Presupuesto
          </Link>
          <Link to="/Contacto" 
          className="hover:text-primary"
          onClick={() => setShowMenu(false)}>
            Contacto
          </Link>
          <Link to="/Consejos" 
          className="hover:text-primary"
          onClick={() => setShowMenu(false)}>
            Consejos
          </Link>
      </nav>
      <button onClick={() => setShowMenu(!showMenu)}
      className='xl:hidden text-3xl p-2 '
      >{showMenu ? <RiCloseLine/> : <RiMenu3Fill />}</button>
    </header>
    </section>
  );
};

export default Header;
