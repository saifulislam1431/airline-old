import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Lottie from 'lottie-react';
import banner from "../../../public/19080-travel-the-world.json";
import "./Home.css"

const Home = () => {
    return (
<div class="hero min-h-screen bg-sky-100">
  <div class="hero-content flex-col lg:flex-row-reverse w-full">
  <div className='w-1/2'>
  <Lottie animationData={banner} loop={true} className='w-full'/>
  </div>
    <div className='w-1/2'>
      <h1 class="text-5xl font-bold">Discover your dream flight easily</h1>
      <p class="py-6">Effortless Travel Planning and Unforgettable Journeys.Seamless Connections, Exquisite Service, and Unforgettable Adventures: Your Gateway to Effortless Travel Planning and Unparalleled Journeys.</p>
      <Link to="/flights" class="btn btn-primary">Get Started</Link>
    </div>
  </div>
</div>
    );
};   

export default Home;