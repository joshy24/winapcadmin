import * as types from '../Types/states';

export const getStatesReducer = (state = { states:[] }, action) => {
    const {type, payload} = action

    switch (type){
        case types.GET_STATES_REQUEST:
            return{
                loading: true,
                categories: []
            }
        case types.GET_STATES_SUCCESS:
            return {
                loading: false,
                categories: payload
            }
        case types.GET_STATES_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}
