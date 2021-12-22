import React,{useState} from 'react';
import Slide from './Slide.jsx'
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {

    const [passwordVisisbility, setpasswordVisisbility] = useState(false)

    const radioBtnStyle ={
        marginLeft:"15px",
        marginRight:"20px",
        fontSize:"18px",

    }

    return (
        <>
        {/* <img style={{width:"100%",position:'absolute',top:'0px',zIndex:"999"}} src={`./images/backgorund.png`}></img>  */}
        <section className='login' >

  
        
        <div className='login-left-sec'>
            <div style={{position:"relative"}}>
                <img src={`./images/background.png`} className='background-img img-fluid'  alt="" />
            </div>
            
             <img className='login-logo' src={`./images/Logo-3.png`}  alt="logo"  />
        </div>
        
        
        <form className='login-form'>
            <h2>Login</h2>
            <div className='row'>
                <div className='col-6'>
                <input type="radio" name="position" id='employee' value="employee" checked/>
                <label style={{display:"inline-block"}} htmlFor="employee">Employee</label>
                </div>
                <div className='col-6' >
                <input type="radio" name="position" id='employer' value="employee" />
                <label style={{display:"inline-block"}} htmlFor="employer">Employer</label>
                </div>
            </div>
            <div  >
            <label htmlFor="username">Username:</label>
            <input className='login-form-text' style={{borderRadius:"20px",border:"1px solid black"}} type="text" name='username' required />
            </div>

            <div  >
            <label htmlFor="passowrd">Password:</label>
         
            <input className='login-form-password'  type={passwordVisisbility ? "text" : "password"}  style={{borderRadius:"20px",border:"1px solid black"}} name='password' required /> 
            {passwordVisisbility ? <i style={{marginLeft:"15px",marginTop:"10px"}} className="far fa-eye col-1"  onClick={()=> setpasswordVisisbility(!passwordVisisbility)} ></i> 
            : <i style={{marginLeft:"15px",marginTop:"10px"}} className="far fa-eye-slash col-1"  onClick={()=> setpasswordVisisbility(!passwordVisisbility)} ></i>   } 
            </div>
            
            
            
            <button type='button' className='login-form-btn' ><Link to="/employer" className='login-form-btn'>Sign In</Link></button>
        </form>
 
        </section>
       </>
    )
}

export default Login;


