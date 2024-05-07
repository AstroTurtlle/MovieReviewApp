<<<<<<< HEAD

=======
import { createBrowserRouter } from "react-router-dom";
import {LoginForm} from '../LoginForm/LoginForm.jsx';
import {SignupForm} from '../SignupForm/SignupForm';
import {Homepage} from '../Homepage/Homepage';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


  

const routes = [
    {
        path:"/",
        element: <>
                <Homepage/>
                </>
    },
    {
        path:"/LoginForm",
        element: <>
                <LoginForm/>
                </>
    },
    {
        path:"/RegisterForm",
        element: <>
                <SignupForm/>
                </>
    }
];

export const router = createBrowserRouter(routes);
>>>>>>> 19a08e7 (legaturi front/back pt logare+nav+dependente)
