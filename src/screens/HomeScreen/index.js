import React, { useContext } from 'react'
import HomeComponent from '../../components/screensComponents/HomeComponent';
import { GlobalContext } from '../../context/Provider';
import categoriesApi from '../../context/actions/categoriesAction/categoriesApi';
import categoryRandomJokeApi from '../../context/actions/categoryRandomJokeAction/categoryRandomJokeApi';
import { useNavigation } from '@react-navigation/native';
import searchQueryApi from '../../context/actions/searchQueryAction/searchQueryApi';

const HomeScreen = () => {
  const { navigate } = useNavigation();
  const [openSearchBox, setSearchOpenBox] = React.useState(false);
  const [filterList, setFilterList] = React.useState([])

//state for categories
   const {
     categoriesDispatch,
     categoriesState: {
       getCategories: { data, loading, error },
     },
   } = useContext(GlobalContext);

   //states for categories Detail
    const {
      categoriesDetailDispatch,
      categoriesDetailState: {
        getCategoryDatail,
      },
    } = useContext(GlobalContext);

    // search query states
  const {
    searchQueryDispatch,
    searchQueryState: {
      getSearchQuery,
    }
  } = useContext(GlobalContext);

  // console.log(getSearchQuery.data, "getSearchQuery");


  // textinput for search query
     const handleOnSearch = (text) => {
       if (text) {
         setSearchOpenBox(true);
         const newFilter = getSearchQuery?.data?.result?.filter((item)=>{
          return item.value.toLowerCase().includes(text.toLowerCase());
         })
         setFilterList(newFilter);
       } else {
         setSearchOpenBox(false);
       }
     };


//button for random jokes 
  const getCategoryDetailJoke = (id) => {
    categoryRandomJokeApi(id)(categoriesDetailDispatch);
  };

   React.useEffect(()=>{
     searchQueryApi()(searchQueryDispatch);
    categoriesApi()(categoriesDispatch);
   },[])


  return (
    <HomeComponent
      data={data}
      loading={loading}
      error={error}
      getCategoryDetailJoke={getCategoryDetailJoke}
      openSearchBox={openSearchBox}
      setSearchOpenBox={setSearchOpenBox}
      handleOnSearch={handleOnSearch}
      filterList={filterList}
      setFilterList={setFilterList}
    />
  );
}



export default HomeScreen