import axios from 'axios'
import * as types from '../Types/positions'

export const getPositions = () => async (dispatch) => {
    try {
        dispatch({ type: types.GET_POSITIONS_REQUEST })

        const { data } = await axios.get('http://localhost:7000/api/positions')
        dispatch({
            type: types.GET_POSITIONS_SUCCESS,
            payload: data
        })
    }
    catch (error) {
        dispatch({
            type: types.GET_POSITIONS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
    }
}

export const createCandidate = (candidate_name) => async (dispatch) => {
    try {
        dispatch({type: types.CREATE_POSITION_REQUEST})

        const { data } = await axios.post('https://win-apc.herokuapp.com/api/position', {candidate_name})
        dispatch({
            type: types.CREATE_POSITION_SUCCESS,
            payload: data
        })
        return Promise.resolve(data)
    }catch (error) {
        dispatch({
            type: types.CREATE_POSITION_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
        })
        return Promise.reject(error)
    }
}

export const deleteCandidate = (id) => async (dispatch) => {
    try {
        const {data} = await axios.delete(`https://qcandlesapi.herokuapp.com/api/category/${id}`)
        console.log(data)
        dispatch({
            type: types.DELETE_POSITION,
            payload: data.status.id
        })
        return Promise.resolve(data)
    }
    catch (error) {
        console.log(error)
        return Promise.reject(error)
    }
}