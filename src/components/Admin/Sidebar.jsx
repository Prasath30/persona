import React from 'react';
import "./Sidebar.css";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
          <section className='admin-sidebar'>
            <div>
                <button><Link to="" />Register</button>
                <button><Link to="" />Booking</button>
                <button><Link to="" />Employers</button>
                <button><Link to="" />Professionals</button>
            </div>
          </section>  
        </>
    )
}

export default Sidebar
