import React, { useContext, useEffect } from 'react';
import { userContext } from '../Auth/Auth';
import { useNavigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const{user,loading} = useContext(userContext);
    const navigate = useNavigate()
    if(loading){
        return (
            <div>Please Wait...</div>
        )
    }
else if(!user){
        useEffect(()=>{        
            return navigate("/login")
        },[!user])
}
   else if(user){
        return children;
    }
};

export default PrivateRouter;