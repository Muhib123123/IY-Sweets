import Header from "../../home/header";
import "./items.css";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import cupCake1 from "../../assets/cupCake1.jpeg";
import cupCake2 from "../../assets/cupCake2.jpeg";

export default function CupCake() {
  const { t, i18n } = useTranslation();

  const items = [
    { id: crypto.randomUUID(), name: t("Cupcake regular"), price: "60₺" },
    { id: crypto.randomUUID(), name: t("Cupcake rose"), price: "75₺" },
    {
      id: crypto.randomUUID(),
      name: t("Cupcake rose in bouquet"),
      price: "90₺",
    },
    {
      id: crypto.randomUUID(),
      name: t("Cupcake bouquet (7 pieces)"),
      price: "600₺",
    },
    {
      id: crypto.randomUUID(),
      name: t("Cupcake bouquet (more than 7 pieces) starts from 680₺"),
      price: "",
    },
  ];

  return (
    <>
      <title>IY-Cupcake</title>
      <Header />
      <div className="container">
        <div className="item">
          <img src={cupCake1} alt="" />
        </div>
        <div className="item">
          <img src={cupCake2} alt="" />
        </div>
      </div>
      <div
        style={
          i18n.language === "ar" ? { direction: "ltr" } : { direction: "rtl" }
        }
      >
        <div className="title-dis">
          <h1>{t("Cupcakes")}</h1>
          <h2>{t("Price")}</h2>
        </div>

        <div className="br"></div>

        <div className="items-dis">
          {items.map((item) => (
            <div
            style={{display: "flex", paddingLeft:"40px", paddingRight: "40px"}}
              key={item.id}
              className={`item-dis ${i18n.language === "ar" ? "cos-cup-ar" : "cos-cup"}`}
            > 
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
