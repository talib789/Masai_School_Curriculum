function UpdateDelete({ id, todo, status, handleToggle, handleDelete }) {
    return (
      <div className="box">
        <h4>
          {todo} - {status ? "Done" : "Not Done"}
        </h4>
        <button className="done-btn" onClick={() => handleToggle(id, status)}>
          {status ? "Not Done" : "Done"}
        </button>
        <button className="delete-btn" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    );
  }
  
  export default UpdateDelete;
  