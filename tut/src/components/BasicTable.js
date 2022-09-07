import React from 'react'
import { useMemo } from 'react'
import {useTable} from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import {GROUPED_COLUMNS} from './column'
import '../table.css'
export default function BasicTable() {
    const columns = useMemo(()=>GROUPED_COLUMNS,[])
    const data = useMemo(()=>MOCK_DATA,[])
    const tableInstance = useTable({
        columns:columns,
        data:data
    })
    
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      footerGroups,
    } = tableInstance
    console.log(headerGroups);
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup)=>{
          return (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {
                headerGroup.headers.map((column)=>{
                  return (
                    <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                  )
                  
                })
              }
          </tr>
          )
          
        })}
           
      </thead>
      <tbody {...getTableBodyProps()}>
        {
          rows.map((row)=>{
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell)=>{
                  prepareRow(row)
                  return (
                    <td {...cell.getCellProps()}>
                      {cell.render('Cell')}

                    </td>
                  )
                })}
              </tr>
            )
          })
        }
      </tbody>
      <tfoot>
        {footerGroups.map((footerGroup)=>{
          return (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map((column)=>{
                return (
                  <td {...column.getFooterProps}>
                  {column.render('Footer')}
                  </td>
                )
                
              })} 
              
            </tr>
          )
        })}
        
      </tfoot>
    </table>
  )
}


