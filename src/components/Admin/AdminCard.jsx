import React from 'react'
import "./Admin.css"
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const AdminCard = ({user}) => {

        const history = useNavigate()

        const handleClick = (route)=>{
            history(route)
        }
        // console.log(user)

    return (
        <>  
            

            <section className='admin-card-wrap container'>

                 <div className='admin-card' onClick={()=>handleClick("/admin/booking")}>
                    <div>
                        <img src={`/images/Admin/book.png`} alt="" />
                    </div>
                    
                         
               <h3 className='admin-card-btn' >Booking</h3>
                
           
                    
                    
                </div>
                
                <div className='admin-card ' onClick={()=>handleClick("/admin/register")} >
                    <div>
                        <img src={`/images/Admin/reg.jpg`}  alt="" />
                    </div>
                         <h3 className='admin-card-btn' >Register</h3>
                </div>
                
     
                 {user ?  <div className='admin-card' onClick={()=>handleClick("/admin/employer")} >
                    <div>
                        <img src={`/images/Admin/employer.jpg`} alt="" />
                    </div>
                
                      <h3 className='admin-card-btn' >Employer</h3>
                   
                </div> :
                 <div className='admin-card' onClick={()=>handleClick("/admin/employer")} >
                    <div>
                        <img src={`/images/Admin/employer.jpg`} alt="" />
                    </div>
                
                      <h3 className='admin-card-btn' >User</h3>
                   
                </div>
                }
                <div className='admin-card' onClick={()=>handleClick("/admin/professional")} >
                    <div>
                        <img src={`/images/Admin/professional.png`}  alt="" />
                    </div>
                        <h3 className='admin-card-btn' >Professional</h3>
                </div>
            
            

               
              
            </section> 
        </>
    )
}

export default AdminCard
