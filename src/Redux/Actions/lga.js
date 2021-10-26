import axios from 'axios'
import * as types from '../Types/lga'

export const getStates = () => async (dispatch) => {
    try {
        dispatch({ type: types.GET_LGA_REQUEST })

        const { data } = await axios.get('#')
        dispatch({
            type: types.GET_LGA_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: types.GET_LGA_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}