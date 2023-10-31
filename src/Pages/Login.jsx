import React, { useState } from 'react';
import {login} from "../Features/userSlice"
import '../Assets/styles/pageCss/login.css'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import the useHistory hook




export default function Login() {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const navigate = useNavigate(); // Initialize useHistory

    const dispatch =useDispatch();

   const  handleSubmit = (e) => {
 
    e.preventDefault();
    dispatch(
        login({
            name:name,
            email:email,
            password:password,
            loggedIn:true,
        }));
        navigate("/home");
   };

   



  return (
    <div className='row '>
        <div className="col-lg-12">  
            <div className="row">
               <div className='col-lg-12 layout'>
                   <form  className='' action="" method="post" onSubmit={(e) =>handleSubmit(e)}>
                       <h3 className='mb-3 mt-5'>Login</h3>

                       <div className='form-group mb-3'>
                            <label htmlFor="" className='form-lable'> Name</label>
                            <input type="text" name='name' onChange={(e) => setName(e.target.value)} required autocomplete="off" className='form-control' id="name" />
                        </div>
                        <div className='form-group mb-3'>
                            <label htmlFor="" className='form-lable'>User email</label>
                            <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} required autocomplete="off" className='form-control' id="email" />
                        </div>
                        <div className='form-group mb-3'>
                            <label htmlFor="" className='form-lable'>Password</label>
                            <input type="password" name='password' onChange={(e) => setPassword(e.target.value)} required autocomplete="off"  className='form-control' id="password" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                 </form>
              </div>
            </div>
        </div>
    </div>
  )
}
