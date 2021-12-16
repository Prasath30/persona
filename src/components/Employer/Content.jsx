import React from 'react'
import "./Content.css"

const Content = () => {


    const PackageCard = ({imgSrc , title,caption}) =>{
        return (
                 <div className='package-card col'>
                  <div>
                      <img src={imgSrc} alt="" /> 
                      <h6>{title}</h6>
                  </div>
                  <h6>{caption}</h6>
              </div> 
        )
    }
     const WellbeingCard = ({imgSrc,title,caption,color}) => {
         return(
                <div className='col row'>
                    <div className='col'>
                    <img src={imgSrc} className='img-fluid' alt="" />
                    <h5 className='wellbeing-card-title'>{title}</h5>
                    </div>
                    <h5 className='col wellbeing-card-caption' style={{backgroundColor:color}} >{caption}</h5>
                </div>
              
         )
     }

     const Averages = ({title,imgSrc}) =>{
         return(
             <div className='col'>
                   <h6 style={{color:"#858386",textAlign:"center"}}>{title}</h6>
                   <img src={imgSrc} className='img-fluid' alt="" />
            </div>
         )
     } 

          const SessionCard = ({cardTitle,number})=>{
        return(
            <div>
                <h6>{cardTitle}</h6>
                <p>{number}</p>
            </div>
        )
     }
     const SessionChart = ({chartTitle,imgSrc})=>{
            return(
                <div>
                    <h6>{chartTitle}</h6>
                    <img src={imgSrc} alt="" />
                </div>
            )
     }

     const SessionBottom = ({reviewTitle,imgSrc})=>{
         return(
             <div>
                 <div>
                     <h6>{reviewTitle}</h6>
                     <img src={imgSrc} alt="" />
                 </div>
                 <div>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
                 </div>
             </div>
         )
     }

     const Session = ()=>{
        return(
            <>
            <div>
                <SessionCard />   
                <SessionCard />
                <SessionCard />
            </div>

            <div>
                <SessionChart />
                <SessionChart />
                <SessionChart />
                <SessionChart />
            </div>

            <div>
                <SessionBottom />
            </div>
        </>
        )
     }



    return (
        <> 
           <section className='employer-content' >
           <div className='employer-welcome-head row'>
                <img src={`./images/Employer/welcome-head.png`} className='img-fluid col-lg-5' alt="" />
                <div className='col'>
                    <h6>
                       Hi! Welcome back to your 
                    </h6>
                    <h2>
                        Mental Well-being Suite
                    </h2>
                </div>
           </div>

           <div className='employer-package-sec row'>
            <PackageCard imgSrc={`./images/Employer/package/one.png`}   title="Wellness package" caption="Persona Enhance" />
            <PackageCard imgSrc={`./images/Employer/package/two.png`}   title="Duration" caption="3 Months" />
            <PackageCard imgSrc={`./images/Employer/package/three.png`} title="Billing Date" caption="XX-XX-XXX" />     
            <PackageCard imgSrc={`./images/Employer/package/four.png`}  title="Billing Amount" caption="XX-XX-XXX" />
           </div>
            
            <div className='employer-wellbeing'>
           <div className='employe-well-being row'>

                <WellbeingCard color="#F30909" imgSrc={`./images/Employer/high-risk.png`} title="High-risk" caption="x% of Employees" />
                <WellbeingCard color="#FCD423" imgSrc={`./images/Employer/md-risk.png`} title="Medium-risk" caption="x% of Employees" />
                <WellbeingCard color="#53BB2F" imgSrc={`./images/Employer/low-risk.png`} title="Low-risk" caption="x% of Employees" />
               
           </div>
           <div className='row'>
               <Averages imgSrc={`./images/Employer/avg-wells.png`}  title="Average well-being Levels"/>
               <Averages imgSrc={`./images/Employer/avg-stress.png`} title="Average Stress"/>
               <Averages imgSrc={`./images/Employer/avg-stress.png`} title="Average Fatigue"/>
               <Averages imgSrc={`./images/Employer/avg-stress.png`} title="Average Work-stress"/>
           </div>
           </div>

           <div className='employer-redflags row'>
                    <h3>Employee Mental Health Red Flags</h3>
                <img src={`./images/Employer/redflag.png`} className='img-fluid col' style={{width:"300px" ,height:"280px"}} alt="" />
                <div className='col'>
                    <img src={`./images/Employer/rectangle.png`} style={{width:"300px" ,height:"280px"}}  alt="" />
                </div>
           </div>
           <div className='employer-session'>
                <img src={`./images/Employer/sess-work.png`} alt="" />
                <Session />
           </div>
           </section> 

        </>
    )
}

export default Content
