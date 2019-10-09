import { combineReducers } from 'redux';
import owner from './owner';
import vehicle from './vehicle';
import invoice from './invoice';
import ownersData from './getOwnersData';
import postPoliceData from './postPoliceData';
import getPoliceData from './getPoliceData';



export default combineReducers({
    owner,
    vehicle,
    ownersData,
    invoice,
    postPoliceData,
    getPoliceData
})
