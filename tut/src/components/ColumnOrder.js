import React from 'react'
import { useMemo } from 'react'
import {useTable,useColumnOrder} from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import {COLUMNS} from './column'
import '../table.css'
export default function ColumnOrder() {
    const columns = useMemo(()=>COLUMNS,[])
    const data = useMemo(()=>MOCK_DATA,[])
    const tableInstance = useTable({
        columns:columns,
        data:data
    },useColumnOrder)
    
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      footerGroups,
      setColumnOrder
    } = tableInstance
    console.log(headerGroups);

    const ChangeOrder = () =>{
        setColumnOrder([
            'id','first_name','last_name','Phone','Country','Date_Of_Birth'
        ])
    }
  return (
    <>
    <button onClick={ChangeOrder}>Change Column Order</button>
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
    </table>
    </>
  )
}


