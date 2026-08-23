import Header from "../../home/header";
import "./items.css";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import extra2 from "../../assets/DonutExtra2.jpeg";
import normal from "../../assets/donuts.jpg";

function Donuts() {
  const { t, i18n } = useTranslation();

  const items = [
    {
      id: crypto.randomUUID(),
      price: "70₺",
      name: t("Chocolate-covered donuts (white or dark)"),
    },
    { id: crypto.randomUUID(), price: "90₺", name: t("Extra donuts") },
  ];

  const items2 = [
    { id: crypto.randomUUID(), price: "70₺", name: t("Stuffed donuts") },
    { id: crypto.randomUUID(), price: "90₺", name: t("Extra stuffed donuts") },
  ];

  return (
    <>
      <title>IY-Donuts</title>
      <Header />
      <div className="container">
        <div className="item">
          <img src={normal} alt="" />
        </div>
        <div className="item">
          <img src={extra2} alt="" />
        </div>
      </div>
      <div
        style={
          i18n.language === "ar" ? { direction: "ltr" } : { direction: "rtl" }
        }
      >
        <div className="title-dis">
          <h1>{t("Chocolate-covered donuts (white or dark)")}</h1>
          <h2>{t("Price")}</h2>
        </div>
        <div className="br"></div>
        <div className="items-dis">
          {items.map((item) => (
            <div key={item.id} className="item-dis">
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
        <div className="title-dis">
          <h1>{t("Stuffed donuts")}</h1>
          <h2>{t("Price")}</h2>
        </div>
        <div className="br"></div>
        <div className="items-dis">
          {items2.map((item) => (
            <div key={item.id} className="item-dis">
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
        <div className="order-btn">
          <Link
            className="link-btn"
            to={`https://wa.me/+905313591682?text=${encodeURIComponent(
              t("WhatsApp Message"),
            )}`}
          >
            {t("Order Now")}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Donuts;
