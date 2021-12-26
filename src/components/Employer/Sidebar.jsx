import React,{useState,useEffect} from 'react';
import "./Sidebar.css";
import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';

const Sidebar = ({leftdisplay,rightdisplay,setleftdisplay}) => {
         const calendorMaxDate = new Date(new Date().setDate(new Date().getDate()+7));
    const [date, setdate] = useState(new Date(new Date().setDate(new Date().getDate()+1)))
     const [mobview, setmobview] = useState(window.innerWidth)
    
    useEffect(() => {
        window.addEventListener("resize" ,function(){
            setmobview(window.innerWidth)
        });
    }, [])


     const handleClick = (e) =>{
                console.log(e)
    }

      const handleNavigationBtnClick =()=>{
        setleftdisplay("-500px")
        document.body.style.overflow ='visible'; 
      }

      const prevBtn = ()=> {
        return (
          <div style={{marginTop:"-10px"}}><i  className="fas fa-angle-left fa-2x" ></i></div>
        
        )}
        const nextBtn = ()=> {
        return (
          <div style={{marginTop:"-10px"}} ><i  className="fas fa-angle-right fa-2x"></i></div>
        
        )}

    return (
        <>
          <section  className={mobview < "1150" ? "mob-employer-left-sidebar" : 'employer-left-sidebar' } style={mobview < "1150" ? {left:leftdisplay} : null }>
            <img className='employer-left-side-bar-logo' src={"./images/Logo-3.png"} alt="" />
            <div className='btn-ic'>
                <a href="#employer-metrics" onClick={handleNavigationBtnClick}><button><i class="fas fa-desktop fa-lg"></i>Metrics</button></a>
                <a href="#employer-redflags" onClick={handleNavigationBtnClick} > <button><i class="fas fa-exclamation-triangle fa-lg"></i>Red Flags</button></a>
               <a href="#kjcnj" onClick={handleNavigationBtnClick} ><button><i class="fas fa-thumbs-up fa-lg"></i>Feedback</button></a>
                <a href="#employer-reports"  onClick={handleNavigationBtnClick}  ><button><i class="fas fa-file-contract fa-lg" onClick={()=>setleftdisplay("-500px")} ></i>Reports</button></a>
                <a href="#employer-campaign"  onClick={handleNavigationBtnClick} ><button><i class="fas fa-bullhorn fa-lg"></i>campaigns</button></a>
                
            </div>
          </section> 

          <section  className={mobview < "1150" ? "mob-employer-right-sidebar" : 'employer-right-sidebar' } style={mobview < "1150" ? {right:rightdisplay} : null }>
            <img  className='employer-right-sidebar-logo'  src={`./images/ellipse.png`} alt="" />

            <div style={{marginBottom:"20px"}} className='employer-right-sidebar-workshop container'>
            <div  >
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
                    className="employee-right-side-bar-calendar"
                  value={date}
                  // minDate={new Date(new Date().setDate(new Date().getDate()+1))}
                  // maxDate={calendorMaxDate}
                  onChange={setdate} 
                  onClickDay={handleClick} 
                  next2Label={null}
                  // tileDisabled={({date})=> date.getDay()===0}
                  prev2Label={null}
                  nextLabel={nextBtn()}
                  prevLabel={prevBtn()}
                  />
            </div>
            {/* <div className='employer-right-sidebar-quarterly-round-up'>
                <p>Quarterly RoundUp of Events</p>
            </div> */}

          </section> 
        </>
    )
}

export default Sidebar
