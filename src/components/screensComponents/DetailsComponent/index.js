import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const DetailComponent = ({
  data,
  loading,
  error,
  item,
  categoryDetailJoke,
  navigation,
}) => {
  const { navigate } = useNavigation();

  return (
    <>
      <View style={styles.wrapper}>
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
          <Text style={styles.headerText}>{item}</Text>
          {/* <View /> */}
          <FontAwesome5 name="laugh-squint" size={24} color="black" />
        </View>
        <View style={styles.jokeContainer}>
          <Text style={styles.jokeText}>{data.value}</Text>
        </View>
        <TouchableOpacity
          style={styles.jokeBtn}
          onPress={() => {
            categoryDetailJoke(item);
          }}
        >
          {loading ? (<ActivityIndicator />) : <Text>Get More</Text>}
        </TouchableOpacity>
      </View>
    </>
  );
};

export default DetailComponent;
