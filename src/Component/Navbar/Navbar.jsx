import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/airplane.png";
import { userContext } from '../../Auth/Auth';
import { toast } from 'react-toastify';
const Navbar = () => {
    const { user,logOUt } = useContext(userContext);
    const handleOut = () =>{
        logOUt()
        .then(()=>{
            toast('Log Out Successful', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        })
    }
    const navItems = <>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "default")}>Home</NavLink></li>
        <li><NavLink to="/flights" className={({ isActive }) => (isActive ? "active" : "default")}>Flights</NavLink></li>
        <li><NavLink to="/offers" className={({ isActive }) => (isActive ? "active" : "default")}>Offers</NavLink></li>
        <li><NavLink to="/support" className={({ isActive }) => (isActive ? "active" : "default")}>Support</NavLink></li>
        
        {
            user ?
                <div className="inline-flex items-center gap-2">
                    <img src={user.photoURL} className='w-10 rounded-full'/>
                    <button className='myBtn' onClick={handleOut}>Log Out</button>
                </div>
                : <Link to="/login">

                    <button className="myBtn" >Login</button>

                </Link>
        }
    </>
    return (
        <div className='z-50 sticky top-0 bg-sky-300 bg-opacity-20 shadow-md'>
            <div className="navbar  z-50 mb-10">
                <Link to="/" className='navbar-start inline-flex items-center gap-2 lg:hidden'>
                    <img src={logo} alt="Logo" className='w-12' /> <p>
                        <span className='brandTitle text-2xl font-bold text-neutral'>SkyZen</span> <br /> <span className='font-semibold text-xs'>Journey through the sky</span>
                    </p>
                </Link>
                <div className="navbar-end lg:navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to="/" className='lg:inline-flex items-center gap-2 hidden'>
                        <img src={logo} alt="Logo" className='w-12' /> <p>
                            <span className='brandTitle text-2xl font-bold text-neutral'>SkyZen</span> <br /> <span className='font-semibold text-xs'>Journey through the sky</span>
                        </p>
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;