import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import Offers from './Component/Offers/Offers.jsx';
import Support from './Component/Support/Support.jsx';
import LayOut from './Component/LayOut/LayOut.jsx';
import Login from './Component/Login/Login.jsx';
import Auth from './Auth/Auth.jsx';
import Register from './Component/Register/Register.jsx';
import 'react-toastify/dist/ReactToastify.css';
import Flights from './Component/Flights/Flights.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/offers",
        element: <Offers></Offers>
      },
      {
        path: "/support",
        element: <Support></Support>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/flights",
        element:<Flights></Flights>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth>
      <RouterProvider router={router} />
    </Auth>
  </React.StrictMode>,
)
