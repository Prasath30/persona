import React,{useState,useEffect,useRef} from 'react'
import "./Content.css"
import Chart from "react-apexcharts"
import axios from "axios"
import Star from "./Star"
const Content = ({setdisplay}) => {

    const [mobview, setmobview] = useState(window.innerWidth)
    const [uploaded, setuploaded] = useState(false);
    const [starRating, setstarRating] = useState("3.5")
    const [secondstarRating, setsecondstarRating] = useState("4")
    
    const [uploadedFileName, setuploadedFileName] = useState()
    const [topform, settopform] = useState({
        
    uid:"7JWs625GhTSLtb7878tnVkcMMgr2",
    wellnessPackage:"",
    duration:"",
    billingDate:"",
    billingAmount:"",
    highRisk:"",
    mediumRisk:"",
    lowRisk:""

    })

    const handleTopFormSubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:5000/employer",topform)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))
    }

    const ref = useRef()

    const handleRemoveFile = ()=>{
        ref.current.value = "";
        setuploaded(false)
    }


        const [sessionCard, setsessionCard] = useState({
            one:"35",
            two:"35",
            three:"35"
        })
        const [workshopCard, setworkshopCard] = useState({
            one:"35",
            two:"35"
        })
    
    useEffect(() => {
        window.addEventListener("resize" ,function(){
            setmobview(window.innerWidth)
        });
    }, [])
    const handleFileChallenge = (e)=>{
        console.log("ndjnjajn")
        setuploaded(true)
        var  Files = e.target.files
        if(Files[1]){
            return true
        }
        setuploadedFileName(Files[0].name)
          
    }




 

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





     const Averages = ({title,color}) =>{
         return(
             <>
       
                   <h6 style={{color:"#858386",textAlign:"center"}}>{title}</h6>
                   {color === "green"? <div><Chart options={options} type="radialBar" series={series}  width="170px"  /></div>:
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
                   }} type="radialBar" series={series}  width="170px"  />
                   }
               
            </>
         )
     } 

     const SessionChart = ({chartTitle,chartimgSrc})=>{
            return(
                <>
    
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
                      labels:["Yes","No"]
                   }} type="pie"  series={[60,40]} width="180px"  />
                   
                </>
            )
     }



     const Session = ({cardTitle,number,bottomimgSrc,chartimgSrc,chartTitle,workshop})=>{
        if(workshop !== "true"){
             return(
            <>

            <div className='row M-0'>
                <div className='col-sm-3 session-chart'>
                    <SessionChart chartTitle={chartTitle.one}   chartimgSrc={chartimgSrc} />
                      <div className='input-group'  style={{width:"120px",marginTop:"0px"}} >
                        <input type="number" className='form-control' />
                        <div class="input-group-append" >
                            <span class="input-group-text" id="basic-addon2">/100%</span>
                        </div>
                        </div>
                   
                </div>
                <div  className='col-sm-3 session-chart' >
                     <SessionChart chartTitle={chartTitle.two}   chartimgSrc={chartimgSrc}  />
                       <div className='input-group'  style={{width:"120px",marginTop:"0px"}} >
                        <input type="number" className='form-control' />
                        <div class="input-group-append" >
                            <span class="input-group-text" id="basic-addon2">/100%</span>
                        </div>
                        </div>
                </div>
                <div  className='col-sm-3 session-chart'> 
                <SessionChart chartTitle={chartTitle.three} chartimgSrc={chartimgSrc}  />
                 <div className='input-group'  style={{width:"120px",marginTop:"0px"}} >
                        <input type="number" className='form-control' />
                        <div class="input-group-append" >
                            <span class="input-group-text" id="basic-addon2">/100%</span>
                        </div>
                        </div>
                </div>
                 <div  className='col-sm-3 session-chart' >
                 <SessionChart chartTitle={chartTitle.four}  chartimgSrc={chartimgSrc} />
                   <div className='input-group'  style={{width:"120px",marginTop:"0px"}} >
                        <input type="number" className='form-control' />
                        <div class="input-group-append" >
                            <span class="input-group-text" id="basic-addon2">/100%</span>
                        </div>
                        </div>
                 </div>
               
               
            </div>

            
             </>
        )
        }
        return(
                <>


            <div className='row'>
                 <div className='col-sm-3 session-chart' >
                    <SessionChart chartTitle={chartTitleTwo.one}   chartimgSrc={chartimgSrc} />
                        <div className='input-group'  style={{width:"120px",marginTop:"0px"}} >
                        <input type="number" className='form-control' />
                        <div class="input-group-append" >
                            <span class="input-group-text" id="basic-addon2">/100%</span>
                        </div>
                        </div>
                   
                </div>
                <div className='col-sm-3 session-chart'>
                     <SessionChart chartTitle={chartTitleTwo.two}   chartimgSrc={chartimgSrc}  />
                       <div className='input-group'  style={{width:"120px",marginTop:"0px"}} >
                        <input type="number" className='form-control' />
                        <div class="input-group-append" >
                            <span class="input-group-text" id="basic-addon2">/100%</span>
                        </div>
                        </div>
                </div>
                <div  className='col-sm-3 session-chart' > 
                <SessionChart chartTitle={chartTitleTwo.three} chartimgSrc={chartimgSrc}  />
                  <div className='input-group'  style={{width:"120px",marginTop:"0px"}} >
                        <input type="number" className='form-control' />
                        <div class="input-group-append" >
                            <span class="input-group-text" id="basic-addon2">/100%</span>
                        </div>
                        </div>
                </div>
                 <div  className='col-sm-3 session-chart' >
                 <SessionChart chartTitle={chartTitleTwo.four}  chartimgSrc={chartimgSrc} />
                  <div className='input-group'  style={{width:"120px",marginTop:"0px"}} >
                        <input type="number" className='form-control' />
                        <div class="input-group-append" >
                            <span class="input-group-text" id="basic-addon2">/100%</span>
                        </div>
                        </div>
                 </div>
               
            </div>

             </>
        )
       
       
     }




    return (
        <> 
            
           <section className='admin-employer-content' style={mobview < "1150" ? {margin:"0"} : null} >
           <div className='employer-welcome-head row M-0' style={mobview < "1150" ? {margin:"0"} : null} >
                <img src={`/images/Employer/welcome-head.png`} className='col-sm welcome-head-img'   alt='welcome head' />
                <div className='col-sm col-lg-6' style={mobview < "577" ? {textAlign:"center"}: {textAlign:"left"}}>
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
                       <img  src={`/images/Employer/package/duration.png`} className='img-fluid' 
                       alt='img-s' />
                      <h6>Wellness package</h6>
                  </div>
                  {/* <h6>{caption}</h6> */}
                  
                  <input type="text" 
                  value={topform.wellnessPackage}
                  onChange={(e)=>settopform({...topform,wellnessPackage:e.target.value})}

                  style={{width:"150px"}}  
                  />
              </div> 
               <div className='package-card col'>
                  <div>
                     <img   src={`/images/Employer/package/personal.png`} className='img-fluid' 
                     alt='img' />
                      <h6>Duration</h6>
                  </div>
                  {/* <h6>{caption}</h6> */}
                  <input type="text" 
                  value={topform.duration}
                  onChange={(e)=>settopform({...topform,duration:e.target.value})}
                  style={{width:"150px"}}   
                   />
              </div> 
               <div className='package-card col'>
                  <div>
                      <img src={`/images/Employer/package/three.png`} alt="package" /> 
                      <h6>Billing Date</h6>
                  </div>
                  {/* <h6>{caption}</h6> */}
                  <input type="date" 
                value={topform.billingDate}
                  onChange={(e)=>settopform({...topform,billingDate:e.target.value})}  
                style={{width:"150px"}}  
                   />

              </div> 
               <div className='package-card col'>
                  <div>
                      <img src={`/images/Employer/package/four.png`} alt="package" /> 
                      <h6>Billing Amount</h6>
                  </div>
                  {/* <h6>{caption}</h6> */}
                  <input type="text" 
                  
                    style={{width:"150px"}}  
                  value={topform.billingAmount}
                  onChange={(e)=>settopform({...topform,billingAmount:e.target.value})}   
                   />
              </div> 
           </div>
            
            <div id="employer-metrics" className='employer-wellbeing M-0'>
           <div className='employe-well-being row M-0'>

                 <div  className={mobview < "1140" ? 'col-sm-6 col-md-6 row well-being' : 'col row well-being' } >
                    <div className='col'>
                    <img src={`/images/Employer/high-risk.png`}  alt='well-being' />
                    <h5 className='wellbeing-card-title'>High-risk</h5>
                    </div>
                    <div className='input-group' style={{width:"140px"}} >
                        <input type="number" 
                        className='form-control'
                        value={topform.highRisk}
                        onChange={(e)=>settopform({...topform,highRisk:e.target.value})} 

                        />
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">%</span>
                        </div>
                    </div>
                </div>

                 <div  className={mobview < "1140" ? 'col-sm-6 col-md-6 row well-being' : 'col row well-being' } >
                    <div className='col'>
                    <img src={`/images/Employer/md-risk.png`}  alt='well-being' />
                    <h5 className='wellbeing-card-title'>Medium-risk</h5>
                    </div>
                      <div className='input-group' style={{width:"140px"}} >
                        <input type="number" className='form-control' />
                        <div 
                        class="input-group-append"
                        value={topform.mediumRisk}
                        onChange={(e)=>settopform({...topform,mediumRisk:e.target.value})} 
                        >
                            <span class="input-group-text" id="basic-addon2">%</span>
                        </div>
                    </div>
                </div>

                 <div  className={mobview < "1140" ? 'col-sm-6 col-md-6 row well-being' : 'col row well-being' } >
                    <div className='col' >
                    <img src={`/images/Employer/low-risk.png`}  alt='well-being' />
                    <h5 className='wellbeing-card-title'>Low-risk</h5>
                    </div>
                      <div className='input-group' style={{width:"140px"}} >
                        <input type="number"
                         className='form-control'
                          value={topform.lowRisk}
                        onChange={(e)=>settopform({...topform,lowRisk:e.target.value})} 
                          />
                        <div class="input-group-append" onClick={(e)=>handleTopFormSubmit(e)} >
                            <span class="input-group-text" id="basic-addon2">%</span>
                        </div>
                    </div>
                    {/* <button onClick={(e)=>handleTopFormSubmit(e)}>Submit</button> */}
                </div>
               
           </div>

           <div className='row M-0'>
           <div className='col-lg-3 col-md-6 col-sm-12 employer-averages ' >
               <Averages color="green" title="Average well-being Levels"/>
               {/* <input type="number" style={{width:"90px",marginTop:"-50px"}} /> */}
                <div className='input-group' style={{width:"125px",marginTop:"-50px"}} >
                        <input type="number" className='form-control' />
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">/100%</span>
                        </div>
                    </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 employer-averages' >
                 <Averages color="red" title="Average Stress"/>
                  <div className='input-group' style={{width:"125px",marginTop:"-50px"}} >
                        <input type="number" className='form-control' />
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">/100%</span>
                        </div>
                    </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 employer-averages'  > 
            <Averages color="red" title="Average Fatigue"/> 
             <div className='input-group' style={{width:"125px",marginTop:"-50px"}} >
                        <input type="number" className='form-control' />
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">/100%</span>
                        </div>
                    </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 employer-averages'  >
             <Averages color="red" title="Average Work-stress"/>
              <div className='input-group' style={{width:"125px",marginTop:"-50px"}} >
                        <input type="number" className='form-control' />
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">/100%</span>
                        </div>
                    </div>
              </div>
              
               
               
           </div>
           </div>

           <div id="employer-redflags" className='employer-redflags row M-0'>
                 <h3>Employee Mental Health Red Flags</h3>
                {/* <Chart type='polarArea' className="text-start" options={{
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
                    
                    
                }} series={[10, 20, 30, 10, 15, 10, 10]}
                
                width="400px" 
                  className='col'  
                /> */}
                <form action="" className='admin-chart-input col-lg-6 col-sm-12 col-md-12'>
                    <div  className='row'>
                        <label className='col' htmlFor="chart">Sleep Issues</label>
                        <div className='input-group col'  style={{width:"120px",marginTop:"0px"}} >
                        <input type="number" className='form-control' />
                        <div class="input-group-append" style={{marginTop:"0px"}}>
                            <span class="input-group-text" id="basic-addon2">/100%</span>
                        </div>
                    </div>
                    </div>
                    <div  className='row' >
                        <label className='col' htmlFor="chart">Work Stress:</label>
                        <div className='input-group col'  style={{width:"120px",marginTop:"0px"}} >
                        <input type="number" className='form-control' />
                        <div class="input-group-append" style={{marginTop:"0px"}}>
                            <span class="input-group-text" id="basic-addon2">/100%</span>
                        </div>
                        </div>
                    </div>
                    <div  className='row' >
                        <label className='col' htmlFor="chart">Conflict with Colleagues:</label>
                          <div className='input-group col'  style={{width:"120px",marginTop:"0px"}} >
                        <input type="number" className='form-control' />
                        <div class="input-group-append" style={{marginTop:"0px"}}>
                            <span class="input-group-text" id="basic-addon2">/100%</span>
                        </div>
                        </div>
                    </div>
                    <div  className='row' >
                        <label className='col'htmlFor="chart">Lack of Motivation:</label>
                          <div className='input-group col'  style={{width:"120px",marginTop:"0px"}} >
                        <input type="number" className='form-control' />
                        <div class="input-group-append" style={{marginTop:"0px"}}>
                            <span class="input-group-text" id="basic-addon2">/100%</span>
                        </div>
                        </div>
                    </div>
                    <div  className='row' >
                        <label className='col'htmlFor="chart">Feeling Overwhelmed:</label>
                           <div className='input-group col'  style={{width:"120px",marginTop:"0px"}} >
                        <input type="number" className='form-control' />
                        <div class="input-group-append" style={{marginTop:"0px"}}>
                            <span class="input-group-text" id="basic-addon2">/100%</span>
                        </div>
                        </div>
                    </div>
                    <div  className='row' >
                        <label className='col' htmlFor="chart">Low Mood:</label>
                          <div className='input-group col'  style={{width:"120px",marginTop:"0px"}} >
                        <input type="number" className='form-control' />
                        <div class="input-group-append" style={{marginTop:"0px"}}>
                            <span class="input-group-text" id="basic-addon2">/100%</span>
                        </div>
                        </div>
                    </div>

                    <div  className='row' >
                        <label className='col' htmlFor="chart">Physical Fatigue:</label>
                          <div className='input-group col' style={{width:"120px",marginTop:"0px"}} >
                        <input type="number" className='form-control' />
                        <div class="input-group-append" style={{marginTop:"0px"}}>
                            <span class="input-group-text" id="basic-addon2">/100%</span>
                        </div>
                        </div>
                    </div>
                </form>
                <div className='col-lg-6 col-sm-12 col-md-12' style={{paddingLeft:"30px"}}>
                   
                    <textarea name="" id="" cols="10" rows="10"></textarea>
                </div>
           </div>
           <div id="employer-campaign" className='employer-session M-0'>
                     
               
                   
               
                     <h2>1-1 Sessions Usage & Feedback</h2>
                <div className='row session-card-wrap'> 
              
                <div className='session-card'>
                <h6>{cardTitle.one}</h6>
                <input type="number" value={sessionCard.one} 
                    style={{width:"90px"}}
                    onChange={(e)=>{setsessionCard({...sessionCard,one:e.target.value})}}
                /> 
              </div>

              <div className='session-card'>
                <h6>{cardTitle.two}</h6>
                <input type="number" value={sessionCard.two} 
                style={{width:"90px"}}
                    onChange={(e)=>setsessionCard({...sessionCard,two:e.target.value})}
                />
             </div>

             
                 <div className='session-review-stars col-lg-6 col-sm-12 ' style={{height:"200px"}}>
                     <h6>"Average Session Rating / Q1"</h6>
                     <Star rating={starRating} />
                     <input type="number" value={starRating} onChange={(e)=> setstarRating(e.target.value.toString())} style={{width:"90px",marginTop:"15px"}} min={0} max={5} step="0.5" />
                 </div>
                 
            
            </div>               
                <div>
                    <Session 
                    cardTitle={cardTitle}
                    chartTitle={chartTitle}
                   
                    chartimgSrc={`/images/Employer/chart-img.png`}
                    bottomimgSrc={`/images/Employer/stars.png`}
                    number={35}
                    workshop="false"
                />
                </div>
                 
                
           </div>
        <div  className='employer-workshop M-0'>
                <h2>Workshop Usage & Feedback</h2>
                {/* session card */}
                 <div className='row session-card-wrap'> 
              
                <div className='session-card'>
                <h6>{cardTitle.three}</h6>
                <input type="number" value={workshopCard.one} 
                    style={{width:"90px"}}
                    onChange={(e)=>{setworkshopCard({...workshopCard,one:e.target.value})}}
                /> 
              </div>

              <div className='session-card'>
                <h6>{cardTitle.four}</h6>
                <input type="number" value={sessionCard.two} 
                    
                    style={{width:"90px"}}
                    onChange={(e)=>setworkshopCard({...workshopCard,two:e.target.value})}
                />
             </div>

             <div className='session-review-stars col-lg-6 col-sm-12 ' style={{height:"200px"}} >
                     <h6>Average Session Rating / Q1</h6>
                    <Star rating={secondstarRating} />
                     <input type="number" onChange={(e)=>setsecondstarRating(e.target.value.toString())} style={{width:"90px",marginTop:"15px"}} min={0} max={5} step="0.5" />
                 </div>

            </div>      

                <div>
               <Session 
                cardTitle={cardTitle}
                chartTitle={chartTitle}
                
                chartimgSrc={`/images/Employer/chart-img.png`}
                // bottomimgSrc={}
                number={35}
                workshop="true"
                />
                </div>

          
            </div>
            <div id="employer-reports" className='employer-reports M-0'>
                <h2>Employee Mental Well-being Reports</h2>
                <form className='employer-report-form-wrap' >
                    <div className='emplyer-report-form-input'>
                        <label htmlFor="type" style={{paddingRight:"15px"}}>Report Type:</label>
                        <input style={{borderRadius:"15px", backgroundColor: "#fffaf2"}} type="text" />
                    </div>

                     <div className='emplyer-report-form-input'>
                        <label htmlFor="type" style={{paddingRight:"15px"}}>Date:</label>
                        {/* <select name="" id="">
                            <option value="">Quarterly</option>
                            <option value="">Half-Yearly</option>
                            <option value="">Annualy</option>
                        </select> */}
                        <input type="date" style={{borderRadius:"15px", backgroundColor: "#fffaf2",padding:"10px"}} />
                    </div>
                </form>

                <div style={{marginTop:"50px"}}>
                <label htmlFor="campaign-file" className='campaign-file-label' style={{width:"100%"}}>
                    <form action="">
                <div className='admin-campaign-file-upload' style={{height:"255px"}}>
                   {uploaded === true ? null : <p style={{fontSize:"20px",fontWeight:"500"}} >Upload Your Report here</p>}
                  
                   {uploaded === true ?  <p style={{fontSize:"20px",fontWeight:"500"}} >Report Successfully Uploaded <span className='admin-upload-file'>{uploadedFileName}</span></p> :  <label htmlFor="campaign-file"style={{textAlign:"center"}}><i class="fas fa-file-upload fa-7x"></i></label> }
                    {uploaded === true ? <button className='change-label' onClick={()=>handleRemoveFile()} >Remove file</button>: null }
                  <input type="file" ref={ref} id='campaign-file' style={{display:"none"}}  onChange={(e)=>handleFileChallenge(e)}   multiple />
              </div>
                    </form>
                </label>                    
                </div>
            </div>
            


            <div className='admin-employer-submitbtn'>
            <button  >Submit</button>
            </div>
           </section> 

        </>
    )
}

export default Content
