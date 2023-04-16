import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  productContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  product: {
    width: 350,
    height: 80,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 0.5,
  },
  productInformation: {
    fontFamily: "Lexend_400Regular",
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: "#2892D7",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  textButton: {
    fontFamily: "Lexend_700Bold",
  },
});

export default styles;
