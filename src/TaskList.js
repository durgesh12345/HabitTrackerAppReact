import React from 'react'
import { useNavigate } from 'react-router-dom';

// function for task navigation 
export const TaskList = () => {
    const navigate = useNavigate();
  return (
    <div id="details1">
        <div id="container2">
         <div id="taskList">
               {/* header tag */}
      <div id='details'> <img  onClick={() => navigate("/")}  id ="icon" src='https://cdn-icons-png.flaticon.com/128/151/151917.png'></img> <p id= "deta">Details View</p> <img  onClick={() => navigate("/")} id= "icon" src="https://cdn-icons-png.flaticon.com/128/151/151917.png"></img></div>
         <div>
         <div id="listit">
{/* month name for task list */}
    <div id="listm"> <p>  <img id="star" src='https://cdn-icons-png.flaticon.com/128/130/130882.png'></img></p> <p>Sep</p> <p> <img id="star" src='https://cdn-icons-png.flaticon.com/128/81/81068.png'></img> </p> </div>
      
      {/* day name for calender */}
      <div id="weekday">
      <th id="day">M</th> <p id="line"></p>
    <th id="day">T</th> <p id="line"></p>
    <th id="day">W</th> <p id="line"></p>
    <th id="day">T</th> <p id="line"></p>
    <th id="day">F</th> <p id="line"></p>
    <th id="day">S</th> <p id="line"></p>
    <th id="day">S</th> 
    </div>
    {/* lsit for status  */}
    <div id="list1"> <p>WorkOut  <img id="workout" src="https://cdn-icons-png.flaticon.com/128/6793/6793958.png"></img></p> <p> <img id="star" src='https://cdn-icons-png.flaticon.com/128/2107/2107957.png'></img></p> </div>
    <p id="line"></p>
    <p id="line"></p>
    <div  id="weekday1">
  
  {/* drop down to select  task STATUS  */}
   <select id="selectop">
    <option value="Sun" >None</option>
    <option value="Sun" >Done</option>
    <option value="Sun" >Pending</option>
   </select>
   <p id="line"></p>

    {/* drop down to select  task STATUS  */}
   <select id="selectop">
    <option value="Sun" >None</option>
    <option value="Sun" >Done</option>
    <option value="Sun" >Pending</option>
   </select>
   <p id="line"></p>

    {/* drop down to select  task STATUS  */}
   <select id="selectop">
    <option value="Sun" >None</option>
    <option value="Sun" >Done</option>
    <option value="Sun" >Pending</option>
   </select>
   <p id="line"></p>

    {/* drop down to select  task STATUS  */}
   <select id="selectop">
    <option value="Sun" >None</option>
    <option value="Sun" >Done</option>
    <option value="Sun" >Pending</option>
   </select>
   <p id="line"></p>

    {/* drop down to select  task STATUS  */}
   <select id="selectop">
    <option value="Sun" >None</option>
    <option value="Sun" >Done</option>
    <option value="Sun" >Pending</option>
   </select>
   <p id="line"></p>

    {/* drop down to select  task STATUS  */}
   <select id="selectop">
    <option value="Sun" >None</option>
    <option value="Sun" >Done</option>
    <option value="Sun" >Pending</option>
   </select>
   <p id="line"></p>

    {/* drop down to select  task STATUS  */}
   <select id="selectop">
    <option value="Sun" >None</option>
    <option value="Sun" >Done</option>
    <option value="Sun" >Pending</option>
   </select>
      </div>
      <p id="line"></p>
      
       {/* drop down to select  task STATUS  */}
     </div>
     <div id="list1"> <p>ReactDOM  <img id="workout" src="https://cdn-icons-png.flaticon.com/128/6793/6793958.png"></img></p> <p> <img id="star" src='https://cdn-icons-png.flaticon.com/128/2107/2107957.png'></img></p> </div>
    <p id="line"></p>
    <p id="line"></p>
    <div  id="weekday1">
   <select id="selectop">
    <option value="Sun" >None</option>
    <option value="Sun" >Done</option>
    <option value="Sun" >Pending</option>
   </select>
   <p id="line"></p>

    {/* drop down to select  task STATUS  */}
   <select id="selectop">
    <option value="Sun" >None</option>
    <option value="Sun" >Done</option>
    <option value="Sun" >Pending</option>
   </select>
   <p id="line"></p>

    {/* drop down to select  task STATUS  */}
   <select id="selectop">
    <option value="Sun" >None</option>
    <option value="Sun" >Done</option>
    <option value="Sun" >Pending</option>
   </select>
   <p id="line"></p>

    {/* drop down to select  task STATUS  */}
   <select id="selectop">
    <option value="Sun" >None</option>
    <option value="Sun" >Done</option>
    <option value="Sun" >Pending</option>
   </select>
   <p id="line"></p>

    {/* drop down to select  task STATUS  */}
   <select id="selectop">
    <option value="Sun" >None</option>
    <option value="Sun" >Done</option>
    <option value="Sun" >Pending</option>
   </select>
   <p id="line"></p>

    {/* drop down to select  task STATUS  */}
   <select id="selectop">
    <option value="Sun" >None</option>
    <option value="Sun" >Done</option>
    <option value="Sun" >Pending</option>
   </select>
   <p id="line"></p>

    {/* drop down to select  task STATUS  */}
   <select id="selectop">
    <option value="Sun" >None</option>
    <option value="Sun" >Done</option>
    <option value="Sun" >Pending</option>
   </select>
   
  
      </div>
      <p id="line"></p>

      <div id="list1"> <p>WorkOut  <img id="workout" src="https://cdn-icons-png.flaticon.com/128/6793/6793958.png"></img></p> <p> <img id="star" src='https://cdn-icons-png.flaticon.com/128/2107/2107957.png'></img></p> </div>
    <p id="line"></p>
    <p id="line"></p>
    <div  id="weekday1">
  
   <select id="selectop">
    <option value="Sun" >None</option>
    <option value="Sun" >Done</option>
    <option value="Sun" >Pending</option>
   </select>
   <p id="line"></p>

    {/* drop down to select  task STATUS  */}
   <select id="selectop">
    <option value="Sun" >None</option>
    <option value="Sun" >Done</option>
    <option value="Sun" >Pending</option>
   </select>
   <p id="line"></p>

    {/* drop down to select  task STATUS  */}
   <select id="selectop">
    <option value="Sun" >None</option>
    <option value="Sun" >Done</option>
    <option value="Sun" >Pending</option>
   </select>
   <p id="line"></p>

    {/* drop down to select  task STATUS  */}
   <select id="selectop">
    <option value="Sun" >None</option>
    <option value="Sun" >Done</option>
    <option value="Sun" >Pending</option>
   </select>
   <p id="line"></p>

    {/* drop down to select  task STATUS  */}
   <select id="selectop">
    <option value="Sun" >None</option>
    <option value="Sun" >Done</option>
    <option value="Sun" >Pending</option>
   </select>
   <p id="line"></p>

    {/* drop down to select  task STATUS  */}
   <select id="selectop">
    <option value="Sun" >None</option>
    <option value="Sun" >Done</option>
    <option value="Sun" >Pending</option>
   </select>
   <p id="line"></p>

    {/* drop down to select  task STATUS  */}
   <select id="selectop">
    <option value="Sun" >None</option>
    <option value="Sun" >Done</option>
    <option value="Sun" >Pending</option>
   </select>
   
  
      </div>
      <p id="line"></p>

 {/* drop down to select  task STATUS  */}
      <div id="list1"> <p>WorkOut  <img id="workout" src="https://cdn-icons-png.flaticon.com/128/6793/6793958.png"></img></p> <p> <img id="star" src='https://cdn-icons-png.flaticon.com/128/2107/2107957.png'></img></p> </div>
    <p id="line"></p>
    <p id="line"></p>
    <div  id="weekday1">
  
   <select id="selectop">
    <option value="Sun" >None</option>
    <option value="Sun" >Done</option>
    <option value="Sun" >Pending</option>
   </select>
   <p id="line"></p>

    {/* drop down to select  task STATUS  */}
   <select id="selectop">
    <option value="Sun" >None</option>
    <option value="Sun" >Done</option>
    <option value="Sun" >Pending</option>
   </select>
   <p id="line"></p>

    {/* drop down to select  task STATUS  */}
   <select id="selectop">
    <option value="Sun" >None</option>
    <option value="Sun" >Done</option>
    <option value="Sun" >Pending</option>
   </select>
   <p id="line"></p>

    {/* drop down to select  task STATUS  */}
   <select id="selectop">
    <option value="Sun" >None</option>
    <option value="Sun" >Done</option>
    <option value="Sun" >Pending</option>
   </select>
   <p id="line"></p>

    {/* drop down to select  task STATUS  */}
   <select id="selectop">
    <option value="Sun" >None</option>
    <option value="Sun" >Done</option>
    <option value="Sun" >Pending</option>
   </select>
   <p id="line"></p>

    {/* drop down to select  task STATUS  */}
   <select id="selectop">
    <option value="Sun" >None</option>
    <option value="Sun" >Done</option>
    <option value="Sun" >Pending</option>
   </select>
   <p id="line"></p>

    {/* drop down to select  task STATUS  */}
   <select id="selectop">
    <option value="Sun" >None</option>
    <option value="Sun" >Done</option>
    <option value="Sun" >Pending</option>
   </select>
   
  
      </div>
      <p id="line"></p>

      
    
         </div>
         
         </div>
        </div>
    </div>
  )
}

export default TaskList;