import { useEffect, useState } from "react";
import Submit from "./Components/InputBox";
import "./styles.css";
import Pagination from "./Components/Pagination";
import UpdateDelete from "./Components/Update-Delete";

export default function App() {
  const [msg, setMsg] = useState("");
  const [text, setText] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://immense-sea-94845.herokuapp.com/todo?_page=${page}&_limit=4`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [text, msg, page]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAddData = async () => {
    setMsg("Adding");
    let data1 = { todo: text, status: false };

    let res = await fetch(`https://immense-sea-94845.herokuapp.com/todo`, {
      method: "POST",
      body: JSON.stringify(data1),
      headers: { "Content-Type": "application/json" }
    });
    let res2 = await res.json();
    setMsg("");

    setText("");
  };

  const handleDelete = async (id) => {
    setMsg("Deleting");
    let data5 = await fetch(
      `https://immense-sea-94845.herokuapp.com/todo/${id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      }
    );
    let data6 = await data5.json();

    setMsg("Item Deleted");
    setTimeout(() => setMsg(""), 500);
  };

  const handleToggle = async (id, status) => {
    setMsg("Updating");
    let data7 = await fetch(
      `https://immense-sea-94845.herokuapp.com/todo/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          status: !status
        }),
        headers: { "Content-Type": "application/json" }
      }
    );
    let data8 = await data7.json();
    setMsg("Updating Done");
    setTimeout(() => setMsg(""), 500);
  };

  return (
    <div className="App">
      <h3>Grocery List - Using React useEffect</h3>
      <h3>{msg}</h3>
      <br />
      <Submit
        text={text}
        handleChange={handleChange}
        handleAddData={handleAddData}
      />
      <br />
      <br />

      {data.map((elem) => (
        <UpdateDelete
          key={elem.id}
          todo={elem.todo}
          id={elem.id}
          status={elem.status}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      ))}
      <br />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}
