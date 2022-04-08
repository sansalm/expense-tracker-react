import { AddCar } from "../components/AddCar";

export default (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                cars: state.cars
                    .filter(car => car.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                cars: [action.payload, ...state.cars]
            }
        default:
            return state;
    }
}