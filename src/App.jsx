import "./App.css";
import AddItem from "./components/AddItem/AddItem";
import Header from "./components/Header/Header";
import Items from "./components/Items/Items";
import Total from "./components/Total/Total";
import Carrito from "./components/context/Carrito";
import "@fontsource-variable/inter";

function App() {
  return (
    <Carrito>
      <Header />
      <Total />
      <Items />
      <AddItem />
    </Carrito>
  );
}

export default App;
