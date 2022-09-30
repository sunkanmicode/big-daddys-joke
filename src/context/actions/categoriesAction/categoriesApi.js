import axios from "axios";
import {
  GET_CATEGORIES_LIST_SUCCESS,
  GET_CATEGORIES_LIST_LOADING,
  GET_CATEGORIES_LIST_FAIL
} from "./categoriesActionType";

const ROOT_URL = "https://api.chucknorris.io/";

 export default (id) => (dispatch) => {
  dispatch({
    type: GET_CATEGORIES_LIST_LOADING,
  });
  axios
    .get(`${ROOT_URL}jokes/categories`)
    .then((res) => {
      dispatch({
        type: GET_CATEGORIES_LIST_SUCCESS,
        payload: res.data,
      });
      // console.log(res.data, "categoriesAPI");
    })
    .catch((err) => {
      dispatch({
        type: GET_CATEGORIES_LIST_FAIL,
        payload: err.response
          ? err.response.data
          : { error: "something went wrong" },
      });
      // console.log(error, 'something went wrong');
    });
};
