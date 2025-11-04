import React, { useEffect, useState } from 'react';
import fondo from '../assets/fondoPage.png';
import producto1 from '../assets/producto1.webp';
import producto2 from '../assets/producto2.jpg';
import producto3 from '../assets/producto3.webp';
import producto4 from '../assets/producto4.webp';
import producto5 from '../assets/producto5.jpg';
import producto6 from '../assets/producto6.png';
import Buttom1 from '../componets/Buttom1';

const productos = [
  { img: producto1, nombre: "Edición Premium Charizard", precio: 64, descripcion: "Una edición exclusiva con cartas raras de Charizard y accesorios." },
  { img: producto2, nombre: "Edición Llamas de Obsidiana", precio: 24, descripcion: "Cartas de fuego poderosas de la edición Obsidiana." },
  { img: producto3, nombre: "Edición Surging Sparks", precio: 14, descripcion: "Cartas eléctricas brillantes en esta colección especial." },
  { img: producto4, nombre: "Edición Vivid Voltage", precio: 24, descripcion: "Pokémon energéticos y coloridos en una edición inolvidable." },
  { img: producto5, nombre: "Edición Platinium Mewtwo", precio: 24, descripcion: "Mewtwo en su forma más poderosa en esta edición Platino." },
  { img: producto6, nombre: "Edición Astral Radiance", precio: 64, descripcion: "Una edición mística con Pokémon de luz y energía." }
];

const styles = {
  stP1: 'text-2xl font-semibold text-wrap text-center text-gray-50',
  sth1: 'text-4xl font-semibold text-[#04295e]',
  stDiv1: 'ml-15 mt-20 flex flex-col',
  stDiv2: 'bg-gray-50 shadow-md',
  stImgPr: 'w-75 h-75 mx-auto',
  stDivPr: 'bg-white rounded-xl shadow-md p-0 text-center pt-8 hover:scale-102 cursor-pointer',
  sth2: 'font-bold text-lg text-gray-50',
  stDivPricesAndTi: 'flex flex-row justify-between p-4 mt-2 bg-[#04295e] rounded-b-2xl',
  modalBg: 'fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-40 flex justify-center items-center',
  modalContent: 'bg-white p-8 rounded-xl shadow-lg z-50 max-w-lg w-full'
};

const Inicio = () => {
  const [cartas, setCartas] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  useEffect(() => {
    const getCards = async () => {
      try {
        const res = await fetch('https://api.pokemontcg.io/v2/cards', {
          headers: { 'X-Api-Key': '002e315d-1a24-4410-af17-539b03a2bde6' }
        });
        const data = await res.json();
        setCartas(data.data.slice(0, 3));
      } catch (error) {
        console.error('Error al cargar las cartas:', error);
      }
    };

    getCards();
  }, []);

  const abrirModal = (producto) => {
    setProductoSeleccionado(producto);
  };

  const cerrarModal = () => {
    setProductoSeleccionado(null);
  };

  return (
    <div>
      <div className='flex flex-col items-center'>
        <img src={fondo} alt="fondo" />
      </div>

      <div className='flex justify-center bg-blue-600 p-4'>
        <p className={styles.stP1}>
          ¡Compra tus cartas Pokémon aquí y ahora! Encuentra la colección perfecta, aprovecha los mejores precios.
        </p>
      </div>

   
      <div className={styles.stDiv1}>
        <h1 className={styles.sth1}>Lo que ofrecemos</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-6 mr-15'>
          {productos.map((prod, index) => (
            <div key={index} className={styles.stDivPr} onClick={() => abrirModal(prod)}>
              <img className={styles.stImgPr} src={prod.img} alt={prod.nombre} />
              <div className={styles.stDivPricesAndTi}>
                <h2 className={styles.sth2}>{prod.nombre}</h2>
                <h2 className='text-gray-50'>${prod.precio}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.stDiv1}>
        <h1 className={styles.sth1}>Diferentes Cartas Pokémon</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-6 mr-15'>
          {cartas.map((card) => (
            <div key={card.id} className={styles.stDivPr}>
              <img src={card.images.small} alt={card.name} className="mx-auto mb-2" />
              <h2 className={styles.sth2}>{card.name}</h2>
            </div>
          ))}
        </div>
      </div>

      {productoSeleccionado && (
        <div className={styles.modalBg} onClick={cerrarModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={productoSeleccionado.img} alt={productoSeleccionado.nombre} className="w-40 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">{productoSeleccionado.nombre}</h2>
            <p className="text-gray-700 mb-4">{productoSeleccionado.descripcion}</p>
            <p className="text-lg font-semibold text-blue-700 mb-4">${productoSeleccionado.precio}</p>
            <Buttom1 title = 'Comprar'/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inicio;
