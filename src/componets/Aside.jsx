import React, { useState, useEffect } from 'react'
import producto1 from '../assets/producto1.webp'
import producto2 from '../assets/producto2.jpg'
import producto3 from '../assets/producto3.webp'
import producto4 from '../assets/producto4.webp'
import producto5 from '../assets/producto5.jpg'
import producto6 from '../assets/producto6.png'
import iconComingSoon from '../assets/icon.jpg'

const styles = {
  stAside: 'bg-gray-50 shadow-lg flex flex-col w-fit h-fit ml-15 mt-15 rounded-2xl p-2',
  stUl: 'flex flex-col gap-5 p-4',
  stLi: 'text-lg text-blue-600 hover:bg-gray-200 p-2 rounded-l-2xl cursor-pointer',
  stActive: 'bg-blue-100 font-bold text-blue-900',
  stContent: 'ml-20 mr-20  mt-10 p-4 rounded-xl shadow-md bg-white w-fit '
}

const Aside = () => {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState('Paquetes')
  const [loading, setLoading] = useState(true)
  const [cartas, setCartas] = useState([]);
  
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

  return (
    <div className="flex flex-row">
      <aside className={styles.stAside}>
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

      <div className={styles.stContent}>
        {opcionSeleccionada === 'Paquetes' && (<div className={styles.stContent}> 
    {opcionSeleccionada === 'Paquetes' && (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {[producto1, producto2, producto3, producto4, producto5, producto6].map((producto, index) => {
        const titulos = [
          "Edición Premium Charizard",
          "Edición Llamas de Obsidiana",
          "Edición Surging Sparks",
          "Edición Vivid Voltage",
          "Edición Platinium Mewtwo",
          "Edición Astral Radiance"
        ]
        const precios = ["64$", "24$", "14$", "24$", "24$", "64$"]

        return (
          <div key={index} className={styles.stDivPr}>
            <img className={styles.stImgPr} src={producto} alt={titulos[index]} />
            <div className={styles.stDivPricesAndTi}>
              <h2 className={styles.sth2}>{titulos[index]}</h2>
              <h2 className="text-gray-50">{precios[index]}</h2>
            </div>
          </div>
        )
      })}
    </div>
  )}

  {opcionSeleccionada === 'Cartas Individuales' && (
    loading ? (
      <div className="flex flex-col justify-center items-center h-40 mt-10 gap-5">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
        <p>Por favor espere mientras las cartas cargan...</p>
      </div>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6 mr-0">
        {cartas.map((card) => (
          <div key={card.id} className={styles.stDivPr}>
            <img src={card.images.small} alt={card.name} className="mx-auto mb-2" />
            <h2 className={styles.sth2}>{card.name}</h2>
          </div>
        ))}
      </div>
    )
  )}

  {opcionSeleccionada === 'Jugetes' && (
    <p className="text-lg font-medium mt-4">Contenido de Juguetes 🧸</p>
  )}


  {opcionSeleccionada === 'Otros Productos' && (
    <p className="text-lg font-medium mt-4">Contenido de Otros Productos 📦</p>
  )}
</div>
)}
        {opcionSeleccionada === 'Cartas Individuales' && (loading ? (
            <div className="flex flex-col justify-center items-center h-40 mt-10 gap-5">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent">
              </div>
              <p>Por favor espere mientras las cartas Cargan...</p>
            </div>) : (<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6 mr-0'>
              {cartas.map((card) => (
                <div key={card.id} className={styles.stDivPr}>
                  <img src={card.images.small} alt={card.name} className="mx-auto mb-2" />
                  <h2 className={styles.sth2}>{card.name}</h2>
                </div>
              ))}
            </div>))}
        {opcionSeleccionada === 'Jugetes' && <div className='flex flex-col justify-center items-center mt-5 gap-5'>
          <img className='w-35 h-35' src={iconComingSoon} alt="" />
          <p>Proximamente... </p></div>}
        {opcionSeleccionada === 'Otros Productos' && <div className='flex flex-col justify-center items-center mt-5 gap-5'>
          <img className='w-35 h-35' src={iconComingSoon} alt="" />
          <p>Proximamente...</p>
          </div>}
      </div>
    </div>
  )
}

export default Aside
 