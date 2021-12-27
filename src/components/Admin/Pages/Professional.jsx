import React,{useState} from 'react'
import "./Professional.css"

const Professional = () => {

    const [profName, setprofName] = useState({
        one:"Sam",
        two:"Jim",
        three:"Martin"
    })

    const [formValue, setformValue] = useState(profName.one)
    const [add, setadd] = useState(true)


    return (
        <>
            <section className='admin-professional'>
                 <form action=""  className='professional-form'  >
                <div>
                    <label htmlFor="name">Professional Name:</label>
                    <input type="text" value={formValue} onChange={(e)=>setformValue(e.target.value)} />
                </div>
                 <div>
                    <label htmlFor="name">Professional Email:</label>
                    <input type="text" value={formValue} onChange={(e)=>setformValue(e.target.value)} />
                </div>
                 <div>
                    <label htmlFor="name">Professional Mobile Number:</label>
                    <input type="text" value={formValue} onChange={(e)=>setformValue(e.target.value)} />
                </div>
                <div style={{textAlign:"center"}}>
                    {add === true ? <button className='btn btn-primary btn-lg'>Add</button> : <button className='btn btn-success btn-lg'>Confirm </button> }
                    
                </div>
               
            </form>
            <div className='tablur-column'>
                <h2>Professional Table</h2>
          <table>
              <thead>
                  <tr>
                      <th>
                        Professional Name
                      </th>
                         <th>
                        Professional Email
                      </th>
                         <th>
                        Professional Phn Number
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
                      <td><button className='btn btn-dark'><i class="fas fa-edit"></i></button>
                      <button className='btn btn-danger'><i class="fas fa-trash-alt"></i></button>
                      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter"><i class="fas fa-user-plus"></i></button></td>
                  </tr>
                   <tr>
                      <td>{profName.two}</td>
                      <td></td>
                      <td></td>
                      <td><button className='btn btn-dark'><i class="fas fa-edit"></i></button>
                      <button className='btn btn-danger'><i class="fas fa-trash-alt"></i></button>
                      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter"><i class="fas fa-user-plus"></i></button></td>
                  </tr>
                   <tr>
                      <td>{profName.three}</td>
                      <td></td>
                      <td></td>
                      <td><button className='btn btn-dark'><i class="fas fa-edit"></i></button>
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
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form action="">
                    <div>
                    <label htmlFor="date">Date:</label>
                    <input type="date"  name="time" required style={{width:"100px"}}  />
                    </div>
                    
                    <div  style={{marginTop:"30px"}} >
                    <label htmlFor="time">Time:</label>
                    <input type="time"  name="time" required style={{width:"100px"}}  />
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