import React,{useState,useEffect,useRef} from 'react';
import "./Sidebar.css";
import Calendar from 'react-calendar'
import { render } from '@testing-library/react';
// import 'react-calendar/dist/Calendar.css';

const Sidebar = ({leftdisplay,rightdisplay,setleftdisplay}) => {
         const calendorMaxDate = new Date(new Date().setDate(new Date().getDate()+7));
    const [date, setdate] = useState(new Date(new Date().setDate(new Date().getDate()+1)))
     const [mobview, setmobview] = useState(window.innerWidth)
     const [events, setevents] = useState([])
     const [upload, setupload] = useState(false)
     const [uploadedFileName, setuploadedFileName] = useState('')
     const [imgPreview, setimgPreview] = useState('')
      const ref = useRef()
    
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
                    // console.log(e)
                    console.log(vr)
                    
    }
    const handleFileChallenge = (e)=>{
        console.log("ndjnjajn")
        setupload(true)
        var  Files = e.target.files
        if(Files[1]){
            return true
        }
        setuploadedFileName(Files[0].name)
        let reader = new FileReader();
         reader.onloadend = () =>{
           setimgPreview(reader.result)
         }
        reader.readAsDataURL(Files[0])

    }
 
      const handleRemoveFile = ()=>{
        ref.current.value = "";
        setupload(false)
        setimgPreview("")
    }
      const prevBtn = ()=> {
        return (
          <div style={{marginTop:"0px",backgrounColor: "#e7e4e4"}}><i  className="fas fa-angle-left fa-2x" ></i></div>
        
        )}
        const nextBtn = ()=> {
        return (
          <div style={{marginTop:"0px"}} > <i  className="fas fa-angle-right fa-2x"></i></div>
        
        )}

    return (
        <>
         

          <section  className={mobview < "1150" ? "admin-mob-employer-right-sidebar" : 'admin-employer-right-sidebar' } style={mobview < "1150" ? {right:rightdisplay} : null }>
            <label htmlFor="logo-file"style={{textAlign:"center"}} className='admin-sidebar-logo-upload' style={{background: imgPreview ? `url("${imgPreview}") no-repeat center/cover`: "inherit",height:"182px"}}>
              <div>
                   {upload === true ? null : <p>Upload Logo here</p>}
                  
                   {upload === true ?  null :  <label htmlFor="logo-file"style={{textAlign:"center"}}><i class="fas fa-file-upload fa-6x"></i></label> }
                   
                  <input type="file" ref={ref} id='logo-file' style={{display:"none"}}  onChange={(e)=>handleFileChallenge(e)} multiple={false} />
                   {/* <img className='employer-left-side-bar-logo' src={"./images/Logo-3.png"} alt="" /> */}
              </div>
            </label>
             
                
                {upload === true ? <button className='change-label' onClick={()=>handleRemoveFile()} style={{margin:"auto",marginBottom:"30px"}} >Remove file</button>: null }

            <div style={{marginBottom:"20px",height:"130px",marginTop:"40px"}} className='employer-right-sidebar-workshop container' >
            <div>
              <img  src={'/images/Employer/workshop.png'} style={{color:"white"}} alt="" />
              <p>Total workshops / Q1</p>
            </div>
              <input type="number" style={{width:"90px"}} />
            </div>
             <div className='employer-right-sidebar-workshop container' style={{height:"130px"}} >
            <div>
              <img  src={'/images/Employer/session.png'} alt="" />
              <i class="fas fa-users-class"></i>
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
