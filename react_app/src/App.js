import logo from './logo.svg';
import './App.css';

import { RouterProvider } from 'react-router-dom';
import { router } from './Components/Router/Router';
import { LoginForm } from './Components/LoginForm/LoginForm';
function App() {
  return ( <RouterProvider router = {router} />
  
  )
}

export default App;
