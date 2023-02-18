import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./css/secondApp.css";

function CarsList() {
  const cars = useSelector((data) => data.cars);
  return (
    <div id="second-app">
      <div className="links">
        <Link className="link" to="/add-car">
          ADD
        </Link>
        <Link className="link" to="/edit-car">
          EDIT
        </Link>
        <Link className="link" to="/remove-car">
          DELETE
        </Link>
      </div>

      <div className="content">
        <h2 className="title">CARS LIST</h2>
        <table>
          <thead>
            <tr>
              <td>#</td>
              <td>NAME</td>
              <td>TYPE</td>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car.id}>
                <td>{car.id}</td>
                <td>{car.name}</td>
                <td>{car.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CarsList;
