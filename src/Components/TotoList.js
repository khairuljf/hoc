import React, {useEffect, useState} from "react";
import HOC from "./HOC";


const TodoList = ({data})=>{
    // const [Todos, setTodos] =  useState([]);
    // const [term, setTerm] = useState('');
    // useEffect(()=>{
    //     const fetchTodos = async ()=>{
    //         const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    //         const json = await res.json();
    //         setTodos(json);
    //     }
    //     fetchTodos();
    // }, [])




    // const filterTodos = Todos.filter(({title})=>{
    //     return title.indexOf(term) >=0;
    // }).map((todo)=>{
    //     return(
    //         <div key={todo.id}>
    //             <p>{todo.title}</p>
    //         </div>
    //     )
    // })

    let renderTodos = data.map((todo)=>{
        return (
            <div key={todo.id}>
                <p>{todo.title}</p>
            </div>
        )
    })

    return (
        <div>
            {renderTodos}
        </div>
    )
}

const searchTodos = HOC(TodoList, 'todos')

export default searchTodos;