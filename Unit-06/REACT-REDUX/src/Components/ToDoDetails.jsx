import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { 
  editDbTodo, getAllLatestTodosLoading, getAllLatestTodosFailure
  
 } from "../redux/action";

const ToDoDetails = () => {
  const { id } = useParams();
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const toggleDataInDb = async(payload) =>{
    try {
      dispatch(getAllLatestTodosLoading());
      payload.status = !payload.status;
      await fetch(`http://localhost:8080/todos/${payload.id}`,{
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
      getDataFromDB();
      // console.log("updated");
    } catch (error) {
      dispatch(getAllLatestTodosFailure());
      console.log(error);
    }
  }

  const deleteDataInDb = async(id) =>{
    try {
      dispatch(getAllLatestTodosLoading());
      await fetch(`http://localhost:8080/todos/${id}`,{
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
          }
          });
    } catch (error) {
      dispatch(getAllLatestTodosFailure());
      console.log(error);
    }
  }
  const handleToggle = (item) => {
    // const actionToggle = toggleTodo(item.id);
    // dispatch(actionToggle);
    toggleDataInDb(item);
  };

  const handleDelete = (itemId) => {
    // const actionDelete = deleteTodo(itemId);
    // dispatch(actionDelete);
    deleteDataInDb(itemId);
    navigate("/alltodos");
  };

  return (
    <div>
      {todos
        ?.filter((item) => {
          return item.id === id;
        })
        .map((item) => {
          return (
            <div key={item.id}>
              <h4>{`${item.title} --- ${
                item.status ? "Completed" : "Not Completed"
              }`}</h4>
              <button onClick={() => handleToggle(item)}>Toggle</button>
              <button onClick={() => handleDelete(item.id)}>DELETE</button>
            </div>
          );
        })}
    </div>
  );
};

export { ToDoDetails };