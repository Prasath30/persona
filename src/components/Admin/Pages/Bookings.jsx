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
           <table {...getTableProps()}>
               <thead >
               {headerGroups.map((headerGroup) => (
                 <tr {...headerGroup.getHeaderGroupProps()}>
                    {
                        headerGroup.headers.map((column)=>{
                            return <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                        })}
                   
                </tr>
               ))}
                   
               </thead>
               <tbody {...getTableBodyProps()}>
                        {
                            rows.map((row)=>{
                                prepareRow(row)
                                return( <tr {...row.getRowProps()}>
                                    
                                      {  row.cells.map((cell)=>{
                                         return <td {...cell.getCellProps()}>
                                         {cell.render('Cell')}

                                         </td>

                                        })}
                                        </tr>)
                                    
                            
                            })
                        }
                    
               </tbody>
           </table> 
        </>
    )
}

export default Bookings
