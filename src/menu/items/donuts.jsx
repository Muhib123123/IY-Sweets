import Header from "../../home/header";
import "./items.css";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import extra2 from "../../assets/DonutExtra2.jpeg"
import normal from "../../assets/donuts.jpg" 

function Donuts() {
  const { t, i18n } = useTranslation();
  const price = 50;
  const price2 = 60;
  const items = [
    {
      id: crypto.randomUUID(),
      price: price,
      name: t("Dark Chocolate"),
    },
    {
      id: crypto.randomUUID(),
      price: price,
      name: t("White Chocolate"),
    },
    {
      id: crypto.randomUUID(),
      price: 65,
      name: t("Dark Chocolate Extra"),
    },
    {
      id: crypto.randomUUID(),
      price: 65,
      name: t("White Chocolate Extra"),
    },
  ];

  const items2 = [
    {
      id: crypto.randomUUID(),
      price: price2,
      name: t("Chocolate"),
    },
    {
      id: crypto.randomUUID(),
      price: price2,
      name: t("Éclair"),
    },
    {
      id: crypto.randomUUID(),
      price: 75,
      name: t("Chocolate Extra"),
    },
    {
      id: crypto.randomUUID(),
      price: 75,
      name: t("Éclair Extra"),
    },
  ];

  return (
    <>
      <title>IY-Donuts</title>
      <Header />
      <div className="container">
        <div className="item"><img src={normal} alt="" /></div>
        <div className="item"><img src={extra2} alt="" /></div>
      </div>
      <div
        style={
          i18n.language === "ar" ? { direction: "ltr" } : { direction: "rtl" }
        }
      >
        <div className="title-dis">
          <h1>{t("Plain Donuts")}</h1>
          <h2>{t("Price")}</h2>
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
        <div className="title-dis">
          <h1>{t("Stuffed Donuts")}</h1>
          <h2>{t("Price")}</h2>
        </div>
        <div className="br"></div>
        <div className="items-dis">
          {items2.map((item) => (
            <div key={item.id} className="item-dis">
              <p>{item.name}</p>
              <p>{item.price}₺</p>
            </div>
          ))}
        </div>
        <div className="order-btn">
          <Link
            className="link-btn"
            to={`https://wa.me/+905313591682?text=${encodeURIComponent(
              t("WhatsApp Message")
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
