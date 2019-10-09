import axios from 'axios';

export const POST_POLICE_DATA = "POST_POLICE_DATA";
export const POLICE_DATA_LOADING = "POLICE_DATA_LOADING";
export const POLICE_DATA_ERROR = "POLICE_DATA_ERROR";


export const postPoliceDataAsync = (policeData) => {
  return (dispatch, getState) => {
   console.log("action me datattttttttttttttttttttttttttttttttttttttttttttt")
   console.log(policeData)
    dispatch(postPoliceDataLoading(true))

    axios
    .post('https://mexicar.appspot.com/api/owners/postpolicedata', policeData)
    .then((ownersData1) => {
        console.log("%%%%%%%%%%%%%%%%")
        console.log(ownersData1.data)
      dispatch(postPoliceData(ownersData1.data));
      dispatch(postPoliceDataLoading(false))
    }).catch((error) => {
      dispatch(postPoliceDataLoading(false))
      dispatch(postPoliceDataError(error));
      console.log("mongodb post owners data error")
    })
  };
}; 


export const postPoliceData = (payload) => {
  return {
    type: POST_POLICE_DATA,
    payload
  };
};

export const postPoliceDataLoading = (payload) => {
  return {
    type: POLICE_DATA_LOADING,
    payload
  };
};

export const postPoliceDataError = (payload) => {
  return {
    type: POLICE_DATA_ERROR,
    payload
  };
}; 