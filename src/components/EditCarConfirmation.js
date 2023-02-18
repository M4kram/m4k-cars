import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateCarAction } from "../redux/actions/carActions";

function EditCarConfirmation() {
  const { id } = useParams();
  const car = useSelector((data) => data.cars).find((car) => car.id === +id);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState(car.name);
  const [type, setType] = useState(car.type);

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateCarAction({ id: +id, name: name, type: type }));
    navigate("/");
  };

  return (
    <div id="second-app">
      <div className="links">
        <Link to="/" className="link">
          HOME
        </Link>
      </div>
      <div className="content">
        <h2 className="title">EDIT CAR</h2>
        <form>
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="input"
          />
          <input
            type="text"
            value={type}
            placeholder="Type"
            onChange={(e) => {
              setType(e.target.value);
            }}
            className="input"
          />
          <button onClick={updateHandler}>UPDATE</button>
        </form>
      </div>
    </div>
  );
}

export default EditCarConfirmation;
