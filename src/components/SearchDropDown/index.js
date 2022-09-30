import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from "./styles"
import colors from '../constant/colors';

const SearchDropDown = ({ filterList, setFilterList }) => {


  return (
    <ScrollView>
      {filterList == 0 && (
        <>
          <Text style={{ color: "#333", alignSelf: "center", height: 50, }}>
            No Matching Data ...
          </Text>
        </>
      )}
      <View>
        {filterList.map((item) => (
          <View key={item.id}>
            <Text style={{ color: "#333", margin: 10 }} key={item.id}>
              {item.value}
            </Text>
            <View
              style={{
                padding: 0.5,
                backgroundColor: colors.yellow,
                marginVertical: 10,
              }}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default SearchDropDown