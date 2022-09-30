import axios from "axios";
import {
  GET_CATEGORIES_DETAIL_SUCCESS,
  GET_CATEGORIES_DETAIL_LOADING,
  GET_CATEGORIES_DETAIL_FAIL,
} from "./randonJokeActionType";

const ROOT_URL = "https://api.chucknorris.io/";

export default (category) => (dispatch) => {
  dispatch({
    type: GET_CATEGORIES_DETAIL_LOADING,
  });
  axios
    .get(`${ROOT_URL}jokes/random?category=${category}`)
    .then((res) => {
      dispatch({
        type: GET_CATEGORIES_DETAIL_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_CATEGORIES_DETAIL_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "something went wrong" },
      });
    });
};
