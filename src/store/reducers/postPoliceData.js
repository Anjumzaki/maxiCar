import {
    POST_POLICE_DATA,
    POLICE_DATA_LOADING,
    POLICE_DATA_ERROR,
  } from "../actions";
  
  const policeData = {
    policeDataEntities: [],
    policeLoading: false,
    policeError: ""
  };
  
  export default (state = policeData, action) => { 
    switch (action.type) { 
      case POST_POLICE_DATA:
        return {
          ...state,
          policeDataEntities: action.payload
        };
      case POLICE_DATA_LOADING:
        return {
          ...state,
          policeLoading: action.payload
        };
      case POLICE_DATA_ERROR:
        return {
          ...state,
          policeError: action.payload
        };
      default:
        return state;
    }
  };
  