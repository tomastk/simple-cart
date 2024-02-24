import { useContext } from "react";
import Button from "../Button/Button";
import styles from "./header.module.css";
import { CarritoContext } from "../context/Carrito";
import { useEffect } from "react";

const Header = () => {
  const context = useContext(CarritoContext);

  const handleResetCart = () => {
    context.dispatch({ type: "reset" });
  };

  return (
    <header className={styles.header}>
      <div>
        <h1>Lista de compras</h1>
      </div>
      <Button
        callToAction={"Empezar nueva compra"}
        onSubmit={handleResetCart}
      />
    </header>
  );
};
export default Header;
