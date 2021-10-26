import axios from 'axios'
import * as types from '../Types/donations'

export const getDonations = () => async (dispatch) => {
    try {
        dispatch({ type: types.GET_DONATIONS_REQUEST })

        const { data } = await axios.get('#')
        dispatch({
            type: types.GET_DONATIONS_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: types.GET_DONATIONS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}