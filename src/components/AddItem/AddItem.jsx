import { useContext } from "react";
import { CarritoContext } from "../context/Carrito";
import styles from "./add.module.css";
import Button from "../Button/Button";

const AddItem = () => {
  const context = useContext(CarritoContext);

  const handleAddItem = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get("name");
    const price = data.get("price");

    if (name.length === 0 || price.length === 0) {
      return;
    }

    context.dispatch({
      type: "add",
      payload: { id: Date.now(), name, price, quantity: 1 },
    });

    e.target.reset();
  };

  return (
    <form onSubmit={handleAddItem} className={styles.addForm}>
      <h1>Añadir</h1>
      <input type="text" name="name" placeholder="Nombre" />
      <input
        type="number"
        name="price"
        placeholder="Precio"
        className={styles.price}
      />
      <Button callToAction={"Anadir"}>Add</Button>
    </form>
  );
};
export default AddItem;
