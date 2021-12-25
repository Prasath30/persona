import React from 'react'
import "./Admin.css"

const AdminCard = () => {



    return (
        <>
            <section className='admin-card-wrap container'>
     
                 <div className='admin-card'>
                    <div>
                        <img src={`/images/Admin/booking.jpg`} alt="" />
                    </div>
                    <button>
                        Go to Register
                    </button>
                </div>
                
                <div className='admin-card '>
                    <div>
                        <img src={`/images/Admin/register.png`}  alt="" />
                    </div>
                    <button>
                        Go to Register
                    </button>
                </div>
                
     
                  <div className='admin-card'>
                    <div>
                        <img src={`/images/Admin/employer.jpg`} alt="" />
                    </div>
                    <button>
                        Go to Register
                    </button>
                </div>
                <div className='admin-card'>
                    <div>
                        <img src={`/images/Admin/professional.png`}  alt="" />
                    </div>
                    <button>
                        Go to Register
                    </button>
                </div>
            
            

               
              
            </section> 
        </>
    )
}

export default AdminCard
