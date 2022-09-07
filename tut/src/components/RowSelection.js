import React from 'react'
import { useMemo } from 'react'
import {useTable,useRowSelect} from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import {GROUPED_COLUMNS} from './column'
import '../table.css'
import { Checkbox } from './CheckBox'
export default function RowSelection() {
    const columns = useMemo(()=>GROUPED_COLUMNS,[])
    const data = useMemo(()=>MOCK_DATA,[])
    const tableInstance = useTable({
        columns:columns,
        data:data
    },useRowSelect,
    (hooks)=>{
        console.log('hooks',hooks);
        hooks.visibleColumns.push((columns)=>{
            
            return [
                {
                    id:'selection',
                    Header:({getToggleAllRowsSelectedProps})=>(
                        <Checkbox {...getToggleAllRowsSelectedProps()} />
                    ),
                    Cell:({row})=><Checkbox {...row.getToggleRowSelectedProps()} />
                },
                ...columns
            ]
        })
    })
    
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      footerGroups,
      selectedFlatRows,

    } = tableInstance
    console.log(headerGroups);

    const firstPageRows = rows.slice(0,10)

  return (
    <>
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
          firstPageRows.map((row)=>{
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
    <pre>
        <code>
            {JSON.stringify(
                {
                    selectedFlatRows:selectedFlatRows.map((row)=>row.original),
                },
                null,
                2
            )}
        </code>
    </pre>
    </>
  )
}

