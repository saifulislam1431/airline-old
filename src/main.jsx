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
import Dashboard from './Component/Dashboard/Dashboard.jsx';
import ManageBook from './Component/Admin/ManageBook.jsx';
import ManageUsers from './Component/Admin/ManageUsers.jsx';
import ManageFlights from './Component/Admin/ManageFlights.jsx';
import ManageDash from './Component/UserDashboard/ManageDash.jsx';
import PrivateRouter from './Private/PrivateRouter.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import BookPage from './Component/BookPage/BookPage.jsx';
const queryClient = new QueryClient()

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
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/flights",
        element: <Flights></Flights>
      },
      {
        path:"/booking/:id",
        element:<BookPage />
      }
    ]
  },
      {
        path: "/dashboard",
        element: <PrivateRouter><Dashboard /></PrivateRouter>,
        children:[
          {
            path:"manageBook",
            element:<PrivateRouter><ManageBook /></PrivateRouter>
          },
          {
            path:"manageUsers",
            element:<PrivateRouter><ManageUsers /></PrivateRouter>
          },
          {
            path:"manageFlights",
            element:<PrivateRouter><ManageFlights /></PrivateRouter>
          },
          {
            path:"userDash",
            element:<PrivateRouter><ManageDash /></PrivateRouter>
          }
        ]
      }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <Auth>
      <RouterProvider router={router} />
    </Auth>
    </QueryClientProvider>
    
  </React.StrictMode>
)
