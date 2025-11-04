import React, { useState, useEffect } from 'react'
import producto1 from '../assets/producto1.webp'
import producto2 from '../assets/producto2.jpg'
import producto3 from '../assets/producto3.webp'
import producto4 from '../assets/producto4.webp'
import producto5 from '../assets/producto5.jpg'
import producto6 from '../assets/producto6.png'
import iconComingSoon from '../assets/icon.jpg'

const styles = {
    // 1. Estilos del contenedor principal: 
    //    En escritorio (md+), es una fila. En móvil, es una columna.
    stContainer: 'flex flex-col md:flex-row',

    // 2. Estilos del Aside (Menú de opciones)
    //    - Escritorio (md+): Mantiene el diseño original (ml-15 mt-15)
    //    - Móvil: Ocupa todo el ancho (w-full), sin márgenes superiores o izquierdos.
    stAside: 'bg-gray-50 shadow-lg md:flex md:flex-col w-full md:w-fit h-fit md:ml-15 md:mt-15 md:rounded-2xl p-2',

    // 3. Estilos de la lista (Escritorio)
    //    - Escritorio (md+): Visible (flex flex-col)
    //    - Móvil: Oculto (hidden)
    stUl: 'hidden md:flex md:flex-col gap-5 p-4',

    // 4. Estilos del Select (Móvil): Visible solo en móvil.
    stSelect: 'md:hidden w-full p-2 bg-gray-50 border border-blue-600 text-blue-600 rounded-lg shadow-md',

    // 5. Estilos de los elementos de lista (Mantienen el diseño original)
    stLi: 'text-lg text-blue-600 hover:bg-gray-200 p-2 rounded-l-2xl cursor-pointer',
    stActive: 'bg-blue-100 font-bold text-blue-900',

    // 6. Estilos del Contenido Principal
    //    - Flex-grow para ocupar el espacio restante
    //    - Márgenes adaptados: más pequeños en móvil (m-4) y grandes en escritorio (md:ml-20 md:mr-20 md:mt-10)
    //    - Ancho: Ocupa el ancho máximo.
    stContent: 'm-4 md:ml-20 md:mr-20 md:mt-10 p-4 rounded-xl shadow-md bg-white w-full md:w-fit flex-grow',

    // Estilos de los productos para que sean responsive
    stDivPr: 'flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-sm',
    stImgPr: 'w-full h-auto max-h-56 object-contain mb-3',
    stDivPricesAndTi: 'flex flex-col items-center w-full mt-2',
    sth2: 'text-lg font-semibold text-blue-900 text-center',
}

const Aside = () => {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('Paquetes')
    const [loading, setLoading] = useState(true)
    const [cartas, setCartas] = useState([]);
    
    // Función para manejar el cambio en el select (móvil)
    const handleSelectChange = (event) => {
        setOpcionSeleccionada(event.target.value);
    }

    useEffect(() => {
        const getCards = async () => {
            try {
                const res = await fetch('https://api.pokemontcg.io/v2/cards', {
                    headers: {'X-Api-Key': '002e315d-1a24-4410-af17-539b03a2bde6'}});
                const data = await res.json();
                setCartas(data.data.slice(0, 20));
                setLoading(false)
            } catch (error) {
                console.error('Error al cargar las cartas:', error);
                setLoading(false)
            }
        };

        getCards();
    }, []);     

    const opciones = [
        'Paquetes',
        'Cartas Individuales',
        'Jugetes',
        'Otros Productos'
    ]

    const titulosPaquetes = [
        "Edición Premium Charizard",
        "Edición Llamas de Obsidiana",
        "Edición Surging Sparks",
        "Edición Vivid Voltage",
        "Edición Platinium Mewtwo",
        "Edición Astral Radiance"
    ];
    const preciosPaquetes = ["64$", "24$", "14$", "24$", "24$", "64$"];
    const productos = [producto1, producto2, producto3, producto4, producto5, producto6];

    return (
        // Contenedor principal responsive
        <div className={styles.stContainer}>
            <aside className={styles.stAside}>
                
                {/* Menú Dropdown para Móvil */}
                <select 
                    className={styles.stSelect}
                    value={opcionSeleccionada}
                    onChange={handleSelectChange}
                >
                    {opciones.map((opcion, index) => (
                        <option key={index} value={opcion}>
                            {opcion}
                        </option>
                    ))}
                </select>

                {/* Lista de Navegación para Escritorio */}
                <ul className={styles.stUl}>
                    {opciones.map((opcion, index) => (
                        <li
                            key={index}
                            onClick={() => setOpcionSeleccionada(opcion)}
                            className={`${styles.stLi} ${opcion === opcionSeleccionada ? styles.stActive : ''}`}
                        >
                            {opcion}
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Contenido Dinámico */}
            <div className={styles.stContent}>
                
                {/* Contenido: Paquetes */}
                {opcionSeleccionada === 'Paquetes' && (
                    // Grid: 1 col en móvil, 2 en sm, 3 en md
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                        {productos.map((producto, index) => (
                            <div key={index} className={styles.stDivPr}>
                                <img className={styles.stImgPr} src={producto} alt={titulosPaquetes[index]} />
                                <div className={styles.stDivPricesAndTi}>
                                    <h2 className={styles.sth2}>{titulosPaquetes[index]}</h2>
                                    <h2 className="text-blue-600 font-bold">{preciosPaquetes[index]}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Contenido: Cartas Individuales */}
                {opcionSeleccionada === 'Cartas Individuales' && (
                    loading ? (
                        <div className="flex flex-col justify-center items-center h-40 mt-10 gap-5">
                            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
                            <p>Por favor espere mientras las cartas cargan...</p>
                        </div>
                    ) : (
                        // Grid: 1 col en móvil, 2 en sm, 4 en md
                        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6'>
                            {cartas.map((card) => (
                                <div key={card.id} className={styles.stDivPr}>
                                    <img src={card.images.small} alt={card.name} className="mx-auto mb-2 w-full h-auto object-contain" />
                                    <h2 className={styles.sth2}>{card.name}</h2>
                                </div>
                            ))}
                        </div>
                    )
                )}

                {/* Contenido: Jugetes y Otros Productos (Coming Soon) */}
                {(opcionSeleccionada === 'Jugetes' || opcionSeleccionada === 'Otros Productos') && (
                    <div className='flex flex-col justify-center items-center mt-5 gap-5'>
                        <img className='w-35 h-35' src={iconComingSoon} alt="Próximamente" />
                        <p className="text-xl font-bold text-gray-700">Próximamente...</p>
                    </div>
                )}
                
            </div>
        </div>
    )
}

export default Aside