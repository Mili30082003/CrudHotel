import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import RoomProvider from './context/RoomContext';

ReactDOM.render(
  <RoomProvider>
    <App />
  </RoomProvider>,
  document.getElementById('root')
);

