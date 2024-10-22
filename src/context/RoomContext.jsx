// Rooms.jsx
import React, { useContext } from 'react';
import { RoomContext } from '../context/RoomContext';
import Room from '../components/Room'; // Asegúrate de que Room está definido

const Rooms = () => {
  const { rooms } = useContext(RoomContext);
  console.log(rooms); // Verifica que rooms tenga datos

  return (
    <div>
      <h2>Rooms</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            <Room room={room} /> {/* Aquí usas el componente Room para mostrar los detalles de cada habitación */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rooms;