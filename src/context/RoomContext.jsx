// RoomContext.jsx
import React, { createContext, useState } from 'react';
import { roomData } from '../data'; // Asegúrate de que la ruta sea correcta

export const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData); // Inicializa el estado con roomData

  return (
    <RoomContext.Provider value={{ rooms }}>
      {children}
    </RoomContext.Provider>
  );
};
