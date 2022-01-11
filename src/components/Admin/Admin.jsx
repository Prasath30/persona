import React,{useState,useEffect} from 'react'
import Sidebar from './Sidebar'
import {useParams} from "react-router-dom"
import Register from "./Pages/Register"
import "./Admin.css"
import Employer from "./Employer/Employer"
import Bookings from './Pages/Bookings'
import AdminCard from './AdminCard'
import Professional from './Pages/Professional'
import Campaign from './Pages/Campaign'
import Users from './Pages/Users'


const Admin = () => {

    const {id} = useParams()
    const [left, setleft] = useState("-500px")
    const [leftShow, setleftShow] = useState(false)
    const [mobview, setmobview] = useState(window.innerWidth)
    const [user, setuser] = useState(true)
    const [rightSideDropDown, setrightSideDropDown] = useState("-500px")
    
    useEffect(() => {
        window.addEventListener("resize" ,function(){
            setmobview(window.innerWidth)
            
        });
    }, [])

    const openLeftSidebar =()=>{
          left === "-500px" ?  setleft("0") : setleft("-500px");
        
        setleftShow(!leftShow)
        if(!leftShow){
              document.body.style.overflow ='hidden';
        }else{
           document.body.style.overflow ='visible'; 
        }
    }

    const openRightDropdownForm = () =>{
        console.log("clicked")
        rightSideDropDown === "-500px" ? setrightSideDropDown("0px") : setrightSideDropDown("-500px")
    }
    
    const Navbar = () =>{
        return(<>
           
              <div style={{position:"relative",height:"70px"}} >
                  <div id="navbar" className='admin-panel-navba mob-navbar' >
                   {mobview < "1150" ?  <i className="fas fa-chevron-circle-right fa-3x" style={{paddingTop:"10px",paddingLeft:"15px",color:"#7700BB"}} onClick={openLeftSidebar}></i> : null}
                   <img src={`/images/Logo-3.png`} className='img-fluid admin-panel-navbar-img'  alt="" />
                  <i class="fas fa-user-circle fa-3x admin-nav-icons" onClick={()=>openRightDropdownForm()} style={{padding:"10px 30px 10px 10px",float:"right"}}></i> 
                  
            </div>
              
            </div> 
        </>)
    }

    const AdminForm = ()=>{
        return(
            <>
                <div className='admin-dropdown-form' style={{right:rightSideDropDown}}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input type="text" name='username' />
                    </div>
                    <div>
                      <label htmlFor="password">Password:</label>
                      <input type="password" name='password' />
                    </div>

                    <button >Update</button>
                </div>
            </>
        )
    }

    console.log(user)

    if(!id){
        return(
            <div className='admin'>
                      <Navbar />
                      <AdminForm />
                    <Sidebar mobview={mobview} left={left} setleft={setleft} user={user} setuser={setuser} />  
                    <AdminCard user={user} />
                </div>
        )
    }


    switch (id) {
        case "employer":
             return (<>
                <div className='admin'>
                    <Navbar />
                    <AdminForm />
                    <Sidebar mobview={mobview} left={left} setleft={setleft} user={user} setuser={setuser}  />
                   <Employer />    
                </div>
                </>)
         case "register":       
            return (<>
                <div className='admin'>
                    <Navbar />
                    <AdminForm />
                    <Sidebar mobview={mobview} left={left} setleft={setleft} user={user} setuser={setuser}  />
                    <Register />   
                </div>
                </>)
        case "booking":
            return (<>
                <div className='admin'>
                    
                    <Navbar />
                    <AdminForm />
                    <Sidebar mobview={mobview} left={left} setleft={setleft} user={user} setuser={setuser}  />
                    <Bookings /> 
                </div>
                </>)
         case "professional" :
            return (<>
                <div className='admin'>
                    
                    <Navbar />
                    <AdminForm />
                    <Sidebar mobview={mobview} left={left} setleft={setleft} user={user} setuser={setuser} />
                    <Professional />
                </div>
                </>) 
                
        case "campaign":
            return (
                <>
                   <div className='admin'>
                    
                    <Navbar />
                     <AdminForm />
                    <Sidebar mobview={mobview} left={left} setleft={setleft}  user={user} setuser={setuser} />
                    <Campaign />
                </div>  
                </>
            )
          case "users":
            return (
                <>
                   <div className='admin'>
                    
                    <Navbar />
                     <AdminForm />
                    <Sidebar mobview={mobview} left={left} setleft={setleft}  user={user} setuser={setuser} />
                    <Users />
                </div>  
                </>
            )    
        default:
            return (
            <>
                <div className='admin'>
                    <Sidebar mobview={mobview} left={left} setleft={setleft}  user={user} setuser={setuser} />  
                    <AdminCard user={user} />
                </div>
                </>)
    }

   }

export default Admin
