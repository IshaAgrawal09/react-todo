import React,{ useState } from 'react';

import Add from './Add';
import './App.css';
import Complete from './Complete';
import Incomplete from './Incomplete';

function App() {

  const [text,setText] = useState("");
  const [count,setCount] =  useState(1);
  const [itemarr,setItemarr] = useState([]);
  const [comp,setComp] = useState([]);

  return (
    <div className="App">
      <div className='todo'>
        <Add 
        text = {text}
        setText = {setText}
        count = {count}
        setCount = {setCount}
        itemarr = {itemarr}
        setItemarr = {setItemarr}
        />
        <Incomplete 
          setText = {setText}
          textArr = {itemarr}
          setItemarr = {setItemarr}
          comp = {comp}
          setComp = {setComp}
        />
        <Complete 
          comp = {comp}
          setComp = {setComp}
        />
      </div>
    </div>
  );
}

export default App;
