import { GET_INVOICE, INVOICE_LOADING, INVOICE_ERROR } from "../actions";

const invoice = {
  invoiceEntity: {},
  loading: false,
  error: false
};
 
export default (state = invoice, action) => {
  switch (action.type) {
    case GET_INVOICE:
      return {
        ...state,
        invoiceEntity: action.payload,
      };
      case INVOICE_LOADING:
      return {
          ...state, 
          loading: action.payload
      };
      case INVOICE_ERROR:
      return {
          ...state,
          error: action.payload
      };  
    default:
      return state;
  }
};
