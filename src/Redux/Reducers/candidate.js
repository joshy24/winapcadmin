import * as types from '../Types/candidates';

export const getCandidatesReducer = (state = { candidates:[] }, action) => {
    const {type, payload} = action

    switch (type){
        case types.GET_CANDIDATES_REQUEST:
            return{
                loading: true,
                categories: []
            }
        case types.GET_CANDIDATES_SUCCESS:
            return {
                loading: false,
                categories: payload
            }
        case types.GET_CANDIDATES_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export const deleteCandidateReducer = (state = { candidates: [] }, action) => {
    const {type, payload} = action

    switch (type) {
        case types.DELETE_CANDIDATE:
            return state.candidates.filter(({id}) => id !== payload.id)
        default:
            return state
    }
}