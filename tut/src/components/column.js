import {format} from 'date-fns'
import ColumnFilter from './ColumnFilter'
export const COLUMNS = [
    {
        Header:"id",
        Footer:'id',
        accessor:'id',
        sticky:'left'
    },
    {
        Header:"First Name",
        Footer:'First Name',
        accessor:"first_name",
        sticky:'left'
    },
    {
        Header:"Last Name",
        Footer:'Last Name',
        accessor:"last_name",
        sticky:'left'
    },
    {
        Header:"Date of Birth",
        Footer:'Date of Birth',
        accessor:"Date_Of_Birth"
    },
    {
        Header:"Country",
        Footer:'Country',
        accessor:"Country"
    },
    {
        Header:"Phone",
        Footer:'Phone',
        accessor:"Phone"
    },
    {
            
        Header:"Email",
        Footer:'Email',
        accessor:"email"
    },
    {
       
        Header:"Age",
        Footer:'Age',
        accessor:"Age"
    },
   
]


export const GROUPED_COLUMNS = [
    {
        Header:"id",
        Footer:'id',
        accessor:'id',
        sticky:'left',
        disableFilters:true
    },
    {
        Header:'Name',
        Footer:'Name',
        columns:[
            {
                Header:"First Name",
                Footer:'First Name',
                accessor:"first_name",
                sticky:'left',
                
            },
            {
               
                Header:"Last Name",
                Footer:'Last Name',
                accessor:"last_name",
                sticky:'left',
            },
        ]
    },
    {
        Header:'info',
        Footer:'info',
        columns:[
            {
               
                Header:"Date of Birth",
                Footer:'Date of Birth',
                accessor:"Date_Of_Birth",
                Cell:({value})=>{
                    return format(new Date(value),'dd/MM/yyyy')
                }
            },
            {
            
                Header:"Country",
                Footer:'Country',
                accessor:"Country"
            },
            {
               
                Header:"Phone",
                Footer:'Phone',
                accessor:"Phone"
            },
            {
            
                Header:"Email",
                Footer:'Email',
                accessor:"email"
            },
            {
               
                Header:"Age",
                Footer:'Age',
                accessor:"Age"
            },
        ]
    }
]