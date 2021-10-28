import axios from "axios";
import * as types from "../Types/candidates";
import { AllCandidatesUrl, CreateCandidatesUrl } from "../../Constants/url";

export const getCandidates = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_CANDIDATES_REQUEST });

    const { data } = await axios.get(AllCandidatesUrl);
    dispatch({
      type: types.GET_CANDIDATES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_CANDIDATES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createCandidate = (candidate_name) => async (dispatch) => {
  try {
    dispatch({ type: types.CREATE_CANDIDATE_REQUEST });

    const { data } = await axios.post(CreateCandidatesUrl, { candidate_name });
    dispatch({
      type: types.CREATE_CANDIDATE_SUCCESS,
      payload: data,
    });
    return Promise.resolve(data);
  } catch (error) {
    dispatch({
      type: types.CREATE_CANDIDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    return Promise.reject(error);
  }
};

export const deleteCandidate = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`#/${id}`);
    console.log(data);
    dispatch({
      type: types.DELETE_CANDIDATE,
      payload: data.status.id,
    });
    return Promise.resolve(data);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};
