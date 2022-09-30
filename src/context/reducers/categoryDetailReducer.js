import {
  GET_CATEGORIES_DETAIL_LOADING,
  GET_CATEGORIES_DETAIL_SUCCESS,
  GET_CATEGORIES_DETAIL_FAIL,
} from "../actions/categoryRandomJokeAction/randonJokeActionType";

const categoryDetailReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_CATEGORIES_DETAIL_LOADING:
      return {
        ...state,
        getCategoryDatail: {
          ...state.getCategoryDatail,
          loading: true,
          error: null,
        },
      };
    case GET_CATEGORIES_DETAIL_SUCCESS:
      return {
        ...state,
        getCategoryDatail: {
          ...state.getCategoryDatail,
          loading: false,
          data: payload,
        },
      };
    case GET_CATEGORIES_DETAIL_FAIL:
      return {
        ...state,
        getCategoryDatail: {
          ...state.getCategoryDatail,
          loading: false,
          error: payload,
        },
      };
    default:
      return state;
  }
};
export default categoryDetailReducer;
