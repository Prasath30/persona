import React,{useState,useEffect} from 'react'
import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';
import "./SideBar.css"

const SideBar = () => {

    const [date, setdate] = useState(new Date())
    const [category, setcategory] = useState({
        one:"Feeling Stressed",
        two:"Manage Burnout",
        three:"Relationship/People Problems",
        four:"Wish to Feel Good",
        five:"Not Sure what to talk about",
        six:"Need Mental Clarity"
    })
   const [mobview, setmobview] = useState(window.innerWidth)
    
    useEffect(() => {
        window.addEventListener("resize" ,function(){
            setmobview(window.innerWidth)
        });
    }, [])


    const change = (e) =>{
        e.preventDefault();
        console.log(date)
    }

    const handleClick = (e) =>{

    }

    const nextBtn = () =>{

        return (
            <div style={{backgroundColor:"blanchedalmond",width:"16px",height:"16px",borderRadius:"3px",paddingTop:"-10px"}} ><i  class="fas fa-angle-right"></i></div>
        )
    }
    const prevBtn = () =>{
  
        return (
            <div style={{backgroundColor:"blanchedalmond",width:"16px",height:"16px",borderRadius:"4px",paddingTop:"-10px"}} ><i  class="fas fa-angle-left"></i></div>
        )
    }


    return (
        <>
        
          <section   className={ mobview > "900" ? 'employee-left-side-bar'  : null } >
            <img  className={ mobview > "900" ? 'employee-left-side-bar-logo'  : 'mob-employee-left-side-bar-logo img-fluid' } src={`./images/Logo-3.png`} alt="logo"  />
            <div className={ mobview > "900" ? null  : "row mob-employee-left-side-bar" } >
            <div className={ mobview > "900" ? null  : "col-md-6 col-sm-12" } >
                <h6>What you get from our sessions? </h6>
                <ul>
                    <li>Understand your thoughts</li>
                    <li>Make sense of your feelings</li>
                    <li>Explore your personality and understand yourself better</li>
                    <li>Get Tools/ strategies to navigate through stressful situations</li>
                </ul>
            </div>

            <div className={ mobview > "900" ? null  : "col-md-6 col-sm-12" } >
                <h6>Process Flow of Sessions</h6>
                <ul>
                    <li>First session - Discuss the issue and how you would like to benifit from the session</li>
                    <li>Remaining sessions - Typically range from 2-4 sessions where the issue would be discussed in details. Alongside, strategies and tools would be given to help you feel better and function better in personal and professional aspects of life </li>
                </ul>
            </div>
            </div>
          </section>  
            
          <section  className={ mobview > "900" ? 'employee-right-side-bar'  : null } >
              <img   className={ mobview > "900" ? 'employee-right-side-bar-logo' : 'mob-employee-left-side-bar-logo img-fluid' } src={`./images/ellipse.png`} alt="ellipse"  />
              <div className={ mobview > "900" ? null  : 'mob-employee-right-side-bar' } >
                 <h2>Book a session</h2>
              <form action="" className='form'>

              <div className='row mob-employee-right-side-bar-inputs'>
                <div className={ mobview > "900" ? null  : 'form-group col-md-6 col-sm-12' }>
                    <label htmlFor="name">Name</label>
                  <input type="text"  name='name'  size={30}/>
                </div>
                 <div className={ mobview > "900" ? null  : 'form-group col-md-6 col-sm-12' }>
                    <label htmlFor="email">Email id</label>
                  <input type="email"  name='email' size={30} />
                 </div> 
              </div>
                
                  <label htmlFor="calendar">Date:</label>
                  <Calendar 
                  className={ mobview > "900" ? "employee-right-side-bar-calendar"   : "mob-employee-right-side-bar-calendar" }
                  value={date} 
                  onChange={setdate} 
                  onClickDay={handleClick} 
                  next2Label={null}
                  prev2Label={null}
                  nextLabel={nextBtn()}
                  prevLabel={prevBtn()}
                  />
                  <div className={ mobview > "900" ? null  : 'form-group' } >
                    <label htmlFor="time">Time:</label>
                    <input type="time"  name="time" style={{width:"100px"}}/>
                  </div>
                  <div className={ mobview > "900" ? null  : 'form-group'} >
                     <label htmlFor="category">Category:</label>
                      <select name="category" id="" style={{marginBottom:"8px"}}>
                          <option value={category.one} >Feeling Stressed</option>
                          <option value={category.two}>Manage Burnout</option>
                          <option value={category.three}>Relationship/People Problems</option>
                          <option value={category.four}>Wish to Feel Good</option>
                          <option value={category.five}>Not Sure what to talk about</option>
                          <option value={category.six}>Need Mental Clarity</option>
                      </select>
                  </div>
                  <div>
                  <label htmlFor="message">Any Message ?</label>
                  <textarea name="" id="" cols="33" rows="3"></textarea>
                  </div>
                  <div  className={ mobview > "900" ? 'sidebar-form-btn'  : null } >
                    <button type='submit' >Submit</button> 
                  </div>
                     
              </form>
              </div>
             
          </section>
   
        </>
    )
}

export default SideBar
