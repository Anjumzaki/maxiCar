import { GET_OWNER, OWNER_LOADING, OWNER_ERROR } from "../actions";

const owner = {
  ownerEntity: {},
  loading: false,
  error: false
};
 
export default (state = owner, action) => {
  switch (action.type) {
    case GET_OWNER:
      return {
        ...state,
        ownerEntity: action.payload,
      };
      case OWNER_LOADING:
      return {
          ...state, 
          loading: action.payload
      };
      case OWNER_ERROR:
      return {
          ...state,
          error: action.payload
      };  
    default:
      return state;
  }
};
