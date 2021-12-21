import React from 'react'
import Sidebar from './Sidebar'
import {useParams} from "react-router-dom"
import Register from "./Pages/Register"
import "./Admin.css"


const Admin = () => {

  
    return (
    <>
    <div className='admin'>
        <Sidebar />
        <Register />
    </div>
    
    </>

    )}

export default Admin
