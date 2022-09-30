import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { useRoute } from '@react-navigation/native';
import DetailComponent from '../../components/screensComponents/DetailsComponent';
import { GlobalContext } from '../../context/Provider';
import categoryRandomJokeApi from '../../context/actions/categoryRandomJokeAction/categoryRandomJokeApi';

const DetailScreen = () => {
  const { params: { item = {} } = {} } = useRoute();
  // console.log(item, 'Details');


  const {
    categoriesDetailDispatch,
    categoriesDetailState: {
      getCategoryDatail: { data, loading, error },
    },
  } = useContext(GlobalContext);

  const categoryDetailJoke = (category) => {
    categoryRandomJokeApi(category)(categoriesDetailDispatch);
  };

  React.useEffect(()=>{
    categoryDetailJoke();
  },[])


  return (
    <DetailComponent
      data={data}
      loading={loading}
      error={error}
      item={item}
      categoryDetailJoke={categoryDetailJoke}
    />
  );
};

export default DetailScreen