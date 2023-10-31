import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {logout} from "../Features/userSlice"


export default function Home() {
    
    const dispatch =useDispatch();

    const handleLogout = (e) => {
      
        e.preventDefault();
        dispatch(logout());    
    }

    const navigate = useNavigate();
    
    const onClickProfile = (e) => {
        navigate(`/profile`);
      }

      const onClickList = (e) => {
        navigate(`/list`);
      }
  return (
    <div className='row'>
        <div className='col-lg-12'>
            <h1>Welcome my home</h1>
            <div className='mb-3'>
                <button type="button" onClick={(e)=> handleLogout(e)}  className='btn btn-success' >Log Out</button>
            </div>     
           <div className='mb-3'>
                 <button type="button" onClick={(e)=> onClickProfile(e)} className='btn btn-danger' >View Profile</button>
           </div>
           <div className=''>
                 <button type="button" onClick={(e)=> onClickList(e)} className='btn btn-primary' >View List</button>
           </div>
            
        </div>
    </div>
  )
}
