import Header from "../../home/header";
import "./items.css";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import mini1 from "../../assets/mini1.jpeg";
import mini2 from "../../assets/mini2.jpeg";

export default function MiniCake() {
  const { t, i18n } = useTranslation();

  const items = [
    { id: crypto.randomUUID(), name: t("Mini cake (1 person)"), price: "200₺" },
    {
      id: crypto.randomUUID(),
      name: t(
        "Mini cake (4 persons) - starts from 850₺ with whipped cream packaging",
      ),
      price: "",
    },
    {
      id: crypto.randomUUID(),
      name: t(
        "Mini cake (4 persons) - starts from 1000₺ with butter packaging",
      ),
      price: "",
    },
  ];

  return (
    <>
      <title>IY-Mini-Cake</title>
      <Header />
      <div className="container">
        <div className="item">
          <img src={mini1} alt="" />
        </div>
        <div className="item">
          <img src={mini2} alt="" />
        </div>
      </div>
      <div
        style={
          i18n.language === "ar" ? { direction: "ltr" } : { direction: "rtl" }
        }
      >
        <div className="title-dis">
          <h1>{t("Mini Cake")}</h1>
          <h2>{t("Price")}</h2>
        </div>

        <div className="br"></div>

        <div className="items-dis">
          {items.map((item) => (
            <div className="item-dis" key={item.id}>
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
