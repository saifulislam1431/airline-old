import React from 'react';
import useUsers from '../../hooks/useUsers';
import { HiMiniUserPlus, HiOutlineCheck } from 'react-icons/hi2';
import axios from 'axios';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const [users, ,refetch] = useUsers();
    console.log(users);
    const handleAdmin = async(user) =>{
        const res = await axios.patch(`http://localhost:5000/users/admin/${user._id}`);
        if(res.data.modifiedCount > 0){
         refetch();
         Swal.fire({
             title: 'Success!',
             text: `${user?.name} is an Admin Now!`,
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
                Name
              </th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
      users.map(user=><tr key={user._id}>
          
          <td>
            <div className="flex items-center space-x-3">
              <div>
                <div className="font-bold">{user.name}</div>
              </div>
            </div>
          </td>
          <td>
            {user.email}
          </td>
          <td>{user.role ? user.role : "User"}</td>
          <td>
              {
                  user.role === "admin" ?<button disabled={true} className='bg-green-600 rounded-full disabled:opacity-30'><HiOutlineCheck className='w-7 h-7 text-white'/></button> : <button onClick={()=>handleAdmin(user)} className='bg-green-600 rounded-md px-2 text-white'> Make Admin</button>
              }
          </td>
        </tr>)
      }
            
          </tbody>
          
        </table>
      </div>
    );
};

export default ManageUsers;