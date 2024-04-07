import React, {useState} from 'react';
function DataBinding(){
    const[data , setData] = useState({
        name : "mohan",
        age: 25,
    })
    const handleChange= (event) =>{
        let value= event.target.value;
        setData({
            ...data,name:value
        });
    }
    return(
        <div>
            <h2>Data Binding</h2>
            <h4>
                one way Binding : {data.name} --is {data.age} 
            </h4>
            <div>
                <input type ='text' value={data.name} onChange={handleChange}/>
            </div>
        </div>

    )
}
export default DataBinding;