import React,{useState,useEffect} from 'react'
import Sidebar from './Sidebar'
import {useParams} from "react-router-dom"
import Register from "./Pages/Register"
import "./Admin.css"
import Employer from "./Employer/Employer"
import Bookings from './Pages/Bookings'
import AdminCard from './AdminCard'


const Admin = () => {

    const {id} = useParams()
    const [left, setleft] = useState("-500px")
    const [mobview, setmobview] = useState(window.innerWidth)
    
    useEffect(() => {
        window.addEventListener("resize" ,function(){
            setmobview(window.innerWidth)
            console.log(mobview)
        });
    }, [])
    // console.log(id)



    switch (id) {
        case "employer":
             return (<>
                <div className='admin'>
                
                    <Employer />   
                </div>
                </>)
         case "register":       
            return (<>
                <div className='admin'>
                    <Sidebar mobview={mobview} />
                    <Register />   
                </div>
                </>)
        case "booking":
            return (<>
                <div className='admin'>
                  <div className={mobview< "500" ? 'employer container' :"employer"}>
                  <div style={{postion:"relative"}}>
                    <i 
                    className="fas fa-chevron-circle-right fa-3x" 
                    id="navbar"
                    style={mobview < "1150" ?{display:"block",position:"fixed",top:"15px",left:"0",right:"0",zIndex:"999",width:"100%",paddingBottom:"15px"} : {display:"none"}}></i>  
            </div>
            </div>
                    <Sidebar mobview={mobview}  />
                    <Bookings /> 
                </div>
                </>)
        default:
            return (<>
                <div className='admin'>
                    <Sidebar mobview={mobview}  />  
                </div>
                </>)
    }

   }

export default Admin
