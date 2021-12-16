import React from 'react';
import "./Sidebar.css";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const Sidebar = () => {



    return (
        <>
          <section className='employer-left-sidebar'>
            <img className='employer-left-side-bar-logo' src={"./images/Logo-3.png"} alt="" />
            <div className='btn-ic'>
                <button><img src={`./images/Employer/btn-1-ic.png`} alt="" />Metrics</button>
                <button><img src={`./images/Employer/btn-2-ic.png`} alt="" />Red Flags</button>
                <button><img src={`./images/Employer/btn-3-ic.jpeg`} alt="" />Feedback</button>
                <button><img src={`./images/Employer/btn-4-ic.jpeg`} alt="" />Reports</button>
                <button><img src={`./images/Employer/btn-5-ic.png`} alt="" />campaigns</button>
            </div>
          </section> 

          <section className='employer-right-sidebar' >
            <img  className='employer-right-sidebar-logo'  src={`./images/ellipse.png`} alt="" />

            <div className='employer-right-sidebar-workshop container'>
            <div>
              <img  src={'./images/Employer/workshop.png'} alt="" />
              <p>Total workshops / Q1</p>
            </div>
              <p>4</p>
            </div>
             <div className='employer-right-sidebar-workshop container'>
            <div>
              <img  src={'./images/Employer/session.png'} alt="" />
              <p>Total 1-1 sessions / Q1</p>
            </div>
              <p>50</p>
            </div>

            <div>
              <h4 className='coming-events'>Upcoming Events</h4>
              <Calendar
              className={"employer-right-sidebar-calendar"} />
            </div>
            <div className='employer-right-sidebar-quarterly-round-up'>
                <p>Quarterly RoundUp of Events</p>
            </div>

          </section> 
        </>
    )
}

export default Sidebar
