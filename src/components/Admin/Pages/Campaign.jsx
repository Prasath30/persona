import React,{useState} from 'react'
import "./Campaign.css"

const Campaign = () => {

    const [uploaded, setuploaded] = useState(false)

    return (
        <div className='admin-campaign'>
                
          <form className='admin-campaign-form'>
          <h2>Campaign Form</h2>
              <div> 
                  <label htmlFor="date">Date:</label>
                  <input type="date" name='date' />
              </div>
              <div> 
                  <label htmlFor="name">Name:</label>
                  <input type="text" name='name' />
              </div>
              <div className='admin-campaign-file-upload'>
                   {uploaded === true ? null : <p>Upload Your File here</p>}
                  
                   {uploaded === true ?  <p>File Successfully Uploaded</p> :  <label htmlFor="campaign-file"style={{textAlign:"center"}}><i class="fas fa-file-upload fa-10x"></i></label> }
                  {uploaded === true ? <label htmlFor="campaign-file" className='change-label'>Change File</label> : null }
                  <input type="file" id='campaign-file' style={{display:"none"}}  onChange={()=>setuploaded(true)} multiple='false' />
              </div>
          </form>  
        </div>
    )
}

export default Campaign
