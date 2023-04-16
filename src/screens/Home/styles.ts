import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 60,
    marginLeft: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textHeader: {
    fontSize: 24,
    fontFamily: "Lexend_700Bold",
  },
  iconCart: {
    marginRight: 30,
    flexDirection: "row",
  },
  circle: {
    position: "absolute",
    width: 25,
    height: 25,
    borderRadius: 20,
    backgroundColor: "#2892D7",
    alignItems: "center",
    justifyContent: "center",
    top: 18,
    right: 8,
  },
  textCircle: {
    fontFamily: "Lexend_400Regular",
    fontSize: 12,
  },
});

export default styles;
