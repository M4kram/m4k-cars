import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function RemoveCar() {
  const navigate = useNavigate();
  const carsList = useSelector((data) => data.cars);
  const [carId, setCarId] = useState("1");

  function deleteHandler(e) {
    e.preventDefault();
    // console.log(carId);
    navigate(`/remove-car/${carId}`);
  }

  return (
    <div id="second-app">
      <div className="links">
        <Link to="/" className="link">
          HOME
        </Link>
      </div>
      <div className="content">
        <h2 className="title">REMOVE CAR</h2>
        <form>
          <select
            value={carId}
            onChange={(e) => {
              setCarId(e.target.value);
            }}
          >
            {carsList.map((car) => (
              <option value={car.id} key={car.id}>
                {car.name}
              </option>
            ))}
          </select>
          <button onClick={deleteHandler}>SELECT</button>
        </form>
      </div>
    </div>
  );
}

export default RemoveCar;
