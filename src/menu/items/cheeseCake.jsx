import Header from "../../home/header";
import "./items.css";
import { Link } from "react-router";
function CheeseCake() {
  const price = 75;
  const items = [
    {
      id: crypto.randomUUID(),
      price: price,
      name: "لوتس",
    },
    {
      id: crypto.randomUUID(),
      price: price,
      name: "شوكولا",
    },
    {
      id: crypto.randomUUID(),
      price: price,
      name: "فريز",
    },
    {
      id: crypto.randomUUID(),
      price: price,
      name: "كاراميل",
    },
    {
      id: crypto.randomUUID(),
      price: price,
      name: "بستاشيو",
    },
  ];
  return (
    <>
      <title>IY-CheeseCake</title>
      <Header />
      <div className="title-dis">
        <h1>تشيز كيك</h1>
        <h2>السعر</h2>
      </div>
      <div className="br"></div>
      <div className="items-dis">
        {items.map((item) => (
          <div className="item-dis" key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}₺</p>
          </div>
        ))}
      </div>
      <div className="order-btn">
        <Link
          className="link-btn"
          to="https://wa.me/+905313591682?text=السلام%20عليكم%2C%20اريد%20طلب%20بعض%20الحلويات"
        >
          اطلب الان
        </Link>
      </div>
    </>
  );
}

export default CheeseCake;
