import Header from "../../home/header";
import "./items.css";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import cookwiththeme from "../../assets/cookwiththeme.jpeg";

export default function Cookies() {
  const { t, i18n } = useTranslation();

  const items = [
    {
      id: crypto.randomUUID(),
      name: t("Classic chocolate-filled cookies"),
      price: "70₺",
    },
    {
      id: crypto.randomUUID(),
      name: t("Cookies with theme"),
      price: t(
        "Starts from 50₺ and increases according to theme shape and size",
      ),
    },
  ];

  return (
    <>
      <title>IY-Cookies</title>
      <Header />
      <div
        style={
          i18n.language === "ar" ? { direction: "ltr" } : { direction: "rtl" }
        }
      >
        <div className="container">
          <div className="item">
            <img src={cookwiththeme} alt="" />
          </div>
        </div>
        <div className="title-dis">
          <h1>{t("Cookies")}</h1>
          <h2>{t("Price")}</h2>
        </div>

        <div className="br"></div>

        <div className="items-dis">
          {items.map((item) => (
            <div key={item.id} className="item-dis" style={{width: "90%"}}>
              <p style={{textAlign: "left"}}>{item.name}</p>
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
