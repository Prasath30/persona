import React,{useState} from 'react'
import "./Register.css"
import axios from "axios";

const Register = () => {
      const [passwordVisisbility, setpasswordVisisbility] = useState(false)

      const [regCompany, setregCompany] = useState({
          companyName:""
      })
      
    

      const radioLabel = {
          margin:"0",
          padding:"0",
          display:"inline-block",
          marginRight:"20px",
          marginLeft:"20px"
      }

      const handleCompanyRegistration = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:5000/company",regCompany)
        .then((res)=>console.log(res))
        .catch((err)=> console.log(err))
      }


    //  OnSubmit Append @personaunplugged.com to username
            return (
        <div className='admin-register'>
             {/* <div className='admin-register d-flex align-items-center'> */}
            <form className='register-form d-flex justify-content-center row'>
                    <h2>Company Registration</h2>
            <div>
            <label htmlFor="companyName">Company Name:</label>
            <input type="text" 
            className='register-form-text col' 
            name='companyName' 
            value={regCompany.companyName}  
            onChange={(e)=> setregCompany(e.target.value)}  
            />
            </div>
            <button type='submit' className='admin-register-form-button' onClick={(e)=>handleCompanyRegistration(e)} >Submit</button>
             </form>
              {/* </div> */}
                    <hr />
            
           <form className='register-form d-flex justify-content-center row'>  
                <h2>Register Form</h2>
            <div  className='row'>
            <label htmlFor="username">Username:</label>
            <input className='col register-form-text' type="text" name='username' />
            </div>

            <div   className='row'>
            <label htmlFor="passowrd">Password:</label>
         
                 <input  className='col login-form-password' type={passwordVisisbility ? "text" : "password"} name='password' /> 
            {passwordVisisbility ? <i style={{marginLeft:"15px",marginTop:"25px"}} className="far fa-eye col-1 fa-lg "  onClick={()=> setpasswordVisisbility(!passwordVisisbility)} ></i> 
            : <i style={{marginLeft:"15px",marginTop:"25px"}} className="far fa-eye-slash col-1 fa-lg"  onClick={()=> setpasswordVisisbility(!passwordVisisbility)} ></i>   } 
            </div>
            <div  className='row'>
            <label htmlFor="companyName">Company Name:</label>
            {/* <div className='select-wrapper'> */}

            
            <select name="companyName"  className='login-form-text  col' style={{width:"100%"}}  id="">
                <option value="">Tcs</option>
                <option value="">CTS</option>
                <option value="">Wipro</option>
                 <option value="">Accenture</option>
            </select>
            {/* </div> */}
            
            </div>
            <div className='radio-registers'>
            <input type="radio" id='employee'  name='employee' value="employee" checked />
            <label htmlFor="employee" style={radioLabel} >Employee</label>
            <input type="radio" id='employee' name='employee' value="employee"/>   
             <label htmlFor="employee" style={radioLabel} >Employer</label>
              
            </div>   
            
            {/* <button type='submit' className='login-form-btn'>Sign In</button> */}
            <button type='button' className='admin-register-form-button' >Register</button>
            
        </form>
        </div>
    )
      
    
}

export default Register
