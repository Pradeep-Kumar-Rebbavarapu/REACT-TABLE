import React,{useState} from 'react'
import { useAsyncDebounce } from 'react-table'
export default function GlobalFilter({filter,setFilter}) {
    const [value,setvalue] = useState(filter)
    const onChange = useAsyncDebounce(value =>{
        setFilter(value || undefined)
    },300)
  return (
    <div>
      Search:
      <input value={value || ''} onChange={(e)=>{
        setvalue(e.target.value)
        onChange(e.target.value)
    }}/>
    </div>
  )
}
