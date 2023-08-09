import React from 'react';
import useAllBooking from '../../hooks/useAllBooking';
import { HiOutlineCheck, HiXMark } from 'react-icons/hi2';
import axios from 'axios';
import Swal from 'sweetalert2';

const ManageBook = () => {
    const[allBookings, ,refetch] = useAllBooking();
    const handleUpdate = async(id) =>{
        const updateData = {
            status: "approved"
          }
          const res = await axios.patch(`http://localhost:5000/approved-ticket/${id}`, updateData)
    if (res.data.modifiedCount > 0) {
      refetch()
      Swal.fire({
        title: 'Success!',
        text: "Ticket Approved",
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    }
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
allBookings.map(booking=><tr key={booking._id}>
    
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
        {
            booking.status === "pending" ?<button onClick={()=>handleUpdate(booking._id)} className='bg-green-600 rounded-full'><HiOutlineCheck className='w-7 h-7 text-white'/></button> : <p className='font-bold text-green-600'>Done</p>
        }
    </td>
  </tr>)
}
      
    </tbody>
    
  </table>
</div>
    );
};

export default ManageBook;