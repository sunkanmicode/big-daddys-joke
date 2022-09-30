import axios from "axios";
import { GET_SEARCH_QUERY_FAIL, GET_SEARCH_QUERY_LOADING, GET_SEARCH_QUERY_SUCCESS } from "./searchQueryActionType";


const ROOT_URL = "https://api.chucknorris.io/";

export default (query) => (dispatch) => {
  dispatch({
    type: GET_SEARCH_QUERY_LOADING,
  });
  axios
    .get(`${ROOT_URL}jokes/search?query=dev`)
    .then((res) => {
      dispatch({
        type: GET_SEARCH_QUERY_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_SEARCH_QUERY_FAIL,
        payload: err.response
          ? err.response.data
          : { err: "something went wrong" },
      });
      // console.log(error, 'something went wrong');
    });
};
