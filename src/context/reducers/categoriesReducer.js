import {
  GET_CATEGORIES_LIST_SUCCESS,
  GET_CATEGORIES_LIST_LOADING,
  GET_CATEGORIES_LIST_FAIL,
} from "../actions/categoriesAction/categoriesActionType";

const categoriesReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_CATEGORIES_LIST_LOADING:
     return {
       ...state,
       getCategories: {
         ...state.getCategories,
         loading: true,
         error: null,
       },
     };
    case GET_CATEGORIES_LIST_SUCCESS:
      return {
        ...state,
        getCategories: {
          ...state.getCategories,
          loading: false,
          data: payload,
        },
      };
    case GET_CATEGORIES_LIST_FAIL:
      return {
        ...state,
        getCategories: {
          ...state.getCategories,
          loading: false,
          error: payload,
        },
      };
    default:
      return state;
  }
};
export default categoriesReducer;
