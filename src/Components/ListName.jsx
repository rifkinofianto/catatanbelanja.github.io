import { useState } from "react";
import "../App.css";
import Item from "./Item";
const ListName = ({ items, onDelateItem, onToggleItem, onClearItems }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  switch (sortBy) {
    case "name":
      sortedItems = items
        .slice()
        .sort((a, b) => a.product.localeCompare(b.product));
      break;
    case "checked":
      sortedItems = items.slice().sort((a, b) => a.chacked - b.chacked);
      break;
    default:
      sortedItems = items;
      break;
  }

  return (
    <>
      <div className="list">
        <div className="list-item">
          <ul>
            {/* map untuk looping */}
            {sortedItems.map((item) => (
              <Item
                item={item}
                key={item.id}
                onDelateItem={onDelateItem}
                onToggleItem={onToggleItem}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="urutan-clear">
        <div className="option">
          <select
            name="urutan"
            className="urutan"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="input">Berdasarkan Waktu</option>
            <option value="name">Berdasarkan Nama</option>
            <option value="checked">Berdasarkan CheckList</option>
          </select>
        </div>
        <button onClick={() => onClearItems()} className="clear">
          <span className="clear-description">Bersihkan Semua</span>
        </button>
      </div>
    </>
  );
};

export default ListName;
