import React from 'react';
import useBookings from '../../hooks/useBookings';
import { HiXMark } from 'react-icons/hi2';
import axios from 'axios';
import Swal from 'sweetalert2';

const ManageDash = () => {
    const [bookings, , refetch] = useBookings();
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
                fetch(`http://localhost:5000/deleteBook/${id}`, {
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

<div className="overflow-x-auto ml-36">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          Flights
        </th>
        <th>Passenger</th>
        <th>Status</th>
        <th>Total Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
bookings.map(booking=><tr key={booking._id}>
    
    <td>
      <div className="flex items-center space-x-3">
        <div>
          <div className="font-bold">{booking.flightName}</div>
          <div className="text-sm opacity-50">{`${booking.from} To ${booking.to}`}</div>
        </div>
      </div>
    </td>
    <td>
      {booking.passenger}
      <br/>
      <span className="badge badge-ghost badge-sm">{booking.email}</span>
    </td>
    <td>{booking.status}</td>
    <td>${booking.total}</td>
    <td>
        <button onClick={()=>handleDelete(booking._id)} disabled={booking.status === "approved" ? true : false} className='bg-red-600 rounded-full disabled:opacity-30 '><HiXMark className='w-7 h-7 text-white'/></button>
    </td>
  </tr>)
}
      
    </tbody>
    
  </table>
</div>

    );
};

export default ManageDash;