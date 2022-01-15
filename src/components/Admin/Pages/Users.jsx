import React,{useMemo} from 'react'
import { useTable } from 'react-table'
import { Columns } from './UserColumn.js'
import "./Bookings.css"
import {data} from "./Userdata.js";

const Users = () => {


        const column = useMemo(()=> Columns,[])
    const Data = useMemo (()=> data, [])

    const tableInstance = useTable({
        columns:column,
        data: Data
    })
    
  
     


      const {
        getTableBodyProps,
        getTableProps,
        headerGroups,
        rows,
        prepareRow
    } = tableInstance



    return (<>

        <h1 className='admin-users-title'>Users </h1>
      <div className='tablur-column'>
           <table {...getTableProps()}  >
               <thead >
               {headerGroups.map((headerGroup) => (
                 <tr {...headerGroup.getHeaderGroupProps()} >
                    {
                        headerGroup.headers.map((column)=>{
                            return <th {...column.getHeaderProps()} >{column.render("Header")}</th>
                        })}
                  
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
                                       
                                        </tr>
                                         
                                         </>)  
                            })
                        }
                    
               </tbody>
           </table> 
         </div>
         </>
    )
}

export default Users
