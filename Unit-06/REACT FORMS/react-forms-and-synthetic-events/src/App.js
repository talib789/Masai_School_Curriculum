import InputForm from './components/InputForm';
import EmployeeList from './components/EmployeList';
import './App.css';
import React from 'react'
function App() {
  const [data,setData]=React.useState([]);
  const getData=()=>
  {
      fetch(`http://localhost:3001/employeDetails`)
      .then((res)=>
        res.json()
      )
      .then((res)=>
      { 
        console.log(res)
        setData(res)        
      })
      .catch((error)=>
      {
        console.log(error);
      })
  }
  React.useEffect(
    ()=>{
      getData()
     
    },[]
  )
  return (
    <div className="App">
      <InputForm getData={getData} />
      <EmployeeList data = {data}/>
    </div>
  );
}

export default App;
