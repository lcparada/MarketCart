import { View, Text, SafeAreaView, FlatList } from "react-native";

import { useContext, useEffect } from "react";
import { ProductsContext } from "../../contexts/productsContext";

import styles from "./styles";

import MyCartModel from "../../components/FlatListModels/MyCartModel";

export default function Cart() {
  const { cart, calculateTotal, total } = useContext(ProductsContext);

  useEffect(() => {
    calculateTotal(cart);
  }, [cart]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>My cart</Text>
      </View>

      {cart.length >= 1 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
          data={cart}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <MyCartModel
              name={item.name}
              price={item.price}
              amount={item.amount}
              id={item.id}
              unitPrice={item.unitPrice}
            />
          )}
          ListFooterComponent={() => (
            <View>
              {total !== 0 ? (
                <Text style={styles.footerFlatList}>
                  Total: $ {total.toFixed(1)}
                </Text>
              ) : null}
            </View>
          )}
        />
      ) : (
        <View style={styles.body}>
          <Text style={styles.textBody}>No item in cart yet...</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
