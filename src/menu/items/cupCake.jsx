import Header from "../../home/header";
import { Link } from "react-router";
import "./items.css";
function CupCake() {
  const price = 60;
  const items = [
    {
      id: crypto.randomUUID(),
      price: price,
      name: "فانيلا",
    },
    {
      id: crypto.randomUUID(),
      price: price,
      name: "شوكولا",
    },
  ];
  return (
    <>
      <title>IY-CupCake</title>
      <Header />
      <div className="title-dis">
        <h1>كاسة كيك</h1>
        <h2>السعر</h2>
      </div>

      <div className="br"></div>

      <div className="items-dis">
        {items.map((item) => (
          <div key={item.id} className="item-dis">
            <p>{item.name}</p>
            <p>{item.price}₺</p>
          </div>
        ))}
      </div>

      <div className="order-btn">
        <Link
          className="link-btn"
          to="https://wa.me/+963940904038?text=السلام%20عليكم%2C%20اريد%20طلب%20بعض%20الحلويات"
        >
          اطلب الان
        </Link>
      </div>
    </>
  );
}

export default CupCake;
