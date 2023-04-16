import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

import { Feather } from "@expo/vector-icons";

import { useContext } from "react";
import { ProductsContext } from "../../../contexts/productsContext";

type IProps = {
  name: string;
  price: number;
  id: string;
  unitPrice: number;
};

export default function CartModel(props: IProps) {
  const { addItem } = useContext(ProductsContext);

  function addProductToContext(
    id: string,
    name: string,
    price: number,
    unitPrice: number
  ) {
    addItem({ id, name, price, unitPrice });
  }

  return (
    <View style={styles.productContainer}>
      <View style={styles.product}>
        <View>
          <Text style={styles.productInformation}>{props.name}</Text>
          <Text style={styles.productInformation}>$ {props.price}</Text>
        </View>

        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              addProductToContext(
                props.id,
                props.name,
                props.price,
                props.unitPrice
              )
            }
          >
            <Feather name="plus" size={18} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
