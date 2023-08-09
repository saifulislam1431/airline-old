import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFlights from '../../hooks/useFlights';
import { userContext } from '../../Auth/Auth';
import axios from 'axios';
import Swal from 'sweetalert2';

const BookPage = () => {

    const{user} = useContext(userContext);
    const {id} = useParams();
    const [flights] = useFlights();
    const selectedFlight = flights.find(fl=>fl._id === id);

    const[category,setCategory] = useState("")
    const[singlePrice, setSinglePrice] = useState(0);
    const[quantity, setQuantity] = useState(0);
    

   

    useEffect(()=>{
if(category === "Business"){
    setSinglePrice(selectedFlight?.price.business_class)
}else if(category==="Economic"){
    setSinglePrice(selectedFlight?.price.economic_class)
}
    },[category])
    
    const handleKeyUp = (e) => {
        setQuantity(parseInt(e.target.value));
      };


      const handleBook = async(e)=>{
        e.preventDefault()

        const flightName = selectedFlight.flight_name;
        const passenger = user.displayName;
        const email = user.email;
        const from = selectedFlight.from;
        const to = selectedFlight.to;
        const date = selectedFlight.departure_time;
        const total = e.target.totalPrice.value;
        
        const newDetails = {
            flightName,
            passenger,
            email,
            from,
            to,
            date,
            category,
            quantity,
            total,
            status: "pending"
        }

        const res = await axios.post("http://localhost:5000/bookings",newDetails)
        if(res.data.insertedId){
            Swal.fire({
  title: 'Success!',
  text: 'Booking Confirm!',
  icon: 'success',
  confirmButtonText: 'Cool'
})
        }
      }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className='absolute top-36'>
                <h1 className="text-3xl font-bold text-accent">Book Your Flight And Enjoy A Nice Journey With {selectedFlight.flight_name}</h1>
            </div>
        <div className="hero-content flex-col lg:flex-row gap-14">
          <img src={selectedFlight.image} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
      <form onSubmit={handleBook} className="card-body">
        <div className="form-control flex flex-row gap-10">
        <div>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" 
          name="name"
          className="input input-bordered" defaultValue={user.displayName} disabled={true}/>
          </div>
          <div>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" 
          name='email'
          placeholder="email" className="input input-bordered" defaultValue={user.email} disabled={true}/>
          </div>
        </div>

        <div className="form-control flex flex-row gap-10">
        <div>
          <label className="label">
            <span className="label-text">Destination</span>
          </label>
          <input type="text" 
          name='destination'
          placeholder="destination" className="input input-bordered" defaultValue={`${selectedFlight.from} To ${selectedFlight.to}`} disabled={true}/>
          </div>
          <div>
          <label className="label">
            <span className="label-text">Date and time</span>
          </label>
          <input type="text" 
          name='dateAndTime'
          placeholder="dateAndTime" className="input input-bordered" defaultValue={selectedFlight.departure_time} disabled={true}/>
          </div>
        </div>

        <div className="form-control flex flex-row gap-10">
        <div className='w-full'>
          <label className="label">
            <span className="label-text">Select your category</span>
          </label>
          <div className="dropdown">
  <label tabIndex={0} className="btn m-1 bg-base-200 text-black hover:bg-base-200 w-full">Category Of Tickets</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52">
    <li onClick={()=>setCategory("Business")} className='p-3 hover:bg-primary hover:text-white'>Business</li>
    <li onClick={()=>setCategory("Economic")} className='p-3 hover:bg-primary hover:text-white'>Economic</li>
  </ul>
</div>
          </div>

          <div>
          <label className="label">
            <span className="label-text">Price Per Ticket</span>
          </label>
          <input type="text" 
          name='destination'
          placeholder="destination" className="input input-bordered" value={`${singlePrice}`} disabled={true}/>
          </div>


        </div>

        <div className="form-control flex flex-row gap-10">
   
        <div>
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input type="text" 
          onKeyUp={handleKeyUp}
          name='quantity'
          placeholder="Enter Quantity" className="input input-bordered"/>
          </div>     
          <div>
          <label className="label">
            <span className="label-text">Total Price</span>
          </label>
          <input type="text" 
          name='totalPrice'
          placeholder="Total Price" 
          defaultValue="0"
          value={parseInt(singlePrice) * parseInt(quantity)}
          className="input input-bordered"/>
          </div>
        </div>
        
        <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Confirm Booking" />
        </div>
      </form>
    </div>
  </div>
      </div>   
    );
};

export default BookPage;