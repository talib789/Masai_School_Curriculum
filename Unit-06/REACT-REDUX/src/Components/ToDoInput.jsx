import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { editDbTodo, getAllLatestTodosLoading, getAllLatestTodosFailure } from "../redux/action";

const TodoInput = () => {
  const [title, setTitle] = React.useState("");
  const dispatch = useDispatch();

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

  const postDataInDb = async(payload) =>{
    try {
      dispatch(getAllLatestTodosLoading());
      await fetch(`http://localhost:8080/todos`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });
    } catch (error) {
      dispatch(getAllLatestTodosFailure());
      console.log(error);
    }
  }

  const handleAdd = () => {
    const payload = {
      id: uuid(),
      title: title,
      status: false
    };
    postDataInDb(payload).then(()=>{
      getDataFromDB();
    });

    setTitle("");
  };

  return (
    <div>
      <h3>Add Todos</h3>
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
        placeholder="Add Something New"
      />
      <button onClick={handleAdd}>ADD</button>
    </div>
  );
};

export { TodoInput };