import React from 'react'
import Sidebar from './Sidebar'
import {useParams} from "react-router-dom"
import Register from "./Pages/Register"
import "./Admin.css"
import Employer from "./Employer/Employer"
import Bookings from './Pages/Bookings'
import AdminCard from './AdminCard'


const Admin = () => {

    const {id} = useParams()
    console.log(id)




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
                    <Sidebar />
                    <Register />   
                </div>
                </>)
        case "booking":
            return (<>
                <div className='admin'>
                    <Sidebar />
                    <Bookings /> 
                </div>
                </>)
        default:
            return (<>
                <div className='admin'>
                    <Sidebar />  
                </div>
                </>)
    }

   }

export default Admin
