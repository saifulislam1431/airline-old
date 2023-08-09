import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from "../../assets/airplane.png";
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [isAdmin] = useAdmin();
    return (
<div className="drawer lg:drawer-open z-0">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet />
    <label htmlFor="my-drawer-2" className="btn btn-secondary drawer-button lg:hidden">Open drawer</label>
    <div className="drawer-side hidden lg:block absolute top-0 left-0 h-full">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-60 h-full bg-base-200 text-base-content">


<li className='mt-14'>
<Link to="/" className='inline-flex items-center gap-2'>
                    <img src={logo} alt="Logo" className='w-10' /> <p>
                        <span className='brandTitle text-2xl font-bold text-neutral'>SkyZen</span> 
                    </p>
                </Link>
</li>

<div className="divider"></div>

    {
      isAdmin ? <>
      <li>
      <NavLink to="/dashboard/manageBook" className={({isActive}) => (isActive ? "nav-side-active" : "nav-side")}>Manage Bookings</NavLink>
    </li>
    <li>
      <NavLink to="/dashboard/manageUsers" className={({isActive}) => (isActive ? "nav-side-active" : "nav-side")}>Manage Users</NavLink>
    </li>
    <li>
      <NavLink to="/dashboard/manageFlights" className={({isActive}) => (isActive ? "nav-side-active" : "nav-side")}>Manage Flights</NavLink>
    </li>
      </> : 
    <li>
    <NavLink to="/dashboard/userDash" className={({isActive}) => (isActive ? "nav-side-active" : "nav-side")}>Manage Bookings</NavLink>
  </li>
    }

<div className="divider"></div>


<li><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "default")}>Home</NavLink></li>
        <li><NavLink to="/flights" className={({ isActive }) => (isActive ? "active" : "default")}>Flights</NavLink></li>
    </ul>
  </div>
  </div> 
  
</div>
    );
};

export default Dashboard;