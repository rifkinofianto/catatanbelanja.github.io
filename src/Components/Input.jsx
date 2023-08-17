import { useState } from "react";
import "../App.css";

const Input = ({ onAddItem }) => {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("Kg");

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity)) {
      setQuantity(Math.max(1, newQuantity).toString());
    } else {
      setQuantity("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!product) return;

    const newItem = {
      product,
      quantity,
      unit,
      chacked: false,
      id: Math.floor(Math.random() * 100),
    };
    onAddItem(newItem);

    setProduct("");
    setQuantity("");
    setUnit("Kg");
  };

  const weightUnits = ["Kg", "Gram", "Liter", "Pcs", "Pasang", "Renteng", "Pack"]; // Satuan berat tambahan
  const unitOptions = weightUnits.map((unit, index) => (
    <option key={index} value={unit}>
      {unit}
    </option>
  ));
  return (
    <>
      <form className="input" onSubmit={handleSubmit}>
        <div className="input-description">
          <p className="title-input">Hari ini antum mau belanja apa ?</p>
          <input
            type="number"
            value={quantity}
            className="product"
            placeholder="Masukkan Kuantitas"
            onChange={handleQuantityChange}
          />
          <select
            name="unit"
            className="unit"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          >
            {unitOptions}
          </select>
          <input
            type="text"
            className="product"
            placeholder="Nama Barang..."
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
          <button className="add">
            <span className="add-description">Tambah</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default Input;
