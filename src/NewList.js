import React from 'react'
import { useNavigate } from "react-router-dom";

// function and naviagete for router navigation
function NewList() {
    const navigate = useNavigate();
  return (
  
    <div id="container1">
    <div id="container3">
     
     {/* header for navigation */}
      <div id='details'> <img onClick={() => navigate("/")}  id ="icon" src='https://cdn-icons-png.flaticon.com/128/151/151917.png'></img> <p id= "deta">Details View</p> <img onClick={() => navigate("/")} id= "icon" src="https://cdn-icons-png.flaticon.com/128/151/151917.png"></img></div>
   
   {/* list of task */}
     <div id="listit">
<div id="list1"> <p>WorkOut  <img id="workout" src="https://cdn-icons-png.flaticon.com/128/6793/6793958.png"></img></p> <p>Time</p> </div>
     <div id="list1"> <input type="checkbox" id="check"></input>  <img id="star" src='https://cdn-icons-png.flaticon.com/128/2107/2107957.png'></img>  </div>
    <div id="list1">  <p>1 day</p> <p> 9 best</p> <p>38/92</p> <p>Daily</p></div>
    <p id="line"></p>
     </div>

      {/* list of task */}
     <div id="listit">
<div id="list1"> <p>WorkOut  <img id="workout" src="https://cdn-icons-png.flaticon.com/128/6793/6793958.png"></img></p> <p>Time</p> </div>
     <div id="list1"> <input type="checkbox" id="check"></input>  <img id="star" src='https://cdn-icons-png.flaticon.com/128/2107/2107957.png'></img>  </div>
    <div id="list1">  <p>1 day</p> <p> 9 best</p> <p>38/92</p> <p>Daily</p></div>
    <p id="line"></p>
     </div>

      {/* list of task */}
     <div id="listit">
<div id="list1"> <p>WorkOut  <img id="workout" src="https://cdn-icons-png.flaticon.com/128/6793/6793958.png"></img></p> <p>Time</p> </div>
     <div id="list1"> <input type="checkbox" id="check"></input>  <img id="star" src='https://cdn-icons-png.flaticon.com/128/2107/2107957.png'></img>  </div>
    <div id="list1">  <p>1 day</p> <p> 9 best</p> <p>38/92</p> <p>Daily</p></div>
    <p id="line"></p>
     </div>

      {/* list of task */}
     <div id="listit">
<div id="list1"> <p>WorkOut  <img id="workout" src="https://cdn-icons-png.flaticon.com/128/6793/6793958.png"></img></p> <p>Time</p> </div>
     <div id="list1"> <input type="checkbox" id="check"></input>  <img id="star" src='https://cdn-icons-png.flaticon.com/128/2107/2107957.png'></img>  </div>
    <div id="list1">  <p>1 day</p> <p> 9 best</p> <p>38/92</p> <p>Daily</p></div>
    <p id="line"></p>
     </div>

      {/* list of task */}
     <div id="listit">
<div id="list1"> <p>WorkOut  <img id="workout" src="https://cdn-icons-png.flaticon.com/128/6793/6793958.png"></img></p> <p>Time</p> </div>
     <div id="list1"> <input type="checkbox" id="check"></input>  <img id="star" src='https://cdn-icons-png.flaticon.com/128/2107/2107957.png'></img>  </div>
    <div id="list1">  <p>1 day</p> <p> 9 best</p> <p>38/92</p> <p>Daily</p></div>
    <p id="line"></p>
     </div>
    </div>
     <div> </div>
    </div>
   
  )
}

export default NewList;




