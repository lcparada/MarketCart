import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";

import { useContext } from "react";
import { ProductsContext } from "../../../contexts/productsContext";

import { Feather } from "@expo/vector-icons";

type IProps = {
  id: string;
  name: string;
  price: number;
  amount: number;
  unitPrice: number;
};

export default function MyCartModel(props: IProps) {
  const { addItem, deleteItem } = useContext(ProductsContext);

  function addMoreProduct(
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
          <Text style={styles.productInformation}>
            $ {props.price.toFixed(1)}
          </Text>
        </View>

        <View style={styles.amount}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => deleteItem(props.id)}
          >
            <Feather name="minus" size={18} color="black" />
          </TouchableOpacity>
          <Text>{props.amount}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              addMoreProduct(props.id, props.name, props.price, props.unitPrice)
            }
          >
            <Feather name="plus" size={18} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
