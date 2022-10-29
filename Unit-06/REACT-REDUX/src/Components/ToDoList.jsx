import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editDbTodo, getAllLatestTodosLoading, getAllLatestTodosFailure } from "../redux/action";
import { PuffLoader } from "react-spinners";

const ToDoList = () => {
  const {todos, isLoading, isError} = useSelector((state) => state);
  const dispatch = useDispatch();

  React.useEffect(()=>{
    const getDataFromDB = async() => {
      try {
        dispatch(getAllLatestTodosLoading());
        const response = await fetch("http://localhost:8080/todos");
        const data = await response.json();
        dispatch(editDbTodo(data));
        
      } catch (error) {
        dispatch(getAllLatestTodosFailure());
        console.log(error)
      }
    };
    getDataFromDB();
  },[dispatch]);
  if(isLoading){
    // return <h1>Loading....</h1>
    return <div style={{display:'flex', justifyContent:'center'}}>
      <PuffLoader />
    </div>
  }
  if(isError){
    // return <h1>Error....</h1>
    return <div>
      <img width={500} src="https://nebulaconsulting.co.uk/wp-content/uploads/2020/11/mistake-3085712_1280.jpg" alt="" />
    </div>
  }
  return (
    <div>
      <h4>To Do List</h4>
      {todos?.map((item) => {
        return (
          <div key={item.id}>
            <Link to={`/todo/${item.id}`}>{item.title}</Link>
          </div>
        );
      })}
    </div>
  );
};

export { ToDoList };