import { useState } from "react";
import Header from "./Components/Header";
import Input from "./Components/Input";
import ListName from "./Components/ListName";
import Footer from "./Components/Footer";
const nameList = [
  {
    id: 1,
    product: "Kopi Bubuk",
    quantity: 3,
    unit: "Buah",
    chacked: true,
  },

  {
    id: 2,
    product: "Gula Pasir",
    quantity: 5,
    unit: "Kg",
    chacked: false,
  },

  {
    id: 3,
    product: "Beras",
    quantity: 2,
    unit: "Liter",
    chacked: false,
  },
];

const App = () => {
  const [items, setItems] = useState(nameList);

  const onAddItem = (item) => {
    setItems([...items, item])
  };

  const onDelateItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, chacked: !item.chacked } : item
      )
    );
  };

  const handleClearItems = () => {
    setItems([]);
  };

  return (
    <>
      <Header />
      <Input onAddItem={onAddItem} />
      <ListName
        items={items}
        onDelateItem={onDelateItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Footer items={items} />
    </>
  );
};

export default App;
