import React,{useState,useEffect} from 'react';
import Content from './Content';
import "./Employer.css"
import Sidebar from './Sidebar';

const Employer = () => {
    const [leftdisplay, setleftdisplay] = useState("-500px")
    const [rightdisplay, setrightdisplay] = useState("-500px")
    const [show, setshow] = useState(false)
        const [mobview, setmobview] = useState(window.innerWidth)
    
    useEffect(() => {
        window.addEventListener("resize" ,function(){
            setmobview(window.innerWidth)
        });
    }, [])
       const openLeftSidebar =()=>{
        leftdisplay === "-500px" ?  setleftdisplay("0") : setleftdisplay("-500px");
        setshow(!show)
        if(!show){
              document.body.style.overflow ='hidden';
        }else{
           document.body.style.overflow ='visible'; 
        }
    }
       const openRightSidebar =()=>{
        rightdisplay === "-500px" ? setrightdisplay("0") : setrightdisplay("-500px")
          setshow(!show)
        if(!show){
              document.body.style.overflow ='hidden';
        }else{
           document.body.style.overflow ='visible'; 
        }
    }
    return (
        <>
        <div className='employer-wrap' style={{background:"#eff2f9"}}>
        <div className={mobview< "500" ? 'employer container' :"employer"}>
        <div className='mob-navbar' id="navbar" style={mobview < "1150" ?{display:"block",position:"fixed",top:"0",zIndex:"999",width:"100%"} : {display:"none"}} >
                <i class="fas fa-bars fa-3x "  onClick={openRightSidebar}  style={{position:'absolute',right:"30px",paddingTop:"10px",color:"#7700BB"}}></i>
                <img src="https://img.icons8.com/nolan/64/menu.png" onClick={openLeftSidebar} />
            </div>
         <Sidebar leftdisplay={leftdisplay} rightdisplay={rightdisplay} setleftdisplay={setleftdisplay} />
         <Content />   
         </div>
         </div>
        </>
    )
}

export default Employer
