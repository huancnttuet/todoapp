import {useState, useContext} from 'react'
import DataContext from '../../contexts/data.js'
import Button from '../Button'
function List(props) {
    const { type } = props
    const [change, setChange] = useState(false)   
    const context = useContext(DataContext)
    let data = context.list
    const deleteItem = context.deleteItem

    const jsx = (e,i) => {
      return(<tr>
        <td>
        <input type="checkbox" checked={e.state} onChange={() => {e.state = !e.state; setChange(!change);}}/>
        </td>
        {!e.state ? <td>{e.name}</td> : <td style={{opacity:'0.5'}}>{e.name}</td>}
        <td><Button type='X' text='X' onClick={e => deleteItem(i)}/></td>
        </tr>)
    }

    return ( 
        <table>
          <thead></thead>
          <tbody>
          {data ? data.map((e,i) => {
            if(type === 0 || (type === 1 && e.state) || (type === 2 && !e.state)){
            return jsx(e,i)
            }
            return <></>
          }) : ''}
          </tbody>
      </table>
    );
} 

export default List;