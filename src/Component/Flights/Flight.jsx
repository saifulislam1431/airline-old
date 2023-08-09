import React from 'react';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { HiMiniArrowLongRight, HiUserGroup } from "react-icons/hi2";
import { BiSolidPlaneLand, BiSolidPlaneTakeOff } from "react-icons/bi";
import { Link } from 'react-router-dom';
const Flight = ({flight}) => {
    const {_id,image,flight_name,capacity,rating,from,to,departure_time,arrival_time,price} = flight
    return (
        <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={image} alt="Movie" className='lg:h-72 lg:w-72'/></figure>
  <div className="card-body">
    <h2 className="card-title">{flight_name}</h2>
    <div>
<p className='inline-flex items-center gap-2 font-semibold text-info'>{from} <HiMiniArrowLongRight className="w-6 h-6 text-primary"/> {to}</p>
        </div>

<div className='flex my-2 font-semibold'>
<p>Business: ${price.business_class}</p>
<p>Economic: ${price.economic_class}</p>
</div>

    <div className='flex justify-between gap-10'>
<div>
    <p className='inline-flex items-center gap-1 font-medium'><HiUserGroup className="w-6 h-6 text-primary"/> {capacity}</p>
    <p className='inline-flex'>
    {rating}
    <Rating
      style={{ maxWidth: 100 }}
      value={rating}
      readOnly
    />
    </p>
</div>
<div>
 <p className='inline-flex items-center gap-1 font-medium'><BiSolidPlaneTakeOff className="w-6 h-6 text-primary"/> {departure_time}</p>   
 <p className='inline-flex items-center gap-1 font-medium'><BiSolidPlaneLand className="w-6 h-6 text-primary"/> {arrival_time}</p>   
</div>
    </div>
    <Link to={`/booking/${_id}`} className="card-actions justify-end">
      <button className="myBtn">Book A Ticket</button>
    </Link>
  </div>
</div>
    );
};

export default Flight;