import { createBrowserRouter, Navigate } from "react-router-dom";
import App from './App';
import Deshboard from './views/Dashboard';
import Surveys from './views/Surveys';
import Login from './views/Login';
import SignUp from './views/SignUp';
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";


const router = createBrowserRouter([
    {
        path:'/',
        element: <DefaultLayout/>,
        children:[
            {
                path:'/dashboard',
                element:<Navigate to="/" />
            },
            {
                path:'/',
                element:<Deshboard />
            },
            {
                path:'/survey',
                element:<Surveys />
            },
        ]
    },
    {
        path:'/',
        element:<GuestLayout />,
        children:[
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/signUp',
                element:<SignUp />
            },
        ]
    }
])

export default router;