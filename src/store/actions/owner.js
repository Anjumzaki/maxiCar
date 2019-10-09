import axios from 'axios';
import { fakedata } from "../../Data/fakeData";

export const GET_OWNER = "GET_OWNER";
export const OWNER_LOADING = " OWNER_LOADING";
export const OWNER_ERROR = " OWNER_ERROR";

export const ownerAsync = (idData) => {

  return (dispatch, getState) => {
    dispatch(ownerLoading(true));
    console.log("redux ki id")
    console.log(idData)
    // dispatch(getOwner(fakedata)); //top 4 
    // dispatch(ownerLoading(false));
    //get owner mongo
     https://rallycoding.herokuapp.com/api/music_albums
    axios
      .get('https://mexicar.appspot.com/api/owners/getowner', {params: {
        id: idData
      }})
    .then((owner) => {
        console.log("redux ka owner")
        console.log(owner)
      dispatch(getOwner(owner)); 
      dispatch(ownerLoading(false)) 
    }).catch((error) => { 
      dispatch(ownerLoading(false))
      dispatch(ownerError(error));
      console.log("mongodb get owner error")
    }) 

    // setTimeout(() => {
    //   // dispatch(getLandingTournaments(fakedata.tournaments)); //top 4
    //    dispatch(getOwner(fakedata)); //top 4 
    //    dispatch(ownerLoading(false));
    //  }, 900)

  };
};

export const getOwner = (payload) => {
  return {
    type: GET_OWNER,
    payload
  };
};

export const ownerLoading = (payload) => {
  return {
    type: OWNER_LOADING,
    payload
  };
};

export const ownerError = (payload) => {
  return {
    type: OWNER_ERROR,
    payload
  };
};