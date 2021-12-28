import React,{useState,useEffect} from 'react';
import "./Sidebar.css";
import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';

const Sidebar = ({leftdisplay,rightdisplay,setleftdisplay}) => {
         const calendorMaxDate = new Date(new Date().setDate(new Date().getDate()+7));
    const [date, setdate] = useState(new Date(new Date().setDate(new Date().getDate()+1)))
     const [mobview, setmobview] = useState(window.innerWidth)
     const [events, setevents] = useState([])
     const [upload, setupload] = useState(false)
    
    useEffect(() => {
        window.addEventListener("resize" ,function(){
            setmobview(window.innerWidth)
        });
    }, [])


     const handleClick = (v,e) =>{ 
                 const vr = new Intl.DateTimeFormat(
                    "in", 
                    {
                      year: "numeric", 
                      month: "2-digit", 
                      day: "2-digit"
                    }).format(v)
                    console.log(e)

                    
    }

      const prevBtn = ()=> {
        return (
          <div style={{marginTop:"0px",backgrounColor: "#e7e4e4"}}><i  className="fas fa-angle-left fa-2x" ></i></div>
        
        )}
        const nextBtn = ()=> {
        return (
          <div style={{marginTop:"0px"}} ><i  className="fas fa-angle-right fa-2x"></i></div>
        
        )}

    return (
        <>
         

          <section  className={mobview < "1150" ? "mob-employer-right-sidebar" : 'employer-right-sidebar' } style={mobview < "1150" ? {right:rightdisplay} : null }>

             <div className='admin-sidebar-logo-upload'>
                   {upload === true ? null : <p>Upload Logo here</p>}
                  
                   {upload === true ?  <p>Logo Successfully upload</p> :  <label htmlFor="logo-file"style={{textAlign:"center"}}><i class="fas fa-file-upload fa-6x"></i></label> }
                  {upload === true ? <label htmlFor="logo-file" className='change-label'>Change File</label> : null }
                  <input type="file" id='logo-file' style={{display:"none"}}  onChange={()=>setupload(true)} multiple='false' />
              </div>
                    

            <div style={{marginBottom:"20px"}} className='employer-right-sidebar-workshop container'  style={{height:"130px"}}>
            <div  >
              <img  src={'/images/Employer/workshop.png'} alt="" />
              <p>Total workshops / Q1</p>
            </div>
              <input type="number" style={{width:"90px"}} />
            </div>
             <div className='employer-right-sidebar-workshop container' style={{height:"130px"}} >
            <div>
              <img  src={'/images/Employer/session.png'} alt="" />
              <p>Total 1-1 sessions / Q1</p>
            </div>
              <input type="number" style={{width:"90px"}} />
            </div>

            <div>
              <h4 className='coming-events'>Upcoming Events</h4>
              <Calendar
                    className="employee-right-side-bar-calendar"
                  value={date}
                  // minDate={new Date(new Date().setDate(new Date().getDate()+1))}
                  // maxDate={calendorMaxDate}
                  onChange={setdate} 
                  onSelect={handleClick}
                   onClickDay={handleClick}
                  next2Label={null}
                  // tileDisabled={({date})=> date.getDay()===0}
                  prev2Label={null}
                  nextLabel={nextBtn()}
                  prevLabel={prevBtn()}
                  />

                 
            </div>
            <div style={{marginTop:"60px"}}>
              <label htmlFor="event">Event Info/Name:</label>
               <textarea name="" id="" cols="5" rows="5"></textarea>
            </div>
            {/* <div className='employer-right-sidebar-quarterly-round-up'>
                <p>Quarterly RoundUp of Events</p>
            </div> */}

          </section> 
        </>
    )
}

export default Sidebar
