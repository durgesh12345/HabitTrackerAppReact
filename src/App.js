import React from 'react';
import ReactDOM from 'react-dom/client';
import { useNavigate } from "react-router-dom";
import './index.css';
import {Link} from 'react-router-dom'
import {useState} from 'react';

function App() {
 
const [name,setName] = useState();

const [list, setList] = useState([]);
const [list1, setList2] = useState([]);

  const [value, setValue] = useState("");
const [date, setValue1] = useState("");
 

  const addToList = () => {

    let tempArr = list;
   let tempArr1 = list1;
    tempArr.push(value);
    tempArr1.push(date)

    setList(tempArr);
    setList2(tempArr1);
    setValue1("");

    setValue("");


  };



  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
      <div className="container">
        <div id="head"> <img onClick={() => navigate("/TaskList")} alt='' id="listlogo" src ="https://cdn-icons-png.flaticon.com/128/839/839860.png" /> <p id="title1">Habit Tracker React App</p>  <img  onClick={() => navigate("/NewList")} id="listlogo" src ="https://cdn-icons-png.flaticon.com/128/839/839860.png" /></div>
        
       <div>
        <form>
       Enter Your Habit <br></br>
     
       <input   placeholder="Enter your habit" type="text" value={value} id="lable" onChange={(e) => setValue(e.target.value)}  required></input> <br></br>
        {/* <input type="date"  onChange={(e) => setValue1(e.target.value)}></input> <br></br> */}
        <input id="submitbtn"  onClick={addToList} type="submit"></input>
        </form>
       </div>
      
     <div id="scroller">
     {list.length > 0 && list.map((item) => <li> <div id="listit">
<div id="list1"> <p>{item}  <img id="workout" src="https://cdn-icons-png.flaticon.com/128/6793/6793958.png"></img></p> <p>Time</p> </div>
     <div id="list1"> <input type="checkbox" id="check"></input>  <img id="star" src='https://cdn-icons-png.flaticon.com/128/2107/2107957.png'></img>  </div>
    <div id="list1">  <p>1 day</p> <p> 9 best</p> <p>38/92</p> <p>Daily</p></div>
    <p id="line"></p>
     </div> </li>  )}
     </div>
       
    
      </div> 
      </header>
    </div>
  );
}

export default App;
