import React from 'react';
import Content from './Content';
import "./Employer.css"
import Sidebar from './Sidebar';

const Employer = () => {
    return (
        <>
        <div className='employer'>
         <Sidebar />
         <Content />   
         </div>
        </>
    )
}

export default Employer
