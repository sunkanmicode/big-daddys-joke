import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./styles";
import colors from "../../constant/colors";
import { useNavigation } from "@react-navigation/native";
import SearchDropDown from "../../SearchDropDown";

const HomeComponent = ({
  data,
  loading,
  error,
  getCategoryDetailJoke,
  openSearchBox,
  setSearchOpenBox,
  handleOnSearch,
  filterList,
  setFilterList,
}) => {
  const [categoryIndex, setCategoryIndex] = React.useState(0);
  const { navigate } = useNavigation();

  const CategoryList = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.categoryListContainer}
      >
        {loading ? (
          <ActivityIndicator />
        ) : (
          <>
            {data.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  navigate("Detail", { item });
                  getCategoryDetailJoke(item);
                  setCategoryIndex(index);
                }}
              >
                <Text
                  style={[
                    styles.categoryText,
                    categoryIndex == index && styles.categorySelected,
                  ]}
                >
                  {item}
                </Text>
                <View
                  style={{
                    height: 0.5,
                    padding: 0.5,
                    backgroundColor: colors.yellow,
                  }}
                />
              </TouchableOpacity>
            ))}
          </>
        )}
      </ScrollView>
    );
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <View>
          <Text style={styles.welcome}>Welcome to</Text>
          <Text style={styles.headerTitle}>Big daddy's Joke</Text>
        </View>
      </View>
      <View style={styles.searchInput}>
        <TouchableOpacity style={styles.searchContainer}>
          
          <TextInput
            placeholder="Search"
            style={styles.input}
            // value={value}
            onChangeText={handleOnSearch}
          />
        </TouchableOpacity>

        <View style={styles.sort}>
          <MaterialIcons name="sort" size={30} color="#fff" />
        </View>
      </View>
      {openSearchBox && (
        // <View style={{ alignSelf: "center" }}>
        <SearchDropDown filterList={filterList} setFilterList={setFilterList} />
        // {/* </View> */}
      )}

      <CategoryList />
    </View>
  );
};

export default HomeComponent;
