import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [add, addUpdate] = useState({ title: '' })
  const [data, dataUpdate] = useState([{ id: '1', title: 'todo 1', desc: 'desc1', isDone: false },
  { id: '2', title: 'todo 2', desc: 'desc1df', isDone: false },
  { id: '3', title: 'todo 3', desc: 'desc1df', isDone: false }])
  return (<>
    <input type="text"
    className='add-input'
      value={add.title}
      onChange={(e) => { addUpdate({ ...add, title: e.target.value }) }}
    />
    <button 
    className="add-btn"
     onClick={() => { dataUpdate([...data, add]) }}>
        ADD </button>
    <div className="">
      {
        data.length > 0 &&
        data.map((i, index) => {
          return <div className="title-div">
            {i.title}
          </div>
        })
      }
    </div>
  </>);
}

export default App;
