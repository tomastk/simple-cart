import { createContext } from "react";
import { useReducer } from "react";

export const CarritoContext = createContext();

const Carrito = ({ children }) => {
  const carritoReducer = (state, action) => {
    switch (action.type) {
      case "reset":
        return [];

      case "add":
        return [action.payload, ...state];
      case "remove":
        return state.filter((item) => item.id !== action.payload.id);

      case "updateName":
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              name: action.payload.name,
            };
          }
          return item;
        });

      case "updatePrice":
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              price: action.payload.price,
            };
          }
          return item;
        });

      case "addQuantity":
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });

      case "removeQuantity":
        return state.map((item) => {
          if (item.id === action.payload.id) {
            if (item.quantity === 0) {
              return item;
            }

            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        });
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(carritoReducer, []);

  return (
    <CarritoContext.Provider value={{ state, dispatch }}>
      {children}
    </CarritoContext.Provider>
  );
};
export default Carrito;
