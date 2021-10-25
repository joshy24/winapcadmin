import * as types from '../Types/lga';

export const getLgaReducer = (state = { lga:[] }, action) => {
    const {type, payload} = action

    switch (type){
        case types.GET_LGA_REQUEST:
            return{
                loading: true,
                categories: []
            }
        case types.GET_LGA_SUCCESS:
            return {
                loading: false,
                categories: payload
            }
        case types.GET_LGA_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}
