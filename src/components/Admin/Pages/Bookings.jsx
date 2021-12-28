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

                                        <td>
                                        <button className='btn btn-danger'><i class="fas fa-trash-alt"></i></button></td>
                                        </tr>
                                         
                                         </>)

                                    
                            
                            })
                        }
                    
               </tbody>
           </table> 
        </div>
        </section>
        </>
    )
}

export default Bookings
