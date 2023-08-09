import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useAllBooking = () => {
    const{data: allBookings = [] , isLoading: loading , refetch} = useQuery({
        queryKey:["all-bookings"],
        queryFn: async()=>{
            const res = await fetch(`http://localhost:5000/all-bookings`);
            return res.json()
        }
    })

    return [allBookings, loading ,refetch]
};

export default useAllBooking;