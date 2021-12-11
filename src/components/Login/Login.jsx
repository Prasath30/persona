import React,{useState} from 'react';
import Slide from './Slide.jsx'
import './Login.css';


const Login = () => {

    const [passwordVisisbility, setpasswordVisisbility] = useState(false)



    return (
        <>
        {/* <img style={{width:"100%",position:'absolute',top:'0px',zIndex:"999"}} src={`./images/backgorund.png`}></img>  */}
        <section id='login'>

        <div style={{position:'relative',paddingBottom:'50px',marginBottom:'100px'}}>

            <img className='login-logo' src={`./images/Logo-3.png`} alt="logo"  />
            <button className="login-nav-btn" >Book a session</button>

        </div>

        <div className='login-carousel'>
            <Slide imgSrc={`./images/slideone.png`} />  
        </div>
        
        <h2>Employer Login form</h2>
            
        <form className='login-form'>

            <div >
            <label htmlFor="username">Username:</label>
            <input className='login-form-text' type="text" name='username' />
            </div>

            <div>
            <label htmlFor="passowrd">Password:</label>
            <input  className='login-form-password' type={passwordVisisbility ? "text" : "password"} name='password' /> 
            {passwordVisisbility ? <i style={{marginLeft:"15px"}} className="far fa-eye"  onClick={()=> setpasswordVisisbility(!passwordVisisbility)} ></i> 
            : <i style={{marginLeft:"15px"}} className="far fa-eye-slash"  onClick={()=> setpasswordVisisbility(!passwordVisisbility)} ></i>   } 
            </div>
            
            <button type='submit' className='login-form-btn'>Sign In</button>
        </form>
 
        </section>
       </>
    )
}

export default Login;
