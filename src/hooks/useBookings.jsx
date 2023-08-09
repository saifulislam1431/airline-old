import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { userContext } from '../Auth/Auth';

const useBookings = () => {
    const {user} = useContext(userContext);
        const{data: bookings = [] , isLoading: loading , refetch} = useQuery({
            queryKey:["user-bookings",user?.email],
            queryFn: async()=>{
                const res = await fetch(`http://localhost:5000/user-bookings?email=${user?.email}`);
                return res.json()
            }
        })
    
        return [bookings, loading ,refetch]
  
};

export default useBookings;