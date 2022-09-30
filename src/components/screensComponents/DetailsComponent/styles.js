import { StyleSheet } from "react-native";
// import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from '../../constant/colors'


export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#ffff",
    padding: 30,
  },
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  jokeContainer: {
    flex: 0.70,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
  },
  jokeText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
  },
  jokeBtn: {
    width: 150,
    height: 50,
    backgroundColor: colors.yellow,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  headerText:{
    fontSize: 17,
    fontWeight: "bold",
  },
  // jokeBtnContainer:{
  //   flex: 1,
  //   backgroundColor: colors.yellow,
  //   marginHorizontal: 7,
  //   marginBottom: 7

  // }
});
