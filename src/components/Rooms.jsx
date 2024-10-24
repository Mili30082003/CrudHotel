import React, { useContext } from 'react';
import { RoomContext } from '../context/RoomContext';
import Room from './Room'; // Ensure this path is correct
import '../index.css';



const Rooms = () => {
  const { rooms } = useContext(RoomContext);
   
  return (
    <section className='py-24'>
      <div className='container mx-auto lg:px-0'>
    {/* grid */}
    <div className='grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:max-0'> 
    {rooms.map((room)=> {
        return <Room room={room} key={room.id}></Room>
      })}
      </div>
    
      </div>
    </section>
  );
};

export default Rooms;
