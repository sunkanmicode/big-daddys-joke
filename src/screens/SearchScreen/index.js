import { View, Text } from "react-native";
import React, { useContext } from "react";
// import { GlobalContext } from "../../context/Provider";
import SearchComponent from "../../components/screensComponents/SearchComponent";
import { GlobalContext } from "../../context/Provider";
import searchQueryApi from "../../context/actions/searchQueryAction/searchQueryApi";

const SearchScreen = () => {
  const [value, setValue] = React.useState("");
  const [ filterList, setFilterList] = React.useState(data)
 

  const {
    searchQueryDispatch,
    searchQueryState: {
      getSearchQuery: { data, loading, error },
    },
  } = useContext(GlobalContext);

  console.log({data, loading, error}, "searchQueryState345");

  // const getSearchJokes = (value) => {
  //   console.log(filterList, "value");
  //   // searchQueryApi(value)(searchQueryDispatch);
  // };

    console.log(value, "value");

    const searchJoke =  data?.result?.filter((item)=>{
      return item?.value.toLowerCase().includes(value.toLowerCase());
    });
  React.useEffect(() => {
    // searchActionApi();
    searchQueryApi()(searchQueryDispatch);
  },[]);


  return (
    <SearchComponent
      setValue={setValue}
      value={value}
      data={searchJoke}
      loading={loading}
      error={error}
      // getSearchJokes={getSearchJokes}
      filterList={filterList}
      // searchFilter={searchFilter}
      // handleFilter={handleFilter}
    />
  );
};

export default SearchScreen;
