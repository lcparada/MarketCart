import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 100,
    marginLeft: 30,
    marginBottom: 20,
  },
  textHeader: {
    fontSize: 24,
    fontFamily: "Lexend_700Bold",
  },
  body: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  textBody: {
    fontFamily: "Lexend_400Regular",
    color: "#C6C6C6",
    fontSize: 24,
  },
  footerFlatList: {
    fontFamily: "Lexend_700Bold",
    fontSize: 18,
    marginLeft: 30,
    marginTop: 15,
  },
});

export default styles;
