import {
  useFonts,
  Lexend_400Regular,
  Lexend_700Bold,
} from "@expo-google-fonts/lexend";

import AppRoutes from "./src/routes/App.routes";

import { ProductsProvider } from "./src/contexts/productsContext";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lexend_400Regular,
    Lexend_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <ProductsProvider>
      <AppRoutes />
    </ProductsProvider>
  );
}
