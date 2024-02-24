import { useContext } from "react";
import { CarritoContext } from "../context/Carrito";
import styles from "./items.module.css";
import Button from "../Button/Button";

const Items = () => {
  const context = useContext(CarritoContext);
  const items = context.state;

  return (
    <main className={styles.main}>
      <h2>Lista de productos</h2>

      {items.length === 0 && <p>No hay productos</p>}

      <ul className={styles.items}>
        {items.map((item) => {
          return (
            <li key={item.id} className={styles.item}>
              <div className={styles.details}>
                <input
                  value={item.name}
                  onChange={(e) =>
                    context.dispatch({
                      type: "updateName",
                      payload: { id: item.id, name: e.target.value },
                    })
                  }
                />

                <input
                  type="number"
                  value={item.price}
                  onChange={(e) =>
                    context.dispatch({
                      type: "updatePrice",
                      payload: { id: item.id, price: e.target.value },
                    })
                  }
                />
              </div>

              <div className={styles.actions}>
                <Button
                  callToAction={"Eliminar"}
                  onSubmit={() =>
                    context.dispatch({ type: "remove", payload: item })
                  }
                ></Button>
                <Button
                  callToAction={"+"}
                  onSubmit={() =>
                    context.dispatch({ type: "addQuantity", payload: item })
                  }
                ></Button>
                <b>{item.quantity}</b>

                <Button
                  callToAction={"-"}
                  onSubmit={() =>
                    context.dispatch({ type: "removeQuantity", payload: item })
                  }
                ></Button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
export default Items;
