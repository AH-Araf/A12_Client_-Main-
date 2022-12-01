import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Example from "../../Modal";
import Modal from "../../Modal";

import AddServices from "../../Pages/AddServices";
import AllUsers from "../../Pages/AllUsers";
import Blog from "../../Pages/Blog";
import Header from "../../Pages/Header";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login";
import MyOrder from "../../Pages/MyOrder";
import MyProducts from "../../Pages/MyProducts";
import NotFoundPage from "../../Pages/NotFoundPage";
import Register from "../../Pages/Register";
import Target from "../../Pages/Target";
import Single from "../../Single";
import PrivateRoute from "../PrivateRoute/PrivateRoute";




export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/category'),
            },
            {
                path:'/blog',
                element: <Blog></Blog>,
            },
            {
                path:'/login',
                element: <Login></Login>,
            },
            {
                path:'/register',
                element: <Register></Register>,
            },
            {
                path:'/addservices',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/category'),
            },
            {
                path: '/allmobile/:id',
                element: <PrivateRoute><Single></Single></PrivateRoute>,
                loader: async ({params}) =>  fetch(`http://localhost:5000/allmobile/${params.id}`)
            },   
            {
                path: '/allUsers',
                element: <PrivateRoute><AllUsers></AllUsers></PrivateRoute>,
                loader: async ({params}) =>  fetch(`http://localhost:5000/users`)
            }, 
            {
                path: '/myOrder',
                element: <PrivateRoute><MyOrder></MyOrder></PrivateRoute>,
                
            }, 
           {
                path:'/target',
                element:<Target></Target>,
                loader: () => fetch('http://localhost:5000/users'),

           },
           {
            path: '/allmobile',
            element: <Example></Example>,
            
        },  
        {
            path: '/myProducts',
            element: <MyProducts></MyProducts>,
            loader: () => fetch('http://localhost:5000/allmobile'),
            
        }
        ]
    },
    {path: '*', 
    element: <NotFoundPage></NotFoundPage>}
])