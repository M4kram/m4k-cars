import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addCarAction } from "../redux/actions/carActions";

function AddCar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const addCarHandler = (e) => {
    e.preventDefault();
    dispatch(addCarAction({ id: +id, name: name, type: type }));
    navigate("/");
  };

  const idHandler = (e) => {
    setId(e.target.value);
  };
  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const typeHandler = (e) => {
    setType(e.target.value);
  };

  return (
    <div id="second-app">
      <div className="links">
        <Link to="/" className="link">
          HOME
        </Link>
      </div>

      <div className="content">
        <h2 className="title">ADD CAR</h2>
        <form>
          <input
            type="text"
            value={id}
            placeholder="Id"
            onChange={idHandler}
            className="input"
          />
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={nameHandler}
            className="input"
          />
          <input
            type="text"
            value={type}
            placeholder="Type"
            onChange={typeHandler}
            className="input"
          />
          <button onClick={addCarHandler}>ADD</button>
        </form>
      </div>
    </div>
  );
}

export default AddCar;
