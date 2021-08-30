import { useState } from "react";
import axios from "axios";

const ItemsForm = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const itemObj = {
      name,
      description,
    };

    addTask(itemObj);

    setName("");
    setDescription("");
  };

  const addTask = async (itemObj) => {
    const res = await axios.post(`http://localhost:5000/api/items`, itemObj);
    props.onSubmit(res);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name" className="form-label mt-4">
          Name:{" "}
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>

      <div className="form-group">
        <label htmlFor="description" className="form-label mt-4">
          Description:{" "}
        </label>
        <textarea
          className="form-control"
          id="description"
          rows="3"
          placeholder="Enter item description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary mt-4">
        Submit
      </button>
    </form>
  );
};

export default ItemsForm;
