import React from 'react'
import { redirect } from 'next/navigation';
import User from '../components/user';
import { useSelector, useDispatch } from "react-redux";
import { addUser,getUsers } from "../../store/usersSlice";
const dashboard = (props:any) => {
  // const users  = useSelector(getUsers);
  return (
   <div>fffff</div> 
    // redirect('https://dbdid.dga.or.th/connect/authorize?response_type=code&client_id=5a37367a-b00b-47e8-b5c6-45762063bb89&redirect_uri=http://localhost:8080/itmx/callback/login&scope=openid personal_token juristic_id juristic_name')
   
  )
}



export default dashboard
