import React,{useState} from 'react'
import "./Professional.css"

const Professional = () => {

    const [profName, setprofName] = useState({
        one:"Sam",
        two:"sam@gmail.com",
        three:960003323
    })

    const handleClearBtn = (e)=>{
        e.preventDefault();
        setprofName({
            one:"",
            two:"",
            three:""
        })
    }

    return (
        <>
            <section className='admin-professional'>
                 <form action=""  className='professional-form'  >
                    <h2>Professional Form</h2>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" value={profName.one} onChange={(e)=>setprofName({...profName,one:e.target.value})} />
                </div>
                 <div>
                    <label htmlFor="name">Email:</label>
                    <input type="text" value={profName.two} onChange={(e)=>setprofName({...profName,two:e.target.value})} />
                </div>
                 <div>
                    <label htmlFor="name">Mobile Number:</label>
                    <input type="tel" value={profName.three} onChange={(e)=>setprofName({...profName,three:e.target.value})} />
                </div>
                <div style={{textAlign:"center"}}>
                    <button className='btn btn-primary btn-lg'>Add</button> 
                    <button className='btn btn-secondary btn-lg' style={{marginLeft:"40px"}} onClick={(e)=>handleClearBtn(e)} >Clear</button>
                    
                </div>
               
            </form>
            <div className='tablur-column'>
                <h2>Professional Table</h2>
          <table>
              <thead>
                  <tr>
                      <th>
                        Name
                      </th>
                         <th>
                        Email
                      </th>
                         <th>
                            Phn Number
                      </th>
                      <th>
                        Actions
                      </th>
                     
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>{profName.one}</td>
                      <td></td>
                      <td></td>
                       <td className='table-cols'><button  className='btn btn-dark'><i class="fas fa-edit"></i></button>
                      <button className='btn btn-danger'><i class="fas fa-trash-alt"></i></button>
                      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter"><i class="fas fa-user-plus"></i></button></td>
                  </tr>
                   <tr>
                      <td>{profName.two}</td>
                      <td></td>
                      <td></td>
                      <td className='table-cols'><button  className='btn btn-dark'><i class="fas fa-edit"></i></button>
                      <button className='btn btn-danger'><i class="fas fa-trash-alt"></i></button>
                      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter"><i class="fas fa-user-plus"></i></button></td>
                  </tr>
                   <tr>
                      <td>{profName.three}</td>
                      <td></td>
                      <td></td>
                      <td className=' table-cols'><button  className='btn btn-dark'><i class="fas fa-edit"></i></button>
                      <button className='btn btn-danger'><i class="fas fa-trash-alt"></i></button>
                      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter"><i class="fas fa-user-plus"></i></button></td>
                  </tr>

              </tbody>
          </table> 
          </div>
        {/* <button >
                Launch demo modal
        </button> */}


        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Add Dates</h5>
                <button type="button"  class="close btn btn-outline-danger" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form action="">
                    <div className='admin-proffesional-modal-form'>
                    <label htmlFor="date" >Date:</label>
                    <input type="date"  name="time" required  />
                    <span >To</span>
                    <input type="date"  name="time" required  />
                    </div>
                    
                    <div  style={{marginTop:"30px"}} className='admin-proffesional-modal-form' >
                     <label htmlFor="time">Time:</label>
                      <select name="time"  >
                      
                      <option value="09:00" selected>09.00 AM</option>
                      
                      <option value="10:00">10.00 AM</option>
                      
                      <option value="11:00">11.00 AM</option>
                      
                      <option value="12:00">12.00 PM</option>
                      
                      <option value="13:00">01.00 PM</option>
                      
                      <option value="14:00">02.00 PM</option>
                      
                      <option value="15:00">03.00 PM</option>
                      
                      <option value="16:00">04.00 PM</option>
                      
                      <option value="17:00">05.00 PM</option>
                    
                      <option value="18:00">06.00 PM</option>
                     
                      <option value="19:00">07.00 PM</option>
                      
                      <option value="20:00">08.00 PM</option>
                      
                      <option value="21:00">09.00 PM</option>
                    
                      {/* <option value="22:00">10.00 PM</option>
                
                      <option value="23:00">11.00 PM</option> */}
                      
                  </select>
                       <span >To</span>
                      <select name="time"   >
                      
                      <option value="09:00" selected>09.00 AM</option>
                      
                      <option value="10:00">10.00 AM</option>
                      
                      <option value="11:00">11.00 AM</option>
                      
                      <option value="12:00">12.00 PM</option>
                      
                      <option value="13:00">01.00 PM</option>
                      
                      <option value="14:00">02.00 PM</option>
                      
                      <option value="15:00">03.00 PM</option>
                      
                      <option value="16:00">04.00 PM</option>
                      
                      <option value="17:00">05.00 PM</option>
                    
                      <option value="18:00">06.00 PM</option>
                     
                      <option value="19:00">07.00 PM</option>
                      
                      <option value="20:00">08.00 PM</option>
                      
                      <option value="21:00">09.00 PM</option>
                    
                      {/* <option value="22:00">10.00 PM</option>
                
                      <option value="23:00">11.00 PM</option> */}
                      
                  </select>
                  </div>
                    
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" data-dismiss="modal">Submit</button>
            </div>
            </div>
        </div>
        </div>
            </section>
        </>
    )
}

export default Professional
