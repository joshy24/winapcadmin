import * as types from '../Types/positions';

export const getPositionsReducer = (state = { positions:[] }, action) => {
    const {type, payload} = action

    switch (type){
        case types.GET_POSITIONS_REQUEST:
            return{
                loading: true,
                positions: []
            }
        case types.GET_POSITIONS_SUCCESS:
            return {
                loading: false,
                positions: payload
            }
        case types.GET_POSITIONS_FAIL:
            return {
                loading: false,
                error: payload
            }
        default:
            return state
    }
}

export const deletePositionReducer = (state = { positions: [] }, action) => {
    const {type, payload} = action

    switch (type) {
        case types.DELETE_POSITION:
            return state.positions.filter(({id}) => id !== payload.id)
        default:
            return state
    }
}