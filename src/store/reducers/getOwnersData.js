import {
    GET_OWNERS_DATA,
    GET_OWNERS_DATA_LOADING,
    GET_OWNERS_DATA_ERROR,
  } from "../actions";
  
  const ownersFullData = {
    ownersEntities: null,
    ownerLoading: false,
    ownerError: "",
  };
  
  export default (state = ownersFullData, action) => {
    switch (action.type) { 
      case GET_OWNERS_DATA:
        return {
          ...state,
          ownersEntities: action.payload
        };
      case GET_OWNERS_DATA_LOADING:
        return {
          ...state,
          ownerLoading: action.payload
        };
      case GET_OWNERS_DATA_ERROR:
        return {
          ...state,
          ownerError: action.payload
        };
      default:
        return state;
    }
  };
  