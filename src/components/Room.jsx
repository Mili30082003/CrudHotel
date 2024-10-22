// Room.jsx
import React from 'react';

const Room = ({ room }) => {
  return (
    <div>
      <h3>{room.name}</h3> {/* Asegúrate de que cada objeto `room` tenga una propiedad `name` */}
      <p>ID: {room.id}</p> {/* Puedes agregar más detalles aquí */}
    </div>
  );
};

export default Room;
