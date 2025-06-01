import React from 'react'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router";
import Chat from '../pages/Chat';
import Register from '../pages/Register';
import Login from '../pages/Login';

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