
import React from "react";
import { render } from "react-dom";
import UserList from "./UserList";
import TodoList from "./TotoList"; 

const App = ()=>  {
      return(
           <>
           <div className="app-wrap">
            <div className="userlist">
                  <UserList />
            </div>
            <div className="todos-list">
                  <TodoList />
            </div>
                  
           </div>
          
           </>
      )
}
export default App;

