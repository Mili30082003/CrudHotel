import React, { createContext, useState } from 'react';
import { roomData } from '../data'; // Asegúrate de que la ruta sea correcta

// Crear el contexto
export const RoomContext = createContext();

// Proveedor del contexto
export const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData); // Inicializa el estado con tus datos de habitaciones

  return (
    <RoomContext.Provider value={{ rooms }}>
      {children}
    </RoomContext.Provider>
  );
};
