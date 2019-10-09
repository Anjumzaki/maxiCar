import { GET_VEHICLE, VEHICLE_LOADING, VEHICLE_ERROR } from "../actions";

const vehicle = {
  vehicleEntity: {},
  loading: false,
  error: false
};
 
export default (state = vehicle, action) => {
  switch (action.type) {
    case GET_VEHICLE:
      return {
        ...state,
        vehicleEntity: action.payload,
      };
      case VEHICLE_LOADING:
      return {
          ...state,
          loading: action.payload
      };
      case VEHICLE_ERROR:
      return {
          ...state,
          error: action.payload
      };  
    default:
      return state;
  }
};
