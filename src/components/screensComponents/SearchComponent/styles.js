import { StyleSheet } from "react-native";
import colors from "../../constant/colors";


export default StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
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
  searchResult: {
    padding: 20,
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
});
