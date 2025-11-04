import React, { useContext, useState } from 'react'; // Importamos useState
import logo from '../assets/logo.png'
import {NavLink} from 'react-router-dom'
import { AuthContext, } from '../context/AuthContext';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Iconos de ejemplo


const styles = {
    // Agregamos 'md:flex-row' para asegurar la fila en pantallas medianas y grandes
    stNav : 'bg-blue-600 p-3 flex flex-row justify-between items-center h-auto relative', 
    // Ocultamos las opciones por defecto y las mostramos en 'md'
    // Agregamos 'flex-col' para el layout vertical en móvil
    opNavsContainer: 'md:flex md:flex-row gap-4 mr-15 hidden md:block', 
    // Estilos base para los enlaces de navegación (usados en la versión de escritorio)
    opNavs : 'bg-gray-50 text-blue-600 rounded-2xl p-2 w-auto cursor-pointer flex justify-center items-center h-10 hover:bg-blue-900 hover:text-gray-100 font-medium',
    // Estilo para el botón de cerrar sesión
    logoutButton: 'bg-gray-50 text-blue-600 rounded-2xl p-2 w-auto cursor-pointer flex justify-center items-center h-10 hover:bg-blue-900 hover:text-gray-100 font-medium hover:text-yellow-200', 
    stTitle : 'text-2xl text-gray-100 font-bold hover:text-blue-900',
    // Nuevo estilo para el botón del menú hamburguesa, visible en móvil, oculto en md
    menuButton: 'md:hidden text-gray-100 focus:outline-none p-2', 
    // Nuevo estilo para el menú desplegable en móvil (posición absoluta, ancho completo, fondo, z-index alto)
    mobileMenu: 'absolute top-full left-0 w-full bg-blue-50 shadow-lg flex flex-col z-10 p-4 md:hidden gap-5',
    // Estilo para los enlaces dentro del menú móvil para que ocupen todo el ancho y se vean bien
    mobileNavLink: 'bg-gray-50 text-blue-600 rounded-2xl p-2 w-full text-center my-1 cursor-pointer hover:bg-blue-900 hover:text-gray-100 font-medium',
}

export const Nav = () => {

    const { usuario, logout } = useContext(AuthContext);
    // Estado para controlar si el menú móvil está abierto o cerrado
    const [isOpen, setIsOpen] = useState(false); 

    // Función para alternar el estado del menú
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Función para cerrar el menú después de hacer clic en un enlace (útil en móvil)
    const handleLinkClick = () => {
        setIsOpen(false);
    };

    // Componente de lista de opciones reutilizable
    const NavLinks = () => (
        <>
            <NavLink 
                to='/' 
                className={styles.opNavs} 
                onClick={handleLinkClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#2583db" d="M12 2a7 7 0 0 1 7 7c0 1.4-.41 2.71-1.12 3.8L12 22.21L6.12 12.8A6.95 6.95 0 0 1 5 9a7 7 0 0 1 7-7m0 1.5A5.5 5.5 0 0 0 6.59 8h2.58c.41-1.17 1.52-2 2.83-2s2.42.83 2.83 2h2.58A5.5 5.5 0 0 0 12 3.5m0 8.5a2.99 2.99 0 0 1-2.83-2H6.59c.13.69.38 1.34.75 1.91l.04.09A5.51 5.51 0 0 0 12 14.5c1.94 0 3.64-1 4.62-2.5l.04-.09c.37-.57.62-1.22.75-1.91h-2.58A2.99 2.99 0 0 1 12 12m0-4.5A1.5 1.5 0 0 0 10.5 9a1.5 1.5 0 0 0 1.5 1.5A1.5 1.5 0 0 0 13.5 9A1.5 1.5 0 0 0 12 7.5"/></svg>
                inicio
            </NavLink>
            <NavLink 
                to='/Servicios' 
                className={styles.opNavs} 
                onClick={handleLinkClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><path fill="none" stroke="#2583db" stroke-linecap="round" stroke-linejoin="round" d="M12.256 4.5h23.488a2 2 0 0 1 2 2v35a2 2 0 0 1-2 2H12.256a2 2 0 0 1-2-2v-35a2 2 0 0 1 2-2" stroke-width="1"/><path fill="none" stroke="#2583db" stroke-linecap="round" stroke-linejoin="round" d="M22.421 20.425c-4.49.43-5.525 2.732-5.525 2.732h0c0-3.885 3.148-7.035 7.03-7.035s7.03 3.15 7.03 7.035c0 0-1.036-2.302-5.527-2.732" stroke-width="1"/><path fill="none" stroke="#2583db" stroke-linecap="round" stroke-linejoin="round" d="M25.667 19.654c0 .852-.78 1.543-1.74 1.543h0c-.962 0-1.742-.69-1.742-1.543c0-.852.78-1.543 1.741-1.543h0c.961 0 1.74.69 1.74 1.543m-1.74 4.55c1.187 0 2.177-.778 2.272-1.792c3.1.416 4.758 1.57 4.758 1.57h0c0 3.886-3.148 7.036-7.03 7.036s-7.03-3.15-7.03-7.035c0 0 1.658-1.154 4.757-1.57c.097 1.013 1.086 1.791 2.273 1.791m-8.655-9.764l-1.832-4.76m-1.086.444c1.577-.928 3.665-.978 3.948.11c.239.913-.726 1.955-1.744 2.422m3.965-1.466c.439.034.776.274.77 1.067c-.004.537-.724.972-1.262 1.007c-.45.029-.898-.267-.905-.77c-.011-.78.849-1.346 1.397-1.304m13.24-.47c.44.034.777.274.771 1.067c-.004.537-.724.972-1.262 1.007c-.45.029-.898-.267-.905-.77c-.012-.78.848-1.346 1.396-1.304M20.017 9.19l.29 4.1m1.633-3.908l-1.764 2.06m3.822 1.539l-3.813-1.952m4.188.245l1.315-1.602c-1.397-.897-2.458.264-2.425.93c.066 1.349 1.717 1.388 2.663.616M24.463 8.14l.67-.58m1.993 4.778l.597-3.051l.85 2.579l.806-2.888l.45 4.22m3.131.28l.387-3.799l.439.085l.59 4.579l1.271-4.117M32.729 33.56l1.832 4.76m1.086-.444c-1.577.928-3.665.978-3.948-.11c-.239-.913.726-1.955 1.744-2.421m-3.965 1.465c-.439-.034-.776-.274-.77-1.068c.004-.536.724-.971 1.262-1.006c.45-.029.898.268.905.77c.011.78-.849 1.346-1.397 1.304m-13.24.47c-.44-.034-.777-.274-.771-1.068c.004-.536.724-.971 1.262-1.006c.45-.029.898.267.905.77c.012.78-.848 1.346-1.396 1.304m11.745 1.53l-.29-4.1m-1.633 3.908l1.764-2.06m-3.822-1.539l3.813 1.952m-4.188-.244l-1.315 1.601c1.397.897 2.458-.264 2.425-.93c-.066-1.349-1.717-1.388-2.663-.616m1.463 3.078l-.67.58m-1.993-4.777l-.597 3.05l-.85-2.579l-.806 2.888l-.45-4.22m-3.131-.28l-.387 3.799l-.439-.085l-.59-4.579l-1.271 4.118" stroke-width="1"/></svg>
                servicios
            </NavLink>
            {usuario ? (
                <>
                    <NavLink to="/perfil" className={styles.opNavs} onClick={handleLinkClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><g fill="none" stroke="#2583db" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="m13.81 20.214l-4.824-2.647l2.006-.531c-.65-.306-1.078-.868-1.127-2.016l1.825-.243c-.99-3.213.869-7.482 4.638-9.446c3.471-1.808 7.62-.405 10.749 1.714L28.4 9.809l4.96-.272c-.411 2.83-2.387 4.161-4.56 4.819l-1.27 3.59c.097.595.63.865 1.356 1.578l-1.194 1.693c-1.042 1.882-1.785 3.398-3.371 4.25L19.7 23.77l-1.295 1.367c3.501 2.262 4.146 5.37 4.18 7.217l.125 6.642l8.277-5.667c-.32-1.525.027-2.586.534-3.516c.764-1.401 1.067-2.394.97-3.933c.787-.651 2.439.18 2.406 1.625l-.034 1.525c.507.267 2.783-.087 3.337-.32c.775-.327 1.3-1.049 1.92-1.619c-.107-.684.468-1.048 1.018-.97l.58.94c.387.629-.01 1.624-.402 2.222l-.594.908c-.322 1.6-1.232 2.612-2.48 3.287c-1.522.635-2.525.878-4.077 2.148c0 0-.332.785-.632 1.07l-7.15 6.805"/><path d="M11.784 19.11c-.098 1.56.911 2.151 2.15 2.94c0 0-2.936-1.694-5.137-.053L6.123 23.99"/></g><g fill="none" stroke="#2583db" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M38.002 26.156c0 .493-.477.893-1.065.893s-1.065-.4-1.065-.893s.477-.893 1.065-.893s1.065.4 1.065.893"/><path d="M33.932 25.87c.292-1.264 1.673-2.182 3.283-2.182c1.779 0 3.245 1.113 3.335 2.53m-2.57.112c.684.301 1.231.778 1.55 1.349m-4.981-1.269a3.7 3.7 0 0 1 1.338-.404"/></g></svg>
                        Perfil
                    </NavLink>
                    <button 
                        onClick={() => { logout(); handleLinkClick(); }} // Llama a logout y luego a handleLinkClick
                        className={styles.logoutButton}
                    >
                        Cerrar sesión
                    </button>
                </>
            ) : (
                <>
                    <NavLink to="/Iniciar-Seccion" className={styles.opNavs} onClick={handleLinkClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><g fill="none" stroke="#2583db" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="m13.81 20.214l-4.824-2.647l2.006-.531c-.65-.306-1.078-.868-1.127-2.016l1.825-.243c-.99-3.213.869-7.482 4.638-9.446c3.471-1.808 7.62-.405 10.749 1.714L28.4 9.809l4.96-.272c-.411 2.83-2.387 4.161-4.56 4.819l-1.27 3.59c.097.595.63.865 1.356 1.578l-1.194 1.693c-1.042 1.882-1.785 3.398-3.371 4.25L19.7 23.77l-1.295 1.367c3.501 2.262 4.146 5.37 4.18 7.217l.125 6.642l8.277-5.667c-.32-1.525.027-2.586.534-3.516c.764-1.401 1.067-2.394.97-3.933c.787-.651 2.439.18 2.406 1.625l-.034 1.525c.507.267 2.783-.087 3.337-.32c.775-.327 1.3-1.049 1.92-1.619c-.107-.684.468-1.048 1.018-.97l.58.94c.387.629-.01 1.624-.402 2.222l-.594.908c-.322 1.6-1.232 2.612-2.48 3.287c-1.522.635-2.525.878-4.077 2.148c0 0-.332.785-.632 1.07l-7.15 6.805"/><path d="M11.784 19.11c-.098 1.56.911 2.151 2.15 2.94c0 0-2.936-1.694-5.137-.053L6.123 23.99"/></g><g fill="none" stroke="#2583db" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"><path d="M38.002 26.156c0 .493-.477.893-1.065.893s-1.065-.4-1.065-.893s.477-.893 1.065-.893s1.065.4 1.065.893"/><path d="M33.932 25.87c.292-1.264 1.673-2.182 3.283-2.182c1.779 0 3.245 1.113 3.335 2.53m-2.57.112c.684.301 1.231.778 1.55 1.349m-4.981-1.269a3.7 3.7 0 0 1 1.338-.404"/></g></svg>
                        Iniciar sesión
                    </NavLink>
                    <NavLink to="/register" className={styles.opNavs} onClick={handleLinkClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><path fill="none" stroke="#2583db" stroke-linecap="round" stroke-linejoin="round" d="M22.417 24.596c.766-.936 6.478-4.56 10.959-4.107c0 0-1.402 4.73-10.363 5.95m-9.423-2.955c-.042-.66 3.34-8.765 7.444-9.594c.575 3.126-3.403 7.763-4.339 8.571" stroke-width="1"/><path fill="none" stroke="#2583db" stroke-linecap="round" stroke-linejoin="round" d="M15.164 22.738a6.3 6.3 0 0 0-3.615 2.765a17 17 0 0 0-.936 3.042c-.192.51-1.255 1.956-1.213 2.956s.404 4.105 4.594 5.487s6.913.681 7.955-.83a1.354 1.354 0 0 0-.744-2.254a1.805 1.805 0 0 0-2.276 1.914c-.042 1.913 2.358 1.024 2.358 1.024" stroke-width="1"/><path fill="none" stroke="#2583db" stroke-linecap="round" stroke-linejoin="round" d="M9.727 30.235c.152-.317 1.233-.48 1.148 1.476s-.932 1.85-1.26 1.139m14.545-6.593c.576 1.458 1.3 4.202-.743 8.052m-6.48-12.074c1.162.035 4.156.405 5.775 2.07m8.394-5.385l-.16-.563l1.595-.415" stroke-width="1"/><path fill="none" stroke="#2583db" stroke-linecap="round" stroke-linejoin="round" d="m32.414 19.707l-.213-.691l1.819-.787l-.968-1.999a10 10 0 0 1 2.627-1.117l-.702-2.648a24 24 0 0 1 7.444-2.499s.383-5.381.702-6.966a49 49 0 0 0-6.508 2.637c-1.66 1.021-4.946 3.606-4.946 3.606s1.808 5.2 1.925 5.391l-2.446 1.287l1.224 2.065m-5.63 16.195a28 28 0 0 1-4.92 8.196c-.993.822-2.95 2.481-3.474 2.51s-.525-.071-.525-.071l-.241.184l-.34-.27l-.61.185l-.142-.666s-.666.155-.836-.071s.638-.908.638-.908s.184-4.16 1.645-5.54" stroke-width="1"/><path fill="none" stroke="#2583db" stroke-linecap="round" stroke-linejoin="round" d="M19.306 22.569c1.09-1.915 3.537-4.149 5.749-4.531s6.253.265 7.901 1.978s3.254 5.126 2.659 7.252s-1.287 3-2.606 3.659s-5.296 2.217-6.572 4.086m-16.919-2.56c-.926.551-3.592 3.372-3.946 4.514m.638-.12l-1.333.553l.78.454l-.397.383l.581.113v.284l.369-.071l.128.51h.468a6.5 6.5 0 0 0 .978.113c1.86.006 4.963-1.46 6.147-2.219" stroke-width="1"/><path fill="none" stroke="#2583db" stroke-linecap="round" stroke-linejoin="round" d="m7.16 37.868l-.525.397l.525.227m5.3-2.169a2.39 2.39 0 0 1 .226-2.014c.34-.479.617-.862 1.075-.83a3.245 3.245 0 0 1 2.19 2.914a1.15 1.15 0 0 1-.775.941" stroke-width="1"/><path fill="none" stroke="#2583db" stroke-linecap="round" stroke-linejoin="round" d="M12.321 35.755c.257-.653 2.268-1.453 2.773-1.407m8.192-15.661c1.067.095 4.859 1.048 6.334 2.188m1.835 2.22a6.5 6.5 0 0 1 .661 2.62m-2.829 2.213a12 12 0 0 0-1.627-2.624m-2.89-2.386c-.566-.414-3.844-.61-5.054-.563m9.694-1.422a6.42 6.42 0 0 1-.759 3.954m-10.954-8.782c.53.06 1.38 1.393 1.402 3.45m1.411 10.991l-3.056 1.042m-5.494-3.934l1.006 2.699m.433 1.701l.309.149m4.058-.721c-.117.394-.106 1.914 1.106 1.914s1.319-.925 1.319-1.467a1.29 1.29 0 0 0-.582-1.076m-7.359-2.42a1.27 1.27 0 0 0-.854 1.335c.032.46.393 1.074.776 1.085s.693-.489.666-.844m21.362.088a9 9 0 0 1 1.096.713l-.117.276l.415.543l.478-.766" stroke-width="1"/><path fill="none" stroke="#2583db" stroke-linecap="round" stroke-linejoin="round" d="M35.287 28.286s1.136 1.535 1.21 1.758a5.4 5.4 0 0 1 0 1.106l-.755.242" stroke-width="1"/></svg>
                        Registrarse
                    </NavLink>
                </>
            )}
        </>
    )

    // Componente de lista de opciones *para móvil* (usa un estilo diferente para el ancho completo)
    const MobileNavLinks = () => {
        // Clonamos el componente NavLinks y le aplicamos el estilo mobileNavLink
        return React.Children.map(<NavLinks />, child => {
            if (React.isValidElement(child)) {
                // Para NavLink
                if (child.type === NavLink) {
                    return React.cloneElement(child, {
                        className: styles.mobileNavLink, 
                        // Aseguramos que el SVG mantenga su color y tamaño
                        children: [
                            React.cloneElement(child.props.children[0], { key: 'svg', width: '24', height: '24', viewBox: '0 0 24 24', children: React.Children.map(child.props.children[0].props.children, svgChild => {
                                if (React.isValidElement(svgChild) && svgChild.props.fill === '#2583db') {
                                    return React.cloneElement(svgChild, { fill: 'currentColor' }); // Usar currentColor
                                }
                                if (React.isValidElement(svgChild) && svgChild.props['stroke-width']) {
                                    return React.cloneElement(svgChild, { stroke: 'currentColor' }); // Usar currentColor para trazos
                                }
                                return svgChild;
                            })}),
                            child.props.children[1] 
                        ]
                    });
                }
                // Para el botón de Cerrar Sesión
                if (child.type === 'button') {
                    return React.cloneElement(child, {
                        className: styles.mobileNavLink
                    });
                }
            }
            return child;
        });
    };

    return (
        <nav className={styles.stNav}>

            {/* Bloque del Logo y Título */}
            <div className='w-auto ml-4 flex flex-row items-center cursor-default'>
                <img className='h-15 w-15' src={logo} alt="Logo" />
                <span className={styles.stTitle}>PokeCard...</span>
            </div>

            {/* Botón de Menú Hamburguesa (Visible solo en móvil) */}
            <button className={styles.menuButton} onClick={toggleMenu}>
                {isOpen ? (
                    <XMarkIcon className="h-8 w-8 text-gray-100" /> // Ícono de cerrar (X)
                ) : (
                    <Bars3Icon className="h-8 w-8 text-gray-100" /> // Ícono de menú (hamburguesa)
                )}
            </button>

            {/* Contenedor de las Opciones de Navegación (Escritorio) */}
            <ul className={styles.opNavsContainer}>
                <NavLinks />
            </ul>

            {/* Menú Desplegable (Móvil) */}
            {isOpen && (
                <ul className={styles.mobileMenu}>
                    <MobileNavLinks />
                </ul>
            )}
        </nav>
    )

}
