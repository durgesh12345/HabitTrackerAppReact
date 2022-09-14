import ReactDom from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TaskList from './TaskList';
import App from './App';
import NewList from './NewList';

// router for router perpose routes
export default function Router1(){
    return(
        <BrowserRouter>

        {/* router for router*/}
         <Routes>
          <Route path="/" element={<App />}>  </Route>
        </Routes>

          {/* router for router*/}
        <Routes>
          <Route path="/TaskList" element={<TaskList />}>  </Route>
        </Routes>
       
         {/* router for router*/}
        <Routes>
          <Route path="/NewList" element={<NewList />}>  </Route>
        </Routes>
       
        
       
      </BrowserRouter>
         
    )
}