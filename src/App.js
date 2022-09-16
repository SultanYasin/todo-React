import React from 'react';
import { useState } from 'react';
import TodoList from './Components/TodoList'
import TodoListInfo from './Components/TodoListInfo'
import './App.css';


function App() {
   
  let [view , setView]  =useState('list')
  let [viewDate , setViewDate] = useState(undefined)

  let component;
  if (view === 'list') {component = < TodoList setView = {setView} viewDate={viewDate} setViewDate={setViewDate} />}   
  else if(view === 'info') {component = < TodoListInfo setView = {setView} viewDate={viewDate} setViewDate={setViewDate}  /> }

  return (
    <div className="App">
        {component}
        <button onClick={()=> setView('info')} >info</button>
        <button onClick={()=> setView('list')} >LIST</button>
    </div>
  );
}

export default App;
