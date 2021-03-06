import React,{useState,useEffect} from 'react'
import "./Content.css"
import Chart from "react-apexcharts"
import  Carousel  from 'react-elastic-carousel'
import Star from "../Admin/Employer/Star"


const Content = ({leftdisplay,rightdisplay}) => {

         const [mobview, setmobview] = useState(window.innerWidth)
         const [reportImg, setreportImg] = useState('')
         const [ratingOne, setratingOne] = useState("4")
         const [ratingTwo, setratingTwo] = useState("4.5")
    
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
    const chartTitleTwo = {
        one:"“I found the workshop topic to be relevant”",
        two:"“I have the tools to tackle tough situations”",
        three:"“I gained good perspective on mental health”",
        four:"“The workshop motivates me to work better”",
    }

    const breakPointsCarousel = [
         {width:1, 
        itemsToShow:1},
        {width:400, itemsToShow:1},
        {width:500, itemsToShow:2},
         {width:600, itemsToShow:3}, 
    ]
    const breakPointNewsLetter = [
        {width:1, 
        itemsToShow:1},
        {width:450, itemsToShow:1},
        {width:600, itemsToShow:2},
         {width:705, itemsToShow:3}, 
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
                },
                   value:{
                fontSize:"18px"
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
            background:"#fdf7ef",
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
    // className={mobview < "1360" ? 'package-card col-lg-3 col-md-4 col-sm-6' :"package-card col-sm"}




    const PackageCard = ({imgSrc , title,caption}) =>{
        return (
                 <div className={mobview < "1150" ? "col-lg-3 col-md-4 col-sm-6 package-card" : 'col-sm package-card '} style={mobview < "1150" ?{minWidth:"155px",maxWidth:"170px",height:"180px"} : null} >
                  <div className='row' style={{textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"}}>
                      <img  src={imgSrc} className='img-fluid' alt="package" style={ ( "1150" < mobview && mobview < "1300") ? {width:"64px",height:"50px"} : null } /> 
                      <h6 className='col-sm' style={ mobview <"1300" && mobview > "1150" ? {paddingRight:"0",fontSize:"13px"} :{paddingRight:"0"} }>{title}</h6>
                  </div>
                  <h6>{caption}</h6>
              </div> 
        )
    }
     const WellbeingCard = ({imgSrc,title,caption,color}) => {
         return(
                <div  className={mobview < "1140" ? 'col-sm col-lg-3 row well-being' : 'col-sm row well-being' } >
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
             <div className='col-sm-3 employer-averages'>
                   <h6 style={{color:"#00000",textAlign:"center"}}>{title}</h6>
                   {color === "green"? <Chart options={options} type="radialBar"  series={series}  width="200px" /> :
                   <Chart options={{
                       legend:{
                           show:false
                       },
                        
                       plotOptions:{
                            radialBar:{
                                dataLabels:{
                                    name:{
                                        show:false,
                                    },
                                    value:{
                                        fontSize:"18px"
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

     var hp;

     const SessionChart = ({chartTitle,chartimgSrc,value=60})=>{
            return(
                <div className='col-sm-3 session-chart'>
                    <h6>{chartTitle}</h6>
                    <Chart options={{
                       legend:{
                           show:false,
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
                       dataLabels: {
                            enabled: true,
                            formatter: function (val) {
                             
                             

                            if(val === hp ) return `Yes`

                            return `No`
                        },
                        style:{
                            colors:["#000000"],
                        fontWeight:400,
                        fontFamily:"sans-serif",   
                        },
                         dropShadow: {
                        enabled: false,
                            
                            }
                       }
                       
                   }} type="pie"  series={[value, 100-value]}   width="180px"  />
                   
                </div>
            )
     }

     const SessionBottom = ({reviewTitle,starRating})=>{
         return(
            <div className='session-review-stars col-sm'>
                     <div>
                         <h6>{reviewTitle}</h6>
                     <Star rating={starRating} />
                     </div>
                     
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
                <SessionBottom reviewTitle={reviewTitle.one} starRating={ratingOne} />
                
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
                <SessionBottom reviewTitle={reviewTitle.two} starRating={ratingTwo} />

            </div>

            <div className='row'>

                <SessionChart chartTitle={chartTitleTwo.one}   chartimgSrc={chartimgSrc} />
                <SessionChart chartTitle={chartTitleTwo.two}   chartimgSrc={chartimgSrc}  />
                <SessionChart chartTitle={chartTitleTwo.three} chartimgSrc={chartimgSrc}  />
                <SessionChart chartTitle={chartTitleTwo.four}  chartimgSrc={chartimgSrc} />

            </div>
             </>
        )     
     }
     const CarouselImg = ({imgSrc})=>{
         return(
             <div>
                <button type="button" class="btn" data-toggle="modal" data-target="#exampleModalCenter" onClick={()=>setreportImg(imgSrc)} >
                <img style={{marginLeft:"20px",width:"220px"}} className='img-fluid' src={imgSrc} alt='report'  />
                </button>
             </div>
         )
     }



    return (
        <> 
            
           <section className={leftdisplay === "0px" || rightdisplay === "0px" ? "blur" : 'employer-content'} style={mobview < "1150" ? {margin:"0"} : null} >
           <div className='employer-welcome-head row M-0' style={mobview < "1150" ? {margin:"0"} : null} >
                <img src={`./images/Employer/welcome-head.png`} className='col-sm welcome-head-img' alt='welcome head' />
                <div className='col-sm col-lg-6' style={mobview < "577" ? {textAlign:"center"}: {textAlign:"left"}}>
                    <h6>
                       Hi! Welcome back to your 
                    </h6>
                    <h2  >
                        Mental Well-being Suite
                    </h2>
                </div>
           </div>

           <div className='employer-package-sec row M-0'>
        
            {/* <PackageCard imgSrc={`./images/Employer/package/loan.png`}   title="" caption="" />
            <PackageCard imgSrc={`./images/Employer/package/one.png`}   title="" caption="" /> */}
                <PackageCard imgSrc={`./images/Employer/package/duration.png`} title="Wellness package" caption="Persona Enhance" />  
             <PackageCard imgSrc={`./images/Employer/package/personal.png`} title="Duration" caption="3 Months" />  
            <PackageCard imgSrc={`./images/Employer/package/three.png`} title="Billing Date" caption="XX-XX-XXX" />     
            <PackageCard imgSrc={`./images/Employer/package/four.png`}  title="Billing Amount" caption="XX-XX-XXX" />
           </div>
            
            <div id="employer-metrics" className='employer-wellbeing M-0'>
           <div className='employe-well-being row M-0'>
                    <h1>Employee Mental Well-being Metrics</h1>
                <WellbeingCard color="#F30909" imgSrc={`./images/Employer/high-risk.png`} title="High-risk" caption="x% of Employees" />
                <WellbeingCard color="#FCD423" imgSrc={`./images/Employer/md-risk.png`} title="Medium-risk" caption="x% of Employees" />
                <WellbeingCard color="#53BB2F" imgSrc={`./images/Employer/low-risk.png`} title="Low-risk" caption="x% of Employees" />
               
           </div>
           <div className='row M-0'>
               <Averages color="green" title="Average well-being"/>
               <Averages color="red" title="Average Stress"/>
               <Averages color="red" title="Average Fatigue"/>
               <Averages color="red" title="Average Work-stress"/>
           </div>
           </div>

           <div id="employer-redflags" className='employer-redflags row M-0'>
                 <h1>Employee Mental Health Red Flags</h1>
                <Chart type='pie'  options={{
                    stroke: {
                   colors: ['#fff']
                   },
                    fill: {
                        opacity: 1,
                  },
                  dataLabels: {
                            enabled: true,
                            formatter: function (val) {
                             
                            if(val === 60) return ``

                            return ``
                        }
                        },
                    legend:{
                        show:true,
                         showForSingleSeries: true,
      
                        position: 'left',
                        horizontalAlign: 'right', 
                        floating:false,
                        offsetX:10,
                        onItemHover: {
                        highlightDataSeries: true
                        },
                    },
                    
                    colors:["#ff0000","#ffff00","#ff9900","#333300","#00ff00","#00ffff","#cc00cc"],
                    
                    labels:["Sleep Issues","Work Stress","Conflict with Colleagues","Lack of Motivation","Feeling Overwhelmed","Low Mood","Physical Fatigue"],
                    
                    
                }} series={[10, 20, 30, 10, 10, 10, 10]}
                
                width={"400px" }
                  className='col-sm redglag-chart text-start'  
                />
                <div className='col-sm'>
                    <img src={`./images/Employer/rectangle.png`} style={{minnWidth:"200px" ,height:"280px"}}  alt='rect'  />
                </div>
           </div>
           <div id="employer-feedback" className='employer-session M-0'>

                    <h1>1-1 Sessions Usage & Feedback</h1>
                
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
                <h1>Workshop Usage & Feedback</h1>

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
                <h1>Employee Mental Well-being Reports</h1>
                <form className='employer-report-form-wrap'>
                    <div className='emplyer-report-form-input'>
                        <label htmlFor="type" style={{paddingRight:"15px"}}>Report Type:</label>
                        <select name="" id="">
                            <option value=""></option>
                        </select>
                    </div>

                     <div className='emplyer-report-form-input'>
                        <label htmlFor="type" style={{paddingRight:"15px"}}>Report Frequency:</label>
                        <select name="" id="">
                            <option value="">Quarterly</option>
                            <option value="">Half-Yearly</option>
                            <option value="">Annualy</option>
                        </select>
                    </div>
                </form>
                <div style={{marginTop:"50px"}}>
                     <Carousel breakPoints={breakPointsCarousel}>
                        
                        <CarouselImg imgSrc={`./images/Employer/employee-report.png`} /> 
                         <CarouselImg imgSrc={`./images/Employer/employee-report.png`} /> 
                          <CarouselImg imgSrc={`./images/Employer/employee-report.png`} /> 
                </Carousel>
                </div>
            </div>
            


            <div id='employer-campaign' style={{marginTop:"150px"}} className='employer-campaign M-0'>
                        <h1>Employee Mental Well-being Campaigns</h1>
                 <Carousel breakPoints={breakPointNewsLetter}>
                    
                          <Cardb date="Jan 2022" title="Why Mental illness" />
                        <Cardb date="Feb 2022" title="Manage Your Stress" />
                         <Cardb date="Mar 2022" title="Declutter Your Minf" />
                    
                </Carousel>
            </div>
            </div>
            
           </section> 

    <div style={{width:"100vw",margin:"0",padding:"0",height:"100%"}} className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div style={{width:"100vw",position:"absolute",left:"0"}} class="modal-dialog modal-dialog-centered" role="document">
    <div style={{width:"100vw"}} class="modal-content">
      <div style={{width:"100vw"}} class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Report</h5>
         <button type="button"  class="close btn btn-outline-danger" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div style={{width:"100vw"}} class="modal-body">
       <img style={{maxWidth:"100%",width:"100%",height:"80vh"}} src={reportImg} alt="" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <a style={{color:"white",textDecoration:"none"}}  class="btn btn-primary" href={reportImg} download={reportImg}>Download</a>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Content
