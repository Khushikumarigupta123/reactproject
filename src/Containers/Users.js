import React,{useState} from "react";
function Users (){
    const [ users, setUsers]= useState([
        {name : 'mohan'  , age: 20},
        {name : 'Ram',age :18 },
    ])
    return
    <div>
        <h2>Users</h2>
        <ul>
            {
                users.map((user , index) =>{
                    return <li>{user.name}, {user.age}</li>
                    })
                }
            
            
        </ul>
    </div>
}

export  default Users;