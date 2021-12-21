import React,{useState,useEffect} from 'react';
import "./Sidebar.css";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

const Sidebar = ({leftdisplay,rightdisplay}) => {

     const [mobview, setmobview] = useState(window.innerWidth)
    
    useEffect(() => {
        window.addEventListener("resize" ,function(){
            setmobview(window.innerWidth)
        });
    }, [])


    return (
        <>
          <section  className={mobview < "1150" ? "mob-employer-left-sidebar" : 'employer-left-sidebar' } style={mobview < "1150" ? {left:leftdisplay} : null }>
            <img className='employer-left-side-bar-logo' src={"./images/Logo-3.png"} alt="" />
            <div className='btn-ic'>
                <a href="#employer-metrics"><button><img src={`./images/Employer/btn-1-ic.png`} alt="" />Metrics</button></a>
                <a href="#employer-redflags"> <button><img src={`./images/Employer/btn-2-ic.png`} alt="" />Red Flags</button></a>
               <a href="#kjcnj"><button><img src={`./images/Employer/btn-3-ic.jpeg`} alt="" />Feedback</button></a>
                <a href="#employer-reports"><button><img src={`./images/Employer/btn-4-ic.jpeg`} alt="" />Reports</button></a>
                <a href="#employer-campaign"><button><img src={`./images/Employer/btn-5-ic.png`} alt="" />campaigns</button></a>
                
            </div>
          </section> 

          <section  className={mobview < "1150" ? "mob-employer-right-sidebar" : 'employer-right-sidebar' } style={mobview < "1150" ? {right:rightdisplay} : null }>
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
