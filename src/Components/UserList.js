import React, {useEffect, useState} from "react";
import HOC from "./HOC";


const UserList = ({data})=>{
    // const [users, setUsers] =  useState([]);
    // const [term, setTerm] = useState('');
    // useEffect(()=>{
    //     const fetchUsers = async ()=>{
    //         const res = await fetch("https://jsonplaceholder.typicode.com/users");
    //         const json = await res.json();
    //         setUsers(json);
    //     }
    //     fetchUsers();
    // }, [])


    // const filterUsers = users.filter(({name})=>{
    //     return name.indexOf(term) >=0;
    // }).map((userInfo)=>{
    //     return(
    //         <div key={userInfo.id}>
    //             <p>{userInfo.name}</p>
    //         </div>
    //     )
    // })

    let renderUsers = data.map((user)=>{
        return (
            <div key={user.id}>
                <p>{user.name}</p>
            </div>
        )
    })


    return (
        <div>
            {renderUsers}
        </div>
    )
}

const SearchUsers = HOC(UserList, "users")

export default SearchUsers;