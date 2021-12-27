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


const Admin = () => {

    const {id} = useParams()
    const [left, setleft] = useState("-500px")
    const [leftShow, setleftShow] = useState(false)
    const [mobview, setmobview] = useState(window.innerWidth)
    
    useEffect(() => {
        window.addEventListener("resize" ,function(){
            setmobview(window.innerWidth)
            console.log(mobview)
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
    
    const Navbar = () =>{
        return(
             <div style={mobview < "1150" ? {height:"70px",marginBottom:"10px",background:"rgba(255, 239, 213, 0.3)"} : {display:'none'}}>
                  <div className='mob-navbar' id="navbar" style={mobview < "1150" ?{display:"block",position:"fixed",top:"0",left:"0",right:"0",zIndex:"999",width:"100%",paddingBottom:"15px",} : {display:"none"}} >
                <i className="fas fa-chevron-circle-right fa-3x" style={{paddingTop:"10px",paddingLeft:"15px",color:"#7700BB"}} onClick={openLeftSidebar}></i>
            </div>
            </div>
        )
    }
    // console.log(id)

    if(!id){
        return(
            <div className='admin'>
                      <Navbar />
                    <Sidebar mobview={mobview} left={left} setleft={setleft} />  
                    <AdminCard />
                </div>
        )
    }


    switch (id) {
        case "employer":
             return (<>
                <div className='admin'>
                    <Navbar />
                    <Sidebar mobview={mobview} left={left} setleft={setleft} />
                   <Employer />    
                </div>
                </>)
         case "register":       
            return (<>
                <div className='admin'>
                    <Navbar />
                    <Sidebar mobview={mobview} left={left} setleft={setleft} />
                    <Register />   
                </div>
                </>)
        case "booking":
            return (<>
                <div className='admin'>
                    
                    <Navbar />
                    <Sidebar mobview={mobview} left={left} setleft={setleft} />
                    <Bookings /> 
                </div>
                </>)
         case "professional" :
            return (<>
                <div className='admin'>
                    
                    <Navbar />
                    <Sidebar mobview={mobview} left={left} setleft={setleft} />
                    <Professional />
                </div>
                </>) 
                
        case "campaign":
            return (
                <>
                   <div className='admin'>
                    
                    <Navbar />
                    <Sidebar mobview={mobview} left={left} setleft={setleft} />
                    <Campaign />
                </div>  
                </>
            )
        default:
            return (<>
                <div className='admin'>
                    <Sidebar mobview={mobview} left={left} setleft={setleft} />  
                    <AdminCard />
                </div>
                </>)
    }

   }

export default Admin
