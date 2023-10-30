import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function Home() {
    
    const navigate = useNavigate();

    const onClickProfile = (e) => {
        navigate(`/profile`);
      }

      
  return (
    <div className='row'>
        <div className='col-lg-12'>
            <h1>Welcome my home</h1>
            <div className='mb-3'>
                <button type="button" className='btn btn-success' >Log Out</button>
            </div>
           
           <div className=''>
                 <button type="button" onClick={onClickProfile} className='btn btn-danger' >View Profile</button>

           </div>
            
        </div>
    </div>
  )
}
