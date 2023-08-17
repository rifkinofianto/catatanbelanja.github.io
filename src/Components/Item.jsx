import "../App.css";

const Item = ({ item, onDelateItem, onToggleItem }) => {
  return (
    <li key={item.id}>
      <div className="list-shop">
        <input
          type="checkbox"
          checked={item.chacked}
          onChange={() => onToggleItem(item.id)}
          className="check"
        />
        <span className="name-shop" style={item.chacked ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.unit} {item.product}
        </span>
        <button onClick={() => onDelateItem(item.id)} className="delate">
          Hapus
        </button>
      </div>
    </li>
  );
};

export default Item;
