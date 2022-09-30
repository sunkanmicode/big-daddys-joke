import { GET_SEARCH_QUERY_FAIL, GET_SEARCH_QUERY_LOADING, GET_SEARCH_QUERY_SUCCESS } from "../actions/searchQueryAction/searchQueryActionType";


const searchQueryReducer = (state, { type, payload }) => {
  switch (type) {
    case GET_SEARCH_QUERY_LOADING:
      return {
        ...state,
        getSearchQuery: {
          ...state.getSearchQuery,
          loading: true,
          error: null,
        },
      };
    case GET_SEARCH_QUERY_SUCCESS:
      return {
        ...state,
        getSearchQuery: {
          ...state.getSearchQuery,
          loading: false,
          data: payload,
        },
      };
    case GET_SEARCH_QUERY_FAIL:
      return {
        ...state,
        getSearchQuery: {
          ...state.getSearchQuery,
          loading: false,
          error: payload,
        },
      };
    default:
      return state;
  }
};
export default searchQueryReducer;
