import React from 'react'
import "./Admin.css"
import { Link } from 'react-router-dom'

const AdminCard = () => {



    return (
        <>
            <section className='admin-card-wrap container'>
     
                 <div className='admin-card'>
                    <div>
                        <img src={`/images/Admin/booking.jpg`} alt="" />
                    </div>
                    
                         
                <Link className='admin-card-btn' to="/admin/booking" >Booking</Link>
                
           
                    
                    
                </div>
                
                <div className='admin-card '>
                    <div>
                        <img src={`/images/Admin/register.png`}  alt="" />
                    </div>
                         <Link className='admin-card-btn' to="/admin/register" >Register</Link>
                   
                </div>
                
     
                  <div className='admin-card'>
                    <div>
                        <img src={`/images/Admin/employer.jpg`} alt="" />
                    </div>
                
                      <Link className='admin-card-btn' to="/admin/employer" >Employers</Link>
                   
                </div>
                <div className='admin-card'>
                    <div>
                        <img src={`/images/Admin/professional.png`}  alt="" />
                    </div>
                   
                           <Link className='admin-card-btn' to="/admin/professional">Professionals</Link>
                   
                </div>
            
            

               
              
            </section> 
        </>
    )
}

export default AdminCard
