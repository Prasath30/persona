import React,{useState,useRef} from 'react'
import "./Campaign.css"

const Campaign = () => {

    const [uploaded, setuploaded] = useState(false)
     const [uploadedFileName, setuploadedFileName] = useState('')
     const [imgPreview, setimgPreview] = useState('')
    const ref = useRef()
    
    const handleFileChallenge = (e)=>{
        console.log("ndjnjajn")
        setuploaded(true)
        var  Files = e.target.files
        if(Files[1]){
            return true
        }
        setuploadedFileName(Files[0].name)
         let reader = new FileReader();

        reader.onloadend = ()=>{
            setimgPreview(reader.result)
        }
        reader.readAsDataURL(Files[0])  
       
    }

    const handleRemoveFile = ()=>{
        ref.current.value = "";
        setuploaded(false)
    }
    return (
        <div className='admin-campaign'>
                
          <form className='admin-campaign-form'>
          <h2>Campaign Form</h2>
              <div> 
                  <label htmlFor="date">Date:</label>
                  <input type="text" name='date' />
              </div>
              <div> 
                  <label htmlFor="name">Name:</label>
                  <input type="text" name='name' />
              </div>
              <label htmlFor="campaign-file" style={{width:"500px"}} >
                   <div className='admin-campaign-file-upload' >
                   {uploaded === true ? null : <p style={{fontSize:"20px",fontWeight:"500"}}>Upload Your File here</p>}
                  
                   {uploaded === true ?  <p style={{fontSize:"20px",fontWeight:"500"}}>File Successfully Uploaded <span className='admin-upload-file'>{uploadedFileName}</span> </p> :  <label htmlFor="campaign-file"style={{textAlign:"center"}}><i class="fas fa-file-upload fa-10x"></i></label> }
                     {uploaded === true ? <button className='change-label' onClick={()=>handleRemoveFile()} >Remove file</button>: null }
                  <input ref={ref} type="file" id='campaign-file' style={{display:"none"}}  onChange={(e)=>handleFileChallenge(e)} multiple='false' />
              </div>
              </label> 
           
             {/* <div style={{width:"500px",background: imgPreview ? `url("${imgPreview}") no-repeat center/cover`:"white",marginTop:"200px"}} >
                                                        
             </div> */}
          </form>  
        </div>
    )
}

export default Campaign
