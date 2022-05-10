

export default function StoreItem({ item, discount }) {

  const { price, title, src, size } = item;

  const itemPrice = discount ? (price * discount).toFixed(2) : price;

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <p style={{ fontWeight: "800" }}>{title}</p>
      <img style={{ border: "4px solid black", width: size }} src={src} />
      { discount && 
        <div>
          <div>Price: ${itemPrice}</div>
          <span style={{ textDecoration: "line-through" }}> ${price} </span>
        </div>
      }
      { !discount && <div>Price: ${itemPrice}</div> }
    </div>
  );
}
