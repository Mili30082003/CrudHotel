import React from 'react';
import './App.css';
import Header from './components/commons/Header.jsx';
import Footer from './components/commons/Footer.jsx';
import Home from './pages/Home.jsx';
import RoomDetails from './pages/RoomDetails.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/room/id',
    element: <RoomDetails />,
  },
]);

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;

