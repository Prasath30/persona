import React from 'react';
import "./Sidebar.css";
import { Link } from 'react-router-dom';

const Sidebar = ({mobview,left,setleft}) => {
  // console.log(mobview)
    return (
        <>
          <section className='admin-sidebar' style={mobview < 1150 ? {left:left}: null}>
            <div>
                <Link className='admin-links' to="/admin/register" ><button   onClick={()=>setleft("-500px")} >Register </button></Link> 
                <Link className='admin-links' to="/admin/booking" ><button    onClick={()=>setleft("-500px")} >Booking</button></Link>
                <Link className='admin-links' to="/admin/employer" ><button   onClick={()=>setleft("-500px")} >Employers</button></Link>
              <Link className='admin-links' to="/admin/professionals"><button onClick={()=>setleft("-500px")}    >Professionals</button></Link>
            </div>
          </section>  
        </>
    )
}

export default Sidebar
