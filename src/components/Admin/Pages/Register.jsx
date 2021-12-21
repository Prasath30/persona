import React,{useState} from 'react'
import "./Register.css"

const Register = () => {
      const [passwordVisisbility, setpasswordVisisbility] = useState(false)

      const radioLabel = {
          margin:"0",
          padding:"0",
          display:"inline-block",
          marginRight:"20px",
          marginLeft:"20px"
      }

    return (
        <div className='admin-register'>

            <h1>Register Form</h1>
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
            <div style={{width:"370px"}} className='row'>
            <label htmlFor="companyName">Company Name:</label>
            <input className='login-form-text col' type="text" name='companyName' />
            </div>
            <div className='radio-register'>
        
            <label htmlFor="employee" style={radioLabel} >Employee</label>
            <input type="radio" id='employee'  name='employee' />
             <label htmlFor="employee" style={radioLabel} >Employer</label>
            <input type="radio" id='employee' name='employee'/>
            
                
            </div>
            
            
            
            {/* <button type='submit' className='login-form-btn'>Sign In</button> */}
            <button type='button' className='login-form-btn' >Register</button>
        </form>
        </div>
    )
}

export default Register
