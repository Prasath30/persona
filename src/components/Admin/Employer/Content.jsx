import React,{useState,useEffect} from 'react'
import "./Content.css"
import Chart from "react-apexcharts"
import  Carousel  from 'react-elastic-carousel'
import { type } from 'jquery'

const Content = ({setdisplay}) => {

         const [mobview, setmobview] = useState(window.innerWidth)
         const [reportImg, setreportImg] = useState('')
         const [wellbeing, setwellbeing] = useState({
        one:"x% of Employees",
        two:"x% of Employees",
        three:"x% of Employees"
    })
        const [packageCard, setpackageCard] = useState({
            one:"Persona Enhance",
            two:"3 Months",
            three:"XX-XX-XXX",
            four:"XX-XX-XXX"
        })

        const [sessionCard, setsessionCard] = useState({
            one:"35",
            two:"35",
            three:"35"
        })
        const [workshopCard, setworkshopCard] = useState({
            one:"35",
            two:"35"
        })
        const [sessionReview, setsessionReview] = useState('')
        const [workshopReview, setworkshopReview] = useState('')
    
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
        {width:1, 
        itemsToShow:1},
        {width:550, itemsToShow:3},
        {width:600, itemsToShow:3},
        {width:768, itemsToShow:3}
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
                <img style={{width:"230px"}} src={`/images/category/newsletter.png`} alt="newslettre" />
                <div>
                    <p className='newsletter-date' >{date}</p>
                    <p  className='newsletter-title' >{title}</p>
                    <button>Read</button>
                </div>
            </div>
        )
    }

    // const PackageCard = ({imgSrc , title,caption}) =>{
    //     return (
                
    //     )
    // }
    //  const WellbeingCard = ({imgSrc,title,caption,color}) => {
    //      return(
               
              
    //      )
    //  }

     const Averages = ({title,color}) =>{
         return(
             <div className='col employer-averages'>
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

    //       const SessionCard = ({cardTitle,number})=>{
    //     return(
            
    //     )
    //  }
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
                        states:{
                            hover:{
                                typeof:"none"
                            }
                        },
                      labels:["No","Yes"]
                   }} type="pie"  series={[60,40]} width="180px"  />
                </div>
            )
     }

     const SessionBottom = ({reviewTitle,bottomimgSrc})=>{
         return(
             <div className='session-review row'>
                 <div className='session-review-stars col '>
                     <h6>{reviewTitle}</h6>
                     <img src={bottomimgSrc} className='img-fluid' alt='session-bottom' />
                 </div>
                 <div className='col-lg-8 review-text' style={{marginBottom:"80px"}}>
                     <textarea name="" id="" cols="20" rows="10"
                     value={sessionReview}
                     onChange={(e)=>setsessionReview(e.target.value)}
                     ></textarea>
                 </div>
             </div>
         )
     }

     const Session = ({cardTitle,number,reviewTitle,bottomimgSrc,chartimgSrc,chartTitle,workshop})=>{
        if(workshop !== "true"){
             return(
            <>
            {/* <div className='row session-card-wrap M-0'>
                <SessionCard cardTitle={cardTitle.one}   number={number} />   
                <SessionCard cardTitle={cardTitle.two}   number={number} />
                <SessionCard cardTitle={cardTitle.three} number={number} />
            </div> */}

            <div className='row M-0'>
                <SessionChart chartTitle={chartTitle.one}   chartimgSrc={chartimgSrc} />
                <SessionChart chartTitle={chartTitle.two}   chartimgSrc={chartimgSrc}  />
                <SessionChart chartTitle={chartTitle.three} chartimgSrc={chartimgSrc}  />
                <SessionChart chartTitle={chartTitle.four}  chartimgSrc={chartimgSrc} />
            </div>

            <div className='M-0'>
                <SessionBottom reviewTitle={reviewTitle.one} bottomimgSrc={bottomimgSrc} />
            </div>
             </>
        )
        }
        return(
                <>


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
                 
                <button type="button" class="btn" data-toggle="modal" data-target="#exampleModalCenter" onClick={()=>setreportImg(imgSrc)} >
                <img style={{marginLeft:"20px",width:"220px"}} src={imgSrc} alt='report'  />
                </button>
             </div>
         )
     }



    return (
        <> 
            
           <section className='employer-content' style={mobview < "1150" ? {margin:"0"} : null} >
           <div className='employer-welcome-head row M-0' style={mobview < "1150" ? {margin:"0"} : null} >
                <img src={`/images/Employer/welcome-head.png`} className='img-fluid col-lg-5'  alt='welcome head' />
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


           
             <div className='package-card col'>
                  <div>
                      <img src={`/images/Employer/package/one.png`} alt="package" /> 
                      <h6>Wellness package</h6>
                  </div>
                  {/* <h6>{caption}</h6> */}
                  
                  <input type="text" 
                  value={packageCard.one} 
                  onChange={(e)=>setpackageCard({...packageCard,one:e.target.value})}    
                  />
              </div> 
               <div className='package-card col'>
                  <div>
                      <img src={`/images/Employer/package/two.png`} alt="package" /> 
                      <h6>Duration</h6>
                  </div>
                  {/* <h6>{caption}</h6> */}
                  <input type="text" 
                  value={packageCard.two}
                  onChange={(e)=>setpackageCard({...packageCard,two:e.target.value})}    />
              </div> 
               <div className='package-card col'>
                  <div>
                      <img src={`/images/Employer/package/three.png`} alt="package" /> 
                      <h6>Billing Date</h6>
                  </div>
                  {/* <h6>{caption}</h6> */}
                  <input type="text" 
                  value={packageCard.three}
                  onChange={(e)=>setpackageCard({...packageCard,three:e.target.value})}   
                   />
              </div> 
               <div className='package-card col'>
                  <div>
                      <img src={`/images/Employer/package/four.png`} alt="package" /> 
                      <h6>Billing Amount</h6>
                  </div>
                  {/* <h6>{caption}</h6> */}
                  <input type="text" 
                  value={packageCard.four}

                  onChange={(e)=>setpackageCard({...packageCard,four:e.target.value})}    />
              </div> 
           </div>
            
            <div id="employer-metrics" className='employer-wellbeing M-0'>
           <div className='employe-well-being row M-0'>

                 <div  className={mobview < "1140" ? 'col-sm-6 col-md-6 row well-being' : 'col row well-being' } >
                    <div className='col'>
                    <img src={`/images/Employer/high-risk.png`}  alt='well-being' />
                    <h5 className='wellbeing-card-title'>High-risk</h5>
                    </div>
                    <input
                    style={{color:"black"}}
                     className='col  wellbeing-card-caption'  type="text" 
                    value={wellbeing.one}  
                    onChange={(e)=>setwellbeing({...wellbeing,one:e.target.value})}/>
                </div>

                 <div  className={mobview < "1140" ? 'col-sm-6 col-md-6 row well-being' : 'col row well-being' } >
                    <div className='col'>
                    <img src={`/images/Employer/md-risk.png`}  alt='well-being' />
                    <h5 className='wellbeing-card-title'>Medium-risk</h5>
                    </div>
                      <input
                    style={{color:"black"}}
                     className='col  wellbeing-card-caption'  type="text" 
                    value={wellbeing.one}  
                    onChange={(e)=>setwellbeing({...wellbeing,two:e.target.value})}/>
                </div>

                 <div  className={mobview < "1140" ? 'col-sm-6 col-md-6 row well-being' : 'col row well-being' } >
                    <div className='col' >
                    <img src={`/images/Employer/low-risk.png`}  alt='well-being' />
                    <h5 className='wellbeing-card-title'>Low-risk</h5>
                    </div>
                      <input
                    style={{color:"black"}}
                     className='col  wellbeing-card-caption'  type="text" 
                    value={wellbeing.one}  
                    onChange={(e)=>setwellbeing({...wellbeing,three:e.target.value})}/>
                </div>
               
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
                <Chart type='polarArea' className="text-start" options={{
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
                    
                    
                    labels:["Sleep Issues","Work Stress","Conflict with Colleagues","Lack of Motivation","Feeling Overwhelmed","Low Mood","Physical Fatigue"]
                    
                    
                }} series={[10, 20, 30, 10, 15, 10, 10,10,10]}
                
                width="400px" 
                  className='col'  
                />
                <div className='col'>
                   
                    <textarea name="" id="" cols="10" rows="10"></textarea>
                </div>
           </div>
           <div id="employer-campaign" className='employer-session M-0'>
                    <h2>1-1 Sessions Usage & Feedback</h2>
                <div className='employer-session-img-wrap' >
                    <img className="employer-session-img" src={`/images/Employer/sess-work.png`} alt='sess-work' />
                </div>

                <div className='row session-card-wrap'> 
              
                <div className='session-card'>
                <h6>{cardTitle.four}</h6>
                <input type="text" value={sessionCard.one} 
                    size={10}
                    onChange={(e)=>{setsessionCard({...sessionCard,one:e.target.value})}}
                /> 
              </div>

              <div className='session-card'>
                <h6>{cardTitle.five}</h6>
                <input type="text" value={sessionCard.two} 
                size={10}
                    onChange={(e)=>setsessionCard({...sessionCard,two:e.target.value})}
                />
             </div>

             <div className='session-card'>
                <h6>{cardTitle.four}</h6>
                <input type="text" value={sessionCard.three} 
                size={10}
                    onChange={(e)=>{setsessionCard({...sessionCard,three:e.target.value})}}
                />
                

            </div> 
            </div>               
                <div>
                    <Session 
                    cardTitle={cardTitle}
                    chartTitle={chartTitle}
                    reviewTitle={reviewTitle}
                    chartimgSrc={`/images/Employer/chart-img.png`}
                    bottomimgSrc={`/images/Employer/stars.png`}
                    number={35}
                    workshop="false"
                />
                </div>
                
           </div>
        <div  className='employer-workshop M-0'>
                <h2>Workshop Usage & Feedback</h2>
                <div className='employer-session-img-wrap'>
                    <img className="employer-session-img" src={`/images/Employer/sess-work.png`} alt='sess-work' />
                </div>
                {/* session card */}
                 <div className='row session-card-wrap'> 
              
                <div className='session-card'>
                <h6>{cardTitle.four}</h6>
                <input type="text" value={workshopCard.one} 
                    size={10}
                    onChange={(e)=>{setsessionCard({...workshopCard,one:e.target.value})}}
                /> 
              </div>

              <div className='session-card'>
                <h6>{cardTitle.five}</h6>
                <input type="text" value={sessionCard.two} 
                size={10}
                    onChange={(e)=>setsessionCard({...workshopCard,two:e.target.value})}
                />
             </div>

            </div>      

                <div>
                      <Session 
                cardTitle={cardTitle}
                chartTitle={chartTitle}
                reviewTitle={reviewTitle}
                chartimgSrc={`/images/Employer/chart-img.png`}
                bottomimgSrc={`/images/Employer/stars.png`}
                number={35}
                workshop="true"
            />
                </div>
                <div className='session-review row'>
                 <div className='session-review-stars col '>
                     <h6>{reviewTitle.two}</h6>
                     <img src={`/images/Employer/stars.png`} className='img-fluid' alt='session-bottom' />
                 </div>
                 <div className='col-lg-8 review-text' style={{marginBottom:"80px"}}>
                     <textarea name="" id="" cols="20" rows="10"
                     value={workshopReview}
                     onChange={(e)=>workshopReview(e.target.value)}
                     ></textarea>
                 </div>
             </div>
          
            </div>
            <div id="employer-reports" className='employer-reports M-0'>
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
                            <option value="">Quarterly</option>
                            <option value="">Half-Yearly</option>
                            <option value="">Annualy</option>
                        </select>
                    </div>
                </form>
                <div style={{marginTop:"50px"}}>
                     <Carousel breakPoints={breakPoints}>
                        
                        <CarouselImg imgSrc={`/images/Employer/employee-report.png`} /> 
                         <CarouselImg imgSrc={`/images/Employer/employee-report.png`} /> 
                          <CarouselImg imgSrc={`/images/Employer/employee-report.png`} /> 
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
            <div style={{marginTop:"150px"}} className='employer-campaign M-0'>
                        <h2>Employee Mental Well-being Campaigns</h2>
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
