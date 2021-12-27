import React,{useState} from 'react'
import "./Register.css"

const Register = () => {
      const [passwordVisisbility, setpasswordVisisbility] = useState(false)
      const [Company, setCompany] = useState(false)
    

      const radioLabel = {
          margin:"0",
          padding:"0",
          display:"inline-block",
          marginRight:"20px",
          marginLeft:"20px"
      }

    //  OnSubmit Append @personaunplugged.com to username
            return (
        <div className='admin-register'>
             {/* <div className='admin-register d-flex align-items-center'> */}
            <form className='company-register-form '>
                    <h2>Company Registration</h2>
            <div  className='row'>
            <label htmlFor="companyName">Company Name:</label>
            <input type="text" className='login-form-text col' name='companyName' />
            </div>
            <button type='submit' >Submit</button>
             </form>
              {/* </div> */}

            <h2>Register Form</h2>
           <form className='register-form d-flex justify-content-center row'>
                     

            
            
            <div  className='row'>
            <label htmlFor="username">Username:</label>
            <input className='login-form-text col' type="text" name='username' />
            </div>

            <div   className='row'>
            <label htmlFor="passowrd">Password:</label>
         
                 <input  className='col login-form-password' type={passwordVisisbility ? "text" : "password"} name='password' /> 
            {passwordVisisbility ? <i style={{marginLeft:"15px",marginTop:"10px"}} className="far fa-eye col-1"  onClick={()=> setpasswordVisisbility(!passwordVisisbility)} ></i> 
            : <i style={{marginLeft:"15px",marginTop:"10px"}} className="far fa-eye-slash col-1"  onClick={()=> setpasswordVisisbility(!passwordVisisbility)} ></i>   } 
            </div>
            <div  className='row'>
            <label htmlFor="companyName">Company Name:</label>
            <select name="companyname" className='login-form-text col' id="">
                <option value="">Tcs</option>
                <option value="">CTS</option>
                <option value="">Wipro</option>
                 <option value="">Accenture</option>
            </select>
            </div>
            <div className='radio-registers'>
            <input type="radio" id='employee'  name='employee' value="employee" checked />
            <label htmlFor="employee" style={radioLabel} >Employee</label>
            <input type="radio" id='employee' name='employee' value="employee"/>   
             <label htmlFor="employee" style={radioLabel} >Employer</label>
              
            </div>   
            
            {/* <button type='submit' className='login-form-btn'>Sign In</button> */}
            <button type='button' className='login-form-btn' >Register</button>
            
        </form>
        </div>
    )
      
    
}

export default Register
