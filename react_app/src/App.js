/*import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Components/Router/Router';

function App() {
  return ( <RouterProvider router = {router} />
  
  )
}

export default App;*/

import React, { useEffect } from 'react';
import AppRoutes from './components/Router';

function App() {
  useEffect(() => {
    // Clear localStorage
    // localStorage.clear();
  }, []);

  return <AppRoutes />;
}

export default App;
