import axios from 'axios';

export const GET_POLICE_DATA = "GET_POLICE_DATA";
export const GET_POLICE_DATA_LOADING = "GET_POLICE_DATA_LOADING";
export const GET_POLICE_DATA_ERROR = "GET_POLICE_DATA_ERROR";

export const getPoliceDataAsync = () => {
  return (dispatch, getState) => {
   
    dispatch(getPoliceDataLoading(true))

    axios
    .get('https://mexicar.appspot.com/api/owners/getpolicedata')
    .then((PoliceData) => {
      dispatch(getPoliceData(PoliceData.data));
      dispatch(getPoliceDataLoading(false))
    }).catch((error) => {
      dispatch(getPoliceDataLoading(false))
      dispatch(getPoliceDataError(error));
      console.log("mongodb get Police data error")
    })
  };
};



export const getPoliceData = (payload) => {
  return {
    type: GET_POLICE_DATA,
    payload
  };
};

export const getPoliceDataLoading = (payload) => {
  return {
    type: GET_POLICE_DATA_LOADING,
    payload
  };
};

export const getPoliceDataError = (payload) => {
  return {
    type: GET_POLICE_DATA_ERROR,
    payload
  };
}; 


