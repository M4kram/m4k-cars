export const addCarAction = (newCar) => {
  return { type: "ADD", payload: newCar };
};

export const removeCarAction = (carId) => {
  return { type: "REMOVE", payload: carId };
};

export const updateCarAction = (car) => {
  return { type: "MODIFY", payload: car };
};
