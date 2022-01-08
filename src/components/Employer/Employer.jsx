import React,{useState,useEffect} from 'react';
import Content from './Content';
import "./Employer.css"
import Sidebar from './Sidebar';

const Employer = () => {
    const [leftdisplay, setleftdisplay] = useState("-500px")
    const [rightdisplay, setrightdisplay] = useState("-500px")
    const [leftShow, setleftShow] = useState(false)
    const [rightShow, setrightShow] = useState(false)
        const [mobview, setmobview] = useState(window.innerWidth)



        

    const openLeftSidebar =()=>{
         
        if(leftdisplay ==="-500px" && rightdisplay==="0px"){
            setrightdisplay("-500px")
        }


        leftdisplay === "-500px" ?  setleftdisplay("0px") : setleftdisplay("-500px");
       
        setleftShow(!leftShow)
        if(!leftShow){
              
              document.body.style.overflow ='hidden';
        }else{
           document.body.style.overflow ='visible'; 
        }

    }

       const openRightSidebar =()=>{
            if(rightdisplay ==="-500px" && leftdisplay==="0px"){
            setleftdisplay("-500px")
        }
        rightdisplay === "-500px" ? setrightdisplay("0px") : setrightdisplay("-500px")
          setrightShow(!rightShow)
        if(!rightShow){
              document.body.style.overflow ='hidden';
        }else{
           document.body.style.overflow ='visible'; 
        }
    }
    
    useEffect(() => {
        window.addEventListener("resize" ,function(){
            setmobview(window.innerWidth)
            console.log(mobview)
        });
        var prevScrollpos = window.pageYOffset;
        window.addEventListener("scroll", function () {
            
          var currentScrollPos = window.pageYOffset;
            console.log(prevScrollpos, "prev")
            console.log(currentScrollPos,"current")
          if (prevScrollpos > currentScrollPos || prevScrollpos == currentScrollPos) {
                
            document.getElementById("navbar").style.top = "0";
            if (window.pageYOffset === 0) {
              document.getElementById("navbar").style.backgroundColor = "#e5d9ec";
            }
            if (window.pageYOffset > 0) {
              document.getElementById("navbar").style.backgroundColor = "#e5d9ec";
            }
          } else {
                console.log(leftdisplay)
                   document.getElementById("navbar").style.top = leftdisplay; 
                
                    
                
          }
          prevScrollpos = currentScrollPos;
        })
    }, [])

     
     



      
 
    return (
        <>
        <div className='employer-wrap' style={{background:"#eff2f9",overflow:"hidden"}}>
        <div className={mobview< "500" ? 'employer container' :"employer"}>
        <div className='mob-navbar' id="navbar" style={mobview < "1150" ?{display:"block",position:"fixed",top:"0",left:"0",height:"60px",right:"50px",zIndex:"999",width:"100%",paddingBottom:"15px"} : {display:"none"}} >
               
                <i className="fas fa-chevron-circle-left fa-3x" onClick={openRightSidebar}  style={{position:'absolute',right:"30px",paddingTop:"10px",color:"#7700BB"}}></i>
                <i className="fas fa-chevron-circle-right fa-3x" style={{paddingTop:"10px",paddingLeft:"15px",color:"#7700BB"}} onClick={openLeftSidebar}></i>
                
            </div>
         <Sidebar leftdisplay={leftdisplay} rightdisplay={rightdisplay} setleftdisplay={setleftdisplay} openLeftSidebar={openLeftSidebar} />
         <Content  leftdisplay={leftdisplay} rightdisplay={rightdisplay}  />   
         </div>
         </div>
        </>
    )
}

export default Employer
