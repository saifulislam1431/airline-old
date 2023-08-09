import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useUsers = () => {
    const{data: users = [] , isLoading: loading , refetch} = useQuery({
        queryKey:["all-users"],
        queryFn: async()=>{
            const res = await fetch("http://localhost:5000/all-users");
            return res.json()
        }
    })

    return [users , loading ,refetch]
};

export default useUsers;