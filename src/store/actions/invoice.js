import axios from 'axios';

export const GET_INVOICE = "GET_INVOICE";
export const INVOICE_LOADING = " INVOICE_LOADING";
export const INVOICE_ERROR = " INVOICE_ERROR";

export const invoiceAsync = (idData) => {

  return (dispatch, getState) => {
    dispatch(invoiceLoading(true));
    console.log("invoice ki id")
    console.log(idData)
    //get invoice mongo
    axios
    .get('https://mexicar.appspot.com/api/owners/getinvoice', {params: {
        id: idData
      }})
    .then((invoice) => { 
        console.log("redux ka invoice")
        console.log(invoice)
      dispatch(getinvoice(invoice)); 
      dispatch(invoiceLoading(false)) 
    }).catch((error) => {  
      dispatch(invoiceLoading(false));
      dispatch(invoiceError(error));
      console.log("mongodb get invoice error")
    })

   
  };
};

export const getinvoice = (payload) => {
  return {
    type: GET_INVOICE,
    payload
  };
};

export const invoiceLoading = (payload) => {
  return {
    type: INVOICE_LOADING,
    payload
  };
};

export const invoiceError = (payload) => {
  return {
    type: INVOICE_ERROR,
    payload
  };
};