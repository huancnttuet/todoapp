import './App.css';
import {useState} from 'react';
import List from "./components/List";
import Button from "./components/Button";
import  DataContext  from "./contexts/data.js";
import Input from './components/Input'

function App() {
  const [list, setList] = useState([])
  const [display,setDisplay] = useState(0)
  const [newValue, setNewValue] = useState('')
  const [change,setChange] = useState(false)
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      let temp = list;
      temp.push({name: newValue,state: false})
      setList(temp)
      setChange(!change)
    }
  } 
  const deleteItem = (index) => {
    console.log(index)
    let temp = list;
    temp.splice(index,1)
    setList(temp)
    setChange(!change)
  }
  return (
    <DataContext.Provider value={{list,deleteItem}}>
      <div style={{marginLeft:'30px'}}>
      <h1>Todo App</h1>
      <Input  type='text' value={newValue} onChange={e => setNewValue(e.target.value)} onKeyDown={handleKeyDown}/>
      <br />
      <List  type={display}></List>
      <Button type='' text='Toggle All' onClick={() => {
        let temp = list;
        temp = temp.map(e => {return {name : e.name, state: true};})
        setList(temp)
      }} />
      <div>
        <span>Filter</span>
        <Button type={display === 0 ? 'active' : 'deactive'} text='All' onClick={e => setDisplay(0)} />
        <Button type={display === 1 ? 'active' : 'deactive'}  text='Done' onClick={e => setDisplay(1)} />
        <Button type={display === 2 ? 'active' : 'deactive'}  text='Active' onClick={e => setDisplay(2)} />
      </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
