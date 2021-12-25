import React from 'react';
import "./Sidebar.css";
import { Link } from 'react-router-dom';

const Sidebar = ({mobview}) => {
  // console.log(mobview)
    return (
        <>
          <section className='admin-sidebar' style={mobview < "1150" ? {display:"none"}: {display:'block'}}>
            <div>
                <Link className='admin-links' to="/admin/register" ><button>Register </button></Link> 
                <Link className='admin-links' to="/admin/booking" ><button>Booking</button></Link>
                <Link className='admin-links' to="/admin/employer" ><button>Employers</button></Link>
              <Link className='admin-links' to="/admin/professionals"><button>Professionals</button></Link>
            </div>
          </section>  
        </>
    )
}

export default Sidebar
