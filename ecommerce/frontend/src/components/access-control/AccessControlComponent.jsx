import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const AccessControlComponent = ({Component}) => {
    let token = localStorage.getItem("_ecomm_token");
    let [loading, setLoading] = useState(true);
    let navigate = useNavigate();
    useEffect(()=>{
      if(!token) {
        navigate("/login")
      } else {
        //API integration for token verification
          //user Role => 
          let user_detail = {
            result: {
              _id: 1,
              name: "Rohan Maharjan",
              email: "rohanmaharjan@gmail.com",
              role: "admin"
            }
          }
          if(user_detail.result.role !== 'admin'){
            toast.warning("You do not have previliage to access admin pannel")
          }
        setLoading(false);
      }
    }, [])

  return loading ? <>Loading...</> : Component
}
