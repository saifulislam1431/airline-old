import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Flight from './Flight';
import useFlights from '../../hooks/useFlights';

const Flights = () => {
    const [flights] = useFlights();
    // useEffect(()=>{
    //     fetch("http://localhost:5000/all-flights")
    //     .then(res=>res.json())
    //     .then(data=>setFlights(data))
    // },[])
    return (
        <section className='flex items-center justify-center my-14'>
<div>
<h1 className='text-center font-semibold text-2xl text-accent'>A Comprehensive Guide to Accessing and Presenting Real-time Flight Information</h1>
<div className='my-14 grid grid-cols-1 lg:grid-cols-2 gap-10'>
{
    flights.map(flight=><Flight
    key={flight._id}
    flight={flight}
    ></Flight>)
}
</div>
</div>
        </section>
    );
};

export default Flights;