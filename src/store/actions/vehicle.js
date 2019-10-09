import axios from 'axios';

export const GET_VEHICLE = "GET_VEHICLE";
export const VEHICLE_LOADING = " VEHICLE_LOADING";
export const VEHICLE_ERROR = " VEHICLE_ERROR";

export const vehicleAsync = (idData) => {

  return (dispatch, getState) => {
    dispatch(vehicleLoading(true));

    //get vehicle mongo
    axios
    .get('https://mexicar.appspot.com/api/owners/getvehicle',{params: {
      id: idData
    }})
    .then((vehicle) => {
      dispatch(getVehicle(vehicle)); 
      dispatch(vehicleLoading(false))
    }).catch((error) => { 
      dispatch(vehicleLoading(false))
      dispatch(vehicleError(error));
      console.log("mongodb get vehicle error")
    })

   
  }; 
};

export const getVehicle = (payload) => {
  return { 
    type: GET_VEHICLE,
    payload
  };
};

export const vehicleLoading = (payload) => {
  return {
    type: VEHICLE_LOADING,
    payload
  };
};

export const vehicleError = (payload) => {
  return {
    type: VEHICLE_ERROR,
    payload
  };
};