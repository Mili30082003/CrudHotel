import React from 'react';
import './App.css'
// componentes
import Header from './components/commons/Header.jsx';
import Footer from './components/commons/Footer.jsx';

// Pages
import Home from './pages/Home.jsx';
import RoomDetails from './pages/RoomDetails.jsx';

// React Router
import {createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter ( [

  {
    path: '/',
    element : <Home />
  }, 
  {
    path: '/room/id',
    element: <RoomDetails />,
  },
]);


function App() {
 

  return (
    <>
     <Header></Header>
     <RouterProvider router= {router}></RouterProvider>
     <Footer></Footer>
    </>
  )
}

export default App
