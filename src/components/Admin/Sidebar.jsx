import React from 'react';
import "./Sidebar.css";
import { Link } from 'react-router-dom';

const Sidebar = ({mobview,left,setleft,user,setuser}) => {

 

  // console.log(mobview)

    const handleClick = () =>{
        setleft("-500px")
        document.body.style.overflow ='visible'; 
    }
    // console.log(user)

     
    const handleSelectChnage = (e)=>{
      // e.target.value === "admin" ?  : setuser(false)
              if(e.target.value === "admin"){
                console.log(user,e.target.value)
                setuser(true)
              }else{
                console.log(user,e.target.value)
                setuser(false)
              }
    }
   
         return (
        <>
          <section className='admin-sidebar' style={mobview < 1150 ? {left:left}: null}>
          <div>
            <label htmlFor="admin" className='admin-sidebar-label'>For:</label>
            <select name="" onChange={(e)=>handleSelectChnage(e)}>
              <option value="admin" selected>Admin</option>
              <option value="company-one">Company-one</option>
              <option value="company-two">Company-two</option>
            </select>
          </div>
          { user === true ? <div>
                <Link className='admin-links' to="/admin/register" ><button   onClick={handleClick} >Register </button></Link> 
                <Link className='admin-links' to="/admin/booking" ><button    onClick={handleClick} >Booking</button></Link>
                {/* <Link className='admin-links' to="/admin/employer" ><button   onClick={handleClick} >Employers</button></Link> */}
              <Link className='admin-links' to="/admin/professional"><button onClick={handleClick}    >Professionals</button></Link>
              <Link className='admin-links' to="/admin/campaign"><button onClick={handleClick}    >Campaign</button></Link>
              <Link className='admin-links' to="/admin/users" ><button   onClick={handleClick} >Users</button></Link>
            </div> : 
            <div>
               {/* <Link className='admin-links' to="/admin/register" ><button   onClick={handleClick} >Register </button></Link>  */}
               <Link className='admin-links' to="/admin/booking" ><button    onClick={handleClick} >Booking</button></Link>
               <Link className='admin-links' to="/admin/employer" ><button   onClick={handleClick} >Employers</button></Link>
              {/* <Link className='admin-links' to="/admin/professional"><button onClick={handleClick}    >Professionals</button></Link> */}
              <Link className='admin-links' to="/admin/campaign"><button onClick={handleClick}    >Campaign</button></Link>
            </div>
          } 
          </section>  
        </>
  
     
    )


}

export default Sidebar
