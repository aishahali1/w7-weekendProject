import React from 'react'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router";
import Navbar from '../components/Navbar';
import Login from '../pages/login';
import Chat from '../pages/Chat';
import Profile from '../pages/Profile';
import Register from '../pages/Register';

function Layout(){
    return(<>
     <Outlet></Outlet>
     </>
    )
}

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
        {
         path: "/",  element:<Login></Login>
        },
         {
         path: "/register",  element:<Register></Register>
        }, 
         {
         path: "/chat",  element:<Chat></Chat>
        }
    ],
  },
]);

function Router() {
  return (
    <> <RouterProvider router={router} /></>
  )
}

export default Router