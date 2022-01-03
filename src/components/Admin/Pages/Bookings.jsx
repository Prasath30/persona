import React,{useMemo,useState} from 'react'
import { useTable } from 'react-table'
import { Columns } from './Column'
import { data } from './data.js'
import "./Bookings.css"

const Bookings = () => {

    const column = useMemo(()=> Columns,[])
    const Data = useMemo (()=> data, [])
    const [openForm, setopenForm] = useState(false)

    const tableInstance = useTable({
        columns:column,
        data: Data
    })
    
  
     
    console.log(column)
    console.log(Data)

      const {
        getTableBodyProps,
        getTableProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance
    
    return (
        <>
        <section className='booking'>
             <h1>Booking</h1>
             <button className='booking-add-booking-btn' onClick={()=>setopenForm(true)} >Add Booking</button>
            <div className='wrap'>
           <table {...getTableProps()}  >
               <thead >
               {headerGroups.map((headerGroup) => (
                 <tr {...headerGroup.getHeaderGroupProps()} >
                    {
                        headerGroup.headers.map((column)=>{
                            return <th {...column.getHeaderProps()} >{column.render("Header")}</th>
                        })}
                   <th>Actions</th>
                </tr>
               ))}
                   
               </thead>
               <tbody {...getTableBodyProps()}>
                        {
                            rows.map((row)=>{
                                prepareRow(row)
                                return(<><tr {...row.getRowProps()}  >
                                    
                                      {  row.cells.map((cell)=>{
                                         return<> <td {...cell.getCellProps() }>
                                         {cell.render('Cell')}

                                         </td>
                                         
                                        </>
                                        })}
                                       
                                      <td className='wide'><button className='btn btn-dark' style={{marginLeft:"0px"}}><i class="fas fa-edit"></i></button>
                                       <button className='btn btn-danger' style={{marginLeft:"15px"}}><i class="fas fa-trash-alt"></i></button>
                                        </td>
                                        </tr>
                                         
                                         </>)  
                            })
                        }
                    
               </tbody>
           </table> 
         </div>
                       
        {
            openForm ? <form action=""  className='admin-booking-form row'  >
                        <h2>Booking form</h2>
                <div className='col-lg-6 col-sm-12' >
                    <label htmlFor="name">Employee Name:</label>
                    <input type="text"  />
                </div>
                 <div className='col-lg-6 col-sm-12'>
                    <label htmlFor="name">Employee Email:</label>
                    <input type="text"  />
                </div>
                 <div className='col-lg-6 col-sm-12'>
                    <label htmlFor="name">Comapany Name:</label>
                    <input type="text"  />
                </div>
                 <div className='col-lg-6 col-sm-12' >
                    <label htmlFor="name">Date:</label>
                    <input type="date"  />
                </div>
                 <div className='col-lg-6 col-sm-12' >
                     <label htmlFor="time">Time:</label>
                      <select name="time"> 
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
                  </select>
               
                
                </div>
                 <div className='col-lg-6 col-sm-12' >
                    <label htmlFor="professional">Proffesional:</label>
                      <select  required  >
                        <option value="professional-one" selected>Proffesional 1</option>
                        <option value="professional-two">Proffesional 2</option>
                        <option value="professional-three">Proffesional 2</option>
                      </select>
                </div>
                 <div className='col-lg-6 col-sm-12' >
                   <label htmlFor="category">Category:</label>
                      <select name="category" id="" required >
                          <option selected >Feeling Stressed</option>
                          <option > Manage Burnout</option>
                          <option >  Relationship/People Problems</option>
                          <option >  Wish to Feel Good</option>
                          <option >  Not Sure what to talk about</option>
                          <option >  Need Mental Clarity</option>
                      </select>
                </div>
                 <div className=''>
                   <label htmlFor="message">Any Message ?</label>
                  <textarea name="" id="" col-6s="30" rows="5" required></textarea>
                </div>
                <div style={{textAlign:"center"}}>
                 <button className='btn btn-primary btn-lg'>Add</button> 
                    
                </div>
               
            </form> :
            null
        }
       
        </section>
        </>
    )
}

export default Bookings
