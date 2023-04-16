import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import { useState, useContext, useEffect } from "react";

import { ProductsContext } from "../../contexts/productsContext";

import { Feather } from "@expo/vector-icons";

import styles from "./styles";

import CartModel from "../../components/FlatListModels/CartModel";

import { useNavigation } from "@react-navigation/native";

import { products } from "../../products/products";

export default function Home() {
  const navigation = useNavigation();

  const { cart } = useContext(ProductsContext);

  const [showCount, setShowCount] = useState<boolean>(false);

  function toggleShowCount() {
    if (cart.length >= 1) {
      setShowCount(true);
    } else {
      setShowCount(false);
    }
  }

  useEffect(() => {
    toggleShowCount();
  }, [cart]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.textHeader}>Product list</Text>
        <View style={styles.iconCart}>
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <Feather name="shopping-cart" size={26} color="black" />
            {showCount ? (
              <View style={styles.circle}>
                <Text style={styles.textCircle}>{cart.length}</Text>
              </View>
            ) : null}
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        contentContainerStyle={{
          flex: 1,
        }}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CartModel
            name={item.name}
            price={item.price}
            id={item.id}
            unitPrice={item.unitPrice}
          />
        )}
      />
    </SafeAreaView>
  );
}
