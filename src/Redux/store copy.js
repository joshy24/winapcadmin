// import {createStore, applyMiddleware, combineReducers} from "redux";
// import thunk from "redux-thunk";
// import {composeWithDevTools} from "redux-devtools-extension";
// import { deleteCandidateReducer, getCandidatesReducer } from "./Reducers/candidate";
// import { getStatesReducer } from "./Reducers/states";
// import { getDonationsReducer } from "./Reducers/donation";
// import { createPositionsReducer, deletePositionReducer, getPositionsReducer } from "./Reducers/position";
// import { getLgaReducer } from "./Reducers/lga.js";

// const reducer = combineReducers({
//     getCandidatesReducer : getCandidatesReducer,
//     deleteCandidateReducer: deleteCandidateReducer,

//     getStatesReducer : getStatesReducer,
    
//     getLgaReducer: getLgaReducer,

//     getDonationsReducer: getDonationsReducer,

//     getPositionsReducer: getPositionsReducer,
//     deletePositionReducer: deletePositionReducer,
//     createPositionsReducer:createPositionsReducer

// });

// const middleware = [thunk]
// const initialState = {}
// const store = createStore(
//     reducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware))
// )

// export default store

import {configureStore} from '@reduxjs/toolkit';
import { stateApi } from './Toolkits/StatesApi';

export default configureStore({
    reducer: {
        [stateApi.reducerPath]: stateApi.reducer,
    }
})