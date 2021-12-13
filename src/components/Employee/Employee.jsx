import React from 'react'
import Content from './Content.jsx'
import  "./Employee.css"
import SideBar from './SideBar'

const Employee = () => {
    return (
        <>
        <section className='employee'>
          <SideBar />  
          <Content />
          </section>
        </>
    )
}

export default Employee
