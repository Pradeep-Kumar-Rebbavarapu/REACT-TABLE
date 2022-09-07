import React from 'react'
import { useMemo } from 'react'
import {useTable,usePagination} from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import {GROUPED_COLUMNS} from './column'
import '../table.css'
export default function PaginationTable() {
    const columns = useMemo(()=>GROUPED_COLUMNS,[])
    const data = useMemo(()=>MOCK_DATA,[])
    const tableInstance = useTable({
        columns:columns,
        data:data
    },usePagination)
    
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      nextPage,
      previousPage,
      canNextPage,
      canPreviousPage,
      prepareRow,
      state,
      pageOptions,
      gotoPage,
      pageCount,
      setPageSize,
    } = tableInstance
    console.log(headerGroups);

    const {pageIndex,pageSize} = state
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
          page.map((row)=>{
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
    <div>
        <span>
            page{' '}
            <strong>
                {pageIndex + 1} of {pageOptions.length}
            </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input  type="number" default={pageIndex + 1} onChange={(e)=>{
            const pageNumber = e.target.value ? Number(e.target.value) - 1:0
            gotoPage(pageNumber)
          }} style={{width:'50px'}} />
        </span>
        {' '}
        <select value={pageSize} onChange={e=>setPageSize(Number(e.target.value))}>
          {
            [10,25,50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))
          }
        </select>
        {' '}
        <button disbaled={!canPreviousPage} onClick={()=>gotoPage(0)}>{'<<'}</button>
        <button disabled={!canPreviousPage} onClick={()=>previousPage()}>Previous</button>
        <button disabled={!canNextPage} onClick={()=>nextPage()}>Next</button>
        <button disabled={!canNextPage} onClick={()=>gotoPage(pageCount - 1)}>{'>>'}</button>
      </div>
    </>
  )
}


