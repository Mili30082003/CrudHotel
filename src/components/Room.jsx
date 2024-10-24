import React from 'react';
// Link
import { Link } from 'react-router-dom';
// icons
import { BsArrowsFullscreen } from 'react-icons/bs';

const Room = ({ room }) => {
  const { id, name, image, size, maxPerson, description, price } = room;

  return (
    <div className='bg-white shadow-2xl min-h-[500px] group'>
      {/* Imagen */}
      <div className='overflow-hidden'>
        <img
          className="group-hover:scale-110 transition-all duration-300 w-full"
          src={image}
          alt={`Imagen de la habitación ${name}`} 
        />
      </div>
      {/* Detalles */}
      <div className='bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 flex justify-center items-center uppercase font-territary tracking-[1px] font-semibold text-base'>
        <div className='flex justify-between w-[80%] mx-auto'> 
          {/* Tamaño */}
          <div className='flex items-center gap-x-2'>
            <div className='text-accent'>
              <BsArrowsFullscreen className="text-[10px]" />
            </div>
            <div className='flex gap-x-1'> 
            </div> 
            <div>{size} m²</div> 
          </div>
          {/* Capacidad */}
          <div className='flex items-center gap-x-2'>
            <div>
              Personas: {maxPerson} 
            </div>
          </div>
        </div>
      </div>
     
     
      {/* Nombre y Descripcion */}
      <div className='text-center'>
        <Link to={ `/room/${id}`}>
        <h3 className='h3'>{name}</h3>
        </Link>
        <p className='max-w-[300px] mx-auto mb3 lg:mb-6'>{description.slice(0, 56)}</p>
      </div>
      
      { /* btn */}
      <Link to={ `/room/${id}`} className='btn btn-secondary btn-sm max-w-[240] mx-auto'>Book now from ${price}</Link>

    </div>
  );
};

export default Room;

