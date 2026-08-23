import Header from "../../home/header";
import "./items.css";
import box1 from "../../assets/box1.jpeg";
import box2 from "../../assets/box2.jpeg";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export default function BoxCake() {
  const { t, i18n } = useTranslation();

  const items = [
    {
      id: crypto.randomUUID(),
      name: t("Mini cake + 2 pop cakes + 2 ice cakes"),
      price: "1200₺",
    },
    {
      id: crypto.randomUUID(),
      name: t(
        "Available in different sizes and quantities according to your request",
      ),
      price: "",
    },
  ];

  return (
    <>
      <title>IY-Box-Cake</title>
      <Header />
      <div className="container">
        <div className="item">
          <img src={box1} alt="" />
        </div>
        <div className="item">
          <img src={box2} alt="" />
        </div>
      </div>
      <div
        style={
          i18n.language === "ar" ? { direction: "ltr" } : { direction: "rtl" }
        }
      >
        <div className="title-dis">
          <h1>{t("Box of Cakes")}</h1>
          <h2>{t("Price")}</h2>
        </div>

        <div className="br"></div>

        <div className="items-dis">
          {items.map((item) => (
            <div
              key={item.id}
              className={`item-dis ${i18n.language === "ar" ? "cos-box-ar" : "cos-box"}`}
            >
              <p>{item.name}</p>
              {item.price ? <p>{item.price}</p> : null}
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
