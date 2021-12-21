import React,{useState} from 'react';
import Slide from './Slide.jsx'
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {

    const [passwordVisisbility, setpasswordVisisbility] = useState(false)



    return (
        <>
        {/* <img style={{width:"100%",position:'absolute',top:'0px',zIndex:"999"}} src={`./images/backgorund.png`}></img>  */}
        <section id='login' className='container'>

        <div style={{position:'relative',paddingBottom:'50px',marginBottom:'100px'}}>

            <img className='login-logo' src={`./images/Logo-3.png`} alt="logo"  />
            <button className="login-nav-btn" ><Link to="/employee" className='login-form-btn'>Book a session</Link></button>

        </div>

        <div className='login-carousel'>
            <Slide imgSrc={`./images/slideone.png`} />  
        </div>
        
        <h2>Employer Login form</h2>
            
        <form className='login-form'>

            <div style={{width:"370px"}} className='row'>
            <label htmlFor="username">Username:</label>
            <input className='login-form-text col' type="text" name='username' />
            </div>

            <div style={{width:"370px"}}  className='row'>
            <label htmlFor="passowrd">Password:</label>
         
                 <input  className='col login-form-password' type={passwordVisisbility ? "text" : "password"} name='password' /> 
            {passwordVisisbility ? <i style={{marginLeft:"15px",marginTop:"10px"}} className="far fa-eye col-1"  onClick={()=> setpasswordVisisbility(!passwordVisisbility)} ></i> 
            : <i style={{marginLeft:"15px",marginTop:"10px"}} className="far fa-eye-slash col-1"  onClick={()=> setpasswordVisisbility(!passwordVisisbility)} ></i>   } 
        
            </div>
            
            
            {/* <button type='submit' className='login-form-btn'>Sign In</button> */}
            <button type='button' className='login-form-btn' ><Link to="/employer" className='login-form-btn'>Sign In</Link></button>
        </form>
 
        </section>
       </>
    )
}

export default Login;
