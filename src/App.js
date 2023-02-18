import { Route, Routes } from "react-router";
import "./App.css";
import AddCar from "./components/AddCar";
import CarsList from "./components/CarsList";
import EditCar from "./components/EditCar";
import RemoveCar from "./components/RemoveCar";
import background_image from "./assets/images/pexels-markus-spiske-4274896.jpg";
import RemoveCarConfirmation from "./components/RemoveCarConfirmation";
import EditCarConfirmation from "./components/EditCarConfirmation";

function App() {
  return (
    <>
      <div id="main-app">
        <h1 id="logo">M4K CARS</h1>
        <div className="background-img-container">
          <div className="gradient" />
          <img
            src={background_image}
            alt="Jeep SUV"
            className="background-img"
          />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<CarsList />} />
        <Route path="/add-car" element={<AddCar />} />
        <Route path="/edit-car" element={<EditCar />} />
        <Route path="/edit-car/:id" element={<EditCarConfirmation />} />
        <Route path="/remove-car" element={<RemoveCar />} />
        <Route path="/remove-car/:id" element={<RemoveCarConfirmation />} />
      </Routes>
    </>
  );
}

export default App;
