import Header from "../../home/header";
import "./items.css";
import { Link } from "react-router";
function NorCake() {
  const items = [
    {
      id: crypto.randomUUID(),
      price: 15,
      name: "القطعة",
    },
    {
      id: crypto.randomUUID(),
      price: 175,
      name: "القالب (20 قطعة)",
    },
  ];
  return (
    <>
      <title>IY-NorCake</title>
      <Header />
      <div className="title-dis">
        <h1>كيك سادة</h1>
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
          to="https://wa.me/+905313591682?text=السلام%20عليكم%2C%20اريد%20طلب%20بعض%20الحلويات"
        >
          اطلب الان
        </Link>
      </div>
    </>
  );
}

export default NorCake;
