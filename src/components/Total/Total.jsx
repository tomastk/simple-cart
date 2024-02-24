import { useContext } from "react";
import { CarritoContext } from "../context/Carrito";
import styles from "./total.module.css";
import { useCallback } from "react";

const Total = () => {
  const context = useContext(CarritoContext);

  const calculateTotal = useCallback(() => {
    return context.state.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }, [context.state]);

  return (
    <p className={styles.total}>
      Total:
      <span> ${calculateTotal()}</span>
    </p>
  );
};
export default Total;
