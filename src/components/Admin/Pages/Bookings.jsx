import React,{useMemo} from 'react'
import { useTable } from 'react-table'
import { Columns } from './Column'
import { data } from './data.js'
import "./Bookings.css"

const Bookings = () => {

    const column = useMemo(()=> Columns,[])
    const Data = useMemo (()=> data, [])

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

                                      <td><button className='btn btn-dark'><i class="fas fa-edit"></i></button>
                                       <button className='btn btn-danger'><i class="fas fa-trash-alt"></i></button>
                                       <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter"><i class="fas fa-user-plus"></i></button></td>
                                        </tr>
                                         
                                         </>)

                                    
                            
                            })
                        }
                    
               </tbody>
           </table> 
         </div>
                       
                 <form action=""  className='professional-form'  >
                        <h2>Booking form</h2>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text"  />
                </div>
                 <div>
                    <label htmlFor="name">Email:</label>
                    <input type="text"  />
                </div>
                 <div>
                    <label htmlFor="name">Date:</label>
                    <input type="text"  />
                </div>
                 <div>
                    <label htmlFor="name">Time:</label>
                    <input type="text"  />
                </div>
                 <div>
                    <label htmlFor="name">Professional:</label>
                    <input type="text"  />
                </div>
                 <div>
                    <label htmlFor="name">Category:</label>
                    <input type="text"  />
                </div>
                 <div>
                    <label htmlFor="name">Message:</label>
                    <input type="text"  />
                </div>
                 <div>
                    <label htmlFor="name">Gmeet-Link:</label>
                    <input type="text"  />
                </div>
                <div style={{textAlign:"center"}}>
                 <button className='btn btn-primary btn-lg'>Add</button> 
                    
                </div>
               
            </form>
       
        </section>
        </>
    )
}

export default Bookings
