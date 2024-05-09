import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import LoginForm from './Components/LoginForm/LoginForm';
import SignupForm from './Components/SignupForm/SignupForm';
import Homepage from './Components/Homepage/Homepage';
import Router from './Components/Router/Router';

function App() {
  return (
    <div>
      <LoginForm/>
    </div> 
  );
=======

import { RouterProvider } from 'react-router-dom';
import { router } from './Components/Router/Router';
import { LoginForm } from './Components/LoginForm/LoginForm';
function App() {
  return ( <RouterProvider router = {router} />
  
  )
>>>>>>> 19a08e7 (legaturi front/back pt logare+nav+dependente)
}

export default App;
