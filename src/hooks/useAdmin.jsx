import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { userContext } from '../Auth/Auth';
import axios from 'axios';


const useAdmin = () => {

    const { user, loading } = useContext(userContext);
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ["isAdmin", user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/users/admin/${user?.email}`)
            return res.data.admin;

        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;