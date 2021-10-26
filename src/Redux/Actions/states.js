import axios from 'axios'
import * as types from '../Types/states'

export const getStates = () => async (dispatch) => {
    try {
        dispatch({ type: types.GET_STATES_REQUEST })

        const { data } = await axios.get('#')
        dispatch({
            type: types.GET_STATES_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: types.GET_STATES_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}