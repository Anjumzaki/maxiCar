import axios from 'axios';

export const GET_OWNERS_DATA = "GET_OWNERS_DATA";
export const GET_OWNERS_DATA_LOADING = "GET_OWNERS_DATA_LOADING";
export const GET_OWNERS_DATA_ERROR = "GET_OWNERS_DATA_ERROR";

export const getOwnersDataAsync = () => {
  return (dispatch, getState) => {
   
    dispatch(getOwnersDataLoading(true))

    axios
    .get('https://mexicar.appspot.com/api/owners/getownersdata')
    .then((ownersData) => {
      dispatch(getOwnersData(ownersData.data));
      dispatch(getOwnersDataLoading(false))
    }).catch((error) => {
      dispatch(getOwnersDataLoading(false))
      dispatch(getOwnersDataError(error));
      console.log("mongodb get owners data error")
    })
  };
};



export const getOwnersData = (payload) => {
  return {
    type: GET_OWNERS_DATA,
    payload
  };
};

export const getOwnersDataLoading = (payload) => {
  return {
    type: GET_OWNERS_DATA_LOADING,
    payload
  };
};

export const getOwnersDataError = (payload) => {
  return {
    type: GET_OWNERS_DATA_ERROR,
    payload
  };
}; 


