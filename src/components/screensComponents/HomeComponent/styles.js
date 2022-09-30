import { StyleSheet } from "react-native";
import colors from '../../constant/colors'

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  header: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  welcome: {
    fontSize: 25,
    fontWeight: "bold",
  },
  headerTitle: {
    fontSize: 38,
    fontWeight: "bold",
    color: colors.yellow,
  },
  searchInput: {
    marginTop: 30,
    flexDirection: "row",
  },
  searchContainer: {
    height: 50,
    backgroundColor: colors.grey,
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 18,
    marginLeft: 20,
  },
  sort: {
    height: 50,
    width: 50,
    marginLeft: 10,
    backgroundColor: colors.yellow,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  categoryListContainer: {
    // flexDirection:"row",
    marginTop: 30,
    marginBottom: 20,
    // justifyContent:"space-between",
  },
  categoryText: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "grey",
  },
  categorySelected: {
    // width: 150,
    color: colors.yellow,
    paddingBottom: 5,
    // borderBottomWidth: 2,
    // borderBottomColor: colors.yellow,
  },
});