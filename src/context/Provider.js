import React, { createContext, CreateContext, useReducer } from "react";
import categoryInitialState from "./initialStates/categoryInitialState";
import categoriesReducer from "./reducers/categoriesReducer";
import categoryDetailReducer from "./reducers/categoryDetailReducer";
import categoryDetailInitialState from "./initialStates/categoryDetailInitialState"
import searchQueryReducer from "./reducers/searchQueryReducer";
import searchQueryInitialState from "./initialStates/searchQueryInitialState";


export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [categoriesState, categoriesDispatch] = useReducer(
    categoriesReducer,
    categoryInitialState
  );
  const [categoriesDetailState, categoriesDetailDispatch] = useReducer(
    categoryDetailReducer,
    categoryDetailInitialState
  );
 
  const [searchQueryState, searchQueryDispatch] = useReducer(
    searchQueryReducer,
    searchQueryInitialState
  );
  // console.log(searchQueryState, "searchListState");
  // console.log(categoriesState, "categoriesState");
  // console.log(categoriesDetailState, "categoriesDetailState");
  // console.log(searchListState, "searchListState");




  return (
    <GlobalContext.Provider
      value={{
        categoriesState,
        categoriesDispatch,
        categoriesDetailDispatch,
        categoriesDetailState,
        searchQueryState,
        searchQueryDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;