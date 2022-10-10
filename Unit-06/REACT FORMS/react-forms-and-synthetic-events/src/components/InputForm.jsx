import React from 'react';

function InputForm({getData}){

    const [formData,setFormData] = React.useState({
        name: "",
        age : "",
        address : "",
        department : "",
        salary : "",
        martialState : false

    });
    const handleChange = (e)=>{
        let {name,value, type , checked} = e.target;
        value = type === "checkbox"? checked : value;
        setFormData({...formData,[name]:value});
    }
    const{name,age,address,department,salary,margialState} = formData;

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData)
        fetch(`http://localhost:3001/employeDetails`,{
             method : "POST",
             headers : {'content-type' : 'application/json'},
             body : JSON.stringify(formData),   
        })
        getData();
        setFormData({
            name: "",
            age : "",
            address : "",
            department : "",
            salary : "",
            martialState : false
        })
    }
    return (
        <>
            <h1>Input Form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name :</label>
                <input
                    type="text"
                    name= "name"
                    value = {name}
                    onChange = {handleChange}
                />
                <br/>
                <label htmlFor = "age">Age : </label>
                <input
                    type = "text"
                    name = "age"
                    value = {age}
                    onChange = {handleChange}
                />
                <br/>
                <label htmlFor = "address">Address : </label>
                <input 
                    type = "text"
                    name = "address"
                    value = {address}
                    onChange={handleChange}
                />
                <br/>
                <label htmlFor = "department">Department</label>
                <select
                    name = "department"
                    value = {department}
                    onChange = {handleChange}
                >
                    <option>select</option>
                     <option value = "sales">Sales</option>
                     <option value = "operations">Operations</option>
                </select>
                <br/>
                <label htmlFor = "salary">Salary</label>
                <input 
                    type = "text"
                    name = "salary"
                    value = {salary}
                    onChange = {handleChange}
                />
                <br/>
                <label htmlFor = "martialStatus">Married ??</label>
                <input 
                type="checkbox"
                name = "martialStatus"
                value = {margialState}
                onChange = {handleChange}
                />
                <br/>
                <input 
                    type="submit"
                />
            </form></>
    )
}


export default InputForm
