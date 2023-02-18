const initState = {
  cars: [
    { id: 1, name: "BMW X6", type: "SUV" },
    { id: 2, name: "GLA 250", type: "SUV" },
  ],
};
const carReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, cars: [...state.cars, action.payload] };
    case "MODIFY":
      const car = state.cars.find((car) => car.id === action.payload.id);

      if (car) {
        car.name = action.payload.name;
        car.type = action.payload.type;
      }

      return state;
    case "REMOVE":
      return {
        ...state,
        cars: state.cars.filter((car) => car.id !== action.payload),
      };
    default:
      return state;
  }
};
export default carReducer;
