import "../App.css";
const Footer = ({ items }) => {
  if (items.length === 0) {
    return (
      <footer>
        Hey Antum daftar belanjaannya dilist dulu baru bisa dihitung
        persentasenya😊
      </footer>
    );
  }

  const totalItems = items.length;
  const chackedItems = items.filter((item) => item.chacked).length;
  const percent = Math.round((chackedItems / totalItems) * 100) + "%";
  const conclude = `barang yang telah dibeli sebanyak ${chackedItems} dengan persentase ${percent}`;

  return (
    <footer>
      Ada {totalItems} barang yang berhasil ditambahkan, {conclude}
    </footer>
  );
};

export default Footer;
