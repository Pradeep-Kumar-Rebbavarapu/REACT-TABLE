import React from 'react'
import { useMemo } from 'react'
import {useTable,useBlockLayout} from 'react-table'
import {Styles} from './TableStyles'
import {useSticky} from 'react-table-sticky'
import MOCK_DATA from './MOCK_DATA.json'
import {COLUMNS} from './column'
import '../table.css'
export default function StickyTable() {
    const columns = useMemo(()=>COLUMNS,[])
    const data = useMemo(()=>MOCK_DATA,[])
    const tableInstance = useTable({
        columns:columns,
        data:data
    },useBlockLayout,useSticky)
    
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      footerGroups,
    } = tableInstance
    console.log(headerGroups);
    const firstPageRows = rows.slice(0,20)
  return (
    <Styles>
      <div {...getTableProps()} className="table sticky" style={{ width: 1000, height: 500 }}>
        <div className="header">
          {headerGroups.map((headerGroup) => (
            <div {...headerGroup.getHeaderGroupProps()} className="tr">
              {headerGroup.headers.map((column) => (
                <div {...column.getHeaderProps()} className="th">
                  {column.render('Header')}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div {...getTableBodyProps()} className="body">
          {firstPageRows.map((row) => {
            prepareRow(row);
            return (
              <div {...row.getRowProps()} className="tr">
                {row.cells.map((cell) => (
                  <div {...cell.getCellProps()} className="td">
                    {cell.render('Cell')}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
        <div className="footer">
          {footerGroups.map((footerGroup) => (
            <div {...footerGroup.getHeaderGroupProps()} className="tr">
              {footerGroup.headers.map((column) => (
                <div {...column.getHeaderProps()} className="td">
                  {column.render('Footer')}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Styles>
  )
}


