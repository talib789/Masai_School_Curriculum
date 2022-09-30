export default function Submit({ text, handleAddData, handleChange }) {
    return (
      <div>
        <input
          className="input"
          value={text}
          onChange={handleChange}
          type="text"
          placeholder="add something"
        />
        <button className="add-btn" onClick={handleAddData}>
          Add
        </button>
      </div>
    );
  }
  