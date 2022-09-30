import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";
import colors from "../../constant/colors";

const SearchComponent = ({
  value,
  setValue,
  data,
  loading,
  error,
  getSearchJokes,
  filterList,
  searchFilter,
  handleFilter,
}) => {
  console.log(data, 'data')
  return (
    <View style={{ justifyContent: "center", padding: 20 }}>
      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign
            name="arrowleft"
            size={24}
            color="black"
            onPress={() => {
              // navigation.goBack();
              navigate.goBack();
            }}
          />
        </TouchableOpacity>
        <View />
      </View>
      <View style={styles.searchInput}>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search"
            style={styles.input}
            value={value}
            onChangeText={(text) => setValue(text)}
          />
          {!value  && <AntDesign name="close" size={24} color="black" />}
        </View>
        <TouchableOpacity
          style={styles.sort}>
          <Ionicons name="md-search-circle" size={40} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={{ color: "red", fontSize: 12, marginHorizontal: 15 }}>
        {/* {(error && errors) || error?.message} */}
        {error && error?.message}
      </Text>

      <ScrollView style={styles.searchResult}>
        {value == 0 && (
          <>
            <Text style={{ color: "#333", alignSelf: "center" }}>
              No Data ...
            </Text>
          </>
        )}
        {value && (
          <>
            {data?.slice(0, 5).map((item) => (
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
                <Text style={{ color: "#333" }}>{value}</Text>
              </View>
            ))}
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default SearchComponent;
