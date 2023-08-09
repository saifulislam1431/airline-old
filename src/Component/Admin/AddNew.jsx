import React from 'react';

const AddNew = () => {
    const handleAdd =(e)=>{
        e.preventDefault();
        const form = e.target;
        const flight_name = form.name.value;
        const image = form.photo.value;
        const capacity = form.capacity.value;
        const price ={
            business_class: parseInt(form.businessPrice.value),
            economic_class: parseInt(form.economicPrice.value)
        };
        const rating = form.rating.value;
        const from = form.from.value;
        const to = form.to.value;
        const departure_time = form.departure.value;
        const arrival_time = form.arrival.value;
        const description = form.message.value;
        const newFlight ={
            flight_name,
            image,
            capacity,
            price,
            rating,
            from,
            to,
            departure_time,
            arrival_time,
            description
        }
        console.log(newFlight);

    }
    return (
        <div>

<h2 className='text-center my-14 text-4xl font-bold'>Add A New Flight</h2>

<form onSubmit={handleAdd} className="mx-auto shadow-xl p-10 rounded-md">
        <div className="form-control flex flex-row gap-10">
        <div>
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Flight Name" 
          name="name"
          className="input input-bordered" />
          </div>
          <div>
          <label className="label">
            <span className="label-text">Capacity</span>
          </label>
          <input type="number" 
          name='capacity'
          placeholder="Capacity" className="input input-bordered" />
          </div>
        </div>

        <div className="form-control flex flex-row gap-10">
        <div>
          <label className="label">
            <span className="label-text">Business Class Price</span>
          </label>
          <input type="number" 
          name='businessPrice'
          placeholder="Price" className="input input-bordered" />
          </div>
          <div>
          <label className="label">
            <span className="label-text">Economic Class Price</span>
          </label>
          <input type="number" 
          name='economicPrice'
          placeholder="Price" className="input input-bordered" />
          </div>
        </div>

        <div className="form-control flex flex-row gap-10">
        

          <div>
          <label className="label">
            <span className="label-text">From</span>
          </label>
          <input type="text" 
          name='from'
          placeholder="From" className="input input-bordered" />
          </div>
          <div>
          <label className="label">
            <span className="label-text">To</span>
          </label>
          <input type="text" 
          name='to'
          placeholder="To" className="input input-bordered" />
          </div>


        </div>

        <div className="form-control flex flex-row gap-10">
   
        <div>
          <label className="label">
            <span className="label-text">Departure Time</span>
          </label>
          <input type="text" 
          name='departure'
          placeholder="Departure Time" className="input input-bordered"/>
          </div>     
          <div>
          <label className="label">
            <span className="label-text">Arrival Time</span>
          </label>
          <input type="text" 
          name='arrival'
          placeholder="Arrival Time" 
          className="input input-bordered"/>
          </div>
        </div>

        <div className="form-control flex flex-row gap-10">
   
        <div >
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" 
          name='rating'
          placeholder="Rating" className="input input-bordered"/>
          </div>     
          <div className='w-[236px] overflow-hidden'>
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="file" 
          name='photo'
          placeholder="Select Photo" 
          className="input input-bordered"/>
          </div>
        </div>

        <div className='w-full'>
        <div className='w-full'>
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea name="message" id="" cols="30" rows="10" className="input input-bordered"></textarea>
          </div>   
        </div>
        
        <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Add Flight" />
        </div>
      </form>
        </div>
    );
};

export default AddNew;