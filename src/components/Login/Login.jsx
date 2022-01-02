import React,{useState} from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {

    const [passwordVisisbility, setpasswordVisisbility] = useState(false)
    const [form, setform] = useState({
        email:"",
        password:"",
        role:""
    })

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        console.log(form)
    }

    return (
        <>
        {/* <img style={{width:"100%",position:'absolute',top:'0px',zIndex:"999"}} src={`./images/backgorund.png`}></img>  */}
        <section className='login' >

  
        
        <div className='login-left-sec'>
            <div style={{position:"relative"}}>
                <img src={`./images/background.png`} className='background-img'  alt="" />
            </div>
            
             <img className='login-logo' src={`./images/Logo-3.png`}  alt="logo"  />
        </div>
        
        
        <form className='login-form'>
            <h2>Login</h2>
            <div className='row'>
                <div className='col-6'>
                <input type="radio" name="position" id='employee' value="employee" onChange={()=> setform({...form,role:"employee"})} defaultChecked/>
                <label style={{display:"inline-block",paddingLeft:"15px"}}  htmlFor="employee">Employee</label>
                </div>
                <div className='col-6' >
                <input type="radio" name="position" id='employer'  value="employer" onChange={()=> setform({...form,role:"employer"})}  />
                <label style={{display:"inline-block",paddingLeft:"15px"}}  htmlFor="employer">Employer</label>
                </div>
            </div>
            <div  >
            <label htmlFor="username">Username:</label>
            <input className='login-form-text' 
            style={{borderRadius:"20px",border:"1px solid black"}} 
            type="email" name='username' 
            required
            value={form.email}
            onChange={(e)=> setform({...form,email:e.target.value})}
             />
            </div>

            <div  >
            <label htmlFor="passowrd">Password:</label>
         
            <input className='login-form-password' value={form.password}
            onChange={(e)=> setform({...form,password:e.target.value})}
             type={passwordVisisbility ? "text" : "password"}  style={{borderRadius:"20px",border:"1px solid black"}} name='password' required /> 
            {passwordVisisbility ? <i style={{marginLeft:"5px",marginTop:"10px"}} className="far fa-eye col-1"  onClick={()=> setpasswordVisisbility(!passwordVisisbility)} ></i> 
            : <i style={{marginLeft:"5px",marginTop:"10px"}} className="far fa-eye-slash col-1"  onClick={()=> setpasswordVisisbility(!passwordVisisbility)} ></i>   } 
            </div>
            
            
            
            <button type='submit' onClick={(e)=>handleFormSubmit(e)} className='login-form-btn' >Sign In</button>
            {/* <Link to="/employer" className='login-form-btn'>Sign In</Link> */}
        </form>
 
        </section>
       </>
    )
}

export default Login;


