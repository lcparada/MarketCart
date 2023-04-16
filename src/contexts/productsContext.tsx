import { createContext, useState } from "react";

type MyComponentChildren = React.PropsWithChildren;

export type itemModel = {
  id: string;
  name: string;
  price: number;
  unitPrice: number;
};

export interface CartModel extends itemModel {
  amount: number;
}

type ProductsType = {
  cart: CartModel[];
  addItem: (product: itemModel) => void;
  deleteItem: (id: string) => void;
  calculateTotal: (cart: CartModel[]) => void;
  total: number;
};

const ProductsContext = createContext<ProductsType>({} as ProductsType);

const ProductsProvider = ({ children }: MyComponentChildren) => {
  const [cart, setCart] = useState<CartModel[]>([]);
  const [total, setTotal] = useState<number>(0);

  function addItem(product: itemModel) {
    if (!cart.find((item) => item.id === product.id)) {
      const data: CartModel = {
        id: product?.id ?? "",
        name: product?.name ?? "",
        price: product?.price ?? "",
        unitPrice: product?.unitPrice ?? "",
        amount: 1,
      };
      setCart([...cart, data]);
    } else {
      const cartInstance = cart;
      const index = cartInstance.findIndex((item) => item.id === product.id);
      cartInstance[index].amount += 1;
      cartInstance[index].price += product.unitPrice;
      setCart([...cartInstance]);
    }
  }

  function deleteItem(id: string) {
    const indexItem = cart.findIndex((item) => item.id === id);
    if (cart[indexItem].amount > 1) {
      const cartInstance = cart;
      cartInstance[indexItem].amount -= 1;
      cartInstance[indexItem].price -= cartInstance[indexItem].unitPrice;
      setCart([...cartInstance]);
    } else {
      setCart(cart.filter((item) => item.id !== id));
    }
  }

  function calculateTotal(cart: CartModel[]) {
    const result = cart.reduce((acc, obj) => {
      return (acc += obj.price);
    }, 0);
    setTotal(result);
  }

  return (
    <ProductsContext.Provider
      value={{ cart, addItem, deleteItem, calculateTotal, total }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, ProductsContext };
