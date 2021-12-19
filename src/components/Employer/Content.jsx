import React,{useState,useEffect} from 'react'
import "./Content.css"
import ApexCharts from 'apexcharts'
import Chart from "react-apexcharts"
import  Carousel  from 'react-elastic-carousel'

const Content = ({setdisplay}) => {

         const [mobview, setmobview] = useState(window.innerWidth)
    
    useEffect(() => {
        window.addEventListener("resize" ,function(){
            setmobview(window.innerWidth)
        });
    }, [])

 

    const cardTitle ={
        one:"No. of Sessions availed / Q1 ",
        two:"No. of first time consults / Q1 ",
        three:"No. of employees in therapy / Q1 ",
        four:"Total Hours of wellness Training / Q1 ",
        five:"Total Hours of wellness Training / Q1 "
    }

    const chartTitle = {
        one:"“I found the workshop topic to be relevant”",
        two:"“I have the tools to tackle tough situations”",
        three:"“I gained good perspective on mental health”",
        four:"“The workshop motivates me to work better”"
    }

    const breakPoints = [
        {width:"1", 
        itemsToShow:1},
        {width:550, itemsToShow:1},
        {width:768, itemsToShow:3}

    ]

    const reviewTitle ={
        one:"Average Session Rating / Q1",
        two:"Average Workshop Rating / Q1"
    }

    // jasncsCN
      const series = [
    //will be displayed on the y-axis
      66,44
    
  ];
  const options = {
    chart: {
      id: "simple-bar"
    },
    xaxis: {
      categories: [1, 2, 3, 4] //will be displayed on the x-asis
    },
    colors:["#629F72","#FFFFFF"],
    legend: {
    show:false
  },
  };
      const CardbStyle = {
            width:"231px", 
            position: "relative",
            textAlign: "center",
            background: "#eaebef",
            borderRadius:"18px",
            padding: "0"

    }

    const Cardb = ({date,title}) =>{
        return(
            <div  style={CardbStyle} className='employee-newsletter' >
                <img style={{width:"230px"}} src={`./images/category/newsletter.png`} alt="" />
                <div>
                    <p className='newsletter-date' >{date}</p>
                    <p  className='newsletter-title' >{title}</p>
                    <button>Show More</button>
                </div>
            </div>
        )
    }

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
                <div className='col row well-being'>
                    <div className='col'>
                    <img src={imgSrc}  alt="" />
                    <h5 className='wellbeing-card-title'>{title}</h5>
                    </div>
                    <h5 className='col wellbeing-card-caption' style={{backgroundColor:color}} >{caption}</h5>
                </div>
              
         )
     }

     const Averages = ({title,color}) =>{
         return(
             <div className='col employer-averages'>
                   <h6 style={{color:"#858386",textAlign:"center"}}>{title}</h6>
                   {color === "green"? <Chart options={options} type="donut" series={series}  width="150px"  /> :
                   <Chart options={{
                       legend:{
                           show:false
                       },
                       colors:["#EA1300","#FFFFFF"]
                   }} type="donut" series={series}  width="150px"  />
                   }
            </div>
         )
     } 

          const SessionCard = ({cardTitle,number})=>{
        return(
            <div className='session-card'>
                <h6>{cardTitle}</h6>
                <p>{number}</p>
            </div>
        )
     }
     const SessionChart = ({chartTitle,chartimgSrc})=>{
            return(
                <div className='col session-chart'>
                    <h6>{chartTitle}</h6>
                    <Chart options={{
                       legend:{
                           show:false
                       },
                       stroke:{
                           show:false
                       },
                       colors:["#FFAB7F","#CEADEA"],
                       
                   }} type="pie" series={series}  width="180px"  />
                </div>
            )
     }

     const SessionBottom = ({reviewTitle,bottomimgSrc})=>{
         return(
             <div className='session-review row'>
                 <div className='session-review-stars col'>
                     <h6>{reviewTitle}</h6>
                     <img src={bottomimgSrc} className='img-fluid' alt="" />
                 </div>
                 <div className='col-lg-8 review-text' style={{marginBottom:"80px"}}>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
                 </div>
             </div>
         )
     }

     const Session = ({cardTitle,number,reviewTitle,bottomimgSrc,chartimgSrc,chartTitle,workshop})=>{
        if(workshop !== "true"){
             return(
            <>
            <div className='row'>
                <SessionCard cardTitle={cardTitle.one}   number={number} />   
                <SessionCard cardTitle={cardTitle.two}   number={number} />
                <SessionCard cardTitle={cardTitle.three} number={number} />
            </div>

            <div className='row'>
                <SessionChart chartTitle={chartTitle.one}   chartimgSrc={chartimgSrc} />
                <SessionChart chartTitle={chartTitle.two}   chartimgSrc={chartimgSrc}  />
                <SessionChart chartTitle={chartTitle.three} chartimgSrc={chartimgSrc}  />
                <SessionChart chartTitle={chartTitle.four}  chartimgSrc={chartimgSrc} />
            </div>

            <div>
                <SessionBottom reviewTitle={reviewTitle.one} bottomimgSrc={bottomimgSrc} />
            </div>
             </>
        )
        }
        return(
                <>
            <div className='row'>
                <SessionCard cardTitle={cardTitle.four}   number={number} />   
                <SessionCard cardTitle={cardTitle.five}   number={number} />
            </div>

            <div className='row'>
                <SessionChart chartTitle={chartTitle.one}   chartimgSrc={chartimgSrc} />
                <SessionChart chartTitle={chartTitle.two}   chartimgSrc={chartimgSrc}  />
                <SessionChart chartTitle={chartTitle.three} chartimgSrc={chartimgSrc}  />
                <SessionChart chartTitle={chartTitle.four}  chartimgSrc={chartimgSrc} />
            </div>

            <div>
                <SessionBottom reviewTitle={reviewTitle.two} bottomimgSrc={bottomimgSrc} />
            </div>
             </>
        )
       
       
     }



    return (
        <> 
            
           <section className='employer-content' style={mobview < "1150" ? {margin:"0"} : null} >
           <div className='employer-welcome-head row' style={mobview < "1150" ? {margin:"0"} : null} >
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
               <Averages color="green" title="Average well-being Levels"/>
               <Averages color="red" title="Average Stress"/>
               <Averages color="red" title="Average Fatigue"/>
               <Averages color="red" title="Average Work-stress"/>
           </div>
           </div>

           <div className='employer-redflags row'>
                 <h3>Employee Mental Health Red Flags</h3>
                <Chart type='polarArea' options={{
                    stroke: {
                   colors: ['#fff']
                   },
                    fill: {
                        opacity: 0.8
                    },
                    legend:{
                        show:false
                    } 
                }} series={[14, 23, 21, 17, 15, 10, 12, 17, 21]}
                width="400px" 
                  className='col'  
                />
                <div className='col'>
                    <img src={`./images/Employer/rectangle.png`} style={{width:"300px" ,height:"280px"}}  alt="" />
                </div>
           </div>
           <div className='employer-session'>
                    <h2>1-1 Sessions Usage & Feedback</h2>
                <div className='employer-session-img-wrap'>
                    <img className="employer-session-img" src={`./images/Employer/sess-work.png`} alt="" />
                </div>
                <div>
                    <Session 
                    cardTitle={cardTitle}
                    chartTitle={chartTitle}
                    reviewTitle={reviewTitle}
                    chartimgSrc={`./images/Employer/chart-img.png`}
                    bottomimgSrc={`./images/Employer/stars.png`}
                    number={35}
                    workshop="false"
                />
                </div>
                
           </div>
        <div className='employer-workshop'>
                <h2>Workshop Usage & Feedback</h2>
                <div className='employer-session-img-wrap'>
                    <img className="employer-session-img" src={`./images/Employer/sess-work.png`} alt="" />
                </div>
                <div>
                      <Session 
                cardTitle={cardTitle}
                chartTitle={chartTitle}
                reviewTitle={reviewTitle}
                chartimgSrc={`./images/Employer/chart-img.png`}
                bottomimgSrc={`./images/Employer/stars.png`}
                number={35}
                workshop="true"
            />
                </div>
          
            </div>
            <div className='employer-reports'>
                <h2>Employee Mental Well-being Reports</h2>
                <form className='row'>
                    <div className='col'>
                        <label htmlFor="type">Report Type:</label>
                        <select name="" id="">
                            <option value=""></option>
                        </select>
                    </div>

                     <div className='col'>
                        <label htmlFor="type">Report Frequency:</label>
                        <select name="" id="">
                            <option value=""></option>
                        </select>
                    </div>
                </form>
                <div style={{marginTop:"50px"}}>
                     <Carousel breakPoints={breakPoints}>
                        <img style={{marginLeft:"20px",width:"220px"}} src={`./images/Employer/employee-report.png`}  />
                        <img style={{marginLeft:"20px",width:"220px"}} src={`./images/Employer/employee-report.png`}  />
                        <img style={{marginLeft:"20px",width:"220px"}} src={`./images/Employer/employee-report.png`}  />
                </Carousel>
                </div>
            </div>
            <div style={{marginTop:"150px"}}>
                 <Carousel breakPoints={breakPoints}>
                    
                          <Cardb date="Jan 2022" title="Why Mental illness" />
                        <Cardb date="Feb 2022" title="Manage Your Stress" />
                         <Cardb date="Mar 2022" title="Declutter Your Minf" />
                    
                </Carousel>
            </div>
           </section> 

        </>
    )
}

export default Content
