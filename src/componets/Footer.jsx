import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#04295e] text-gray-50 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          
          <div className="w-full sm:w-1/2 md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-3">Contacto</h3>
            <p className="text-sm">
              Dirección: 123 Calle Pokémon, Ciudad Gamer, VZLA
            </p>
            <p className="text-sm">
              Email: info@pokemoncards.com
            </p>
            <p className="text-sm">
              Teléfono: +58 123 4567890
            </p>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-3">Enlaces Rápidos</h3>
            <ul className="text-sm">
              <li className="mb-1">
                <a href="#" className="hover:underline">Inicio</a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:underline">Productos</a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:underline">Sobre Nosotros</a>
              </li>
              <li className="mb-1">
                <a href="#" className="hover:underline">Contacto</a>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-3">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-50 hover:text-blue-400">
                
                <i className="fab fa-facebook-f"></i> Facebook
              </a>
              <a href="#" className="text-gray-50 hover:text-blue-300">
              
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="#" className="text-gray-50 hover:text-pink-500">
   
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>
        

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm">
          <p>&copy; {currentYear} Pokémon Cards Store. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;