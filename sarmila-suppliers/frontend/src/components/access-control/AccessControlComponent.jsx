import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AccessControlComponent = ({Component}) => {
  let token = localStorage.getItem("_sarmila_token");
  let [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  
  useEffect(()=> {
    if(!token){
      navigate("/login")
    } else {
      let user_detail = {
        result: {
          _id: 2, 
          name: "Rajina Maharjan",
          email: "rajinamaharjan@gmail.com",
          role: "admin"
        }
      }
      if(user_detail.result.role !== "admin"){
        toast.warning("You do not have previliage to access admin pannel")
      }
      setLoading(false);
    }
  }, [])
  return loading ? <>Loading...</> : Component
}
