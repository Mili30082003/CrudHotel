import React, { useContext } from 'react';
import { RoomContext } from '../context/RoomContext';

const Rooms = () => {
  const { rooms } = useContext(RoomContext);
  console.log(rooms); // Aquí deberías ver los datos de las habitaciones

  return (
    <div>
      <h2>Rooms</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>{room.name}</li> // Asumiendo que cada habitación tiene un `id` y un `name`
        ))}
      </ul>
    </div>
  );
};

export default Rooms;
