import React from 'react';
import useFlights from '../../hooks/useFlights';
import { HiPencilSquare, HiPlus, HiXMark } from 'react-icons/hi2';
import Swal from 'sweetalert2';

const ManageFlights = () => {
    const [flights, ,refetch] = useFlights();
    console.log(flights);
    const handleDelete =(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/delete-flights/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: 'Deleted!',
                                text: 'Deleted Successfully',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            })
                        }
                    })
            }
        })
        
    }
    return (
        <div className="overflow-x-auto ml-36 my-20">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          Flights
        </th>
        <th>Passenger</th>
        <th>Price</th>
        <th>Date And Time</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
flights.map(flight=><tr key={flight._id}>
    
    <td>
      <div className="flex items-center space-x-3">
        <div>
          <div className="font-bold">{flight.flight_name}</div>
          <div className="text-sm opacity-50">{`${flight.from} To ${flight.to}`}</div>
        </div>
      </div>
    </td>
    <td>
    {flight.capacity}
    </td>
    <td className='font-semibold'>
    <span className="badge badge-ghost badge-sm">Business ${flight.price.business_class}</span>
          <br/>
          <span className="badge badge-ghost badge-sm">Business ${flight.price.economic_class}</span>
        </td>

        <td className='font-semibold'>
    <span className="badge badge-ghost badge-sm">Departure On {flight.departure_time
}</span>
          <br/>
          <span className="badge badge-ghost badge-sm">Arrival On ${flight.arrival_time}</span>
        </td>

    <td>
        <button onClick={()=>handleDelete(flight._id)} className='bg-red-600 rounded-full disabled:opacity-30 '><HiXMark className='w-7 h-7 text-white'/></button>

        <button onClick={()=>handleUpdate(flight._id)} className=' border-green-500 border-2 p-1 rounded-md disabled:opacity-30  ml-3'><HiPencilSquare className='w-6 h-6 text-green-500'/></button>
    </td>
  </tr>)
}
      
    </tbody>
    
  </table>
</div>
    );
};

export default ManageFlights;