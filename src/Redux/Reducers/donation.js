import * as types from '../Types/donations';

export const getDonationsReducer = (state = { candidates:[] }, action) => {
    const {type, payload} = action

    switch (type){
        case types.GET_DONATIONS_REQUEST:
            return{
                loading: true,
                categories: []
            }
        case types.GET_DONATIONS_SUCCESS:
            return {
                loading: false,
                categories: payload
            }
        case types.GET_DONATIONS_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}
