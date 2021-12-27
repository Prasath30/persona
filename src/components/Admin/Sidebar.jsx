import React from 'react';
import "./Sidebar.css";
import { Link } from 'react-router-dom';

const Sidebar = ({mobview,left,setleft}) => {
  // console.log(mobview)

    const handleClick = () =>{
        setleft("-500px")
        document.body.style.overflow ='visible'; 
    }

    return (
        <>
          <section className='admin-sidebar' style={mobview < 1150 ? {left:left}: null}>
            <div>
                <Link className='admin-links' to="/admin/register" ><button   onClick={handleClick} >Register </button></Link> 
                <Link className='admin-links' to="/admin/booking" ><button    onClick={handleClick} >Booking</button></Link>
                <Link className='admin-links' to="/admin/employer" ><button   onClick={handleClick} >Employers</button></Link>
              <Link className='admin-links' to="/admin/professional"><button onClick={handleClick}    >Professionals</button></Link>
              <Link className='admin-links' to="/admin/campaign"><button onClick={handleClick}    >Campaign</button></Link>
            </div>
          </section>  
        </>
    )
}

export default Sidebar
