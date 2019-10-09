import {
    GET_POLICE_DATA,
    GET_POLICE_DATA_LOADING,
    GET_POLICE_DATA_ERROR,
  } from "../actions";
  
  const policeFullData = {
    policeEntities: [],
    policeLoading: false,
    policeError: "",
  };
  
  export default (state = policeFullData, action) => {
    switch (action.type) { 
      case GET_POLICE_DATA:
        return {
          ...state,
          policeEntities: action.payload
        };
      case GET_POLICE_DATA_LOADING:
        return {
          ...state,
          policeLoading: action.payload
        };
      case GET_POLICE_DATA_ERROR:
        return {
          ...state,
          policeError: action.payload
        };
      default:
        return state;
    }
  };
  