import {createContext} from 'react'

const datastub = {list:[],func:() => {}}

const DataContext = createContext(datastub)

export default DataContext;