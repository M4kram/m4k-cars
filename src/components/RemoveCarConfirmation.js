import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeCarAction } from "../redux/actions/carActions";

function RemoveCarConfirmation() {
  const { id } = useParams();
  const car = useSelector((data) => data.cars).find((car) => car.id === +id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(removeCarAction(+id));
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
        <h2 className="title">REMOVE CAR</h2>
        <table className="car-table">
          <tbody>
            <tr>
              <td>ID</td>
              <td>{car.id}</td>
            </tr>
            <tr>
              <td>NAME</td>
              <td>{car.name}</td>
            </tr>
            <tr>
              <td>TYPE</td>
              <td>{car.type}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={deleteHandler}>DELETE</button>
      </div>
    </div>
  );
}

export default RemoveCarConfirmation;
