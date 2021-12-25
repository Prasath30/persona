import React from 'react'
import "./Admin.css"

const AdminCard = () => {



    return (
        <>
            <section className='admin-card-wrap container'>
            <div className='row'>
                 <div className='admin-card col-6'>
                    <div>
                        <img src={`/images/Admin/booking.jpg`} className='img-fluid' alt="" />
                    </div>
                    <button>
                        Go to Register
                    </button>
                </div>
                <div className='admin-card col-6'>
                    <div>
                        <img src={`/images/Admin/register.png`} className='img-fluid' alt="" />
                    </div>
                    <button>
                        Go to Register
                    </button>
                </div>
            </div>

            <div className='row'>
                  <div className='admin-card col-6'>
                    <div>
                        <img src={`/images/Admin/employer.jpg`} className='img-fluid' alt="" />
                    </div>
                    <button>
                        Go to Register
                    </button>
                </div>
                <div className='admin-card col-6'>
                    <div>
                        <img src={`/images/Admin/professional.png`} className='img-fluid' alt="" />
                    </div>
                    <button>
                        Go to Register
                    </button>
                </div>
            </div>
               
              
            </section> 
        </>
    )
}

export default AdminCard
