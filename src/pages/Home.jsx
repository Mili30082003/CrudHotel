import React from 'react';
import BookForm from '../components/BookForm';
import Rooms from '../components/Rooms';

const Home = () => {
  return (
    <>
    <div className="containermx-auto">
      <div className='bg-accent/20 mt-4 p-4 lg:shadow-xl lg:absolute lg:-left-0 lg:right-0 lg:p-0 lg:z-30'> 
    <BookForm></BookForm> </div> 
    </div>

      <Rooms />
    </>
  );
};

export default Home;
