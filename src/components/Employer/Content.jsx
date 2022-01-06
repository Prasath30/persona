import React,{useState,useEffect} from 'react'
import "./Content.css"
import Chart from "react-apexcharts"
import  Carousel  from 'react-elastic-carousel'


const Content = ({setdisplay}) => {

         const [mobview, setmobview] = useState(window.innerWidth)
         const [reportImg, setreportImg] = useState('')
    
    useEffect(() => {
        window.addEventListener("resize" ,function(){
            setmobview(window.innerWidth)
        });
    }, [])

 

    const cardTitle ={
        one:"Total Sessions Availed",
        two:"Total First Time Consults",
        three:" Total Hours of Training ",
        four:"No. of Employees attended",
        // five:"Total Hours of wellness Training / Q1 "
    }

    const chartTitle = {
        one:"“I felt better after the session” ",
        two:"“I gained more clarity on my problems” ",
        three:"“I know strategies to handle my problems”",
        four:"“I feel motivated to improve my well-being”"
    }

    const breakPoints = [
         {width:1, 
        itemsToShow:1},
        {width:550, itemsToShow:1},
        {width:600, itemsToShow:2},
         {width:768, itemsToShow:3}, 
    ]

    const reviewTitle ={
        one:"Average Session Rating / Q1",
        two:"Average Workshop Rating / Q1"
    }

    // jasncsCN
      const series = [66];
  const options = {
    chart: {
      id: "simple-bar"
    },
    xaxis: {
      categories: [1, 2, 3, 4] //will be displayed on the x-asis
    },
     plotOptions:{
        radialBar:{
            dataLabels:{
                name:{
                    show:false
                }
            }
        }
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
                <img style={{width:"230px"}} src={`./images/category/newsletter.png`} alt="newslettre" />
                <div>
                    <p className='newsletter-date' >{date}</p>
                    <p  className='newsletter-title' >{title}</p>
                    <button>Read</button>
                </div>
            </div>
        )
    }

    const PackageCard = ({imgSrc , title,caption}) =>{
        return (
                 <div className={mobview < "1360" ? 'package-card col-lg-3 col-md-4 col-sm-6' :"package-card col-sm"}>
                  <div>
                      <img src={imgSrc} className='img-fluid' alt="package" /> 
                      <h6>{title}</h6>
                  </div>
                  <h6>{caption}</h6>
              </div> 
        )
    }
     const WellbeingCard = ({imgSrc,title,caption,color}) => {
         return(
                <div  className={mobview < "1140" ? 'col-sm-6 col-md-4 row well-being' : 'col-sm row well-being' } >
                    <div className='col'>
                    <img src={imgSrc}  alt='well-being' className='img-fluid' />
                    <h5 className='wellbeing-card-title'>{title}</h5>
                    </div>
                    <h5 className='col  wellbeing-card-caption' style={{backgroundColor:color}} >{caption}</h5>
                </div>
              
         )
     }

     const Averages = ({title,color}) =>{
         return(
             <div className='col-lg-3 col-md-6 col-sm-12 employer-averages'>
                   <h6 style={{color:"#858386",textAlign:"center"}}>{title}</h6>
                   {color === "green"? <Chart options={options} type="radialBar" series={series}  width="200px"  /> :
                   <Chart options={{
                       legend:{
                           show:false
                       },
                       
                       
                       plotOptions:{
                            radialBar:{
                                dataLabels:{
                                    name:{
                                        show:false
                                    }
                                }
                            }
                       },
                       colors:["#EA1300","#FFFFFF"]
                   }} type="radialBar" series={series}  width="200px"  />
                   }
            </div>
         )
     } 

          const SessionCard = ({cardTitle,number})=>{
        return(
            <div className='session-card col-sm'>
                <h6>{cardTitle}</h6>
                <p>{number}</p>
            </div>
        )
     }
     const SessionChart = ({chartTitle,chartimgSrc})=>{
            return(
                <div className='col-lg-3 col-md-6 col-sm-12 session-chart'>
                    <h6>{chartTitle}</h6>
                    <Chart options={{
                       legend:{
                           show:false
                       },
                       stroke:{
                           show:false
                       },
                       colors:["#CEADEA","#FFAB7F"],
                        states:{
                            hover:{
                                typeof:"none"
                            }
                        }, 
                      labels:["Yes","No"],
                      tooltip:{
                          y:{
                              formatter: (labels) =>{
                                return "yes"
                              }
                          }
                      }
                   }} type="pie"  series={[60,40]}   width="180px"  />
                   
                </div>
            )
     }

     const SessionBottom = ({reviewTitle,bottomimgSrc})=>{
         return(
            <div className='session-review-stars col-sm'>
                     <h6>{reviewTitle}</h6>
                     <img src={bottomimgSrc} className='img-fluid' alt='session-bottom' />
            </div>
         )
     }

     const Session = ({cardTitle,number,reviewTitle,bottomimgSrc,chartimgSrc,chartTitle,workshop})=>{
        if(workshop !== "true"){
             return(
            <>
            <div className='row session-card-wrap M-0'>
                <SessionCard cardTitle={cardTitle.one}   number={number} />   
                <SessionCard cardTitle={cardTitle.two}   number={number} />
                <SessionBottom reviewTitle={reviewTitle.one} bottomimgSrc={bottomimgSrc} />
                
            </div>

            <div className='row M-0'>
                <SessionChart chartTitle={chartTitle.one}   chartimgSrc={chartimgSrc} />
                <SessionChart chartTitle={chartTitle.two}   chartimgSrc={chartimgSrc}  />
                <SessionChart chartTitle={chartTitle.three} chartimgSrc={chartimgSrc}  />
                <SessionChart chartTitle={chartTitle.four}  chartimgSrc={chartimgSrc} />
            </div>

            {/* <div className='M-0'>
                <SessionBottom reviewTitle={reviewTitle.one} bottomimgSrc={bottomimgSrc} />
            </div> */}
             </>
        )
        }
        return(
                <>
            <div className='row session-card-wrap'>

                <SessionCard cardTitle={cardTitle.three}   number={number} />   
                <SessionCard cardTitle={cardTitle.four}   number={number} />
                <SessionBottom reviewTitle={reviewTitle.two} bottomimgSrc={bottomimgSrc} />

            </div>

            <div className='row'>

                <SessionChart chartTitle={chartTitle.one}   chartimgSrc={chartimgSrc} />
                <SessionChart chartTitle={chartTitle.two}   chartimgSrc={chartimgSrc}  />
                <SessionChart chartTitle={chartTitle.three} chartimgSrc={chartimgSrc}  />
                <SessionChart chartTitle={chartTitle.four}  chartimgSrc={chartimgSrc} />

            </div>


             </>
        )
       
       
     }

     const CarouselImg = ({imgSrc})=>{
         return(
             <div>
                 {/* <a class="my-link" href="image01-big.jpg"><img src="image01-small.jpg" alt="image alt"/></a>
<a class="my-link" data-vbtype="iframe" href="http://example.com/">open iFrame</a> */}
                <button type="button" class="btn" data-toggle="modal" data-target="#exampleModalCenter" onClick={()=>setreportImg(imgSrc)} >
                <img style={{marginLeft:"20px",width:"220px"}} className='img-fluid' src={imgSrc} alt='report'  />
                </button>
             </div>
         )
     }



    return (
        <> 
            
           <section className='employer-content' style={mobview < "1150" ? {margin:"0"} : null} >
           <div className='employer-welcome-head row M-0' style={mobview < "1150" ? {margin:"0"} : null} >
                <img src={`./images/Employer/welcome-head.png`} className='img-fluid col-lg-5'  alt='welcome head' />
                <div className='col'>
                    <h6>
                       Hi! Welcome back to your 
                    </h6>
                    <h2>
                        Mental Well-being Suite
                    </h2>
                </div>
           </div>

           <div className='employer-package-sec row M-0'>
            <div className={mobview < "1350" ? 'package-card col-lg-3 col-md-4 col-sm-6' :"package-card col-sm"}>
                  <div>
                     
                      <img src={`./images/Employer/package/duration.png`} className='img-fluid' style={{color:"#753188"}} alt="" />
                      <h6>Wellness package</h6>
                  </div>
                  <h6>Persona Enhance</h6>
            </div> 
             <div className={mobview < "1350" ? 'package-card col-lg-3 col-md-4 col-sm-6' :"package-card col-sm"}>
                  <div>
                     
                     <img src={`./images/Employer/package/personal.png`} className='img-fluid' style={{color:"#753188"}} alt="" />
                      <h6>Duration</h6>
                  </div>
                  <h6>3 Months</h6>
            </div> 
            {/* <PackageCard imgSrc={`./images/Employer/package/loan.png`}   title="" caption="" />
            <PackageCard imgSrc={`./images/Employer/package/one.png`}   title="" caption="" /> */}
            <PackageCard imgSrc={`./images/Employer/package/three.png`} title="Billing Date" caption="XX-XX-XXX" />     
            <PackageCard imgSrc={`./images/Employer/package/four.png`}  title="Billing Amount" caption="XX-XX-XXX" />
           </div>
            
            <div id="employer-metrics" className='employer-wellbeing M-0'>
           <div className='employe-well-being row M-0'>

                <WellbeingCard color="#F30909" imgSrc={`./images/Employer/high-risk.png`} title="High-risk" caption="x% of Employees" />
                <WellbeingCard color="#FCD423" imgSrc={`./images/Employer/md-risk.png`} title="Medium-risk" caption="x% of Employees" />
                <WellbeingCard color="#53BB2F" imgSrc={`./images/Employer/low-risk.png`} title="Low-risk" caption="x% of Employees" />
               
           </div>
           <div className='row M-0'>
               <Averages color="green" title="Average well-being Levels"/>
               <Averages color="red" title="Average Stress"/>
               <Averages color="red" title="Average Fatigue"/>
               <Averages color="red" title="Average Work-stress"/>
           </div>
           </div>

           <div id="employer-redflags" className='employer-redflags row M-0'>
                 <h3>Employee Mental Health Red Flags</h3>
                <Chart type='pie' className="text-start" options={{
                    stroke: {
                   colors: ['#fff']
                   },
                    fill: {
                        opacity: 0.8
                    },
                    legend:{
                        show:true,
                        position: 'left',
                        horizontalAlign: 'center',  
                    },
                    colors:["#2A3067","#4D73CF","#DA9133","#666666","#D2CA26","#7892FF","#76A355"],
                    
                    labels:["Sleep Issues","Work Stress","Conflict with Colleagues","Lack of Motivation","Feeling Overwhelmed","Low Mood","Physical Fatigue"]
                    
                    
                }} series={[10, 20, 30, 10, 15, 10, 10]}
                
                width={mobview < 500 ? "350px": "400px"  }
                  className='col redglag-chart'  
                />
                <div className='col'>
                    <img src={`./images/Employer/rectangle.png`} style={{width:"300px" ,height:"280px"}}  alt='rect'  />
                </div>
           </div>
           <div id="employer-feedback" className='employer-session M-0'>

                    <h2>1-1 Sessions Usage & Feedback</h2>
                
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
        <div id='employer-workshop' className='employer-workshop M-0'>
                <h2>Workshop Usage & Feedback</h2>

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
            <div className='employer-bottom'>
                <div id="employer-reports" className='employer-reports M-0'>
                <h2>Employee Mental Well-being Reports</h2>
                <form className='row'>
                    <div className='col'>
                        <label htmlFor="type" style={{paddingRight:"15px"}}>Report Type:</label>
                        <select name="" id="">
                            <option value=""></option>
                        </select>
                    </div>

                     <div className='col'>
                        <label htmlFor="type" style={{paddingRight:"15px"}}>Report Frequency:</label>
                        <select name="" id="">
                            <option value="">Quarterly</option>
                            <option value="">Half-Yearly</option>
                            <option value="">Annualy</option>
                        </select>
                    </div>
                </form>
                <div style={{marginTop:"50px"}}>
                     <Carousel breakPoints={breakPoints}>
                        
                        <CarouselImg imgSrc={`./images/Employer/employee-report.png`} /> 
                         <CarouselImg imgSrc={`./images/Employer/employee-report.png`} /> 
                          <CarouselImg imgSrc={`./images/Employer/employee-report.png`} /> 
                </Carousel>
                </div>
            </div>
            

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <img src={reportImg} alt="" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <a style={{color:"white",textDecoration:"none"}}  class="btn btn-primary" href={reportImg} download={reportImg}>Download</a>
      </div>
    </div>
  </div>
</div>
            <div id='employer-campaign' style={{marginTop:"150px"}} className='employer-campaign M-0'>
                        <h2>Employee Mental Well-being Campaigns</h2>
                 <Carousel breakPoints={breakPoints}>
                    
                          <Cardb date="Jan 2022" title="Why Mental illness" />
                        <Cardb date="Feb 2022" title="Manage Your Stress" />
                         <Cardb date="Mar 2022" title="Declutter Your Minf" />
                    
                </Carousel>
            </div>
            </div>
            
           </section> 

        </>
    )
}

export default Content
