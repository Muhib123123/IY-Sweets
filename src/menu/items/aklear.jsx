import Header from "../../home/header";
import "./items.css";
import { Link } from "react-router";
function Aklear() {
  return (
    <>
      <title>IY-Aklear</title>
      <Header />

      <div className="title-dis">
        <h1>اكلير</h1>
        <h2>السعر</h2>
      </div>

      <div className="br"></div>

      <div className="items-dis">
        <div className="item-dis">
          <p>الحبة</p>
          <p>25₺</p>
        </div>
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

export default Aklear;
